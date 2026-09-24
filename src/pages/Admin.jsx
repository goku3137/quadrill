import React, { useState, useEffect } from 'react';
import { auth, db, storage } from '../firebase';
import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc, serverTimestamp, query, orderBy } from 'firebase/firestore';
import { Trash2, Upload, Loader2, LogOut, Edit2 } from 'lucide-react';

const IMGBB_API_KEY = "ec273bde44e838c43a81923f8c0242e2";

const Admin = () => {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [loading, setLoading] = useState(true);

  // Form State
  const [editingId, setEditingId] = useState(null);
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  // Projects State
  const [projects, setProjects] = useState([]);
  const [fetchingProjects, setFetchingProjects] = useState(true);

  const fetchProjects = async () => {
    setFetchingProjects(true);
    try {
      const q = query(collection(db, "projects"), orderBy("createdAt", "desc"));
      const querySnapshot = await getDocs(q);
      const projData = [];
      querySnapshot.forEach((doc) => {
        projData.push({ id: doc.id, ...doc.data() });
      });
      setProjects(projData);
    } catch (error) {
      console.error("Error fetching projects: ", error);
    }
    setFetchingProjects(false);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      if (currentUser) {
        fetchProjects();
      }
    });
    return () => unsubscribe();
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginError('');
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      setLoginError(error.message);
    }
  };

  const handleLogout = () => {
    signOut(auth);
  };

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleEditClick = (proj) => {
    setEditingId(proj.id);
    setTitle(proj.title);
    setCategory(proj.category);
    setImage(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const cancelEdit = () => {
    setEditingId(null);
    setTitle('');
    setCategory('');
    setImage(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !category) {
      alert('Please fill title and category fields.');
      return;
    }
    
    if (!editingId && !image) {
      alert('Please select an image for the new project.');
      return;
    }

    setUploading(true);
    setUploadProgress(50); // Show intermediate progress

    try {
      let imageUrl = null;
      let deleteUrl = null;

      // 1. Upload to ImgBB only if there's a new image
      if (image) {
        const formData = new FormData();
        formData.append('image', image);
        
        const imgbbRes = await fetch(`https://api.imgbb.com/1/upload?key=${IMGBB_API_KEY}`, {
          method: 'POST',
          body: formData
        });
        
        const imgbbData = await imgbbRes.json();
        
        if (!imgbbData.success) {
          throw new Error(imgbbData.error?.message || 'ImgBB Upload Failed');
        }

        imageUrl = imgbbData.data.url;
        deleteUrl = imgbbData.data.delete_url;
      }
      
      setUploadProgress(90);

      // 2. Save/Update to Firestore
      if (editingId) {
        const docRef = doc(db, "projects", editingId);
        const updateData = { title, category };
        if (imageUrl) {
          updateData.imageUrl = imageUrl;
          if (deleteUrl) updateData.deleteUrl = deleteUrl;
        }
        await updateDoc(docRef, updateData);
      } else {
        await addDoc(collection(db, "projects"), {
          title,
          category,
          imageUrl: imageUrl,
          deleteUrl: deleteUrl || null,
          createdAt: serverTimestamp()
        });
      }
      
      cancelEdit();
      setUploadProgress(0);
      fetchProjects(); // Refresh list
    } catch (error) {
      console.error("Upload error: ", error);
      alert('Failed to save project. Ensure your ImgBB API Key is correct and Firestore rules allow writes.');
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this project?")) {
      try {
        await deleteDoc(doc(db, "projects", id));
        fetchProjects(); // Refresh list
      } catch (error) {
        console.error("Error deleting project: ", error);
        alert("Failed to delete project.");
      }
    }
  };

  if (loading) {
    return <div className="h-screen w-full flex items-center justify-center bg-brand-dark"><Loader2 className="animate-spin text-brand-blue" size={48} /></div>;
  }

  // --- LOGIN SCREEN ---
  if (!user) {
    return (
      <div className="min-h-screen w-full bg-brand-dark pt-32 pb-20 px-6 flex items-center justify-center font-sans">
        <div className="bg-brand-card border border-white/10 p-10 rounded-2xl w-full max-w-md shadow-2xl">
          <h2 className="font-serif text-3xl font-black text-white uppercase text-center mb-8">Admin Access</h2>
          {loginError && <p className="text-red-500 text-sm mb-4 text-center">{loginError}</p>}
          <form onSubmit={handleLogin} className="flex flex-col gap-5">
            <input 
              type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required
              className="bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-blue"
            />
            <input 
              type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required
              className="bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-blue"
            />
            <button type="submit" className="bg-brand-blue text-white font-bold py-3 rounded-lg hover:bg-blue-600 transition-colors mt-2">
              Login
            </button>
          </form>
          <p className="text-gray-500 text-xs text-center mt-6">
            If you don't have an account, create a user in your Firebase Authentication console.
          </p>
        </div>
      </div>
    );
  }

  // --- DASHBOARD SCREEN ---
  return (
    <div className="min-h-screen w-full bg-brand-dark pt-32 pb-20 px-6 font-sans">
      <div className="max-w-6xl mx-auto">
        
        <div className="flex justify-between items-center mb-12 border-b border-white/10 pb-6">
          <h1 className="font-serif text-4xl font-black text-white uppercase">Project Dashboard</h1>
          <button onClick={handleLogout} className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
            <LogOut size={20} /> Logout
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* Add/Edit Project Form */}
          <div className="lg:col-span-1 bg-brand-card border border-white/10 p-8 rounded-2xl shadow-xl h-fit">
            <h2 className="text-xl font-bold text-white mb-6 uppercase tracking-wider border-b border-white/5 pb-4">
              {editingId ? "Edit Project" : "Add New Project"}
            </h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div>
                <label className="block text-gray-400 text-sm mb-2">Project Title</label>
                <input 
                  type="text" value={title} onChange={e => setTitle(e.target.value)} required
                  className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-blue"
                />
              </div>
              <div>
                <label className="block text-gray-400 text-sm mb-2">Category</label>
                <select 
                  value={category} onChange={e => setCategory(e.target.value)} required
                  className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-blue appearance-none"
                >
                  <option value="" disabled>Select Category</option>
                  <option value="Demolition">Demolition</option>
                  <option value="Concrete Cutting">Concrete Cutting</option>
                  <option value="Marine Works">Marine Works</option>
                  <option value="Heavy Civil">Heavy Civil</option>
                  <option value="Industrial">Industrial</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-400 text-sm mb-2">Project Image {editingId && "(Optional)"}</label>
                <div className="w-full bg-black/50 border border-white/10 border-dashed rounded-lg px-4 py-6 text-center cursor-pointer hover:bg-white/5 transition-colors relative">
                  <input 
                    type="file" accept="image/*" onChange={handleImageChange} required={!editingId}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <Upload className="mx-auto text-gray-400 mb-2" size={24} />
                  <span className="text-gray-400 text-sm">
                    {image ? image.name : editingId ? "Click to upload a new image" : "Click or drag image to upload"}
                  </span>
                </div>
              </div>
              
              <div className="flex gap-3 mt-4">
                <button 
                  type="submit" disabled={uploading}
                  className="flex-1 bg-brand-blue text-white font-bold py-4 rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center gap-2 uppercase tracking-widest disabled:opacity-50 text-sm"
                >
                  {uploading ? (
                    <>Saving... {Math.round(uploadProgress)}%</>
                  ) : editingId ? (
                    "Update"
                  ) : (
                    "Publish"
                  )}
                </button>
                {editingId && (
                  <button
                    type="button"
                    onClick={cancelEdit}
                    disabled={uploading}
                    className="flex-1 bg-gray-600 text-white font-bold py-4 rounded-lg hover:bg-gray-500 transition-colors flex items-center justify-center gap-2 uppercase tracking-widest disabled:opacity-50 text-sm"
                  >
                    Cancel
                  </button>
                )}
              </div>
            </form>
          </div>

          {/* Existing Projects List */}
          <div className="lg:col-span-2 bg-brand-card border border-white/10 p-8 rounded-2xl shadow-xl">
            <h2 className="text-xl font-bold text-white mb-6 uppercase tracking-wider border-b border-white/5 pb-4">Live Projects</h2>
            
            {fetchingProjects ? (
              <div className="py-10 text-center text-gray-400 flex flex-col items-center">
                <Loader2 className="animate-spin mb-2" /> Fetching projects...
              </div>
            ) : projects.length === 0 ? (
              <div className="py-10 text-center text-gray-400">
                No projects uploaded yet.
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map(proj => (
                  <div key={proj.id} className="relative group rounded-xl overflow-hidden border border-white/10 aspect-video">
                    <img src={proj.imageUrl} alt={proj.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-4">
                      <span className="text-brand-blue text-xs font-bold uppercase tracking-widest mb-1">{proj.category}</span>
                      <h3 className="text-white font-bold leading-tight">{proj.title}</h3>
                    </div>
                    <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button 
                        onClick={() => handleEditClick(proj)}
                        className="bg-brand-blue/90 text-white p-2 rounded-lg hover:bg-blue-600 transition-colors"
                        title="Edit Project"
                      >
                        <Edit2 size={16} />
                      </button>
                      <button 
                        onClick={() => handleDelete(proj.id)}
                        className="bg-red-600/90 text-white p-2 rounded-lg hover:bg-red-700 transition-colors"
                        title="Delete Project"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Admin;

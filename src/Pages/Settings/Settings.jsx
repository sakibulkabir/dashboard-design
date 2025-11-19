import { useState } from "react";

export default function Settings() {
  const [profile, setProfile] = useState({
    name: "Sakibul Kabir Risat",
    email: "sakibulkabirrisat@gmail.com",
    password: "",
  });

  const [preferences, setPreferences] = useState({
    darkMode: false,
    notifications: true,
  });

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handlePreferencesChange = (e) => {
    const { name, checked } = e.target;
    setPreferences({ ...preferences, [name]: checked });
  };

  const handleSave = (e) => {
    e.preventDefault();
    console.log("Profile:", profile);
    console.log("Preferences:", preferences);
    alert("Settings saved successfully!");
  };

  return (
    <div className="p-6 flex justify-center">
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-2xl p-8">
        <h2 className="text-2xl font-bold mb-6">Settings</h2>

        <form onSubmit={handleSave} className="space-y-6">

          {/* Profile Settings */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Profile Settings</h3>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-gray-600 font-medium">Name</label>
                <input
                  type="text"
                  name="name"
                  value={profile.name}
                  onChange={handleProfileChange}
                  className="mt-1 w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition"
                />
              </div>

              <div>
                <label className="text-gray-600 font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  value={profile.email}
                  onChange={handleProfileChange}
                  className="mt-1 w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="text-gray-600 font-medium">Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter new password"
                  value={profile.password}
                  onChange={handleProfileChange}
                  className="mt-1 w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition"
                />
              </div>
            </div>
          </div>

          {/* Preferences */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Preferences</h3>
            <div className="grid gap-4 sm:grid-cols-2">

              <div className="flex items-center justify-between bg-gray-50 p-4 rounded-xl">
                <div>
                  <p className="font-medium text-gray-700">Dark Mode</p>
                  <p className="text-gray-500 text-sm">Enable dark theme for dashboard</p>
                </div>
                <input
                  type="checkbox"
                  name="darkMode"
                  checked={preferences.darkMode}
                  onChange={handlePreferencesChange}
                  className="w-6 h-6 rounded transition"
                />
              </div>

              <div className="flex items-center justify-between bg-gray-50 p-4 rounded-xl">
                <div>
                  <p className="font-medium text-gray-700">Notifications</p>
                  <p className="text-gray-500 text-sm">Receive notification alerts</p>
                </div>
                <input
                  type="checkbox"
                  name="notifications"
                  checked={preferences.notifications}
                  onChange={handlePreferencesChange}
                  className="w-6 h-6 rounded transition"
                />
              </div>

            </div>
          </div>

          {/* Save Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-6 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition shadow-md"
            >
              Save Settings
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

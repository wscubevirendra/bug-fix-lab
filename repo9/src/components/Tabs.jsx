import React, { useState } from "react";

const Tabs = () => {
    const [activeTab, setActiveTab] = useState("tab1");

    return (
        <div className="mt-10 px-4">
            {/* Tab Buttons */}
            <div className="flex justify-center space-x-4">
                <button
                    onClick={() => setActiveTab("tab1")}
                    className={`px-6 py-2 rounded-md ${activeTab === "tab1"
                        ? "bg-indigo-600 text-white"
                        : "bg-gray-200 text-gray-700"
                        }`}
                >
                    Tab 1
                </button>
                <button
                    onClick={() => setActiveTab("tab2")}
                    className={`px-6 py-2 rounded-md ${activeTab === "tab2"
                        ? "bg-indigo-600 text-white"
                        : "bg-gray-200 text-gray-700"
                        }`}
                >
                    Tab 2
                </button>
                <button
                    onClick={() => setActiveTab("tab3")}
                    className={`px-6 py-2 rounded-md ${activeTab === "tab3"
                        ? "bg-indigo-600 text-white"
                        : "bg-gray-200 text-gray-700"
                        }`}
                >
                    Tab 3
                </button>
            </div>

            {/* Tab Content */}
            <div className="mt-6 text-center">
                {activeTab === "tab1" && <p className="text-gray-700">

                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet deserunt recusandae laudantium atque hic facilis nesciunt veritatis similique voluptatum incidunt! Quaerat labore asperiores, aut similique maxime quo non laboriosam cum.</p>}
                {activeTab === "tab2" && <p className="text-gray-700">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quo impedit nostrum nulla eos explicabo dolore eaque rerum, provident, quam veniam. Beatae eligendi nesciunt ad sit excepturi id molestias animi.</p>}
                {activeTab === "tab3" && <p className="text-gray-700">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, sit ipsam reprehenderit perspiciatis tempora rem iure nesciunt fugiat aspernatur ratione doloremque harum ipsum repudiandae corrupti, soluta unde consectetur libero! Illum.
                </p>}
            </div>
        </div>
    );
};

export default Tabs;

const teamRoster = [
    {
        name: "Deepak",
        ign: "VTX PIRATES",
        role: "Rusher / Founder",
        pageLink: "vtx-pirates.html"
    },
    {
        name: "Radheyshyam",
        ign: "VTX VIPER",
        role: "Sec. Rusher / Assaulter",
        pageLink: "vtx-viper.html"
    },
    {
        name: "Shivam",
        ign: "VTX MAFIA",
        role: "Sniper",
        pageLink: "vtx-mafia.html"
    },
    {
        name: "Yash",
        ign: "VTX SHARPX",
        role: "Secondary Rusher",
        pageLink: "vtx-sharpx.html"
    },
    {
        name: "BhanuPratap",
        ign: "BHANU",
        role: "Assaulter / Supporter",
        pageLink: "vtx-bhanu.html"
    },
    {
        name: "Sandeep",
        ign: "Killer!!",
        role: "Supporter",
        pageLink: "vtx-killer.html"
    }
];

const rosterContainer = document.getElementById('roster-container');

function renderRoster() {
    // Agar home page pe roster-container nahi hai, toh error na aaye
    if (!rosterContainer) return; 
    
    rosterContainer.innerHTML = "";
    
    teamRoster.forEach((player, index) => {
        const playerNumber = String(index + 1).padStart(2, '0'); 
        
        // <div> ki jagah ab seedha <a> tag banaya hai taaki solid link ban jaye
        const card = document.createElement('a'); 
        card.href = player.pageLink; // Yahan se file link ho rahi hai
        card.className = 'player-card';
        card.style.textDecoration = 'none'; // Text ke niche line na aaye
        card.style.display = 'block';
        
        card.innerHTML = `
            <div class="bg-number">${playerNumber}</div>
            <div class="card-content">
                <div class="ign">${player.ign}</div>
                <div class="real-name">${player.name}</div>
                <div class="role-badge">${player.role}</div>
            </div>
        `;
        
        rosterContainer.appendChild(card);
    });
}

// Render the roster when the script loads
renderRoster();
document.addEventListener("DOMContentLoaded", function () {
    const schemes = [
        {
            name: "PM-KISAN",
            description: "Provides ₹6,000 per year to small and marginal farmers to support their financial needs.",
            eligibility: "Small & marginal farmers owning up to 2 hectares of land.\n Landowners only."

        },
        {
            name: "Kisan Credit Card (KCC)",
            description: "Offers affordable credit to farmers for crop cultivation and other needs.",
            eligibility: "1.individual/joint borrowers who are owner cultivator. 2.Tenant farmers, oral lessees & share croppers. 3.Self Help Groups (SHGs) or Joint Liability Groups (JLGs) of farmers including tenant farmers, share croppers etc."
        },
        {
            name: "Pradhan Mantri Fasal Bima Yojana (PMFBY)",
            description: "Provides crop insurance against natural calamities, pests, and diseases.All the farmers who have  granted Seasonal Agriculture Operations (SAO) loans from financial institution can apply.",
            eligibility: "Farmers enrolled in notified crops and areas."
        },
        {
            name: "Pradhan Mantri Krishi Sinchai Yojana",
            description: "Initiated in 2015, PMKSY aims to enhance irrigation coverage and improve water use efficiency.The scheme provides financial assistance for installing micro-irrigation systems, benefiting farmers with less than 2 hectares of land",
            eligibility: "Members of self-help organizations, trust cooperative societies, and producer farmer groups Farmers who cultivate land under a leasing arrangement."
        },
        {
            name: "Formation and Promotion of 10,000 Farmer Producer Orgs ",
            description: "this scheme aims to form and promote FPOs to ensure economies of scale for farmers. It provides financial assistanc",
            eligibility: "1.Groups of farmers, with each FPO consisting of at least 300 farmers in plain areas and 100 in hilly regions. 2.Financial assistance up to ₹18 lakh per FPO is provided over three years."
        },
        {
            name: "Soil Health Card Scheme",
            description: "This initiative provides farmers with soil health cards containing nutrient status and fertilizer recommendations. By promoting balanced fertilizer use, the scheme aims to improve soil fertility and boost crop yields.",
            eligibility: "All farmers across India."
        },
        {
            name: "PM Kusum",
            description: "Provides solar-powered irrigation pumps and promotes solar energy use in agriculture.",
            eligibility: "Farmers, co-operatives, and rural communities."
        },
        {
            name: "Paramparagat Krishi Vikas Yojana (PKVY)",
            description: "Promotes organic farming through financial and technical support.",
            eligibility: "Farmers engaged in organic farming."
        },
        {
            name: "Agriculture Infrastructure Fund",
            description: "Provides financial assistance for developing farm infrastructure like cold storage and processing units.",
            eligibility: "Farmers, agripreneurs, cooperatives, and FPOs."
        },
        {
            name: "Dairy Entrepreneurship Development Scheme",
            description: "Encourages dairy farming and provides subsidies for dairy units.",
            eligibility: "Farmers, self-help groups, and dairy entrepreneurs."
        },
        {
            name: "National Horticulture Mission",
            description: "Supports horticulture farmers with subsidies and technical guidance.",
            eligibility: "Farmers and horticulturists engaged in fruit and vegetable farming."
        },
        {
            name: "Fasal Bima Yojana",
            description: "Covers crop loss due to natural disasters to ensure income security.",
            eligibility: "Farmers who enroll under the scheme before sowing season."
        },

    ];

    const container = document.getElementById("schemes-container");

    schemes.forEach(scheme => {
        const card = document.createElement("div");
        card.classList.add("card");

        const header = document.createElement("h2");
        header.textContent = scheme.name;

        const description = document.createElement("p");
        description.textContent = scheme.description;

        const eligibility = document.createElement("p");
        eligibility.classList.add("eligibility");
        eligibility.textContent = "Eligibility: " + scheme.eligibility;

        card.appendChild(header);
        card.appendChild(description);
        card.appendChild(eligibility);
        container.appendChild(card);
    });
});
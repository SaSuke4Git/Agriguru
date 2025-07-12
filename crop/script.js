const cropImages = {
  rice: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg0idPh5TGIufL5TlASl7ZbBKZLVAq0RhaUw&s",
  maize: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSct6MvhJSOgyU2bk-qhmpoqfmFedYyBSgaHw&s",
  chickpea: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvSp0v7gKf1iB4mdjS__eXvi3Y2LTTZ8jZXQ&s",
  kidneybeans: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkfrgn2aBqlYWSj64KqN_d1nMxrbHR1hH32w&s",
  pigeonpeas: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkfrgn2aBqlYWSj64KqN_d1nMxrbHR1hH32w&s",
  
  blackgram: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Black_gram.jpg",
  lentil: "https://www.themediterraneandish.com/wp-content/uploads/2024/10/TMD-How-To-Cook-Lentils-Leads-02.jpg",
  pomegranate: "https://www.phgmag.com/wp-content/uploads/2019/10/PHG1019Pom-feat.jpg",
  banana: "https://nutritionsource.hsph.harvard.edu/wp-content/uploads/2018/08/bananas-1354785_1920.jpg",
  mango: "https://www.mango.org/wp-content/uploads/2024/07/shutterstock_1361566754.jpg",
  grapes: "https://img.imageboss.me/fourwinds/width/425/dpr%3A2/shop/products/rubyseedlessgrapes.jpg?v=1729716408",
  watermelon: "https://cdn.britannica.com/99/143599-050-C3289491/Watermelon.jpg",
  muskmelon: "https://res.cloudinary.com/hz3gmuqw6/image/upload/c_fill%2Cq_auto%2Cw_750/f_auto/muskmelon-phpFL8jy2",
  apple: "https://m.media-amazon.com/images/I/918YNa3bAaL.jpg",
  orange: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Oranges_-_whole-halved-segment.jpg",
  papaya: "https://www.google.com/imgres?q=papaya&imgurl=https%3A%2F%2Fwww.dreamfoodscaribe.com%2Fwp-content%2Fuploads%2F2024%2F07%2Fpapaya-fruit.webp&imgrefurl=https%3A%2F%2Fwww.dreamfoodscaribe.com%2Fblog%2Ffruit-varieties%2Fpapaya-fruit%2F&docid=MUjDqBkAVBa-9M&tbnid=ExrHIQm_hV9Z2M&vet=12ahUKEwipmt_2wrSOAxW2jq8BHVD4Mc4QM3oECBkQAA..i&w=1200&h=800&hcb=2&ved=2ahUKEwipmt_2wrSOAxW2jq8BHVD4Mc4QM3oECBkQAA",
  coconut: "https://www.google.com/imgres?q=coconut&imgurl=http%3A%2F%2Fstatic1.squarespace.com%2Fstatic%2F5c1074accc8fed6a4251da8f%2F5ca503f60d9297e2f8ae11aa%2F627a902f1ada5a09d7e0e247%2F1739917837082%2Fshutterstock_490174816.jpg%3Fformat%3D1500w&imgrefurl=https%3A%2F%2Fwww.thecoconutcompany.co%2Fblogarchive%2F2022%2F5%2F10%2Feverything-you-need-to-know-about-coconut-water%3Fsrsltid%3DAfmBOorrBvPk_rsOzzJqJJRLQMzGkRhDNAUUcsob8hN5MMoUdatAc8Pg&docid=2RLkbNhrx_sj7M&tbnid=KDDJyiWlpcpglM&vet=12ahUKEwiz3LSBw7SOAxWejq8BHVEJMfEQM3oECH0QAA..i&w=1500&h=1000&hcb=2&ved=2ahUKEwiz3LSBw7SOAxWejq8BHVEJMfEQM3oECH0QAA",
  cotton: "https://thumbs.dreamstime.com/b/process-making-cotton-raw-cotton-basket-66651270.jpg",
  jute: "https://static.fibre2fashion.com/Newsresource/images/286/shutterstock-1511119781_298399.jpg",
  coffee: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQANUaonQdOQLC0I6nTb2mXrwb3knd-HeAuNA&s"
};

document.getElementById("sensorForm").addEventListener("submit", async function (event) {
  event.preventDefault();

  const data = {
    N: parseFloat(document.getElementById("N").value),
    P: parseFloat(document.getElementById("P").value),
    K: parseFloat(document.getElementById("K").value),
    temperature: parseFloat(document.getElementById("temperature").value),
    humidity: parseFloat(document.getElementById("humidity").value),
    ph: parseFloat(document.getElementById("ph").value),
    rainfall: parseFloat(document.getElementById("rainfall").value),
    age: parseInt(document.getElementById("age")?.value) || null // Add age if field exists
  };
  // Rainfall check
  // Rainfall check
  if (data.N < 0 || data.N > 200|| data.K<0 || data.K>300 || data.P>200 ||data.p<0) {
    document.getElementById("crop-list").innerHTML = `<p class="error">❌ No crops can be recommended due to unfavourable conditions. ).</p>`;
    return;
  }
  if (data.rainfall < 0 || data.rainfall > 350) {
    document.getElementById("crop-list").innerHTML = `<p class="error">❌ No crops can be recommended due to unfavourable rainfall ).</p>`;
    return;
  }

  // Temperature check
  if (data.temperature < 5 || data.temperature > 48) {
    document.getElementById("crop-list").innerHTML = `<p class="error">❌ No crops can be recommended due to unfavourable temperature.</p>`;
    return;
  }

  // pH check
  if (data.ph < 0 || data.ph > 14) {
    document.getElementById("crop-list").innerHTML = `<p class="error">❌ Invalid pH value (${data.ph}). pH must be between 0 and 14.</p>`;
    return;
  }

  try {
    const response = await fetch("http://localhost:10000/predict", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    const cropList = document.getElementById("crop-list");
    cropList.innerHTML = "";

    const crops = result.crops || [result.crop];

    crops.forEach((cropRaw) => {
      const crop = String(cropRaw || "").toLowerCase();  // Safe conversion

      const div = document.createElement("div");
      div.className = "crop-card";
      div.innerHTML = `
        <img src="${cropImages[crop] || 'https://i.imgur.com/xvs1u9B.jpg'}" alt="${crop}">
        <h3>${crop.charAt(0).toUpperCase() + crop.slice(1)}</h3>
        <p><strong>Ideal Conditions:</strong> ${
          getIdealConditions(crop)
        }</p>
      `;
      cropList.appendChild(div);
    });
  } catch (error) {
    document.getElementById("crop-list").innerHTML = `<p class="error">❌ Error: ${error.message}</p>`;
  }
});
function getIdealConditions(crop) {
  const info = {
    rice: {
      desc: "High humidity, clayey soil, warm climate.",
      age: "3-6 months",

      soil: "Clayey, loamy",
      season: "Kharif (June-Nov)",
      tips: "Requires standing water during early growth."
    },
    maize: {
      desc: "Warm climate, well-drained soil.",
      age: "3-4 months",
   
      soil: "Loamy, well-drained",
      season: "Kharif/Rabi",
      tips: "Sensitive to waterlogging."
    },
    chickpea: {
      desc: "Cool, dry climate, loamy soil.",
      age: "3-5 months",
 
      soil: "Loamy, sandy",
      season: "Rabi (Oct-Mar)",
      tips: "Avoid excess irrigation."
    },
    kidneybeans: {
      desc: "Moderate rainfall, well-drained soil.",
      age: "3-4 months",
   
      soil: "Loamy, sandy",
      season: "Kharif",
      tips: "Needs moderate sunlight."
    },
    pigeonpeas: {
      desc: "Tropical climate, loamy soil.",
      age: "5-7 months",

      soil: "Loamy, black",
      season: "Kharif",
      tips: "Deep-rooted, drought tolerant."
    },
    mothbeans: {
      desc: "Hot, dry climate, sandy soil.",
      age: "2-3 months",
 
      soil: "Sandy, loamy",
      season: "Kharif",
      tips: "Grows well in arid regions."
    },
    mungbean: {
      desc: "Warm, humid climate, loamy soil.",
      age: "2-3 months",
   
      soil: "Loamy, sandy",
      season: "Kharif/Summer",
      tips: "Short duration crop."
    },
    blackgram: {
      desc: "Warm climate, loamy soil.",
      age: "3-4 months",
    
      soil: "Loamy, clayey",
      season: "Kharif/Rabi",
      tips: "Good for green manuring."
    },
    lentil: {
      desc: "Cool climate, loamy soil.",
      age: "3-4 months",

      soil: "Loamy, well-drained",
      season: "Rabi",
      tips: "Sensitive to waterlogging."
    },
    pomegranate: {
      desc: "Hot, dry climate, loamy soil.",
      age: "3-5 years",
    
      soil: "Loamy, sandy",
      season: "Year-round",
      tips: "Drought tolerant, avoid waterlogging."
    },
    banana: {
      desc: "Humid tropical climate, loamy soil.",
      age: "10-15 months",
     
      soil: "Loamy, alluvial",
      season: "Year-round",
      tips: "Requires regular irrigation."
    },
    mango: {
      desc: "Hot climate, well-drained alluvial soil.",
      age: "3-6 years",
     
      soil: "Alluvial, loamy",
      season: "Spring/Summer",
      tips: "Needs dry weather at flowering."
    },
    grapes: {
      desc: "Warm, dry climate, sandy-loam soil.",
      age: "2-3 years",
     
      soil: "Sandy-loam",
      season: "Spring",
      tips: "Requires pruning for good yield."
    },
    watermelon: {
      desc: "Warm climate, sandy soil.",
      age: "2-3 months",

      soil: "Sandy, loamy",
      season: "Summer",
      tips: "Needs full sunlight."
    },
    muskmelon: {
      desc: "Warm climate, sandy soil.",
      age: "2-3 months",
   
      soil: "Sandy, loamy",
      season: "Summer",
      tips: "Avoid excess irrigation."
    },
    apple: {
      desc: "Cool climate, well-drained soil.",
      age: "3-5 years",
   
      soil: "Loamy, well-drained",
      season: "Autumn",
      tips: "Requires chilling hours."
    },
    orange: {
      desc: "Subtropical climate, well-drained soil.",
      age: "3-5 years",

      soil: "Loamy, sandy",
      season: "Winter",
      tips: "Sensitive to frost."
    },
    papaya: {
      desc: "Warm, humid climate, loamy soil.",
      age: "6-12 months",
     
      soil: "Loamy, well-drained",
      season: "Year-round",
      tips: "Sensitive to waterlogging."
    },
    coconut: {
      desc: "Tropical climate, sandy soil.",
      age: "6-10 years",
 
      soil: "Sandy, loamy",
      season: "Year-round",
      tips: "Requires regular irrigation in dry season."
    },
    cotton: {
      desc: "Moderately dry climate, black soil.",
      age: "5-6 months",
     
      soil: "Black, alluvial",
      season: "Kharif",
      tips: "Needs dry weather at harvest."
    },
    jute: {
      desc: "Warm, humid climate, alluvial soil.",
      age: "4-5 months",
    
      soil: "Alluvial, loamy",
      season: "Kharif",
      tips: "Requires standing water during early growth."
    },
    coffee: {
      desc: "Cool, humid climate, volcanic soil.",
      age: "3-4 years",
    
      soil: "Volcanic, loamy",
      season: "Winter",
      tips: "Needs shade and regular rainfall."
    }
  };
  const c = info[crop];
  if (!c) return "General agricultural conditions.";
  return `
    <ul style="text-align:left;list-style:square;padding-left:1.2em;">
      <li><b>Description:</b> ${c.desc}</li>
      <li><b>Ideal Age/Maturity:</b> ${c.age}</li>
      
      <li><b>Soil:</b> ${c.soil}</li>
      <li><b>Season:</b> ${c.season}</li>
      <li><b>Tips:</b> ${c.tips}</li>
    </ul>
  `;
}

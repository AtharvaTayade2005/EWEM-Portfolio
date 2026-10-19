# 🌿 EWEM Academic Portfolio (MSE & ESE Assessment Archive)

An ultra-modern, examination-ready portfolio website for **Electronic Waste & Environmental Management (EWEM)** coursework, featuring dedicated tabs for **MSE Activities**, **ESE Activities**, **Assignments**, **Case Studies**, and **Interactive Tools**.

Inspired by top-tier modern web design: glassmorphism, 3D interactive tilt profile cards, instant real-time search, file-format indicators, and 100% dependency-free vanilla architecture ready for GitHub Pages.

---

## 📂 Directory & File Structure

Simply drop your documents into the corresponding folders inside `files/`:

```text
EWEM portfolio/
│
├── index.html              # Main portfolio webpage
├── styles.css              # Obsidian dark theme & design system
├── script.js               # 3D tilt, tabs, search & filter engine
├── README.md               # Documentation & setup guide
│
└── files/
    ├── mse/                # Mid-Semester Exam activities
    │   ├── Elemental_Recovery_Process_Update.xlsx
    │   ├── TE_E_Waste_Case_Study_Report_MSE.docx
    │   ├── CarbonFootprint_TASK.xlsx
    │   └── MSE_Evaluation_Presentation.pdf
    │
    ├── ese/                # End-Semester Exam activities & capstone
    │   ├── maharashtra-tracker.html
    │   ├── Process_Modification_Design_Patent.docx
    │   ├── Maharashtra_EWaste_Paradox_Report.pdf
    │   └── Maharashtra_EWaste_Tracker_Master.xlsx
    │
    ├── assignments/        # Regular course assignments & reports
    │   ├── Assignment_1_Heavy_Metals_Risks.pdf
    │   ├── Indian_Companies_Following_EWaste_Rules.docx
    │   ├── Global_EWaste_Comparison_Overview.pdf
    │   └── LEED_v5_BDC_11_Building_Scorecard.xlsx
    │
    ├── casestudies/        # Specialized case study reports
    │   ├── Dharavi_Informal_Cluster_Study.docx
    │   ├── Pune_SWaCH_Formalization_Model.pdf
    │   └── Dell_Circular_Economy_Strategy.docx
    │
    └── tools/              # Interactive tools & poster visuals
        ├── LEED_Green_Building_Modern_UI.html
        └── Activity_Map_Of_EWASTE.jpeg
```

---

## ⚡ How to Customize Your Details

Open `index.html` in your editor and look for the following placeholders to update:
1. **Your Name**: Replace `Student Name` with your actual name.
2. **Roll Number**: Replace `24102C0000` with your roll number.
3. **Monogram**: In `<div class="monogram">AP</div>`, update the two initials.
4. **Branch / Div**: Update `CMPN - Division C` or your respective class.

---

## 🚀 How to Deploy to GitHub Pages (Free Hosting)

1. Commit and push your code to your GitHub repository:
   ```bash
   git add .
   git commit -m "Complete EWEM Portfolio with MSE and ESE activities"
   git push origin main
   ```
2. On your GitHub repository page:
   - Go to **Settings** > **Pages** (under Code and automation in sidebar).
   - Under **Build and deployment** > **Source**, choose **Deploy from a branch**.
   - Select `main` (or `master`) branch and `/ (root)` folder.
   - Click **Save**.
3. In 1–2 minutes, your website will be live at:
   `https://<your-username>.github.io/<repo-name>/`

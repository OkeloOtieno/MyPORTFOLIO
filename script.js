function downloadResume() {
    const resumeUrl = "./Resume/resume.pdf";

    const fileName = "Emmanuel_Otieno_Resume.pdf";
  
    fetch(resumeUrl)
      .then(response => response.blob())  
      .then(blob => {
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = fileName;
        link.click();
        URL.revokeObjectURL(link.href);
      })

  }
  
  document.getElementById('downloadResume').addEventListener('click', downloadResume);
  
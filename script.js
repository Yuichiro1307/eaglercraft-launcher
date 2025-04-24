function play() {
  const version = document.getElementById("version").value;
  let url = "";

  switch (version) {
    case "1.12.2":
      url = "https://your-github-user.github.io/eagler-1.12.2/";
      break;
    case "1.8.8":
      url = "https://your-github-user.github.io/eagler-1.8.8/";
      break;
    case "1.5.2":
      url = "https://your-github-user.github.io/eagler-1.5.2/";
      break;
  }

  window.location.href = url;
}

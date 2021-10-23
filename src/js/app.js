const linksSocialMedia = {
  github: 'jailsonmelodev',
  instagram: 'jailsonmelodev',
  youtube: 'jailsonmelodev',
  facebook: 'jailsonmelodev',
  twitter: 'jailsonmelodev'
}

const changeSocialMediaLinks = () => {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class');

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`;
  }
}

changeSocialMediaLinks();

const getGitHubProfileInfos = () => {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
  .then(response => response.json())
  .then(data => {
    userName.textContent = data.name;
    userImage.src = data.avatar_url;
    userLink.href = data.html_url;
    userLogin.textContent = data.login;
    userBio.textContent = data.bio;
  })
}

getGitHubProfileInfos();

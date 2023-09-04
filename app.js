// Initialize the Dropbox object with your access token
const dropbox = new Dropbox.Dropbox({ accessToken: 'sl.BlYiNok4q9CQD8JNHI7usSP6xbqe6mfd_giU3cQOSOGbv37A2T9An83qcy-5B7GPyOWznbH38fKklZ3r_-s_D-YpZ5LTpU26MXuLa2IRYNMgeqD5mTWDv6N5jQ5CA_f-UMP13u0MppFv' });

// Specify the file you want to read
const filePath = '/txt.txt';

// Make an API request to get the file content
dropbox.filesDownload({ path: filePath })
  .then(response => {
    // Read the file content from the response
    const fileContent = response.fileBlob;

    // Handle the file content as needed (e.g., display it)
    const reader = new FileReader();
    reader.onload = function(event) {
      const content = event.target.result;
      console.log(content); // Display the content in the console
      // You can also display the content on your webpage or manipulate it as needed
    };
    reader.readAsText(fileContent);
  })
  .catch(error => {
    console.error(error);
  });
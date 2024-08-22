import { 
    db, 
    storage, 
    storageRef as createStorageRef,  // Alias the import to avoid conflicts
    uploadBytes, 
    getDownloadURL 
  } from "../../Firebase Auth/firebase.js";
  
  let submitButton = document.getElementById("submitBtn");
  submitButton.addEventListener("click", addToDataBase);
  
  async function addToDataBase(event) {
      event.preventDefault(); // Prevent default form submission
  
      let eventName = document.getElementById("eventName").value;
      let eventDec = document.getElementById("eventDescription").value;
      let eventDate = document.getElementById("eventDate").value;
      let eventTime = document.getElementById("eventTime").value;
      let eventImageInput = document.getElementById("eventImage");
  
      let formData = {
          eventName: eventName,
          eventDescription: eventDec,
          eventDate: eventDate,
          eventTime: eventTime
      };
  
      try {
          // Upload file to Firebase Storage
          if (eventImageInput.files.length > 0) {
              const file = eventImageInput.files[0];
              const fileRef = createStorageRef(storage, `eventImages/${file.name}`);  // Use the alias here
              await uploadBytes(fileRef, file);
              const fileURL = await getDownloadURL(fileRef);
              formData.eventImageURL = fileURL;
          }
  
          // Save data to Firestore
          await db.collection('events').add(formData);
          console.log('Event added successfully');
      } catch (error) {
          console.error('Error adding event:', error);
      }
  };
  
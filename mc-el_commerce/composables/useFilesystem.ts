import { Filesystem, Directory } from "@capacitor/filesystem";

export const useFilesystem = () => {
  // Save a photo to the filesystem
  const savePhotoToFilesystem = async (
    photoDataUrl: string
  ): Promise<string> => {
    try {
      const fileName = `photo_${new Date().getTime()}.jpeg`;
      const savedFile = await Filesystem.writeFile({
        path: fileName,
        data: photoDataUrl.split(",")[1], // Remove the Data URL prefix
        directory: Directory.Data,
      });
      console.log("Photo saved:", savedFile);
      return savedFile.uri;
    } catch (error) {
      console.error("Error saving photo to filesystem:", error);
      throw error;
    }
  };

  // Retrieve a photo from the filesystem by its path
  const retrievePhotoFromFilesystem = async (
    filePath: string
  ): Promise<string> => {
    try {
      const photoFile = await Filesystem.readFile({
        path: filePath,
        directory: Directory.Data,
      });
      console.log("Photo retrieved:", photoFile);
      return `data:image/jpeg;base64,${photoFile.data}`; // Return the Base64 Data URL
    } catch (error) {
      console.error("Error retrieving photo from filesystem:", error);
      throw error;
    }
  };

  return {
    savePhotoToFilesystem,
    retrievePhotoFromFilesystem,
  };
};

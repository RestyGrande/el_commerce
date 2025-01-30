import { Filesystem, Directory } from "@capacitor/filesystem";
import { Capacitor } from "@capacitor/core";

export const useFilesystem = () => {
  // Save a photo to the device's Downloads folder
  const savePhotoToFilesystem = async (
    photoDataUrl: string
  ): Promise<string> => {
    try {
      const fileName = `photo_${new Date().getTime()}.jpeg`;

      // Determine the correct directory for each platform
      const directory =
        Capacitor.getPlatform() === "android"
          ? Directory.ExternalStorage // Android: External storage (Downloads)
          : Directory.Documents; // iOS: Use Documents (closest alternative)

      const savedFile = await Filesystem.writeFile({
        path: `Download/${fileName}`, // Save inside the "Download" folder
        data: photoDataUrl.split(",")[1], // Remove Base64 prefix
        directory: directory,
      });

      console.log("Photo saved in Downloads:", savedFile);
      return savedFile.uri;
    } catch (error) {
      console.error("Error saving photo to Downloads:", error);
      throw error;
    }
  };

  // Retrieve a photo from the filesystem
  const retrievePhotoFromFilesystem = async (
    filePath: string
  ): Promise<string> => {
    try {
      const directory =
        Capacitor.getPlatform() === "android"
          ? Directory.ExternalStorage
          : Directory.Documents;

      const photoFile = await Filesystem.readFile({
        path: `Download/${filePath}`, // Read from Downloads folder
        directory: directory,
      });

      console.log("Photo retrieved:", photoFile);
      return `data:image/jpeg;base64,${photoFile.data}`; // Convert back to Base64
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

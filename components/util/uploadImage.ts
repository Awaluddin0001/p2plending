import axios from "axios";
import { useState } from "react";

interface ImageData {
  uri: string;
  name: string;
  type: string;
}

export const useImageUploader = <T>() => {
  const [isUpload, setIsUpload] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [resp, setResp] = useState<T | null>(null);

  const uploadImage = async (imageData: ImageData, endpoint: string) => {
    setLoading(true);
    const formData = new FormData();
    formData.append("image", imageData as any);
    try {
      const response = await axios.post(
        `${process.env.EXPO_PUBLIC_BASE_URL}${process.env.EXPO_PUBLIC_SERVICE_J1}${endpoint}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setIsUpload(true);
      setResp(response.data);
    } catch (error) {
      setIsUpload(false);
      console.error("Error uploading image", error);
    } finally {
      setLoading(false);
    }
  };

  return { isUpload, loading, uploadImage, resp };
};

export const useSignatureUploader = <T>() => {
  const [isUpload, setIsUpload] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [resp, setResp] = useState<T | null>(null);
  const uploadSign = async (imageData: ImageData, endpoint: string) => {
    setLoading(true);

    const formData = new FormData();
    formData.append("image", imageData as any);
    try {
      const response = await axios.post(
        `${process.env.EXPO_PUBLIC_BASE_URL}${process.env.EXPO_PUBLIC_SERVICE_J1}${endpoint}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setIsUpload(true);
      setResp(response.data);
    } catch (error) {
      setIsUpload(false);
      console.error("Error uploading signature", error);
    } finally {
      setLoading(false);
    }
  };

  return { isUpload, loading, uploadSign, resp };
};

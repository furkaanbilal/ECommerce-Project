import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router";
import { ImageUp, Trash2 } from "lucide-react";
import { uploadImages } from "../../services/productDetails-service";
import toast from "react-hot-toast";

const UploadImages = () => {
  const { id } = useParams();

  const [files, setFiles] = useState([]);

  const { handleSubmit } = useForm();

  const navigate=useNavigate();

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles(selectedFiles);
  };

  const removeImage = (index) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  const uploadProductImages = async () => {
    const formData = new FormData();

    formData.append("productDetailId", id);

    files.forEach((file) => {
      formData.append("files", file);
    });

    console.log(formData);
    let response = await uploadImages(formData);
    if (response.isSuccess) toast.success("Image uploaded");
    navigate("/admin/products")

  };

  return (
    <div className="min-h-screen bg-black text-white flex justify-center items-center p-4">
      <div className="w-full max-w-3xl bg-zinc-900 rounded-2xl border border-orange-500/20 shadow-xl p-6 md:p-8">
        <h1 className="text-3xl font-bold text-orange-500 mb-2">
          Upload Product Images
        </h1>

        <p className="text-gray-400 mb-8">Product Id : {id}</p>

        <form onSubmit={handleSubmit(uploadProductImages)}>
          {/* Upload Box */}

          <label
            htmlFor="files"
            className="border-2 border-dashed border-orange-500 rounded-2xl flex flex-col items-center justify-center py-12 cursor-pointer hover:bg-zinc-800 transition"
          >
            <ImageUp size={60} className="text-orange-500 mb-4" />

            <h2 className="text-xl font-semibold">Click to Upload Images</h2>

            <p className="text-gray-400 mt-2 text-center">
              PNG, JPG, JPEG
              <br />
              You can select multiple images.
            </p>

            <input
              id="files"
              type="file"
              multiple
              accept="image/*"
              className="hidden"
              onChange={handleFileChange}
            />
          </label>

          {/* Preview */}

          {files.length > 0 && (
            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-5">Selected Images</h2>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
                {files.map((file, index) => (
                  <div
                    key={index}
                    className="relative bg-zinc-800 rounded-xl overflow-hidden"
                  >
                    <img
                      src={URL.createObjectURL(file)}
                      alt=""
                      className="w-full h-40 object-cover"
                    />

                    <button
                      type="button"
                      onClick={() => removeImage(index)}
                      className="absolute top-2 right-2 bg-red-500 p-2 rounded-full hover:bg-red-600 transition"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          <button
            type="submit"
            className="w-full mt-8 bg-orange-500 hover:bg-orange-600 text-black font-bold py-4 rounded-xl transition"
          >
            Upload Images
          </button>
        </form>
      </div>
    </div>
  );
};

export default UploadImages;

"use client";

import useAddPropertyModal from "@/app/hooks/useAddPropertyModal";
import AddPropertyModal from "../modals/AddPropertyModal";
import useLoginModal from "@/app/hooks/UseLoginModal";

interface AddPropertyButtonProps {
  userId?: string | null;
}

const AddPropertyButton: React.FC<AddPropertyButtonProps> = ({ userId }) => {
  const AddPropertyModal = useAddPropertyModal();
  const loginModal = useLoginModal();
  const airbnbYourHome = () => {
    if (userId) {
      AddPropertyModal.open();
    } else {
      loginModal.open();
    }
  };
  return (
    <div
      onClick={airbnbYourHome}
      className="p-2 cursor-pointer text-sm font-semibold rounded-full hover:bg-gray-200"
    >
      AirBnb you home
    </div>
  );
};

export default AddPropertyButton;

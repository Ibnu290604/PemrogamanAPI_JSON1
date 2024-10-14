'use client';

interface ViewUserButtonProps {
  userId: number;
}

const ViewUserButton: React.FC<ViewUserButtonProps> = ({ userId }) => {
  const handleClick = () => {
    if (userId > 100) {
      alert('BISA');
    } else {
      alert('BISA');
    }
  };
  
  return (
    <>
      <button onClick={handleClick}>apakah bisa bermain ML? Klik disini</button>
    </>
  );
};

export default ViewUserButton;

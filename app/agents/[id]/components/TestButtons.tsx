
export default function TestButtons() {
    const handleTestCall = async () => {
      // Trigger Test Call API
    };
  
    const handleTestChat = async () => {
      // Trigger Test Chat API
    };
  
    return (
      <div>
        <button onClick={handleTestCall} className="bg-blue-500 text-white p-2 mr-2">Test Call</button>
        <button onClick={handleTestChat} className="bg-green-500 text-white p-2">Test Chat</button>
      </div>
    );
  }
  
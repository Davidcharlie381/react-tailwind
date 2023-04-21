import { useRef } from "react";
import { useState } from "react";

const users = [
  { id: 1, name: "Sani" },
  { id: 2, name: "Sani" },
  { id: 3, name: "Sani" },
  { id: 4, name: "Sani" },
];

function App() {
  const [id, setId] = useState(0);
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState("");

  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    form.current.value = "";
  };

  const handleAdd = () => {
    setId((prev) => prev + 1);
    setContacts([...contacts, { id, name }]);
  };

  const handleDelete = (id) => {
    setContacts(
      contacts.filter((contact) => contact.id !== id)
      )
  };

  return (
    <div>
      <header className="bg-red-300 p-5">
        <h3 className="text-[#333] text-2xl font-bold">Co</h3>
      </header>

      <form
        onSubmit={handleSubmit}
        className="mx-auto flex justify-center gap-5 w-[88%] m-5"
      >
        <input
          onChange={(e) => {
            setName(e.target.value);
          }}
          ref={form}
          value={name}
          type="text"
          name="contact-name"
          placeholder="Enter name"
          className="border-2 rounded-md border-slate-400 p-3"
        />
        <button
          onClick={handleAdd}
          type="submit"
          className="bg-blue-200 p-3 rounded-md"
        >
          Add user
        </button>
      </form>

      <div className="mx-auto w-[88%] h-screen">
        {contacts.map((contact) => {
          return (
            <div
              key={contact.id}
              className="p-4 flex justify-between bg-gray-300"
            >
              {contact.name}
              <button
                onClick={() => handleDelete(contact.id)}
                className="bg-indigo-400 p-2 rounded-md text-white"
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;

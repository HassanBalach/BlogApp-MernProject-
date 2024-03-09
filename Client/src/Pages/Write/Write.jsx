import "./Write.css";

export default function Write() {
  return (
    <div>
      <div className="selectEntirePost">
        <img
          className="imageItself"
          src="https://th.bing.com/th/id/R.fe852f1a74fb11aa02e571eb4bb55b93?rik=R3I89M7p8ZOarQ&riu=http%3a%2f%2fwww.voidphase.com%2fmedia%2f2010%2f12%2fbird_gouldian_finch_1920.jpg&ehk=qtLnQNXyBzJaf8CWvpfHi8mHuXLt6ahxZXm%2f2IyMMiU%3d&risl=&pid=ImgRaw&r=0"
          alt=""
        />
    
      <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fa-solid fa-circle-plus"></i>
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} />
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
          />
        </div>
        <div className="writeFormGroup">
        <textarea 
        className="writeInput writeText"
        placeholder="Tell your story...."
        autoFocus={true}
        >
        </textarea>
        </div>
        <button className="submitBtn" type="submit">
          Publish
        </button>
      </form>
      </div>
    </div>
  );
}

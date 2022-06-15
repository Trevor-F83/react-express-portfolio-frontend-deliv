import { useState, useEffect } from "react";

function Projects(props) {

    // Create State to hold projects
    const [ projects, setProjects] = useState(null);
    
    // Function to make API call
    const getProjectsData = async () => {
        // API call
        const response = await fetch(props.URL + "projects");
        // Becomes JavaScript obj.
        const data = await response.json();
        // Set projects state to the data
        setProjects(data);
    };

     // Call for data inside useEffect to only happen on component load
    useEffect(() => getProjectsData(), []);
    
    // Define function that returns JSX needed once we get data
    const loaded = () => {
        return projects.map((project) => (
            <div>
                <h1>{project.name}</h1>
                <img src={project.image} />
                <a href={project.git}>
                    <button>GitHub</button>
                </a>
                <a href={project.live}>
                    <button>Live Site</button>
                </a>
            </div>
        ));
    };


    return projects ? loaded() : <h1>Loading...</h1>
}

export default Projects;
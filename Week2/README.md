# Week 2: CSS + Javascript

Welcome to week 2! We hope you had a great week 1 since this is where the course will ramp up a tiny bit. We're going to be teaching y'all the basics of CSS and Javascript in the browser.

# Materials

- [Day 3: CSS](https://docs.google.com/presentation/d/12TUUsQx7G65wE7-kyDVxc7MWt30nQ6Bs/edit?usp=drive_link&ouid=105792284454467330830&rtpof=true&sd=true)
- [Day 4: Javascript](https://docs.google.com/presentation/d/1gWTtq-SHqXV2A4tfS9sqgn4KFnfiWzYC/edit?usp=drive_link&ouid=105792284454467330830&rtpof=true&sd=true)

- [Intro to Javascript Slides: ](https://drive.google.com/drive/folders/1E4QQzdgHbmB2-M5d2coS6tr0EDwu_1DP?usp=sharing) we highly recommend you get familiarized with the basics of Javascript before Week 3 (loops, conditionals, etc), and have provided the Javascript slides from Spring 2025.

# Homework #2: CSS Styling for HTML Resume

In the previous week, we learned how to structure a resume using HTML. This week, we'll be exploring CSS to enhance the visual appearance of our resume and make it more appealing.

## Target Output

Your styled HTML resume should look similar to the following image:

![image](./homework/FinishedCSSResume.png)

## Instructions

1. Start with the HTML resume you created in the previous homework assignment.

2. Create a new CSS file (e.g., `styles.css`) and link it to your HTML file using the `<link>` element in the `<head>` section.

3. Experiment with different CSS properties and selectors to style your resume. Here are some suggestions:

- Use CSS selectors like `body`, `header`, `main`, `section`, `h1`, `h2`, `h3`, `p`, `ul`, `li`, and `img` to target specific elements.
- Set fonts, colors, margins, padding, and background colors for different elements.
- Style the layout using CSS properties like `display`, `flex`, `justify-content`, and `align-items`.

4. Pay special attention to the following sections and elements:

- **Header**: Style the header section to make your name and contact information stand out.
- **Education Section**: Use CSS to create a visually appealing layout for your education details.
- **Skills and Tools**: Consider using CSS to display your skills and tools in a neat and organized manner (e.g., using a grid layout or flexbox).
- **Org Membership**: Style the organization membership section to match the overall design of your resume.

5. Refer to the provided image for inspiration, but feel free to get creative with your own design choices.

6. Test your styled resume by opening the HTML file in a web browser or using a live server extension in your text editor.

## Additional Tips

- Use CSS comments to organize and document your CSS code.
- Leverage online resources and documentation for CSS properties, selectors, and techniques.
- Experiment with different font families, sizes, and styles to find the perfect combination for your resume.

Remember, styling with CSS is an iterative process, so don't be afraid to make changes and experiment until you achieve the desired look and feel for your resume.

Good luck, and happy coding!

## Running JavaScript Files in the Terminal

1. **Ensure Node.js is installed**:

   If you were here last week, you should have Node.js installed already! However, to check if it is installed, run this command in your terminal:

    ```bash
    node -v
    ```

    If you see a version number, you're good to go. If not, download and install [Node.js](https://nodejs.org/en/download)

2. **Navigate to the right directory**:

    Before running your file, make sure you're in the folder where your JavaScript file is located. Use the `cd` (change directory) command to switch to the right folder:

    ```bash
    cd path/to/you/folder
    ```

    To check if your file is there, you can use:
    
    ```bash
    ls    # Mac/Linux
    dir   # Windows
    ```

3. **Run the JavaScript file**:

    Once you're in the respective folder, use the `node` command followed by your filename to run the file:

    ```bash
    node yourFile.js
    ```

    You should see the output of your JavaScript program in the terminal!

## Commonly Used Terminal Commands (cont.)

1. **Navigate the File Directory**:

- `ls`: List the contents of the current directory.
- `cd <directory>`: Change the current working directory.

2. **Basic Git Commands**:

- `git add <file>`: Stage a file for commit.
- `git commit -m "<message>"`: Commit the staged changes with a message.
- `git push`: Push your local commits to the remote repository.
- `git pull`: Pull the latest changes from the remote repository.

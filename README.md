This is the calculator project through The Odin Project. The goal of this project is to create a calculator that displays and calculates with the following criteria:

* Must contain the four basic operating functions: add, subtract, multiply, and divide.

* Will need to string several operations together.

* Must not evaluate more than a single pair of numbers at a time (i.e. pressing a number followed by an operator, followed by a second number, and followed by another operator again. The first two numbers will evaluate and display once the second operator is selected)

* Answers should be rounded

_I did not round my answers because my answer display can fit a massive amount of numbers and does not overflow the screen_

* Equals button should not do anything until an equation is complete.

* A clear button to wipe out all existing data.

* Display snarky error messages when the user tries to divide by zero.

**Extra Credit:**

* Add a decimal point and limit it so the user cannot add more than one decimal.

* Add styling to make it look nice.

* Add a backspace button.

* Add keyboard support.


***My Project:***

* **Design**
    I modeled my design and functionality based on the Windows calculator app. Nearly everyone is familiar with the layout of that calculator, so I wanted something that was easy to use and familiar. While there are some differences, I wanted it to be as similarly laid out as possible.

    I modeled the default styling on the Windows calculator app as well. I wanted to add some depth to it by adding a 3D effect when buttons are clicked, making the look like they are pressed in. I didn't just want a plain old calculator thoguh. I thought it would be fun to have a "Retro Mode," where the user can toggle the styling to an old-looking calculator. Retro Mode is designed after the HP-65 calculator. I wanted it to have clunky and blocky buttons that stick out of the calculator, a black display, and old digital red font. This is my favorite aspect of the calculator because of how the buttons look when clicking them.

    I decided to keep Retro Mode as a toggle option because the default version has larger buttons where it might be easier for users to see and use.

* **Challenges**
    While there were many challenges I faced with this project, there were a few that I consider major challenges:

    * Saving or deleting solution once equals has been clicked/pressed.
        - I was able to save the solution after equals was selected but tried to add in a check if a number was selected before any new operator was selected. I solved this by including a numClicked boolean and add in the check within the numbers loop to clear the saved solution if a number is selected instead of an operator.

    * Stringing operations together.
        - After some research and trial and error, I was able to figure out where my code would go to enable operation stringing. The big challenge with this was that it was only stringing together one type of operator. Some of the other operators were also not working altogether, for example, divide. I also had issues after using the equals button because of it. I finally solved this by figuring out where my function needed to go. I had to separate what I had into different locations because of how they behaved. I added the operate() function into the operator buttons, and an if statement within the opProcessor() function.
    
* **Ongoing Issues**
    There are still a few issues with the calculator that require more time and effort to figure out why they are occurring:

    1. The percent function only works in an equation if a percent is converted to decimal form before the first operator is selected, follwed by the second number.

    2. The exponent button works fine unless there are large numbers and there have been multiple operations strung together. It almost always works but I am not sure exactly why it has an issue sometimes. It will replace '^' with 'y' and not calculate.

    3. The square root button will overflow the bottom input screen. I have a limit of 15 numbers, but this is overridden when a long decimal is produced when using square root on a particular number.

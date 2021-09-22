/* 
LEARNING CONTENTS:
add event listener => style border
onClick-html => for of loop => style
creat element => add classList => creat inner HTML =>  set as appendChild
*/


/* Add style with an id */

document.getElementById('add-border').addEventListener('click', function () {
    const container = document.getElementById('friend-container');
    container.style.border = '2px solid gray';
})

/* Add bg color */

// Alt no - 1  (problem : background color are not added by clickeing btn)\\
// const friends = document.getElementsByClassName('friend');
// for (const friend of friends) {
//     document.getElementById('bg-colour').addEventListener('click', function () {
//         friend.style.backgroundColor = 'lightblue';
//     })
// }

// Alt no -2 \\
function addBackgroundColor() {
    const friends = document.getElementsByClassName('friend');
    for (const friend of friends) {
        friend.style.backgroundColor = 'lightblue';
    }
}

/* "CreateElement" add "classList" name and add as "appendChild" */

document.getElementById('add-friend').addEventListener('click', function () {

    // CreateElement, classList, set inner html
    const friendDiv = document.createElement('div');
    friendDiv.classList.add('friend');
    friendDiv.innerHTML = `
        <h3 class="friend-name"> New Friend</h3>
        <p>Lorem, ipsum.</p>
    `;

    // call the parent and add as append child
    const container = document.getElementById('friend-container');
    container.appendChild(friendDiv);
})
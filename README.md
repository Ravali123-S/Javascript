 // Check the status of the git repository
    git status;

    // Stage all changes
    git add .;

    // Commit the changes with a message
    git commit -m "data";

    // Pull the latest changes from the remote repository
    git pull;

    // Push the changes to the remote repository
    git push;


    ---move to main branch and merge branch which changes are made
    
PS D:\UI\Javascript\Javascript> git merge mahesh
                Merge made by the 'ort' strategy.
                README.md                  | 15 ++++++++++++++-
                functions/callback.js      | 11 +++++++++++
                functions/iife.js          |  8 ++++++++
                functions/namedFunction.js |  6 ++++++
                functions/readfile.txt     |  3 +++
 
PS D:\UI\Javascript\Javascript> git push origin main
                Enumerating objects: 4, done.
                Counting objects: 100% (4/4), done.
                Delta compression using up to 12 threads
                Compressing objects: 100% (2/2), done.
                Writing objects: 100% (2/2), 370 bytes | 123.00 KiB/s, done.
                Total 2 (delta 0), reused 0 (delta 0), pack-reused 0
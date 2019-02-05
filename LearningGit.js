
// Git is a VCS - version control system
// lets you create different versions of code and swap back and forth
// other VCSs include Subversion, ...

// Homebrew - package manager for macOS, Yarn is another alternative
    // is this the same thing as npm?
    
    // (brew for 'primary software', yarn for npm packages, npm for backend modules and bower for front-end libraries).
    
    // brew: installation of software, i.e. ready to consume applications like wget.
    // npm: installation of packages (libraries), i.e. pieces of functionality to help you build your own applications.
    // yarn: also installation of packages.
    
        // yarn and npm are both manage module installations and dependencies. Yarn was built to address some of the shortcomings of npm. The biggest advantages of yarn over npm are:
            // 1. Installing packages with yarn is parallelized and so package installation is faster.
            // 2. package.json can be very loose in terms of version numbers. yarn.lock (similar to npm shirkwrap) locks this down so that two machines with the same package.json always install the exact same packages.
            // 3. yarn allows you to check why some packages are installed (understand the dependency tree)
            // Enhanced Security
            // Offline mode
            // Parallel Installation - so fast installation
            
        
            
            
// ############################################################################
// Getting Started
// ############################################################################   
           
// initialize empty repository
git init 
    // initializes a hidden folder
    // folder is a .git

// each "snapshot" of code is the comit
// add code from working directory to the "staging area"
git status // figure out what stage of code you're at
// "clean" nothing needs to be staged or committed

git reset // ?? 


// shows "untracked" files.
git add LearningGit.js

// MORE ON ADD
git add -A // stages all changes
    // is a handy shortcut for doing both . and -u
git add . // stages new files and modifications, without deletions
    // add everything changed in the current directory to the staging area
    // it looks at the working tree and adds all those paths to the staged changes if they are either changed or are new and not ignored, it does not stage any 'rm' actions.
git add -u // stages modifications and deletions, without new files
    // looks at all the already tracked files and stages the changes to those files if they are different or if they have been removed. It does not add any new files, it only stages changes to already tracked files.



git commit -m "initial commit"
// provide a message for the commit


git log // history of each commit

git log -oneline // see each commit on one line


// Create a folder called learn_git. (Make sure you do this from a folder that isn't a git repository!)
mkdir learn_git
// cd into the learn_git folder.
cd learn_git
// Create a file called first.txt.
touch first.txt
// Initialize an empty git repository.
git init
// Add first.txt to the staging area.
git add first.txt
// Commit with the message "adding first.txt".
git commit -m "adding first.txt"
// Check out your commit with git log.
git status
// Create another file called second.txt.
// Add second.txt to the staging area.
// Commit with the message "adding second.txt".
// Remove the first.txt file.
rm first.txt
// Add this change to the staging area.
// Commit with the message "removing first.txt".
// Check out your commits using git log.



// ############################################################################
// Configuring Git
// ############################################################################

.gitconfig --global user.name "NAME"
.gitconfig --global user.email "EMAIL"

cat ~/.gitconfig 
// see all settings
git config --global --list
// get a list

// create custom GIT keyboard shortcuts
git config alias.KEYBOARD_SHORTCUT COMMAND

// "git st" <-- "git status"
git config alias.st status
// "git i" <-- "git init"
git config --global alias.init


// create a template commit message
// commit.template
// create a text file called gitmessage.txt

    Subject line (try to keep under 50 characters)

    Multi-line description of commit,
    feel free to be detailed.

    [Ticket: X]

// git log --oneline // output people try to achieve that


git config --global commit.template ~/.gitmessage.txt
git commit



// COLORS

git config --global color.diff.meta "blue black bold"





// BASIC EXERCISES

// global setting to core.pager=cat
// https://git-scm.com/book/en/v2/Customizing-Git-Git-Configuration
// git config --global core.pager "cat"
    



// ############################################################################
// GitHub Introduct
// ############################################################################

// Github is a web-based Git repoistory hosting serivce
// it enables collaboration by hosting shared Git repositories teams of developers can contriubte to

// push
// pull
// forking
// pull requests

// what is a .gitignore?

// created a repo called github_repo
// going to create a remote repository
echo "# github_repo" >> README.md // pass markdown "md" 
// A new readme file was added to the current folder


git init 
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/official-mitchell/github_repo.git
    // tells local repository about a remote repository located somewhere
git push -u origin master

// "origin master" is an alias for the URL
// send this from master branch to remote repository on Github.
// origin is a nickname for where the repo is actually located

git remote add // tell a local repo about a remote repository
import { blog as blogs } from '@/app/constants';
import Image from 'next/image';

const page = () => {
  const blog = blogs.posts[1];
  return (
    <section className="max-w-blog w-full mx-auto flex flex-col gap-11">
      <div>
        <h2 className="mb-6 max-sm:text-[32px] max-md:text-[40px]">
          {blog.title}
        </h2>
        <p className="text-neutral-400 font-light text-sm">{blog.date}</p>
      </div>

      <Image
        src={blog.image}
        height={300}
        width={300}
        alt="post image"
        className="w-full rounded-md object-cover"
      />

      <div className="flex flex-col gap-5 text-neutral-400 font-light">
        <p>
          Since the creation of Unix in the 1970s, a lot of operating systems
          has used it as their foundation.
        </p>

        <p>
          Linux is one of the most popular Unix based operating system. It is
          open source, anyone can use it, all you need is a computer with
          directories and files and having Linux running on it. Linux is used
          all over the world across many industries
        </p>

        <p>
          Linux Operating System has many amazing features, and one of it
          feature is the Command Line Interface (CLI). It allow the user to
          interact with the computer from a shell. The Linux Shell is a REPL
          (Read, Evaluate, Print, Loop) environment where user can enter a
          command and the shell runs it and return a result.
        </p>
      </div>

      <div className="flex flex-col gap-5 text-neutral-400 font-light">
        <h3 className="text-white">The Linux “ls” Command</h3>

        <p>
          The ls command is one of many basic commands that any linux user
          should know.
        </p>

        <p>
          The ls command lists files and directories within the file system, and
          shows detailed information about them. It is a part of the GNU core
          utilities which is installed on all Linux distributions.
        </p>
      </div>

      <div className="flex flex-col gap-5 text-neutral-400 font-light">
        <h3 className="text-white">How to list files using “ls”</h3>

        <p>
          Depending on which directory you want the result to appear the the
          command still pretty much the same. Just like you navigate on your
          file explorer type <strong>ls</strong>
        </p>

        <code className="bg-neutral-700 text-white py-2.5 px-3.5 rounded-sm font-light font-inter">
          ls
        </code>

        <p>It will list files in your current directory.</p>

        <p>
          If you want to list files on an other directory form the directory
          that you are already in just give it the path of the directory that
          you want to list files.
        </p>

        <code className="bg-neutral-700 text-white py-2.5 px-3.5 rounded-sm font-light font-inter">
          ls Pictures/Videos/Themes/
        </code>

        <p>That will list files in the Theme directory.</p>
      </div>

      <div className="flex flex-col gap-5 text-neutral-400 font-light">
        <h3 className="text-white">List files in a Directory with options</h3>
        <p>
          The ls command also accepts flags, to know what flags does the ls
          command accept run
        </p>
        <code className="bg-neutral-700 text-white py-2.5 px-3.5 rounded-sm font-light font-inter">
          man ls
        </code>
        <p>
          This is a manual that will shell you all about the command line ls.
        </p>
        <p>
          Flags are additional information that changes how files or directories
          are listed in your terminal.
        </p>
        <p>It changes how the ls command works.</p>
        <code className="bg-neutral-700 text-white py-2.5 px-3.5 rounded-sm font-light font-inter">
          ls [flags] [directory]
        </code>
      </div>

      <div className="flex flex-col gap-5 text-neutral-400 font-light">
        <h3 className="text-white">The option ls -l</h3>
        <p>
          The -l option signifies the long list format. This shows a lot more
          information presented to the user than the standard command. You will
          see the file permissions, the number of links, owner name, owner
          group, file size, time of last modification and the file or directory
          name.
        </p>
        <p>
          To give an option the ls command we need to put “-” after ls each
          option has it own functionality .
        </p>
        <code className="bg-neutral-700 text-white py-2.5 px-3.5 rounded-sm font-light font-inter">
          ls -l
        </code>
      </div>

      <div className="flex flex-col gap-5 text-neutral-400 font-light">
        <h3 className="text-white">Ls -l *.c ?</h3>
        <p>
          We have already see that the ls command line with the option -l list
          files in a directory and gives us more information about those files.
        </p>

        <p>
          The * allow us to selection everything in our directory but what if I
          only want .c files ? What if I only want to list .c files and get more
          information about them ?
        </p>

        <p>
          We just have to give the type of file that we want to list to the *
          and it will only list these files.
        </p>

        <code className="bg-neutral-700 text-white py-2.5 px-3.5 rounded-sm font-light font-inter">
          ls -l *.c
        </code>
      </div>

      <div className="text-neutral-400 flex flex-col gap-4">
        <h3 className="text-white">What really happen behind all that ?</h3>

        <p className="font-medium">
          What happen when we type “ls” and hit enter ?
        </p>

        <p>
          Well there are many functions that make sure that the shell is working
          correctly it is compose and split in different parts (Functions) that
          will work together:
        </p>

        <p>
          A basic loop that will work continuously till the program is told to
          be shut down. As long as the loop is running different processes are
          going to happen when you hit “Enter”.
        </p>

        <p className="font-medium">Reading a line.</p>
        <p>
          The line that you entered is going to be read from the standard input
          (stdin) and to keep up with whatever you writing and how many
          characters you are putting it is going to allocate memory for your
          input and free that memory right after when it is not needed anymore
          to allow you to type an other command.
        </p>

        <p className="font-medium">Parsing the line.</p>
        <p>
          Since now we have the line of input, that very line is getting parse
          into a list of arguments. So it understand when we are using a
          command, an option or even giving it a path. The function which will
          parse the line is called (strtok).
        </p>

        <p className="font-medium">How Shell start processes.</p>
        <p>
          Now that we have the line which has been parsed, Shell starts to
          process in the main function of shells. The practical way for
          processes to get started is the fork() system call. When this function
          is called, the operating system makes a duplicate of the process and
          starts them both running. The original process is called the “parent”,
          and the new one is called the “child” . The exec() system call
          replaces the current running program with an entirely new one. This
          means that when you call exec() the operating system stops your
          process, loads up the new program and starts that one in its place.
        </p>

        <p>
          With these two system calls, we have the building blocks for how most
          programs are running on Unix. First, an existing process forks itself
          into two separate one. Then the child uses exec() to replace itself
          with a new program while the parent process keeps on doing other
          things, and ca even keeps tabs on its children, using the system call
          wait().
        </p>

        <p className="font-medium">Shell Builtin</p>
        <p>
          A Shell builtin is a command or function, called from a shell, that is
          executed directly in the shell itself, instead of an external
          executable program which the shell would load and execute. Shell
          builtins work simnifically faster than external programs, because
          there is no program loading overhead.
        </p>

        <p className="font-medium">PS1</p>
        <p>
          PS1 is a primary prompt variable which holds special bash characters.
          This is the default structure of the bash prompt and is displayed
          every time a user logs is using a terminal. These default values are
          set in the /etc/bashrc file.
        </p>
      </div>

      <div className="text-neutral-400 flex flex-col gap-4">
        <h3 className="text-white">Conclusion</h3>
        <p>
          There is a lot of combination to list out files and a bunch of other
          commands
        </p>
        <p>
          If you want to know more about the ls function you can run man ls on
          your terminal or even on google , I personally prefer to run it on
          google for it’s practicability .
        </p>

        <p>Thanks for reading!</p>
      </div>

      <div className="text-neutral-400 flex flex-col gap-4">
        <h3 className="text-white">Links:</h3>
        <p className="font-light">
          <span className="">by: </span>
          <a
            href="https://github.com/HINKOKO"
            target="_blank"
            className="underline"
          >
            Anthony Pizzoni
          </a>
          ,{' '}
          <a
            href="https://github.com/NehemieMbg"
            target="_blank"
            className="underline"
          >
            Nehemie Mombanga
          </a>
          .
        </p>
      </div>
    </section>
  );
};
export default page;

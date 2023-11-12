import { blog as blogs } from '@/app/constants';
import Image from 'next/image';

const page = () => {
  const blog = blogs.posts[0];
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
          As someone who’s passionate about cryptocurrencies and decentralized
          finance, I’ve been working on a side project called Emerys for the
          past month. Emerys is a decentralized application that allows users to
          exchange tokens on the Ethereum blockchain without the need for
          intermediaries or centralized exchanges.
        </p>

        <p>
          Despite being a side project, Emerys has been a labor of love for me.
          I’ve poured countless hours into its development, working to create a
          user-friendly experience. I’m a web3 developer with a passion for
          blockchain technology and a student at Holberton School.
        </p>

        <p>
          In this blog post, I’ll be sharing my journey creating Emerys as a
          side project. Emerys offers a secure, reliable, and efficient way to
          exchange tokens on the Ethereum blockchain. So, come along with me as
          we delve into the world of decentralized finance and discover what
          Emerys has to offer.
        </p>

        <p>
          My journey into the world of blockchain and cryptocurrency started
          with a video discussing the enigmatic creator of Bitcoin, Satoshi
          Nakamoto. As I dug deeper into the topic, I became fascinated by the
          potential of decentralized systems to disrupt traditional finance and
          create a more equitable world. That’s why I chose to work on Emerys, a
          decentralized application that empowers users to exchange tokens on
          the Ethereum blockchain. It’s been a month-long project, but I’ve
          loved every moment of it.
        </p>
      </div>

      <div className="flex flex-col gap-5 text-neutral-400 font-light">
        <h3 className="text-white">Why Emerys ?</h3>

        <p>
          I remember that night like it was yesterday. I couldn’t sleep, and I
          knew I had to be up early for school the next day. As I lay in bed, I
          grabbed my phone and started scrolling through videos, not really
          interested in anything. That was until a thumbnail caught my
          attention. It was a video talking about Satoshi Nakamoto, the
          mysterious creator of Bitcoin.
        </p>

        <p>
          Curiosity got the best of me, and I clicked on the video. As I
          watched, I was fascinated by the concept of blockchain technology and
          decentralized systems. I spent the rest of the night researching and
          reading about it.
        </p>

        <p>
          It was then that I knew I wanted to build something using this
          technology. That’s why I decided to create a decentralized exchange as
          a side project. The idea of creating a platform where people could
          securely and directly exchange tokens without a middleman was
          thrilling to me.
        </p>

        <p>
          Through this project, I was able to combine my passion for web3
          development with my love for blockchain technology. And it all started
          with a sleepless night and a single video about Satoshi Nakamoto.
        </p>
      </div>

      <div className="flex flex-col gap-5 text-neutral-400 font-light">
        <h3 className="text-white">The Architecture</h3>

        <p>
          To use my decentralized exchange, the user first needs to connect
          their wallet using Metamask. Then, Ethers.js technology is used to
          connect the user to the Ethereum blockchain, allowing them to interact
          with my smart contract and initiate a transaction. If the transaction
          is successful, the owner of the smart contract will receive
          transaction fees. Once the transaction is approved and added to the
          chain, it will be recorded as a successful trade on the decentralized
          exchange.
        </p>

        <p>
          For this project, I used a combination of technologies to create a
          decentralized exchange. To begin with, I used Solidity for writing the
          smart contract, which is the backbone of any decentralized
          application. Hardhat was used to test and run scripts, and deploy the
          smart contract.
        </p>

        <p>
          For the front-end, I used React and Tailwind. React is a popular
          framework for building user interfaces, while Tailwind is a CSS
          framework that provides pre-built components and styling options. To
          manage the state of the application, I used Redux, which is a
          predictable state container for JavaScript apps.
        </p>

        <p>
          In order to connect the application to the Ethereum blockchain, I
          utilized Ethers.js. This technology provides a simple and easy-to-use
          interface for interacting with the blockchain, making it possible for
          users to connect their wallets and execute transactions. With this
          setup, users can easily connect to the decentralized exchange and
          start trading, while the owner of the smart contract can receive
          transaction fees for their contribution to the network.
        </p>
      </div>

      <div className="flex flex-col gap-5 text-neutral-400 font-light">
        <h3 className="text-white">How I lost 2 days building my project</h3>
        <p>
          The technical difficulty that I faced was integrating the OpenZeppelin
          library to build an ERC-20 token for my project. As my application
          involved trading tokens, I needed an ERC-20 token to facilitate this.
          I thought using the OpenZeppelin library would be a quick and easy
          solution, but I faced several challenges while integrating it. I spent
          a lot of time trying to figure out why my tests were not working, and
          after spending a considerable amount of time on it, I decided to
          create my own ERC-20 token instead. Although this required more work
          and effort, I ultimately saved time by avoiding the troubleshooting
          and integration issues I was facing with the library. By creating my
          own ERC-20 token, I had more control over the code and could tailor it
          to my specific project needs. This experience taught me that sometimes
          it’s better to build something from scratch instead of relying on
          pre-built solutions, especially when working with new technologies.
        </p>
      </div>

      <div className="flex flex-col gap-5 text-neutral-400 font-light">
        <h3 className="text-white">What have I learn?</h3>

        <p>
          During the process of building my decentralized exchange, I have
          gained a lot of technical knowledge that has helped me improve my
          skills as a web3 developer. The most significant takeaway for me was
          the importance of understanding web3 development before diving into
          the project. Had I not learned it beforehand, I would have faced
          numerous difficulties in building this project.
        </p>

        <p>
          Furthermore, I learned that using Hardhat as a development environment
          is a better choice than Truffle. Hardhat comes with all the necessary
          tools and has a well-documented guide. Additionally, Hardhat comes
          with Ethers.js, which I found easier to work with than Truffle’s
          Web3.js.
        </p>

        <p>
          As I progressed with the project, I also discovered the importance of
          time management. I had to prioritize the most critical tasks first to
          ensure that the project could meet its deadlines. Once the essential
          tasks were completed, I could then add additional features to the
          project.
        </p>

        <p>
          Through this experience, I also learned more about myself as an
          engineer. I discovered that I enjoy taking on challenging projects
          that push me out of my comfort zone. I enjoy the problem-solving
          aspect of programming and take pride in overcoming technical
          difficulties.
        </p>

        <p>
          In terms of my engineering path in the future, this project has helped
          me gain valuable knowledge in web3 development, and I plan to use this
          knowledge to continue building more decentralized applications.
        </p>

        <p>
          Finally, this project confirmed my belief that preparation is critical
          in any project. Learning the necessary skills before starting the
          project helps to prevent setbacks and allows for a smoother
          development process.
        </p>
      </div>

      <div className="flex flex-col gap-5 text-neutral-400 font-light">
        <h3 className="text-white">Conclusion</h3>
        <p>
          In conclusion, building a decentralized exchange has been an exciting
          and challenging experience. From researching and selecting the right
          technologies to overcoming technical obstacles and managing time, the
          project has taught me valuable skills and strengthened my passion for
          web3 development. I am proud of what I have accomplished and look
          forward to continuing to learn and grow as an engineer. With each
          project, I gain a deeper understanding of the importance of being
          adaptable and open to learning new things. I am excited to see where
          my engineering path will take me in the future and am committed to
          always pushing myself to be a better developer.
        </p>
      </div>

      <div className="text-neutral-400 flex flex-col gap-4">
        <h3 className="text-white">Links:</h3>
        <p className="font-light">
          <span className="">Demo: </span>
          <a
            href="https://www.youtube.com/watch?v=AAGJ_j0sJcs&t=108s&ab_channel=6nehemie"
            target="_blank"
            className="underline"
          >
            Youtube
          </a>
        </p>

        <p className="font-light">
          <span className="">Project repository: </span>
          <a
            href="https://github.com/NehemieMbg/emerys_web3_dex"
            target="_blank"
            className="underline"
          >
            Github
          </a>
        </p>
      </div>
    </section>
  );
};
export default page;

import { Suspense } from 'react';
import Parser from 'rss-parser';
import ViewCounter from './blog/view-counter';
import { PreloadResources } from './preload';
import Link from 'next/link';
import Image from 'next/image';
import smashing from '../public/images/home/smashingbtc.jpg';
import summit from '../public/images/home/summit.jpg';
import websummit from '../public/images/home/websummit.jpg';
import mydp from '../public/images/home/mydp.jpg';
import filmings from '../public/images/home/filmings.jpg';
import meetups from '../public/images/home/meetup.jpg';
import vercel from '../public/images/home/github.jpg';
import twitter from '../public/images/home/twitter.jpg';
import sunvigo from '../public/images/home/sunvigo.png';
import avatar from 'app/avatar.jpg';

function Badge(props) {
  return (
    <a
      {...props}
      target="_blank"
      className="inline-flex items-center rounded border border-neutral-200 bg-neutral-50 p-1 text-sm leading-4 text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100"
    />
  );
}

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  );
}
function ChannelLink({ img, link, name }) {
  return (
    <div className="group flex w-full">
      <a
        href={link}
        target="_blank"
        className="flex w-full items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800"
      >
        <div className="flex items-center space-x-3">
          <div className="relative h-16">
            <Image
              alt={name}
              src={img}
              height={64}
              width={64}
              sizes="33vw"
              className="h-16 w-16 rounded-full border border-neutral-200 dark:border-neutral-700"
              priority
            />
            {/* <div className="relative -right-10 -top-6 inline-flex h-6 w-6 items-center rounded-full border border-neutral-200 bg-white p-1 dark:border-neutral-700">
              <svg width="15" height="11" role="img" aria-label="my dp">
                <use href="/public/images/home/mydp.jpg" />
              </svg>
            </div> */}
          </div>
          <div className="flex flex-col">
            <p className="font-medium text-neutral-900 dark:text-neutral-100">
              {name}
            </p>
          </div>
        </div>
        <div className="transform text-neutral-700 transition-transform duration-300 group-hover:-rotate-12 dark:text-neutral-300">
          <ArrowIcon />
        </div>
      </a>
    </div>
  );
}

export default function Page({posts}) {
  return (
    <section>
    <PreloadResources />
    <h1 className="mb-8 text-2xl font-medium tracking-tighter">
      hey, I'm Hussnain 👋
    </h1>
    <p className="prose prose-neutral dark:prose-invert">
      {`I'm a Full Stack Developer with a focus on Frontend. I currently work`}
      {/* <Link href="/work">work</Link> */}
      {` at `}
      <span className="not-prose">
      <Badge href="#">
        <img
          alt="Next.js logomark"
          src="/sunvigo.png"
          className="!mr-1"
          width="14"
          height="14"
        />
        Sunvigo
      </Badge>
      </span>
      {`, Mostly works with JavaScript, `}
      <Badge href="https://nextjs.org">
        <img
          alt="Next.js logomark"
          src="/next-logo.svg"
          className="!mr-1"
          width="14"
          height="14"
        />
        Next.js
      </Badge>
      {`, and `}
      <Badge href="https://react.dev">
        <svg
          width="14"
          height="14"
          role="img"
          aria-label="React logo"
          className="!mr-1"
        >
          <use href="/sprite.svg#react" />
        </svg>
        React
      </Badge>
      .
    </p>
    {/* <div className="grid grid-cols-2 grid-rows-4 sm:grid-rows-3 sm:grid-cols-3 gap-4 my-8">
      <div className="relative h-40">
        <Image
          alt="Me speaking on stage at React Summit about the future of Next.js"
          src={filmings}
          fill
          sizes="(max-width: 768px) 213px, 33vw"
          priority
          className="rounded-lg object-cover"
        />
      </div>
      <div className="relative sm:row-span-2 row-span-1">
        <Image
          alt="Me at Web Summit Lisbon"
          src={websummit}
          fill
          sizes="(max-width: 768px) 213px, 33vw"
          priority
          className="rounded-lg object-cover object-top sm:object-center"
        />
      </div>
      <div className="relative">
        <Image
          alt="Me and Guillermo Rauch on stage for Vercel Ship, answering questions from the Next.js community"
          src={summit}
          fill
          sizes="(max-width: 768px) 213px, 33vw"
          priority
          className="rounded-lg object-cover"
        />
      </div>
      <div className="relative row-span-2">
        <Image
          alt="Me, Lydia, and Delba filming the Next.js Conf keynote"
          src={mydp}
          fill
          sizes="(max-width: 768px) 213px, 33vw"
          priority
          className="rounded-lg object-cover sm:object-center"
        />
      </div>
      <div className="relative row-span-2">
        <Image
          alt="My badge on top of a pile of badges from a Vercel meetup we held"
          src={meetups}
          fill
          sizes="(max-width: 768px) 213px, 33vw"
          priority
          className="rounded-lg object-cover"
        />
      </div>
      <div className="relative h-40">
        <Image
          alt="Me standing on stage at SmashingConf giving a talk about my optimism for the web"
          src={smashing}
          fill
          sizes="(max-width: 768px) 213px, 33vw"
          priority
          className="rounded-lg object-cover"
        />
      </div>
    </div> */}
    <div className="flex flex-col pt-4"><h2 className="text-lg font-mono tracking-tighter">current stack</h2><div className="space-y-2 py-2"><p><span>10x ⎯ </span><span className="text-muted-foreground">javascript, typescript, react, next, html, css</span></p><p><span>5x ⎯ </span><span className="text-muted-foreground">nodejs, mongodb, supabase</span></p><p><span>1x ⎯ </span><span className="text-muted-foreground">github, aws, docker</span></p></div></div>
    <div className="prose prose-neutral dark:prose-invert">
      <p>
        I create educational content for developers, teaching them about web
        development, JavaScript and TypeScript, React and Next.js, and more.
        This comes in all forms: blog posts, videos, tweets, conference talks,
        and workshops. You can find me on.
      </p>
    </div>
    
    <div className="my-8 flex w-full flex-col space-x-0 space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
      <ChannelLink
        img={twitter}
        name="@codingducky"
        link="https://twitter.com/codingducky"
      />
      <ChannelLink
        img={vercel}
        name="@husnainfareed"
        link="https://github.com/husnainfareed"
      />
    </div>
    <div className="prose prose-neutral dark:prose-invert">
      <p>
        Over the past decade, I've written content on my blog and newsletter.
        I try to keep things simple. You'll find writing about technologies
        I'm interested in at the time, or how I'm learning and growing in my
        career, sharing knowledge along the way.
      </p>
    </div>
    <div className="my-8 flex w-full flex-col space-y-4">
    
      {/* <BlogLink
        name="What Makes A Great Developer Experience?"
        slug="developer-experience"
      />
      <BlogLink name="What is Developer Relations?" slug="devrel" />
      <BlogLink name="The Story of Heroku" slug="heroku" /> */}
    </div>
    {/* <div className="prose prose-neutral dark:prose-invert">
      <p>
        I invest small angel checks into early stage startups building tools
        for developers.
      </p>
    </div>
    <div className="my-8 flex h-14 w-full flex-row space-x-2 overflow-x-auto">
      <div className="flex items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800">
        <a href="https://linear.app">
          <svg width="78" height="20" role="img" aria-label="Linear logo">
            <use href="/sprite.svg#linear" />
          </svg>
        </a>
      </div>
      <div className="flex items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800">
        <a href="https://supabase.com">
          <svg width="100" height="19" role="img" aria-label="Supabase logo">
            <use href="/sprite.svg#supabase" />
          </svg>
        </a>
      </div>
      <div className="flex items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800">
        <a href="https://www.makeswift.com/blog/makeswift-is-joining-bigcommerce">
          <svg width="96" height="19" role="img" aria-label="Makeswift logo">
            <use href="/sprite.svg#makeswift" />
          </svg>
        </a>
      </div>
      <div className="flex items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800">
        <a href="https://resend.com">
          <svg width="70" height="17" role="img" aria-label="Resend logo">
            <use href="/sprite.svg#resend" />
          </svg>
        </a>
      </div>
      <div className="flex items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800">
        <a href="https://bun.sh">
          <svg width="35" height="27" role="img" aria-label="Bun logo">
            <use href="/sprite.svg#bun" />
          </svg>
        </a>
      </div>
    </div> */}
    <div className="prose prose-neutral dark:prose-invert">
      <p>
        I've worked with and advised companies on{' '}
        <Link href="/blog/developer-marketing">developer marketing</Link>,{' '}
        <Link href="/blog/devrel">developer relations</Link>, building
        open-source communities, product-led growth, and more.
      </p>
    </div>
    <ul className="font-sm mt-8 flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
      <li>
        <a
          className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
          rel="noopener noreferrer"
          target="_blank"
          href="https://twitter.com/leeerob"
        >
          <ArrowIcon />
          <p className="ml-2 h-7">follow me</p>
        </a>
      </li>
      <li>
        <a
          className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
          rel="noopener noreferrer"
          target="_blank"
          href="https://leerob.substack.com"
        >
          <ArrowIcon />
          <p className="ml-2 h-7">get email updates</p>
        </a>
      </li>
    </ul>
  </section>
  );
}

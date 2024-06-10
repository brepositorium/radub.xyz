---
layout: default
---

<div class="bio text-lg my-8 px-4 w-full md:w-9/12 xl:w-9/12 text-white">
    <div class="flex justify-center gap-2 mb-4">
        <a href="https://twitter.com/radubxyz" target="_blank"><img src="/assets/images/x-icon.svg"/></a>
        <a href="https://github.com/brepositorium" target="_blank"><img src="/assets/images/github-icon.svg"/></a>
        <a href="https://www.linkedin.com/in/radumihaibulimac/" target="_blank"><img src="/assets/images/linkedin-icon.svg"/></a>
    </div>
        <p class="font-poppins">Full-stack web developer who loves building user-friendly web apps using a variety of tools. My adventure started in the world of Java and Spring, but that was just the beginning. Since then, I've gotten my hands dirty with many other tools from React and Angular to NextJS and Firebase. Lately, I've been diving into Blockchain and AI. I love engineering as a whole and building stuff is what drives me.</p>
</div>

<div class="tabs flex justify-center w-full relative">
    <div class="tab text-white cursor-pointer px-4 py-2 basis-1/3 md:basis-3/12 text-center rounded-xl relative overflow-hidden active font-bold" onclick="showTab('experience')">
        EXPERIENCE
        <div class="tab-indicator bg-gradient-to-t from-yellow-600 absolute bottom-0 left-0 "></div>
    </div>
    <div class="tab text-white cursor-pointer px-4 py-2 basis-1/3 md:basis-3/12 text-center rounded-xl relative overflow-hidden" onclick="showTab('projects')">
        PROJECTS
        <div class="tab-indicator bg-gradient-to-t from-yellow-600 absolute bottom-0 left-0 "></div>
    </div>
    <div class="tab text-white cursor-pointer px-4 py-2 basis-1/3 md:basis-3/12 text-center rounded-xl relative overflow-hidden" onclick="showTab('articles')">
        ARTICLES
        <div class="tab-indicator bg-gradient-to-t from-yellow-600 absolute bottom-0 left-0"></div>
    </div>
</div>

<div id="tab-content" class="text-white">
    <div id="experience" class="active p-6 xl:mx-40">
        <div class="bg-gradient-to-r from-yellow-600 px-4 rounded text-white font-bold text-xl md:text-2xl">
            PROFESSIONAL EXPERIENCE
        </div>
            <section class="mt-4">
                <h3 class="text-lg md:text-xl font-semibold mb-2">Oct 2022 - Present: <span class="text-stone-400">Associate Software Engineer | Tremend Software Consulting | Bucharest, ROU</span></h3>
                <ul class="list-disc list-inside space-y-2 pl-8 font-poppins">
                    <li>Developed a critical module within the web application of Romania's largest telecom provider, using Spring, Java, and JSP. This module enables batch imports of user data from CSV files into the application's database, facilitating seamless account management and operations.</li>
                    <li>Built from the ground up and launched a web application for a foreign government, focusing on maintainable code and efficient microservices architecture using Spring, GraphQL, and Camunda.</li>
                    <li>Led the redesign of a critical feedback module, improving usability and functionality using Angular 11 and Spring, adhering to best practices for code quality and security.</li>
                    <li>Contributed to team knowledge sharing by providing guidance on clean code practices and effective use of Jenkins for CI/CD.</li>
                </ul>
            </section>
            <section class="mt-4">
                <h3 class="text-lg md:text-xl font-semibold mb-2">Jul 2022 – Sep 2022: <span class="text-stone-400">Software Engineer Intern | Tremend Software Consulting | Bucharest, ROU</span></h3>
                <ul class="list-disc list-inside space-y-2">
                </ul>
            </section>
        <div class="bg-gradient-to-r from-yellow-600 px-4 rounded text-white font-bold text-xl md:text-2xl mt-4">
            ACHIEVEMENTS
        </div>
            <section class="mt-4">
                <ul class="list-disc list-inside space-y-2 pl-8 font-poppins">
                    <li>Obtained the <span class="font-bold text-stone-400">AWS Certified Cloud Practitioner CLF-02</span> certification</li>
                    <li>Participated in the <span class="font-bold text-stone-400">BlockMagic Hackhaton 2024 organized by Chainlink</span>, developing a Web3 application for event organizers using smart contracts written in Solidity, Hardhat, NextJS, React, Firebase and Chainlink Functions</li>
                    <li>Participated in the <span class="font-bold text-stone-400">Onchain Summer Buildathon organized by Base</span>, implementing the Coinbase Smart Wallet, Paymaster and Verification into my app</li>
                </ul>
            </section>
        <div class="bg-gradient-to-r from-yellow-600 px-4 rounded text-white font-bold text-xl md:text-2xl mt-4">
            SKILLS
        </div>
            <div class="skills-grid mt-8">
                <h2 class="text-2xl font-bold mb-2">Technical Skills</h2>
                <div class="skills-row grid grid-cols-1 md:grid-cols-3 gap-2 mt-2 font-poppins">
                    <div class="skill-category col-span-1 font-semibold">Backend Development:</div>
                    <div class="skill-list col-span-2">Java 8+, Spring Framework, Hibernate, SQL, GraphQL, JUnit, RabbitMQ, Firebase, MongoDB, Camunda</div>
                </div>
                <div class="skills-row grid grid-cols-1 md:grid-cols-3 gap-2 mt-2 font-poppins">
                    <div class="skill-category col-span-1 font-semibold">Frontend Development:</div>
                    <div class="skill-list col-span-2">Angular 11, React, JavaScript, TypeScript, NextJS, Tailwind CSS, Hugo, Jekyll</div>
                </div>
                <div class="skills-row grid grid-cols-1 md:grid-cols-3 gap-2 mt-2 font-poppins">
                    <div class="skill-category col-span-1 font-semibold">Web3 / Blockchain:</div>
                    <div class="skill-list col-span-2">Solidity, Hardhat, TheGraph</div>
                </div>
                <div class="skills-row grid grid-cols-1 md:grid-cols-3 gap-2 mt-2 font-poppins">
                    <div class="skill-category col-span-1 font-semibold">Cloud & DevOps:</div>
                    <div class="skill-list col-span-2">AWS Lambda Functions, AWS S3, AWS RDS, Docker, Kubernetes</div>
                </div>
                <div class="skills-row grid grid-cols-1 md:grid-cols-3 gap-2 mt-2 font-poppins">
                    <div class="skill-category col-span-1 font-semibold">General Programming & Theoretical Notions:</div>
                    <div class="skill-list col-span-2">Git, Unit Testing, SOLID and ACID Standards, Design Patterns, Microservices Architecture</div>
                </div>
                <div class="skills-row grid grid-cols-1 md:grid-cols-3 gap-2 mt-2 font-poppins">
                    <div class="skill-category col-span-1 font-semibold">Scripting & Automation:</div>
                    <div class="skill-list col-span-2">Python, Arduino, Go</div>
                </div>
                <h2 class="text-2xl font-bold mb-2 mt-2">Languages</h2>
                <ul class="font-poppins">
                    <li>Romanian (native)</li>
                    <li>English (fluent)</li>
                    <li>Italian and German (conversational)</li>
                </ul>
            </div>
        <div class="bg-gradient-to-r from-yellow-600 px-4 rounded text-white font-bold text-xl md:text-2xl mt-4">
            EDUCATION
        </div>
            <section class="mt-4">
                <h3 class="text-lg md:text-xl font-semibold mb-2">June 2024 <span class="text-stone-400">Master of Business Management</span></h3>
                <p class="font-poppins">Universitatea POLITEHNICA din Bucuresti, Bucharest, Romania</p>
            </section>
            <section class="mt-4">
                <h3 class="text-lg md:text-xl font-semibold mb-2">June 2022 <span class="text-stone-400">Bachelor of Electrical Engineering</span></h3>
                <p class="font-poppins">Universitatea POLITEHNICA din Bucuresti, Bucharest, Romania</p>
            </section>
    </div>
    <div id="projects" class='hidden'>
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-4">
        {% for project in site.posts %}
            {% include card.html title=project.title date=project.date author=project.author description=project.description link=project.url %}
        {% endfor %}
        </div>
    </div>
    <div id="articles" class='hidden'>
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-4">
        {% for article in site.data.articles %}
            {% include card.html title=article.title image=article.image alt=article.alt description=article.description link=article.link %}
        {% endfor %}
        </div>
    </div>

</div>

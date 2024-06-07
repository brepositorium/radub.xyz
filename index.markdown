---
layout: default
---

<div class="bio text-lg my-5 px-4 w-full md:w-9/12 xl:w-9/12 text-white">
    <p>Dedicated and proficient Java
Backend Developer specializing in
developing robust and scalable
solutions. Demonstrated ability in
adhering to industry standards and
principles of code cleanliness. Adept
at crafting well-tested code, and
possessing excellent
communication and team
collaboration skills.</p>
</div>

<div class="tabs flex justify-center w-full relative">
    <div class="tab text-white cursor-pointer px-4 py-2 basis-1/3 md:basis-3/12 text-center rounded-xl relative overflow-hidden active font-bold" onclick="showTab('experience')"> <!-- Add 'active' here -->
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

<div id="tab-content" class="mt-5 text-white">
    <div id="experience" class="active p-6 mx-40">
    <div class="bg-gradient-to-r from-yellow-600 px-4 rounded text-white font-bold text-2xl">
        PROFESSIONAL EXPERIENCE
    </div>
    <section class="mt-4">
        <h3 class="text-xl font-semibold mb-2">Oct 2022 - Present: <span class="text-stone-400">Associate Software Engineer | Tremend Software Consulting | Bucharest, ROU</span></h3>
        <ul class="list-disc list-inside space-y-2 pl-8">
            <li>Developed a critical module within the web application of Romania's largest telecom provider, using Spring, Java, and JSP. This module enables batch imports of user data from CSV files into the application's database, facilitating seamless account management and operations.</li>
            <li>Built from the ground up and launched a web application for a foreign government, focusing on maintainable code and efficient microservices architecture using Spring, GraphQL, and Camunda.</li>
            <li>Led the redesign of a critical feedback module, improving usability and functionality using Angular 11 and Spring, adhering to best practices for code quality and security.</li>
            <li>Contributed to team knowledge sharing by providing guidance on clean code practices and effective use of Jenkins for CI/CD.</li>
        </ul>
    </section>
    <section class="mt-4">
        <h3 class="text-xl font-semibold mb-2">Jul 2022 – Sep 2022: <span class="text-stone-400">Software Engineer Intern | Tremend Software Consulting | Bucharest, ROU</span></h3>
        <ul class="list-disc list-inside space-y-2">
            <!-- List specific responsibilities and achievements during the internship -->
        </ul>
    </section>
    <div class="bg-gradient-to-r from-yellow-600 px-4 rounded text-white font-bold text-2xl">
        EDUCATION
    </div>
    <section class="mt-4">
        <h3 class="text-xl font-semibold mb-2">June 2024 <span class="text-stone-400">Master of Business Management</span></h3>
        <p>Universitatea POLITEHNICA din Bucuresti, Bucharest, Romania</p>
    </section>
    <section class="mt-4">
        <h3 class="text-xl font-semibold mb-2">June 2022 <span class="text-stone-400">Bachelor of Electrical Engineering</span></h3>
        <p>Universitatea POLITEHNICA din Bucuresti, Bucharest, Romania</p>
    </section>
</div>

    <div id="projects" class='hidden'>
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {% for project in site.data.projects %}
            {% include card.html title=project.title image=project.image alt=project.alt description=project.description link=project.link %}
        {% endfor %}
        </div>
    </div>
    <div id="articles" class='hidden'>
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {% for article in site.data.articles %}
            {% include card.html title=article.title image=article.image alt=article.alt description=article.description link=article.link %}
        {% endfor %}
        </div>
    </div>

</div>

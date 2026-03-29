---
layout: page
title: Projects
permalink: /projects/
---

<!-- Rename the section content / references to projects or abstract the logic to be reused throughout the website.  

Probably makes sense to strip out the specific names for now and use a common prefix instead. -->

<style>
.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: center;
  margin-bottom: 2rem;
}
.about-content {
  display: flex;
  flex-direction: column;
}
.about-title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
}
.about-desc {
  font-size: 1.1rem;
}
.about-photo {
  max-width: 100%;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
}
@media (max-width: 700px) {
  .about-grid {
    grid-template-columns: 1fr;
    text-align: center;
  }
  .about-content {
    order: 1;
  }
  .about-title {
    margin-top: 1rem;
    margin-bottom: 1rem;
    order: 1;
  }
  .about-photo {
    order: 2;
    margin-bottom: 1rem;
  }
  .about-desc {
    order: 3;
  }
}
</style>

<div class="about-grid">
  <div class="about-content">
    <div class="about-title">Backend Game Server</div>
    <div class="about-desc">
      A JAVA backend server written as proof of concept to supply authentication, authorisation and session handling for game agnostic purposes.  Still a WIP.
    </div>
  </div>
  <div>
    <img class="about-photo" src="/assets/images/projects/backend-java.jpg" alt="Husband and Father">
  </div>
  <!-- TODO: Too add a github project link for backend-java.git -->
</div>

<div class="about-grid">
  <div class="about-content">
    <div class="about-title">Unity Cultivation</div>
    <div class="about-desc">
      A closed source project on Unity to bring to life inner Wuxia style cultivation.  Still in prototyping phase, started late 2023.
    </div>
  </div>
  <div>
    <img class="about-photo" src="/assets/images/engineer.jpg" alt="Engineer">
  </div>
  <!-- TODO: Include additional GIF graphics demonstrating the nodes passing through the tree and the cultivation cors growing and shrinking -->
</div>

<div class="about-grid">
  <div class="about-content">
    <div class="about-title">Compiler</div>
    <div class="about-desc">
      A university project which aimed to build a simple compiler.  This consists of a lexer and simple parser.
    </div>
  </div>
  <div>
    <img class="about-photo" src="/assets/images/biker.jpg" alt="Biker">
  </div>
</div>

<div class="about-grid">
  <div class="about-content">
    <div class="about-title">Graphical and Physics Engine</div>
    <div class="about-desc">
      Another University project written in JS.  The aim was to build graphics and simple physics from near bare-metal.  OpenGL and HTML canvas was being leveraged for this purpose.
    </div>
  </div>
  <div>
    <img class="about-photo" src="/assets/images/clown.jpg" alt="Clown">
  </div>

<div class="about-grid">
  <div class="about-content">
    <div class="about-title">Graphical and Physics Engine</div>
    <div class="about-desc">
      Another University project written in JS.  The aim was to build graphics and simple physics from near bare-metal.  OpenGL and HTML canvas was being leveraged for this purpose.
    </div>
  </div>
  <div>
    <img class="about-photo" src="/assets/images/clown.jpg" alt="Clown">
  </div>

<div class="about-grid">
  <div class="about-content">
    <div class="about-title">Raytracer</div>
    <div class="about-desc">
      Raytrace image creation written in C, able to process generic scene formats.  Likely requires a revisit and proper documentation.
    </div>
  </div>
  <div>
    <img class="about-photo" src="/assets/images/clown.jpg" alt="Clown">
  </div>
  <!-- TODO: Generate and include some example images, after possibly solving any pending issues -->
</div>
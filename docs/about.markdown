---
layout: page
title: About
permalink: /about/
---

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
    <div class="about-title">Husband and Father</div>
    <div class="about-desc">
      Broke, busy, tired and always at fault.  I'll leave the cause and effect mapping up to you.
    </div>
  </div>
  <div>
    <img class="about-photo" src="/assets/images/family.jpg" alt="Husband and Father">
  </div>
</div>

<div class="about-grid">
  <div class="about-content">
    <div class="about-title">Engineer</div>
    <div class="about-desc">
      Backend - Game Servers, Data Ingestion, Cloud Integration
      Game Dev - Mobile droid and iOS, Motion Platforms, PC and Switch. Mostly Unity
    </div>
  </div>
  <div>
    <img class="about-photo" src="/assets/images/engineer.jpg" alt="Engineer">
  </div>
</div>

<div class="about-grid">
  <div class="about-content">
    <div class="about-title">Biker</div>
    <div class="about-desc">
      Kawa ER Naked 650cc 2015 owner.  Daily rider and infrequent overland tourist.  Seek good leans, at slower speeds.
    </div>
  </div>
  <div>
    <img class="about-photo" src="/assets/images/biker.jpg" alt="Biker">
  </div>
</div>

<div class="about-grid">
  <div class="about-content">
    <div class="about-title">Clown</div>
    <div class="about-desc">
      Self graduated in general buffoonery.  No photos to present as evidence, but it doesn't take much to convert me into an ambassador of total chaos.
    </div>
  </div>
  <div>
    <img class="about-photo" src="/assets/images/clown.jpg" alt="Clown">
  </div>
</div>
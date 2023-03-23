<template>
  <section class="container">
    <div>
      <h2 class="about-title"><span>M</span>y <span>S</span>kills</h2>
      <LineHeader />
      <div class="skill-icon-container">
        <Skill :tooltipText="'React.js'">
          <React />
        </Skill>
        <Skill :tooltipText="'Vue.js'">
          <Vue />
        </Skill>
        <!-- <Skill :tooltipText="'Nuxt.js'">
          <Nuxt />
        </Skill> -->
        <Skill :tooltipText="'TypeScript'">
          <Typescript />
        </Skill>
        <Skill :tooltipText="'JavaScript'">
          <Javascript />
        </Skill>
        <Skill :tooltipText="'Java'">
          <Java />
        </Skill>
        <Skill :tooltipText="'Swift'">
          <Swift />
        </Skill>
        <Skill :tooltipText="'Python'">
          <Python />
        </Skill>
        <Skill :tooltipText="'Django'">
          <Django />
        </Skill>
        <!-- <Skill :tooltipText="'PostgreSQL'">
          <PostgreSql />
        </Skill> -->
        <Skill :tooltipText="'Node.js'">
          <Node />
        </Skill>
        <Skill :tooltipText="'Firebase'">
          <Firebase />
        </Skill>
        <!-- <Skill :tooltipText="'Graphql'">
          <Graphql />
        </Skill> -->
        <!-- <Skill :tooltipText="'Heroku'">
          <Heroku />
        </Skill> -->
        <Skill :tooltipText="'Jquery'">
          <Jquery />
        </Skill>
        <Skill :tooltipText="'MongoDb'">
          <MongoDb />
        </Skill>
        <!-- <Skill :tooltipText="'Express.js'">
          <Express />
        </Skill> -->
        <Skill :tooltipText="'Sass'">
          <Sass />
        </Skill>
        <Skill :tooltipText="'Tailwind.css'">
          <Tailwind />
        </Skill>
        <!-- <Skill :tooltipText="'Bootstrap.css'">
          <Bootstrap />
        </Skill> -->
        <!-- <Skill :tooltipText="'Css'">
          <Css />
        </Skill>
        <Skill :tooltipText="'Html'">
          <Html />
        </Skill> -->
      </div>
    </div>
  </section>
</template>

<script>
import "../assets/Skills.css";
import LineHeader from "./LineHeader.vue";
import Skill from "./Skill.vue";
import React from "./svg/skills/React.vue";
import Javascript from "./svg/skills/Javascript.vue";
import Typescript from "./svg/skills/Typescript.vue";
import Css from "./svg/skills/Css.vue";
import Html from "./svg/skills/Html.vue";
import Node from "./svg/skills/Node.vue";
import Vue from "./svg/skills/Vue.vue";
import Nuxt from "./svg/skills/Nuxt.vue";
import Python from "./svg/skills/Python.vue";
import Django from "./svg/skills/Django.vue";
import PostgreSql from "./svg/skills/PostgreSql.vue";
import Express from "./svg/skills/Express.vue";
import Firebase from "./svg/skills/Firebase.vue";
import Graphql from "./svg/skills/Graphql.vue";
import Heroku from "./svg/skills/Heroku.vue";
import Jquery from "./svg/skills/Jquery.vue";
import MongoDb from "./svg/skills/MongoDb.vue";
import Tailwind from "./svg/skills/Tailwind.vue";
import Bootstrap from "./svg/skills/Bootstrap.vue";
import Sass from "./svg/skills/Sass.vue";
import Swift from "./svg/skills/Swift.vue";
import Java from "./svg/skills/Java.vue";

export default {
  components: {
    LineHeader,
    Skill,
    React,
    Javascript,
    Typescript,
    Css,
    Html,
    Node,
    Vue,
    Nuxt,
    Python,
    Django,
    PostgreSql,
    Express,
    Firebase,
    Graphql,
    Heroku,
    Jquery,
    MongoDb,
    Tailwind,
    Bootstrap,
    Sass,
    Swift,
    Java
  },
};
</script>

<style></style>

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
        <Skill :tooltipText="'Nuxt.js'">
          <Nuxt />
        </Skill>
        <Skill :tooltipText="'TypeScript'">
          <Typescript />
        </Skill>
        <Skill :tooltipText="'JavaScript'">
          <Javascript />
        </Skill>
        <Skill :tooltipText="'Python'">
          <Python />
        </Skill>
        <Skill :tooltipText="'Django'">
          <Django />
        </Skill>
        <Skill :tooltipText="'PostgreSQL'">
          <PostgreSql />
        </Skill>
        <Skill :tooltipText="'Node.js'">
          <Node />
        </Skill>
        <Skill :tooltipText="'Css'">
          <Css />
        </Skill>
        <Skill :tooltipText="'Html'">
          <Html />
        </Skill>
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
  },
};
</script>

<style></style>

<template lang="pug">
  section#banner-content
    div(class="w-full md:w-2/3 lg:w-2/4 mx-auto md:mx-4")
      div(class="mx-2 mt-20 pb-4 lg:ml-10 sm:mt-64 md:mt-0").heading
        h1(class="pb-0") HELLO!
        h1(class="font-sm") I'M...
          | <br/>
          | JUSTIN BELLERO
        h2(class="p-2")
          | I'm a developer, freelancer, yogi, open-source enthusist,
          | <s>cryptocoin billionare</s>, <s>and seasonal space traveler</s>.
          | Ok, so only the former few are true but perhaps <i>someday</i> they'll all be true.

          details.pr-4
            | I graduated from NYU with a degree in music and used to be a performer,
            | worked in chemical manufacturing for half a decade, spent a little time in the continuing education space,
            | and each opportunity has taught me many things.
            | I spend a lot of time reading technical documentation
            | and researching open-source projects that I like to follow.
            | I am always looking for cool things to work on so if you want to
            | talk tech, need some help or information about a project, or you
            | have a great idea I can make a reality for you, <span class="font-bold">reach out!</span>
            | I’m here and would love to connect.
            summary.text-right.pt-4 ...

      //- Call to Action
      div(class="px-10 md:px-20 lg:px-10")
        nuxt-link(to="/contact" class="float-right w-full bg-white lg:bg-transparent lg:w-auto text-center button") Talk To Me!
      //- End Call to Action
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
section#banner-content {
  padding-top: 85px;

  h1 {
    font-family: 'Open Sans', sans-serif, Arial, Helvetica;
    font-size: 3rem;
    line-height: 60px;
    font-weight: 800;
    color: #111;
    @screen sm {
      font-size: 62px;
    }
  }
  h2 {
    font-family: 'Open Sans', sans-serif, Arial, Helvetica;
    font-size: 18px;
    font-weight: 300;
    color: #111;
    background-color: rgba(238, 238, 238, 0.8);
    @screen md {
      background-color: transparent;
    }
  }

  .button {
    font-family: 'Open Sans', sans-serif, Arial, Helvetica;
    font-size: 16px;
    color: #111;
    border-color: #111;

    &:hover {
      color: #d2b356;
      border-color: #d2b356;
    }
  }

  details {
    &[open] {
      summary {
        &::before {
          content: ' - less';
        }
      }
    }

    summary {
      &:hover {
        cursor: pointer;
      }
      &::before {
        content: ' + more';
      }
      &::-webkit-details-marker {
        display: none;
      }
    }
  }

  .heading {
    &::before {
      background: #d2b356;
      content: '';
      display: block;
      width: 30px;
      height: 5px;
      margin-top: 30px;
    }
    &::after {
      background: #d2b356;
      content: '';
      display: block;
      width: 30px;
      height: 5px;
      margin-top: 30px;
    }
  }
}
</style>

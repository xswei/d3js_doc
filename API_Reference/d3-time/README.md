





<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
  <link rel="dns-prefetch" href="https://assets-cdn.github.com">
  <link rel="dns-prefetch" href="https://avatars0.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars1.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars2.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars3.githubusercontent.com">
  <link rel="dns-prefetch" href="https://github-cloud.s3.amazonaws.com">
  <link rel="dns-prefetch" href="https://user-images.githubusercontent.com/">



  <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/frameworks-63d382b7c748b0ca1b0b8772c6ac07942f39a78775d4716abded6fb8d6d8e544845848ef5f69e923c6e897cace3a187cd55e75ef1f78a58dd410b2e609b6673a.css" integrity="sha512-Y9OCt8dIsMobC4dyxqwHlC85p4d11HFqve1vuNbY5USEWEjvX2npI8bol8rOOhh81V517x94pY3UELLmCbZnOg==" media="all" rel="stylesheet" />
  <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github-f8fdb60cff0b8b931a0fbab9ed7fd288db4ab05af5a99310d6503f0f5650b8332b4ed54c8dab22c027ce351be82acfb34824e9dbbde0ce768fd5ae3477d819c6.css" integrity="sha512-+P22DP8Li5MaD7q57X/SiNtKsFr1qZMQ1lA/D1ZQuDMrTtVMjasiwCfONRvoKs+zSCTp273gznaP1a40d9gZxg==" media="all" rel="stylesheet" />
  
  
  
  

  <meta name="viewport" content="width=device-width">
  
  <title>d3-time/README.md at master · d3/d3-time</title>
  <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
  <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
  <meta property="fb:app_id" content="1401488693436528">

    
    <meta content="https://avatars3.githubusercontent.com/u/1562726?s=400&amp;v=4" property="og:image" /><meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="d3/d3-time" property="og:title" /><meta content="https://github.com/d3/d3-time" property="og:url" /><meta content="d3-time - A calculator for humanity’s peculiar conventions of time." property="og:description" />

  <link rel="assets" href="https://assets-cdn.github.com/">
  <link rel="web-socket" href="wss://live.github.com/_sockets/VjI6MjM0MjAxNjIzOjRmYTIzZjAyNDg4ZWM2YTZjMTkxMGQ2ODk4YmJiMzcyYTVjN2IwYTNjOGJlNDczNTlkZDJiMTk1MDY0ZjQ4YWE=--1f9d9c5ed2ea37ffb5087d37ca15f843d4ae6698">
  <meta name="pjax-timeout" content="1000">
  <link rel="sudo-modal" href="/sessions/sudo_modal">
  <meta name="request-id" content="FC26:1FA0E:11A7EEB:19A1484:5A603F0C" data-pjax-transient>
  

  <meta name="selected-link" value="repo_source" data-pjax-transient>

    <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
  <meta name="google-site-verification" content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA">
  <meta name="google-site-verification" content="GXs5KoUUkNCoaAZn7wPN-t01Pywp9M3sEjnt_3_ZWPc">
    <meta name="google-analytics" content="UA-3769691-2">

<meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="https://collector.githubapp.com/github-external/browser_event" name="octolytics-event-url" /><meta content="FC26:1FA0E:11A7EEB:19A1484:5A603F0C" name="octolytics-dimension-request_id" /><meta content="sea" name="octolytics-dimension-region_edge" /><meta content="iad" name="octolytics-dimension-region_render" /><meta content="16659379" name="octolytics-actor-id" /><meta content="xswei" name="octolytics-actor-login" /><meta content="72a8b786cd27412ba348c71058cf2aed3e8f8772266e5c157980395250fb923d" name="octolytics-actor-hash" />
<meta content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-pjax-transient="true" name="analytics-location" />




  <meta class="js-ga-set" name="dimension1" content="Logged In">


  

      <meta name="hostname" content="github.com">
  <meta name="user-login" content="xswei">

      <meta name="expected-hostname" content="github.com">
    <meta name="js-proxy-site-detection-payload" content="NGE3OGVmZWY3M2M4ZDBhZmQ5MDRkY2IxOWRhYmFlMzVkOTMwYjczNGMyMzZmMTU5MWU4MzI1NTY2NjE2YjQxOXx7InJlbW90ZV9hZGRyZXNzIjoiMjIwLjE4MS4xNzEuMTI1IiwicmVxdWVzdF9pZCI6IkZDMjY6MUZBMEU6MTFBN0VFQjoxOUExNDg0OjVBNjAzRjBDIiwidGltZXN0YW1wIjoxNTE2MjU3MDM4LCJob3N0IjoiZ2l0aHViLmNvbSJ9">

    <meta name="enabled-features" content="UNIVERSE_BANNER,FREE_TRIALS">

  <meta name="html-safe-nonce" content="95ac36701972faaa3306c820d3f61fe703aeac54">

  <meta http-equiv="x-pjax-version" content="c0275ff3857f879afa7c0ef3fbc951b4">
  

      <link href="https://github.com/d3/d3-time/commits/master.atom" rel="alternate" title="Recent Commits to d3-time:master" type="application/atom+xml">

  <meta name="description" content="d3-time - A calculator for humanity’s peculiar conventions of time.">
  <meta name="go-import" content="github.com/d3/d3-time git https://github.com/d3/d3-time.git">

  <meta content="1562726" name="octolytics-dimension-user_id" /><meta content="d3" name="octolytics-dimension-user_login" /><meta content="38002139" name="octolytics-dimension-repository_id" /><meta content="d3/d3-time" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="38002139" name="octolytics-dimension-repository_network_root_id" /><meta content="d3/d3-time" name="octolytics-dimension-repository_network_root_nwo" /><meta content="false" name="octolytics-dimension-repository_explore_github_marketplace_ci_cta_shown" />


    <link rel="canonical" href="https://github.com/d3/d3-time/blob/master/README.md" data-pjax-transient>


  <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">

  <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">

  <link rel="mask-icon" href="https://assets-cdn.github.com/pinned-octocat.svg" color="#000000">
  <link rel="icon" type="image/x-icon" class="js-site-favicon" href="https://assets-cdn.github.com/favicon.ico">

<meta name="theme-color" content="#1e2327">


  <meta name="u2f-support" content="true">

  </head>

  <body class="logged-in env-production page-blob">
    

  <div class="position-relative js-header-wrapper ">
    <a href="#start-of-content" tabindex="1" class="bg-black text-white p-3 show-on-focus js-skip-to-content">Skip to content</a>
    <div id="js-pjax-loader-bar" class="pjax-loader-bar"><div class="progress"></div></div>

    
    
    



        
<header class="Header  f5" role="banner">
  <div class="d-flex px-3 flex-justify-between container-lg">
    <div class="d-flex flex-justify-between">
      <a class="header-logo-invertocat" href="https://github.com/" data-hotkey="g d" aria-label="Homepage" data-ga-click="Header, go to dashboard, icon:logo">
  <svg aria-hidden="true" class="octicon octicon-mark-github" height="32" version="1.1" viewBox="0 0 16 16" width="32"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
</a>


    </div>

    <div class="HeaderMenu d-flex flex-justify-between flex-auto">
      <div class="d-flex">
            <div class="">
              <div class="header-search scoped-search site-scoped-search js-site-search" role="search">
  <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/d3/d3-time/search" class="js-site-search-form" data-scoped-search-url="/d3/d3-time/search" data-unscoped-search-url="/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <label class="form-control header-search-wrapper js-chromeless-input-container">
        <a href="/d3/d3-time/blob/master/README.md" class="header-search-scope no-underline">This repository</a>
      <input type="text"
        class="form-control header-search-input js-site-search-focus js-site-search-field is-clearable"
        data-hotkey="s"
        name="q"
        value=""
        placeholder="Search"
        aria-label="Search this repository"
        data-unscoped-placeholder="Search GitHub"
        data-scoped-placeholder="Search"
        autocapitalize="off">
        <input type="hidden" class="js-site-search-type-field" name="type" >
    </label>
</form></div>

            </div>

          <ul class="d-flex pl-2 flex-items-center text-bold list-style-none" role="navigation">
            <li>
              <a href="/pulls" aria-label="Pull requests you created" class="js-selected-navigation-item HeaderNavlink px-2" data-ga-click="Header, click, Nav menu - item:pulls context:user" data-hotkey="g p" data-selected-links="/pulls /pulls/assigned /pulls/mentioned /pulls">
                Pull requests
</a>            </li>
            <li>
              <a href="/issues" aria-label="Issues you created" class="js-selected-navigation-item HeaderNavlink px-2" data-ga-click="Header, click, Nav menu - item:issues context:user" data-hotkey="g i" data-selected-links="/issues /issues/assigned /issues/mentioned /issues">
                Issues
</a>            </li>
                <li>
                  <a href="/marketplace" class="js-selected-navigation-item HeaderNavlink px-2" data-ga-click="Header, click, Nav menu - item:marketplace context:user" data-selected-links=" /marketplace">
                    Marketplace
</a>                </li>
            <li>
              <a href="/explore" class="js-selected-navigation-item HeaderNavlink px-2" data-ga-click="Header, click, Nav menu - item:explore" data-selected-links="/explore /trending /trending/developers /integrations /integrations/feature/code /integrations/feature/collaborate /integrations/feature/ship showcases showcases_search showcases_landing /explore">
                Explore
</a>            </li>
          </ul>
      </div>

      <div class="d-flex">
        
<ul class="user-nav d-flex flex-items-center list-style-none" id="user-links">
  <li class="dropdown js-menu-container">
    <span class="d-inline-block  px-2">
      

    </span>
  </li>

  <li class="dropdown js-menu-container">
    <details class="dropdown-details details-reset js-dropdown-details d-flex px-2 flex-items-center">
      <summary class="HeaderNavlink"
         aria-label="Create new…"
         data-ga-click="Header, create new, icon:add">
        <svg aria-hidden="true" class="octicon octicon-plus float-left mr-1 mt-1" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 9H7v5H5V9H0V7h5V2h2v5h5z"/></svg>
        <span class="dropdown-caret mt-1"></span>
      </summary>

      <ul class="dropdown-menu dropdown-menu-sw">
        
<a class="dropdown-item" href="/new" data-ga-click="Header, create new repository">
  New repository
</a>

  <a class="dropdown-item" href="/new/import" data-ga-click="Header, import a repository">
    Import repository
  </a>

<a class="dropdown-item" href="https://gist.github.com/" data-ga-click="Header, create new gist">
  New gist
</a>

  <a class="dropdown-item" href="/organizations/new" data-ga-click="Header, create new organization">
    New organization
  </a>



  <div class="dropdown-divider"></div>
  <div class="dropdown-header">
    <span title="d3/d3-time">This repository</span>
  </div>
    <a class="dropdown-item" href="/d3/d3-time/issues/new" data-ga-click="Header, create new issue">
      New issue
    </a>

      </ul>
    </details>
  </li>

  <li class="dropdown js-menu-container">

    <details class="dropdown-details details-reset js-dropdown-details d-flex pl-2 flex-items-center">
      <summary class="HeaderNavlink name mt-1"
        aria-label="View profile and more"
        data-ga-click="Header, show menu, icon:avatar">
        <img alt="@xswei" class="avatar float-left mr-1" src="https://avatars0.githubusercontent.com/u/16659379?s=40&amp;v=4" height="20" width="20">
        <span class="dropdown-caret"></span>
      </summary>

      <ul class="dropdown-menu dropdown-menu-sw">
        <li class="dropdown-header header-nav-current-user css-truncate">
          Signed in as <strong class="css-truncate-target">xswei</strong>
        </li>

        <li class="dropdown-divider"></li>

        <li><a class="dropdown-item" href="/xswei" data-ga-click="Header, go to profile, text:your profile">
          Your profile
        </a></li>
        <li><a class="dropdown-item" href="/xswei?tab=stars" data-ga-click="Header, go to starred repos, text:your stars">
          Your stars
        </a></li>
          <li><a class="dropdown-item" href="https://gist.github.com/" data-ga-click="Header, your gists, text:your gists">Your Gists</a></li>

        <li class="dropdown-divider"></li>

        <li><a class="dropdown-item" href="https://help.github.com" data-ga-click="Header, go to help, text:help">
          Help
        </a></li>

        <li><a class="dropdown-item" href="/settings/profile" data-ga-click="Header, go to settings, icon:settings">
          Settings
        </a></li>

        <li><!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/logout" class="logout-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="SK0zYTmJONoWXkWJh9e0oZW3oCoH/wY65G0h0iAYR1vWy7cUco6MVm0OlwlwRMwR1vtdf18H8PJWGR5wYbBGJQ==" /></div>
          <button type="submit" class="dropdown-item dropdown-signout" data-ga-click="Header, sign out, icon:logout">
            Sign out
          </button>
        </form></li>
      </ul>
    </details>
  </li>
</ul>


        <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/logout" class="sr-only right-0" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="aZBu7+CNrcWrNF7BnWtHkF9dbMck7+4jdh5neNHb3+z39uqaq4oZSdBkjEFq+D8gHBGRknwXGOvEaljakHPekg==" /></div>
          <button type="submit" class="dropdown-item dropdown-signout" data-ga-click="Header, sign out, icon:logout">
            Sign out
          </button>
</form>      </div>
    </div>
  </div>
</header>

      

  </div>

  <div id="start-of-content" class="show-on-focus"></div>

    <div id="js-flash-container">
</div>



  <div role="main" >
        <div itemscope itemtype="http://schema.org/SoftwareSourceCode" class="">
    <div id="js-repo-pjax-container" data-pjax-container >
      




  



  <div class="pagehead repohead instapaper_ignore readability-menu experiment-repo-nav  ">
    <div class="repohead-details-container clearfix container">

      <ul class="pagehead-actions">
  <li>
        <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="CrX8i1hJxEMvOU18uqP9ikiJ1wsLmWmqjJgBw4SteHRnXL+bv4h2BRTmy/bgmWvxyhL6LVVkV5iuYz+Q7/B0Ow==" /></div>      <input class="form-control" id="repository_id" name="repository_id" type="hidden" value="38002139" />

        <div class="select-menu js-menu-container js-select-menu">
          <a href="/d3/d3-time/subscription"
            class="btn btn-sm btn-with-count select-menu-button js-menu-target"
            role="button"
            aria-haspopup="true"
            aria-expanded="false"
            aria-label="Toggle repository notifications menu"
            data-ga-click="Repository, click Watch settings, action:blob#show">
            <span class="js-select-button">
                <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
                Watch
            </span>
          </a>
          <a class="social-count js-social-count"
            href="/d3/d3-time/watchers"
            aria-label="9 users are watching this repository">
            9
          </a>

        <div class="select-menu-modal-holder">
          <div class="select-menu-modal subscription-menu-modal js-menu-content">
            <div class="select-menu-header js-navigation-enable" tabindex="-1">
              <svg aria-label="Close" class="octicon octicon-x js-menu-close" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
              <span class="select-menu-title">Notifications</span>
            </div>

              <div class="select-menu-list js-navigation-container" role="menu">

                <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
                  <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
                  <div class="select-menu-item-text">
                    <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                    <span class="select-menu-item-heading">Not watching</span>
                    <span class="description">Be notified when participating or @mentioned.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
                      Watch
                    </span>
                  </div>
                </div>

                <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                  <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
                  <div class="select-menu-item-text">
                    <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                    <span class="select-menu-item-heading">Watching</span>
                    <span class="description">Be notified of all conversations.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
                        Unwatch
                    </span>
                  </div>
                </div>

                <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                  <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
                  <div class="select-menu-item-text">
                    <input id="do_ignore" name="do" type="radio" value="ignore" />
                    <span class="select-menu-item-heading">Ignoring</span>
                    <span class="description">Never be notified.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg aria-hidden="true" class="octicon octicon-mute" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8 2.81v10.38c0 .67-.81 1-1.28.53L3 10H1c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h2l3.72-3.72C7.19 1.81 8 2.14 8 2.81zm7.53 3.22l-1.06-1.06-1.97 1.97-1.97-1.97-1.06 1.06L11.44 8 9.47 9.97l1.06 1.06 1.97-1.97 1.97 1.97 1.06-1.06L13.56 8l1.97-1.97z"/></svg>
                        Stop ignoring
                    </span>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
</form>
  </li>

  <li>
    
  <div class="js-toggler-container js-social-container starring-container ">
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/d3/d3-time/unstar" class="starred js-social-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="ZK57U8CXDYSJ6YUZwhBGTB+ObYErdi4GunsjBv/sARH/uofDqD3sAgLF3deCiQBJKLtPk3E2D4Jp23jjzyy+hA==" /></div>
      <input type="hidden" name="context" value="repository"></input>
      <button
        type="submit"
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Unstar this repository" title="Unstar d3/d3-time"
        data-ga-click="Repository, click unstar button, action:blob#show; text:Unstar">
        <svg aria-hidden="true" class="octicon octicon-star" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"/></svg>
        Unstar
      </button>
        <a class="social-count js-social-count" href="/d3/d3-time/stargazers"
           aria-label="116 users starred this repository">
          116
        </a>
</form>
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/d3/d3-time/star" class="unstarred js-social-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="T4K4DVqUJhSAfxJrWonqvOXDD0usCM7RWfrhoN87gQi9i3ZZ+VsheBh3KTlZQr6e77sXJK+4BJI3qGRXuAQgIQ==" /></div>
      <input type="hidden" name="context" value="repository"></input>
      <button
        type="submit"
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Star this repository" title="Star d3/d3-time"
        data-ga-click="Repository, click star button, action:blob#show; text:Star">
        <svg aria-hidden="true" class="octicon octicon-star" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"/></svg>
        Star
      </button>
        <a class="social-count js-social-count" href="/d3/d3-time/stargazers"
           aria-label="116 users starred this repository">
          116
        </a>
</form>  </div>

  </li>

  <li>
          <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/d3/d3-time/fork" class="btn-with-count" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="U/GpmOvnC6+XecLQqoQ/4h3VKRT/p6vovekUGhxMVdDWNTbN2+p0FFbUXgvEP0j8GjyO0l0e+UOS9qvzOm4xdA==" /></div>
            <button
                type="submit"
                class="btn btn-sm btn-with-count"
                data-ga-click="Repository, show fork modal, action:blob#show; text:Fork"
                title="Fork your own copy of d3/d3-time to your account"
                aria-label="Fork your own copy of d3/d3-time to your account">
              <svg aria-hidden="true" class="octicon octicon-repo-forked" height="16" version="1.1" viewBox="0 0 10 16" width="10"><path fill-rule="evenodd" d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
              Fork
            </button>
</form>
    <a href="/d3/d3-time/network" class="social-count"
       aria-label="24 users forked this repository">
      24
    </a>
  </li>
</ul>

      <h1 class="public ">
  <svg aria-hidden="true" class="octicon octicon-repo" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
  <span class="author" itemprop="author"><a href="/d3" class="url fn" rel="author">d3</a></span><!--
--><span class="path-divider">/</span><!--
--><strong itemprop="name"><a href="/d3/d3-time" data-pjax="#js-repo-pjax-container">d3-time</a></strong>

</h1>

    </div>
    
<nav class="reponav js-repo-nav js-sidenav-container-pjax container"
     itemscope
     itemtype="http://schema.org/BreadcrumbList"
     role="navigation"
     data-pjax="#js-repo-pjax-container">

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/d3/d3-time" class="js-selected-navigation-item selected reponav-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches repo_packages /d3/d3-time" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-code" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z"/></svg>
      <span itemprop="name">Code</span>
      <meta itemprop="position" content="1">
</a>  </span>

    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a href="/d3/d3-time/issues" class="js-selected-navigation-item reponav-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /d3/d3-time/issues" itemprop="url">
        <svg aria-hidden="true" class="octicon octicon-issue-opened" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"/></svg>
        <span itemprop="name">Issues</span>
        <span class="Counter">1</span>
        <meta itemprop="position" content="2">
</a>    </span>

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/d3/d3-time/pulls" class="js-selected-navigation-item reponav-item" data-hotkey="g p" data-selected-links="repo_pulls /d3/d3-time/pulls" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-git-pull-request" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M11 11.28V5c-.03-.78-.34-1.47-.94-2.06C9.46 2.35 8.78 2.03 8 2H7V0L4 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0 0 10 15a1.993 1.993 0 0 0 1-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zM4 3c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v6.56A1.993 1.993 0 0 0 2 15a1.993 1.993 0 0 0 1-3.72V4.72c.59-.34 1-.98 1-1.72zm-.8 10c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
      <span itemprop="name">Pull requests</span>
      <span class="Counter">1</span>
      <meta itemprop="position" content="3">
</a>  </span>




  <a href="/d3/d3-time/pulse" class="js-selected-navigation-item reponav-item" data-selected-links="repo_graphs repo_contributors dependency_graph pulse /d3/d3-time/pulse">
    <svg aria-hidden="true" class="octicon octicon-graph" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M16 14v1H0V0h1v14h15zM5 13H3V8h2v5zm4 0H7V3h2v10zm4 0h-2V6h2v7z"/></svg>
    Insights
</a>

</nav>


  </div>

<div class="container new-discussion-timeline experiment-repo-nav ">
  <div class="repository-content ">

    
  <a href="/d3/d3-time/blob/b898f28b50d76cc432df3f356cac5b73e7be3d69/README.md" class="d-none js-permalink-shortcut" data-hotkey="y">Permalink</a>

  <!-- blob contrib key: blob_contributors:v21:0245aa647b8f72d7dda2370afa2e7de2 -->

  <div class="file-navigation js-zeroclipboard-container">
    
<div class="select-menu branch-select-menu js-menu-container js-select-menu float-left">
  <button class=" btn btn-sm select-menu-button js-menu-target css-truncate" data-hotkey="w"
    
    type="button" aria-label="Switch branches or tags" aria-expanded="false" aria-haspopup="true">
      <i>Branch:</i>
      <span class="js-select-button css-truncate-target">master</span>
  </button>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax>

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <svg aria-label="Close" class="octicon octicon-x js-menu-close" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
        <span class="select-menu-title">Switch branches/tags</span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="form-control js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" data-filter-placeholder="Filter branches/tags" class="js-select-menu-tab" role="tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab" role="tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches" role="menu">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/d3/d3-time/blob/fix-dst/README.md"
               data-name="fix-dst"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                fix-dst
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/d3/d3-time/blob/master/README.md"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                master
              </span>
            </a>
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-time/tree/v1.0.8/README.md"
              data-name="v1.0.8"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.8">
                v1.0.8
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-time/tree/v1.0.7/README.md"
              data-name="v1.0.7"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.7">
                v1.0.7
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-time/tree/v1.0.6/README.md"
              data-name="v1.0.6"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.6">
                v1.0.6
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-time/tree/v1.0.5/README.md"
              data-name="v1.0.5"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.5">
                v1.0.5
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-time/tree/v1.0.4/README.md"
              data-name="v1.0.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.4">
                v1.0.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-time/tree/v1.0.3/README.md"
              data-name="v1.0.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.3">
                v1.0.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-time/tree/v1.0.2/README.md"
              data-name="v1.0.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.2">
                v1.0.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-time/tree/v1.0.1/README.md"
              data-name="v1.0.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.1">
                v1.0.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-time/tree/v1.0.0/README.md"
              data-name="v1.0.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.0">
                v1.0.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-time/tree/v0.3.2/README.md"
              data-name="v0.3.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.3.2">
                v0.3.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-time/tree/v0.3.1/README.md"
              data-name="v0.3.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.3.1">
                v0.3.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-time/tree/v0.3.0/README.md"
              data-name="v0.3.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.3.0">
                v0.3.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-time/tree/v0.2.6/README.md"
              data-name="v0.2.6"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.2.6">
                v0.2.6
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-time/tree/v0.2.5/README.md"
              data-name="v0.2.5"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.2.5">
                v0.2.5
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-time/tree/v0.2.4/README.md"
              data-name="v0.2.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.2.4">
                v0.2.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-time/tree/v0.2.3/README.md"
              data-name="v0.2.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.2.3">
                v0.2.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-time/tree/v0.2.2/README.md"
              data-name="v0.2.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.2.2">
                v0.2.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-time/tree/v0.2.1/README.md"
              data-name="v0.2.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.2.1">
                v0.2.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-time/tree/v0.2.0/README.md"
              data-name="v0.2.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.2.0">
                v0.2.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-time/tree/v0.1.1/README.md"
              data-name="v0.1.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.1.1">
                v0.1.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-time/tree/v0.1.0/README.md"
              data-name="v0.1.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.1.0">
                v0.1.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-time/tree/v0.0.7/README.md"
              data-name="v0.0.7"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.0.7">
                v0.0.7
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-time/tree/v0.0.6/README.md"
              data-name="v0.0.6"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.0.6">
                v0.0.6
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-time/tree/v0.0.5/README.md"
              data-name="v0.0.5"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.0.5">
                v0.0.5
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-time/tree/v0.0.4/README.md"
              data-name="v0.0.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.0.4">
                v0.0.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-time/tree/v0.0.3/README.md"
              data-name="v0.0.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.0.3">
                v0.0.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-time/tree/v0.0.2/README.md"
              data-name="v0.0.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.0.2">
                v0.0.2
              </span>
            </a>
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>

    <div class="BtnGroup float-right">
      <a href="/d3/d3-time/find/master"
            class="js-pjax-capture-input btn btn-sm BtnGroup-item"
            data-pjax
            data-hotkey="t">
        Find file
      </a>
      <button aria-label="Copy file path to clipboard" class="js-zeroclipboard btn btn-sm BtnGroup-item tooltipped tooltipped-s" data-copied-hint="Copied!" type="button">Copy path</button>
    </div>
    <div class="breadcrumb js-zeroclipboard-target">
      <span class="repo-root js-repo-root"><span class="js-path-segment"><a href="/d3/d3-time"><span>d3-time</span></a></span></span><span class="separator">/</span><strong class="final-path">README.md</strong>
    </div>
  </div>


  
  <div class="commit-tease">
      <span class="float-right">
        <a class="commit-tease-sha" href="/d3/d3-time/commit/b898f28b50d76cc432df3f356cac5b73e7be3d69" data-pjax>
          b898f28
        </a>
        <relative-time datetime="2018-01-09T17:36:40Z">Jan 9, 2018</relative-time>
      </span>
      <div>
        <img alt="@pluehne" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/3244280?s=40&amp;v=4" width="20" />
        <a href="/pluehne" class="user-mention" rel="contributor">pluehne</a>
          <a href="/d3/d3-time/commit/b898f28b50d76cc432df3f356cac5b73e7be3d69" class="message" data-pjax="true" title="Fix typo in documentation">Fix typo in documentation</a>
      </div>

    <div class="commit-tease-contributors">
      <button type="button" class="btn-link muted-link contributors-toggle" data-facebox="#blob_contributors_box">
        <strong>4</strong>
         contributors
      </button>
          <a class="avatar-link tooltipped tooltipped-s" aria-label="mbostock" href="/d3/d3-time/commits/master/README.md?author=mbostock"><img alt="@mbostock" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/230541?s=40&amp;v=4" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="Devinsuit" href="/d3/d3-time/commits/master/README.md?author=Devinsuit"><img alt="@Devinsuit" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/11741306?s=40&amp;v=4" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="pjaspers" href="/d3/d3-time/commits/master/README.md?author=pjaspers"><img alt="@pjaspers" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/52989?s=40&amp;v=4" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="pluehne" href="/d3/d3-time/commits/master/README.md?author=pluehne"><img alt="@pluehne" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/3244280?s=40&amp;v=4" width="20" /> </a>


    </div>

    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header" data-facebox-id="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list" data-facebox-id="facebox-description">
          <li class="facebox-user-list-item">
            <img alt="@mbostock" height="24" src="https://avatars0.githubusercontent.com/u/230541?s=48&amp;v=4" width="24" />
            <a href="/mbostock">mbostock</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@Devinsuit" height="24" src="https://avatars1.githubusercontent.com/u/11741306?s=48&amp;v=4" width="24" />
            <a href="/Devinsuit">Devinsuit</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@pjaspers" height="24" src="https://avatars0.githubusercontent.com/u/52989?s=48&amp;v=4" width="24" />
            <a href="/pjaspers">pjaspers</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@pluehne" height="24" src="https://avatars1.githubusercontent.com/u/3244280?s=48&amp;v=4" width="24" />
            <a href="/pluehne">pluehne</a>
          </li>
      </ul>
    </div>
  </div>


  <div class="file">
    <div class="file-header">
  <div class="file-actions">

    <div class="BtnGroup">
      <a href="/d3/d3-time/raw/master/README.md" class="btn btn-sm BtnGroup-item" id="raw-url">Raw</a>
        <a href="/d3/d3-time/blame/master/README.md" class="btn btn-sm js-update-url-with-hash BtnGroup-item" data-hotkey="b">Blame</a>
      <a href="/d3/d3-time/commits/master/README.md" class="btn btn-sm BtnGroup-item" rel="nofollow">History</a>
    </div>

        <a class="btn-octicon tooltipped tooltipped-nw"
           href="github-windows://openRepo/https://github.com/d3/d3-time?branch=master&amp;filepath=README.md"
           aria-label="Open this file in GitHub Desktop"
           data-ga-click="Repository, open with desktop, type:windows">
            <svg aria-hidden="true" class="octicon octicon-device-desktop" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M15 2H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5.34c-.25.61-.86 1.39-2.34 2h8c-1.48-.61-2.09-1.39-2.34-2H15c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 9H1V3h14v8z"/></svg>
        </a>

          <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/d3/d3-time/edit/master/README.md" class="inline-form js-update-url-with-hash" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="/hZ1T7pUVIJtNN+Kpoar+ac5mQBBMQhF4HEVAiJi6x7U2LzJz/wrLM/xkMn+6H+BYIFDMQVhe31qAbnpF9orxQ==" /></div>
            <button class="btn-octicon tooltipped tooltipped-nw" type="submit"
              aria-label="Fork this project and edit the file" data-hotkey="e" data-disable-with>
              <svg aria-hidden="true" class="octicon octicon-pencil" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z"/></svg>
            </button>
</form>
        <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/d3/d3-time/delete/master/README.md" class="inline-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="ud85vpsz0yaHLlhWBs5lJkLSyhsak21tgAMC2DpbD3+zyn0EcSH/o4FnbpeIC7IDK+qxi9B0y00Bbd2jclBgTw==" /></div>
          <button class="btn-octicon btn-octicon-danger tooltipped tooltipped-nw" type="submit"
            aria-label="Fork this project and delete the file" data-disable-with>
            <svg aria-hidden="true" class="octicon octicon-trashcan" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M11 2H9c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1H2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1v9c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V5c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 12H3V5h1v8h1V5h1v8h1V5h1v8h1V5h1v9zm1-10H2V3h9v1z"/></svg>
          </button>
</form>  </div>

  <div class="file-info">
      330 lines (204 sloc)
      <span class="file-info-divider"></span>
    25 KB
  </div>
</div>

    
  <div id="readme" class="readme blob instapaper_body">
    <article class="markdown-body entry-content" itemprop="text"><h1><a href="#d3-time" aria-hidden="true" class="anchor" id="user-content-d3-time"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>d3-time</h1>
<p>When visualizing time series data, analyzing temporal patterns, or working with time in general, the irregularities of conventional time units quickly become apparent. In the <a href="https://en.wikipedia.org/wiki/Gregorian_calendar" rel="nofollow">Gregorian calendar</a>, for example, most months have 31 days but some have 28, 29 or 30; most years have 365 days but <a href="https://en.wikipedia.org/wiki/Leap_year" rel="nofollow">leap years</a> have 366; and with <a href="https://en.wikipedia.org/wiki/Daylight_saving_time" rel="nofollow">daylight saving</a>, most days have 24 hours but some have 23 or 25. Adding to complexity, daylight saving conventions vary around the world.</p>
<p>As a result of these temporal peculiarities, it can be difficult to perform seemingly-trivial tasks. For example, if you want to compute the number of days that have passed between two dates, you can’t simply subtract and divide by 24 hours (86,400,000 ms):</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">var</span> start <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Date</span>(<span class="pl-c1">2015</span>, <span class="pl-c1">02</span>, <span class="pl-c1">01</span>), <span class="pl-c"><span class="pl-c">//</span> Sun Mar 01 2015 00:00:00 GMT-0800 (PST)</span>
    end <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Date</span>(<span class="pl-c1">2015</span>, <span class="pl-c1">03</span>, <span class="pl-c1">01</span>); <span class="pl-c"><span class="pl-c">//</span> Wed Apr 01 2015 00:00:00 GMT-0700 (PDT)</span>
(end <span class="pl-k">-</span> start) <span class="pl-k">/</span> <span class="pl-c1">864e5</span>; <span class="pl-c"><span class="pl-c">//</span> 30.958333333333332, oops!</span></pre></div>
<p>You can, however, use <a href="#timeDay">d3.timeDay</a>.<a href="#interval_count">count</a>:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-smi">d3</span>.<span class="pl-smi">timeDay</span>.<span class="pl-en">count</span>(start, end); <span class="pl-c"><span class="pl-c">//</span> 31</span></pre></div>
<p>The <a href="#day">day</a> <a href="#api-reference">interval</a> is one of several provided by d3-time. Each interval represents a conventional unit of time—<a href="#timeHour">hours</a>, <a href="#timeWeek">weeks</a>, <a href="#timeMonth">months</a>, <em>etc.</em>—and has methods to calculate boundary dates. For example, <a href="#timeDay">d3.timeDay</a> computes midnight (typically 12:00 AM local time) of the corresponding day. In addition to <a href="#interval_round">rounding</a> and <a href="#interval_count">counting</a>, intervals can also be used to generate arrays of boundary dates. For example, to compute each Sunday in the current month:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">var</span> now <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Date</span>;
<span class="pl-smi">d3</span>.<span class="pl-smi">timeWeek</span>.<span class="pl-en">range</span>(<span class="pl-smi">d3</span>.<span class="pl-smi">timeMonth</span>.<span class="pl-en">floor</span>(now), <span class="pl-smi">d3</span>.<span class="pl-smi">timeMonth</span>.<span class="pl-en">ceil</span>(now));
<span class="pl-c"><span class="pl-c">//</span> [Sun Jun 07 2015 00:00:00 GMT-0700 (PDT),</span>
<span class="pl-c"><span class="pl-c">//</span>  Sun Jun 14 2015 00:00:00 GMT-0700 (PDT),</span>
<span class="pl-c"><span class="pl-c">//</span>  Sun Jun 21 2015 00:00:00 GMT-0700 (PDT),</span>
<span class="pl-c"><span class="pl-c">//</span>  Sun Jun 28 2015 00:00:00 GMT-0700 (PDT)]</span></pre></div>
<p>The d3-time module does not implement its own calendaring system; it merely implements a convenient API for calendar math on top of ECMAScript <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date" rel="nofollow">Date</a>. Thus, it ignores leap seconds and can only work with the local time zone and <a href="https://en.wikipedia.org/wiki/Coordinated_Universal_Time" rel="nofollow">Coordinated Universal Time</a> (UTC).</p>
<p>This module is used by D3’s time scales to generate sensible ticks, by D3’s time format, and can also be used directly to do things like <a href="http://bl.ocks.org/mbostock/4063318" rel="nofollow">calendar layouts</a>.</p>
<h2><a href="#installing" aria-hidden="true" class="anchor" id="user-content-installing"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installing</h2>
<p>If you use NPM, <code>npm install d3-time</code>. Otherwise, download the <a href="https://github.com/d3/d3-time/releases/latest">latest release</a>. You can also load directly from <a href="https://d3js.org" rel="nofollow">d3js.org</a>, either as a <a href="https://d3js.org/d3-time.v1.min.js" rel="nofollow">standalone library</a> or as part of <a href="https://github.com/d3/d3">D3 4.0</a>. AMD, CommonJS, and vanilla environments are supported. In vanilla, a <code>d3</code> global is exported:</p>
<div class="highlight highlight-text-html-basic"><pre>&lt;<span class="pl-ent">script</span> <span class="pl-e">src</span>=<span class="pl-s"><span class="pl-pds">"</span>https://d3js.org/d3-time.v1.min.js<span class="pl-pds">"</span></span>&gt;&lt;/<span class="pl-ent">script</span>&gt;
&lt;<span class="pl-ent">script</span>&gt;<span class="pl-s1"></span>
<span class="pl-s1"></span>
<span class="pl-s1"><span class="pl-k">var</span> day <span class="pl-k">=</span> <span class="pl-smi">d3</span>.<span class="pl-en">timeDay</span>(<span class="pl-k">new</span> <span class="pl-en">Date</span>);</span>
<span class="pl-s1"></span>
<span class="pl-s1"></span><span class="pl-s1">&lt;</span>/<span class="pl-ent">script</span>&gt;</pre></div>
<p><a href="https://tonicdev.com/npm/d3-time" rel="nofollow">Try d3-time in your browser.</a></p>
<h2><a href="#api-reference" aria-hidden="true" class="anchor" id="user-content-api-reference"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>API Reference</h2>
<p><a name="user-content-_interval" href="#_interval">#</a> <i>interval</i>(<i>date</i>) <a href="https://github.com/d3/d3-time/blob/master/src/interval.js#L6" title="Source">&lt;&gt;</a></p>
<p>Alias for <a href="#interval_floor"><em>interval</em>.floor</a>. For example, <a href="#timeYear">d3.timeYear</a>(<em>date</em>) and d3.timeYear.floor(<em>date</em>) are equivalent.</p>
<p><a name="user-content-interval_floor" href="#interval_floor">#</a> <i>interval</i>.<b>floor</b>(<i>date</i>) <a href="https://github.com/d3/d3-time/blob/master/src/interval.js#L10" title="Source">&lt;&gt;</a></p>
<p>Returns a new date representing the latest interval boundary date before or equal to <em>date</em>. For example, <a href="#timeDay">d3.timeDay</a>.floor(<em>date</em>) typically returns 12:00 AM local time on the given <em>date</em>.</p>
<p>This method is idempotent: if the specified <em>date</em> is already floored to the current interval, a new date with an identical time is returned. Furthermore, the returned date is the minimum expressible value of the associated interval, such that <em>interval</em>.floor(<em>interval</em>.floor(<em>date</em>) - 1) returns the preceeding interval boundary date.</p>
<p>Note that the <code>==</code> and <code>===</code> operators do not compare by value with <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date" rel="nofollow">Date</a> objects, and thus you cannot use them to tell whether the specified <em>date</em> has already been floored. Instead, coerce to a number and then compare:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-c"><span class="pl-c">//</span> Returns true if the specified date is a day boundary.</span>
<span class="pl-k">function</span> <span class="pl-en">isDay</span>(<span class="pl-smi">date</span>) {
  <span class="pl-k">return</span> <span class="pl-k">+</span><span class="pl-smi">d3</span>.<span class="pl-smi">timeDay</span>.<span class="pl-en">floor</span>(date) <span class="pl-k">===</span> <span class="pl-k">+</span>date;
}</pre></div>
<p>This is more reliable than testing whether the time is 12:00 AM, as in some time zones midnight may not exist due to daylight saving.</p>
<p><a name="user-content-interval_round" href="#interval_round">#</a> <i>interval</i>.<b>round</b>(<i>date</i>) <a href="https://github.com/d3/d3-time/blob/master/src/interval.js#L16" title="Source">&lt;&gt;</a></p>
<p>Returns a new date representing the closest interval boundary date to <em>date</em>. For example, <a href="#timeDay">d3.timeDay</a>.round(<em>date</em>) typically returns 12:00 AM local time on the given <em>date</em> if it is on or before noon, and 12:00 AM of the following day if it is after noon.</p>
<p>This method is idempotent: if the specified <em>date</em> is already rounded to the current interval, a new date with an identical time is returned.</p>
<p><a name="user-content-interval_ceil" href="#interval_ceil">#</a> <i>interval</i>.<b>ceil</b>(<i>date</i>) <a href="https://github.com/d3/d3-time/blob/master/src/interval.js#L12" title="Source">&lt;&gt;</a></p>
<p>Returns a new date representing the earliest interval boundary date after or equal to <em>date</em>. For example, <a href="#timeDay">d3.timeDay</a>.ceil(<em>date</em>) typically returns 12:00 AM local time on the date following the given <em>date</em>.</p>
<p>This method is idempotent: if the specified <em>date</em> is already ceilinged to the current interval, a new date with an identical time is returned. Furthermore, the returned date is the maximum expressible value of the associated interval, such that <em>interval</em>.ceil(<em>interval</em>.ceil(<em>date</em>) + 1) returns the following interval boundary date.</p>
<p><a name="user-content-interval_offset" href="#interval_offset">#</a> <i>interval</i>.<b>offset</b>(<i>date</i>[, <i>step</i>]) <a href="https://github.com/d3/d3-time/blob/master/src/interval.js#L22" title="Source">&lt;&gt;</a></p>
<p>Returns a new date equal to <em>date</em> plus <em>step</em> intervals. If <em>step</em> is not specified it defaults to 1. If <em>step</em> is negative, then the returned date will be before the specified <em>date</em>; if <em>step</em> is zero, then a copy of the specified <em>date</em> is returned; if <em>step</em> is not an integer, it is <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor" rel="nofollow">floored</a>. This method does not round the specified <em>date</em> to the interval. For example, if <em>date</em> is today at 5:34 PM, then <a href="#timeDay">d3.timeDay</a>.offset(<em>date</em>, 1) returns 5:34 PM tomorrow (even if daylight saving changes!).</p>
<p><a name="user-content-interval_range" href="#interval_range">#</a> <i>interval</i>.<b>range</b>(<i>start</i>, <i>stop</i>[, <i>step</i>]) <a href="https://github.com/d3/d3-time/blob/master/src/interval.js#L26" title="Source">&lt;&gt;</a></p>
<p>Returns an array of dates representing every interval boundary after or equal to <em>start</em> (inclusive) and before <em>stop</em> (exclusive). If <em>step</em> is specified, then every <em>step</em>th boundary will be returned; for example, for the <a href="#timeDay">d3.timeDay</a> interval a <em>step</em> of 2 will return every other day. If <em>step</em> is not an integer, it is <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor" rel="nofollow">floored</a>.</p>
<p>The first date in the returned array is the earliest boundary after or equal to <em>start</em>; subsequent dates are <a href="#interval_offset">offset</a> by <em>step</em> intervals and <a href="#interval_floor">floored</a>. Thus, two overlapping ranges may be consistent. For example, this range contains odd days:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-smi">d3</span>.<span class="pl-smi">timeDay</span>.<span class="pl-en">range</span>(<span class="pl-k">new</span> <span class="pl-en">Date</span>(<span class="pl-c1">2015</span>, <span class="pl-c1">0</span>, <span class="pl-c1">1</span>), <span class="pl-k">new</span> <span class="pl-en">Date</span>(<span class="pl-c1">2015</span>, <span class="pl-c1">0</span>, <span class="pl-c1">7</span>), <span class="pl-c1">2</span>);
<span class="pl-c"><span class="pl-c">//</span> [Thu Jan 01 2015 00:00:00 GMT-0800 (PST),</span>
<span class="pl-c"><span class="pl-c">//</span>  Sat Jan 03 2015 00:00:00 GMT-0800 (PST),</span>
<span class="pl-c"><span class="pl-c">//</span>  Mon Jan 05 2015 00:00:00 GMT-0800 (PST)]</span></pre></div>
<p>While this contains even days:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-smi">d3</span>.<span class="pl-smi">timeDay</span>.<span class="pl-en">range</span>(<span class="pl-k">new</span> <span class="pl-en">Date</span>(<span class="pl-c1">2015</span>, <span class="pl-c1">0</span>, <span class="pl-c1">2</span>), <span class="pl-k">new</span> <span class="pl-en">Date</span>(<span class="pl-c1">2015</span>, <span class="pl-c1">0</span>, <span class="pl-c1">8</span>), <span class="pl-c1">2</span>);
<span class="pl-c"><span class="pl-c">//</span> [Fri Jan 02 2015 00:00:00 GMT-0800 (PST),</span>
<span class="pl-c"><span class="pl-c">//</span>  Sun Jan 04 2015 00:00:00 GMT-0800 (PST),</span>
<span class="pl-c"><span class="pl-c">//</span>  Tue Jan 06 2015 00:00:00 GMT-0800 (PST)]</span></pre></div>
<p>To make ranges consistent when a <em>step</em> is specified, use <a href="#interval_every"><em>interval</em>.every</a> instead.</p>
<p><a name="user-content-interval_filter" href="#interval_filter">#</a> <i>interval</i>.<b>filter</b>(<i>test</i>) <a href="https://github.com/d3/d3-time/blob/master/src/interval.js#L35" title="Source">&lt;&gt;</a></p>
<p>Returns a new interval that is a filtered subset of this interval using the specified <em>test</em> function. The <em>test</em> function is passed a date and should return true if and only if the specified date should be considered part of the interval. For example, to create an interval that returns the 1st, 11th, 21th and 31th (if it exists) of each month:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">var</span> i <span class="pl-k">=</span> <span class="pl-smi">d3</span>.<span class="pl-smi">timeDay</span>.<span class="pl-en">filter</span>(<span class="pl-k">function</span>(<span class="pl-smi">d</span>) { <span class="pl-k">return</span> (<span class="pl-smi">d</span>.<span class="pl-c1">getDate</span>() <span class="pl-k">-</span> <span class="pl-c1">1</span>) <span class="pl-k">%</span> <span class="pl-c1">10</span> <span class="pl-k">===</span> <span class="pl-c1">0</span>; });</pre></div>
<p>The returned filtered interval does not support <a href="#interval_count"><em>interval</em>.count</a>. See also <a href="#interval_every"><em>interval</em>.every</a>.</p>
<p><a name="user-content-interval_every" href="#interval_every">#</a> <i>interval</i>.<b>every</b>(<i>step</i>) <a href="https://github.com/d3/d3-time/blob/master/src/interval.js#L50" title="Source">&lt;&gt;</a></p>
<p>Returns a <a href="#interval_filter">filtered</a> view of this interval representing every <em>step</em>th date. The meaning of <em>step</em> is dependent on this interval’s parent interval as defined by the field function. For example, <a href="#timeMinute">d3.timeMinute</a>.every(15) returns an interval representing every fifteen minutes, starting on the hour: :00, :15, :30, :45, <i>etc.</i> Note that for some intervals, the resulting dates may not be uniformly-spaced; <a href="#timeDay">d3.timeDay</a>’s parent interval is <a href="#timeMonth">d3.timeMonth</a>, and thus the interval number resets at the start of each month. If <em>step</em> is not valid, returns null. If <em>step</em> is one, returns this interval.</p>
<p>This method can be used in conjunction with <a href="#interval_range"><em>interval</em>.range</a> to ensure that two overlapping ranges are consistent. For example, this range contains odd days:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-smi">d3</span>.<span class="pl-smi">timeDay</span>.<span class="pl-en">every</span>(<span class="pl-c1">2</span>).<span class="pl-en">range</span>(<span class="pl-k">new</span> <span class="pl-en">Date</span>(<span class="pl-c1">2015</span>, <span class="pl-c1">0</span>, <span class="pl-c1">1</span>), <span class="pl-k">new</span> <span class="pl-en">Date</span>(<span class="pl-c1">2015</span>, <span class="pl-c1">0</span>, <span class="pl-c1">7</span>));
<span class="pl-c"><span class="pl-c">//</span> [Thu Jan 01 2015 00:00:00 GMT-0800 (PST),</span>
<span class="pl-c"><span class="pl-c">//</span>  Sat Jan 03 2015 00:00:00 GMT-0800 (PST),</span>
<span class="pl-c"><span class="pl-c">//</span>  Mon Jan 05 2015 00:00:00 GMT-0800 (PST)]</span></pre></div>
<p>As does this one:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-smi">d3</span>.<span class="pl-smi">timeDay</span>.<span class="pl-en">every</span>(<span class="pl-c1">2</span>).<span class="pl-en">range</span>(<span class="pl-k">new</span> <span class="pl-en">Date</span>(<span class="pl-c1">2015</span>, <span class="pl-c1">0</span>, <span class="pl-c1">2</span>), <span class="pl-k">new</span> <span class="pl-en">Date</span>(<span class="pl-c1">2015</span>, <span class="pl-c1">0</span>, <span class="pl-c1">8</span>));
<span class="pl-c"><span class="pl-c">//</span> [Sat Jan 03 2015 00:00:00 GMT-0800 (PST),</span>
<span class="pl-c"><span class="pl-c">//</span>  Mon Jan 05 2015 00:00:00 GMT-0800 (PST),</span>
<span class="pl-c"><span class="pl-c">//</span>  Wed Jan 07 2015 00:00:00 GMT-0800 (PST)]</span></pre></div>
<p>The returned filtered interval does not support <a href="#interval_count"><em>interval</em>.count</a>. See also <a href="#interval_filter"><em>interval</em>.filter</a>.</p>
<p><a name="user-content-interval_count" href="#interval_count">#</a> <i>interval</i>.<b>count</b>(<i>start</i>, <i>end</i>) <a href="https://github.com/d3/d3-time/blob/master/src/interval.js#L44" title="Source">&lt;&gt;</a></p>
<p>Returns the number of interval boundaries after <em>start</em> (exclusive) and before or equal to <em>end</em> (inclusive). Note that this behavior is slightly different than <a href="#interval_range"><em>interval</em>.range</a> because its purpose is to return the zero-based number of the specified <em>end</em> date relative to the specified <em>start</em> date. For example, to compute the current zero-based day-of-year number:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">var</span> now <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Date</span>;
<span class="pl-smi">d3</span>.<span class="pl-smi">timeDay</span>.<span class="pl-en">count</span>(<span class="pl-smi">d3</span>.<span class="pl-en">timeYear</span>(now), now); <span class="pl-c"><span class="pl-c">//</span> 177</span></pre></div>
<p>Likewise, to compute the current zero-based week-of-year number for weeks that start on Sunday:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-smi">d3</span>.<span class="pl-smi">timeSunday</span>.<span class="pl-en">count</span>(<span class="pl-smi">d3</span>.<span class="pl-en">timeYear</span>(now), now); <span class="pl-c"><span class="pl-c">//</span> 25</span></pre></div>
<p><a name="user-content-timeInterval" href="#timeInterval">#</a> d3.<b>timeInterval</b>(<i>floor</i>, <i>offset</i>[, <i>count</i>[, <i>field</i>]]) <a href="https://github.com/d3/d3-time/blob/master/src/interval.js#L4" title="Source">&lt;&gt;</a></p>
<p>Constructs a new custom interval given the specified <em>floor</em> and <em>offset</em> functions and an optional <em>count</em> function.</p>
<p>The <em>floor</em> function takes a single date as an argument and rounds it down to the nearest interval boundary.</p>
<p>The <em>offset</em> function takes a date and an integer step as arguments and advances the specified date by the specified number of boundaries; the step may be positive, negative or zero.</p>
<p>The optional <em>count</em> function takes a start date and an end date, already floored to the current interval, and returns the number of boundaries between the start (exclusive) and end (inclusive). If a <em>count</em> function is not specified, the returned interval does not expose <a href="#interval_count"><em>interval</em>.count</a> or <a href="#interval_every"><em>interval</em>.every</a> methods. Note: due to an internal optimization, the specified <em>count</em> function must not invoke <em>interval</em>.count on other time intervals.</p>
<p>The optional <em>field</em> function takes a date, already floored to the current interval, and returns the field value of the specified date, corresponding to the number of boundaries between this date (exclusive) and the latest previous parent boundary. For example, for the <a href="#timeDay">d3.timeDay</a> interval, this returns the number of days since the start of the month. If a <em>field</em> function is not specified, it defaults to counting the number of interval boundaries since the UNIX epoch of January 1, 1970 UTC. The <em>field</em> function defines the behavior of <a href="#interval_every"><em>interval</em>.every</a>.</p>
<h3><a href="#intervals" aria-hidden="true" class="anchor" id="user-content-intervals"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Intervals</h3>
<p>The following intervals are provided:</p>
<p><a name="user-content-timeMillisecond" href="#timeMillisecond">#</a> d3.<b>timeMillisecond</b> <a href="https://github.com/d3/d3-time/blob/master/src/millisecond.js" title="Source">&lt;&gt;</a>
<br><a href="#timeMillisecond">#</a> d3.<b>utcMillisecond</b></p>
<p>Milliseconds; the shortest available time unit.</p>
<p><a name="user-content-timeSecond" href="#timeSecond">#</a> d3.<b>timeSecond</b> <a href="https://github.com/d3/d3-time/blob/master/src/second.js" title="Source">&lt;&gt;</a>
<br><a href="#timeSecond">#</a> d3.<b>utcSecond</b></p>
<p>Seconds (e.g., 01:23:45.0000 AM); 1,000 milliseconds.</p>
<p><a name="user-content-timeMinute" href="#timeMinute">#</a> d3.<b>timeMinute</b> <a href="https://github.com/d3/d3-time/blob/master/src/minute.js" title="Source">&lt;&gt;</a>
<br><a href="#timeMinute">#</a> d3.<b>utcMinute</b> <a href="https://github.com/d3/d3-time/blob/master/src/utcMinute.js" title="Source">&lt;&gt;</a></p>
<p>Minutes (e.g., 01:02:00 AM); 60 seconds. Note that ECMAScript <a href="http://www.ecma-international.org/ecma-262/5.1/#sec-15.9.1.1" rel="nofollow">ignores leap seconds</a>.</p>
<p><a name="user-content-timeHour" href="#timeHour">#</a> d3.<b>timeHour</b> <a href="https://github.com/d3/d3-time/blob/master/src/hour.js" title="Source">&lt;&gt;</a>
<br><a href="#timeHour">#</a> d3.<b>utcHour</b> <a href="https://github.com/d3/d3-time/blob/master/src/utcHour.js" title="Source">&lt;&gt;</a></p>
<p>Hours (e.g., 01:00 AM); 60 minutes. Note that advancing time by one hour in local time can return the same hour or skip an hour due to daylight saving.</p>
<p><a name="user-content-timeDay" href="#timeDay">#</a> d3.<b>timeDay</b> <a href="https://github.com/d3/d3-time/blob/master/src/day.js" title="Source">&lt;&gt;</a>
<br><a href="#timeDay">#</a> d3.<b>utcDay</b> <a href="https://github.com/d3/d3-time/blob/master/src/utcDay.js" title="Source">&lt;&gt;</a></p>
<p>Days (e.g., February 7, 2012 at 12:00 AM); typically 24 hours. Days in local time may range from 23 to 25 hours due to daylight saving.</p>
<p><a name="user-content-timeWeek" href="#timeWeek">#</a> d3.<b>timeWeek</b> <a href="https://github.com/d3/d3-time/blob/master/src/week.js" title="Source">&lt;&gt;</a>
<br><a href="#timeWeek">#</a> d3.<b>utcWeek</b> <a href="https://github.com/d3/d3-time/blob/master/src/utcWeek.js" title="Source">&lt;&gt;</a></p>
<p>Alias for <a href="#timeSunday">d3.timeSunday</a>; 7 days and typically 168 hours. Weeks in local time may range from 167 to 169 hours due on daylight saving.</p>
<p><a name="user-content-timeSunday" href="#timeSunday">#</a> d3.<b>timeSunday</b> <a href="https://github.com/d3/d3-time/blob/master/src/week.js#L15" title="Source">&lt;&gt;</a>
<br><a href="#timeSunday">#</a> d3.<b>utcSunday</b> <a href="https://github.com/d3/d3-time/blob/master/src/utcWeek.js#L15" title="Source">&lt;&gt;</a></p>
<p>Sunday-based weeks (e.g., February 5, 2012 at 12:00 AM).</p>
<p><a name="user-content-timeMonday" href="#timeMonday">#</a> d3.<b>timeMonday</b> <a href="https://github.com/d3/d3-time/blob/master/src/week.js#L16" title="Source">&lt;&gt;</a>
<br><a href="#timeMonday">#</a> d3.<b>utcMonday</b> <a href="https://github.com/d3/d3-time/blob/master/src/utcWeek.js#L16" title="Source">&lt;&gt;</a></p>
<p>Monday-based weeks (e.g., February 6, 2012 at 12:00 AM).</p>
<p><a name="user-content-timeTuesday" href="#timeTuesday">#</a> d3.<b>timeTuesday</b> <a href="https://github.com/d3/d3-time/blob/master/src/week.js#L17" title="Source">&lt;&gt;</a>
<br><a href="#timeTuesday">#</a> d3.<b>utcTuesday</b> <a href="https://github.com/d3/d3-time/blob/master/src/utcWeek.js#L17" title="Source">&lt;&gt;</a></p>
<p>Tuesday-based weeks (e.g., February 7, 2012 at 12:00 AM).</p>
<p><a name="user-content-timeWednesday" href="#timeWednesday">#</a> d3.<b>timeWednesday</b> <a href="https://github.com/d3/d3-time/blob/master/src/week.js#L18" title="Source">&lt;&gt;</a>
<br><a href="#timeWednesday">#</a> d3.<b>utcWednesday</b> <a href="https://github.com/d3/d3-time/blob/master/src/utcWeek.js#L18" title="Source">&lt;&gt;</a></p>
<p>Wednesday-based weeks (e.g., February 8, 2012 at 12:00 AM).</p>
<p><a name="user-content-timeThursday" href="#timeThursday">#</a> d3.<b>timeThursday</b> <a href="https://github.com/d3/d3-time/blob/master/src/week.js#L19" title="Source">&lt;&gt;</a>
<br><a href="#timeThursday">#</a> d3.<b>utcThursday</b> <a href="https://github.com/d3/d3-time/blob/master/src/utcWeek.js#L19" title="Source">&lt;&gt;</a></p>
<p>Thursday-based weeks (e.g., February 9, 2012 at 12:00 AM).</p>
<p><a name="user-content-timeFriday" href="#timeFriday">#</a> d3.<b>timeFriday</b> <a href="https://github.com/d3/d3-time/blob/master/src/week.js#L20" title="Source">&lt;&gt;</a>
<br><a href="#timeFriday">#</a> d3.<b>utcFriday</b> <a href="https://github.com/d3/d3-time/blob/master/src/utcWeek.js#L20" title="Source">&lt;&gt;</a></p>
<p>Friday-based weeks (e.g., February 10, 2012 at 12:00 AM).</p>
<p><a name="user-content-timeSaturday" href="#timeSaturday">#</a> d3.<b>timeSaturday</b> <a href="https://github.com/d3/d3-time/blob/master/src/week.js#L21" title="Source">&lt;&gt;</a>
<br><a href="#timeSaturday">#</a> d3.<b>utcSaturday</b> <a href="https://github.com/d3/d3-time/blob/master/src/utcWeek.js#L21" title="Source">&lt;&gt;</a></p>
<p>Saturday-based weeks (e.g., February 11, 2012 at 12:00 AM).</p>
<p><a name="user-content-timeMonth" href="#timeMonth">#</a> d3.<b>timeMonth</b> <a href="https://github.com/d3/d3-time/blob/master/src/month.js" title="Source">&lt;&gt;</a>
<br><a href="#timeMonth">#</a> d3.<b>utcMonth</b> <a href="https://github.com/d3/d3-time/blob/master/src/utcMonth.js" title="Source">&lt;&gt;</a></p>
<p>Months (e.g., February 1, 2012 at 12:00 AM); ranges from 28 to 31 days.</p>
<p><a name="user-content-timeYear" href="#timeYear">#</a> d3.<b>timeYear</b> <a href="https://github.com/d3/d3-time/blob/master/src/year.js" title="Source">&lt;&gt;</a>
<br><a href="#timeYear">#</a> d3.<b>utcYear</b> <a href="https://github.com/d3/d3-time/blob/master/src/utcYear.js" title="Source">&lt;&gt;</a></p>
<p>Years (e.g., January 1, 2012 at 12:00 AM); ranges from 365 to 366 days.</p>
<h3><a href="#ranges" aria-hidden="true" class="anchor" id="user-content-ranges"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Ranges</h3>
<p>For convenience, aliases for <a href="#interval_range"><em>interval</em>.range</a> are also provided as plural forms of the corresponding interval.</p>
<p><a name="user-content-timeMilliseconds" href="#timeMilliseconds">#</a> d3.<b>timeMilliseconds</b>(<i>start</i>, <i>stop</i>[, <i>step</i>]) <a href="https://github.com/d3/d3-time/blob/master/src/millisecond.js#L26" title="Source">&lt;&gt;</a>
<br><a href="#timeMilliseconds">#</a> d3.<b>utcMilliseconds</b>(<i>start</i>, <i>stop</i>[, <i>step</i>])</p>
<p>Aliases for <a href="#timeMillisecond">d3.timeMillisecond</a>.<a href="#interval_range">range</a> and <a href="#timeMillisecond">d3.utcMillisecond</a>.<a href="#interval_range">range</a>.</p>
<p><a name="user-content-timeSeconds" href="#timeSeconds">#</a> d3.<b>timeSeconds</b>(<i>start</i>, <i>stop</i>[, <i>step</i>]) <a href="https://github.com/d3/d3-time/blob/master/src/second.js#L15" title="Source">&lt;&gt;</a>
<br><a href="#timeSeconds">#</a> d3.<b>utcSeconds</b>(<i>start</i>, <i>stop</i>[, <i>step</i>])</p>
<p>Aliases for <a href="#timeSecond">d3.timeSecond</a>.<a href="#interval_range">range</a> and <a href="#timeSecond">d3.utcSecond</a>.<a href="#interval_range">range</a>.</p>
<p><a name="user-content-timeMinutes" href="#timeMinutes">#</a> d3.<b>timeMinutes</b>(<i>start</i>, <i>stop</i>[, <i>step</i>]) <a href="https://github.com/d3/d3-time/blob/master/src/minute.js#L15" title="Source">&lt;&gt;</a>
<br><a href="#timeMinutes">#</a> d3.<b>utcMinutes</b>(<i>start</i>, <i>stop</i>[, <i>step</i>]) <a href="https://github.com/d3/d3-time/blob/master/src/utcMinute.js#L15" title="Source">&lt;&gt;</a></p>
<p>Aliases for <a href="#timeMinute">d3.timeMinute</a>.<a href="#interval_range">range</a> and <a href="#timeMinute">d3.utcMinute</a>.<a href="#interval_range">range</a>.</p>
<p><a name="user-content-timeHours" href="#timeHours">#</a> d3.<b>timeHours</b>(<i>start</i>, <i>stop</i>[, <i>step</i>]) <a href="https://github.com/d3/d3-time/blob/master/src/hour.js#L17" title="Source">&lt;&gt;</a>
<br><a href="#timeHours">#</a> d3.<b>utcHours</b>(<i>start</i>, <i>stop</i>[, <i>step</i>]) <a href="https://github.com/d3/d3-time/blob/master/src/utcHour.js#L15" title="Source">&lt;&gt;</a></p>
<p>Aliases for <a href="#timeHour">d3.timeHour</a>.<a href="#interval_range">range</a> and <a href="#timeHour">d3.utcHour</a>.<a href="#interval_range">range</a>.</p>
<p><a name="user-content-timeDays" href="#timeDays">#</a> d3.<b>timeDays</b>(<i>start</i>, <i>stop</i>[, <i>step</i>]) <a href="https://github.com/d3/d3-time/blob/master/src/day.js#L15" title="Source">&lt;&gt;</a>
<br><a href="#timeDays">#</a> d3.<b>utcDays</b>(<i>start</i>, <i>stop</i>[, <i>step</i>]) <a href="https://github.com/d3/d3-time/blob/master/src/utcDay.js#L15" title="Source">&lt;&gt;</a></p>
<p>Aliases for <a href="#timeDay">d3.timeDay</a>.<a href="#interval_range">range</a> and <a href="#timeDay">d3.utcDay</a>.<a href="#interval_range">range</a>.</p>
<p><a name="user-content-timeWeeks" href="#timeWeeks">#</a> d3.<b>timeWeeks</b>(<i>start</i>, <i>stop</i>[, <i>step</i>])
<br><a href="#timeWeeks">#</a> d3.<b>utcWeeks</b>(<i>start</i>, <i>stop</i>[, <i>step</i>])</p>
<p>Aliases for <a href="#timeWeek">d3.timeWeek</a>.<a href="#interval_range">range</a> and <a href="#timeWeek">d3.utcWeek</a>.<a href="#interval_range">range</a>.</p>
<p><a name="user-content-timeSundays" href="#timeSundays">#</a> d3.<b>timeSundays</b>(<i>start</i>, <i>stop</i>[, <i>step</i>]) <a href="https://github.com/d3/d3-time/blob/master/src/week.js#L23" title="Source">&lt;&gt;</a>
<br><a href="#timeSundays">#</a> d3.<b>utcSundays</b>(<i>start</i>, <i>stop</i>[, <i>step</i>]) <a href="https://github.com/d3/d3-time/blob/master/src/utcWeek.js#L23" title="Source">&lt;&gt;</a></p>
<p>Aliases for <a href="#timeSunday">d3.timeSunday</a>.<a href="#interval_range">range</a> and <a href="#timeSunday">d3.utcSunday</a>.<a href="#interval_range">range</a>.</p>
<p><a name="user-content-timeMondays" href="#timeMondays">#</a> d3.<b>timeMondays</b>(<i>start</i>, <i>stop</i>[, <i>step</i>]) <a href="https://github.com/d3/d3-time/blob/master/src/week.js#L24" title="Source">&lt;&gt;</a>
<br><a href="#timeMondays">#</a> d3.<b>utcMondays</b>(<i>start</i>, <i>stop</i>[, <i>step</i>]) <a href="https://github.com/d3/d3-time/blob/master/src/utcWeek.js#L24" title="Source">&lt;&gt;</a></p>
<p>Aliases for <a href="#timeMonday">d3.timeMonday</a>.<a href="#interval_range">range</a> and <a href="#timeMonday">d3.utcMonday</a>.<a href="#interval_range">range</a>.</p>
<p><a name="user-content-timeTuesdays" href="#timeTuesdays">#</a> d3.<b>timeTuesdays</b>(<i>start</i>, <i>stop</i>[, <i>step</i>]) <a href="https://github.com/d3/d3-time/blob/master/src/week.js#L25" title="Source">&lt;&gt;</a>
<br><a href="#timeTuesdays">#</a> d3.<b>utcTuesdays</b>(<i>start</i>, <i>stop</i>[, <i>step</i>]) <a href="https://github.com/d3/d3-time/blob/master/src/utcWeek.js#L25" title="Source">&lt;&gt;</a></p>
<p>Aliases for <a href="#timeTuesday">d3.timeTuesday</a>.<a href="#interval_range">range</a> and <a href="#timeTuesday">d3.utcTuesday</a>.<a href="#interval_range">range</a>.</p>
<p><a name="user-content-timeWednesdays" href="#timeWednesdays">#</a> d3.<b>timeWednesdays</b>(<i>start</i>, <i>stop</i>[, <i>step</i>]) <a href="https://github.com/d3/d3-time/blob/master/src/week.js#L26" title="Source">&lt;&gt;</a>
<br><a href="#timeWednesdays">#</a> d3.<b>utcWednesdays</b>(<i>start</i>, <i>stop</i>[, <i>step</i>]) <a href="https://github.com/d3/d3-time/blob/master/src/utcWeek.js#L26" title="Source">&lt;&gt;</a></p>
<p>Aliases for <a href="#timeWednesday">d3.timeWednesday</a>.<a href="#interval_range">range</a> and <a href="#timeWednesday">d3.utcWednesday</a>.<a href="#interval_range">range</a>.</p>
<p><a name="user-content-timeThursdays" href="#timeThursdays">#</a> d3.<b>timeThursdays</b>(<i>start</i>, <i>stop</i>[, <i>step</i>]) <a href="https://github.com/d3/d3-time/blob/master/src/week.js#L27" title="Source">&lt;&gt;</a>
<br><a href="#timeThursdays">#</a> d3.<b>utcThursdays</b>(<i>start</i>, <i>stop</i>[, <i>step</i>]) <a href="https://github.com/d3/d3-time/blob/master/src/utcWeek.js#L27" title="Source">&lt;&gt;</a></p>
<p>Aliases for <a href="#timeThursday">d3.timeThursday</a>.<a href="#interval_range">range</a> and <a href="#timeThursday">d3.utcThursday</a>.<a href="#interval_range">range</a>.</p>
<p><a name="user-content-timeFridays" href="#timeFridays">#</a> d3.<b>timeFridays</b>(<i>start</i>, <i>stop</i>[, <i>step</i>]) <a href="https://github.com/d3/d3-time/blob/master/src/week.js#L28" title="Source">&lt;&gt;</a>
<br><a href="#timeFridays">#</a> d3.<b>utcFridays</b>(<i>start</i>, <i>stop</i>[, <i>step</i>]) <a href="https://github.com/d3/d3-time/blob/master/src/utcWeek.js#L28" title="Source">&lt;&gt;</a></p>
<p>Aliases for <a href="#timeFriday">d3.timeFriday</a>.<a href="#interval_range">range</a> and <a href="#timeFriday">d3.utcFriday</a>.<a href="#interval_range">range</a>.</p>
<p><a name="user-content-timeSaturdays" href="#timeSaturdays">#</a> d3.<b>timeSaturdays</b>(<i>start</i>, <i>stop</i>[, <i>step</i>]) <a href="https://github.com/d3/d3-time/blob/master/src/week.js#L29" title="Source">&lt;&gt;</a>
<br><a href="#timeSaturdays">#</a> d3.<b>utcSaturdays</b>(<i>start</i>, <i>stop</i>[, <i>step</i>]) <a href="https://github.com/d3/d3-time/blob/master/src/utcWeek.js#L29" title="Source">&lt;&gt;</a></p>
<p>Aliases for <a href="#timeSaturday">d3.timeSaturday</a>.<a href="#interval_range">range</a> and <a href="#timeSaturday">d3.utcSaturday</a>.<a href="#interval_range">range</a>.</p>
<p><a name="user-content-timeMonths" href="#timeMonths">#</a> d3.<b>timeMonths</b>(<i>start</i>, <i>stop</i>[, <i>step</i>]) <a href="https://github.com/d3/d3-time/blob/master/src/month.js#L15" title="Source">&lt;&gt;</a>
<br><a href="#timeMonths">#</a> d3.<b>utcMonths</b>(<i>start</i>, <i>stop</i>[, <i>step</i>]) <a href="https://github.com/d3/d3-time/blob/master/src/utcMonth.js#L15" title="Source">&lt;&gt;</a></p>
<p>Aliases for <a href="#timeMonth">d3.timeMonth</a>.<a href="#interval_range">range</a> and <a href="#timeMonth">d3.utcMonth</a>.<a href="#interval_range">range</a>.</p>
<p><a name="user-content-timeYears" href="#timeYears">#</a> d3.<b>timeYears</b>(<i>start</i>, <i>stop</i>[, <i>step</i>]) <a href="https://github.com/d3/d3-time/blob/master/src/year.js#L26" title="Source">&lt;&gt;</a>
<br><a href="#timeYears">#</a> d3.<b>utcYears</b>(<i>start</i>, <i>stop</i>[, <i>step</i>]) <a href="https://github.com/d3/d3-time/blob/master/src/utcYear.js#L26" title="Source">&lt;&gt;</a></p>
<p>Aliases for <a href="#timeYear">d3.timeYear</a>.<a href="#interval_range">range</a> and <a href="#timeYear">d3.utcYear</a>.<a href="#interval_range">range</a>.</p>
</article>
  </div>

  </div>

  <button type="button" data-facebox="#jump-to-line" data-facebox-class="linejump" data-hotkey="l" class="d-none">Jump to Line</button>
  <div id="jump-to-line" style="display:none">
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="" class="js-jump-to-line-form" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
      <input class="form-control linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" aria-label="Jump to line" autofocus>
      <button type="submit" class="btn">Go</button>
</form>  </div>


  </div>
  <div class="modal-backdrop js-touch-events"></div>
</div>

    </div>
  </div>

  </div>

      
<div class="footer container-lg px-3" role="contentinfo">
  <div class="position-relative d-flex flex-justify-between py-6 mt-6 f6 text-gray border-top border-gray-light ">
    <ul class="list-style-none d-flex flex-wrap ">
      <li class="mr-3">&copy; 2018 <span title="0.27152s from unicorn-3000369800-krtzp">GitHub</span>, Inc.</li>
        <li class="mr-3"><a href="https://github.com/site/terms" data-ga-click="Footer, go to terms, text:terms">Terms</a></li>
        <li class="mr-3"><a href="https://github.com/site/privacy" data-ga-click="Footer, go to privacy, text:privacy">Privacy</a></li>
        <li class="mr-3"><a href="https://github.com/security" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li class="mr-3"><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
        <li><a href="https://help.github.com" data-ga-click="Footer, go to help, text:help">Help</a></li>
    </ul>

    <a href="https://github.com" aria-label="Homepage" class="footer-octicon" title="GitHub">
      <svg aria-hidden="true" class="octicon octicon-mark-github" height="24" version="1.1" viewBox="0 0 16 16" width="24"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
</a>
    <ul class="list-style-none d-flex flex-wrap ">
        <li class="mr-3"><a href="https://github.com/contact" data-ga-click="Footer, go to contact, text:contact">Contact GitHub</a></li>
      <li class="mr-3"><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li class="mr-3"><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li class="mr-3"><a href="https://shop.github.com" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li class="mr-3"><a href="https://github.com/blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a href="https://github.com/about" data-ga-click="Footer, go to about, text:about">About</a></li>

    </ul>
  </div>
</div>



  <div id="ajax-error-message" class="ajax-error-message flash flash-error">
    <svg aria-hidden="true" class="octicon octicon-alert" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"/></svg>
    <button type="button" class="flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
      <svg aria-hidden="true" class="octicon octicon-x" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
    </button>
    You can't perform that action at this time.
  </div>


    
    <script crossorigin="anonymous" integrity="sha512-LpTtPGbYVV+NuVcO3FkheTQ7cU72aRS257vu6oyc8h2RmHnXnQFMOnc5nLnahUhr/SAFPHtVfFJ70cQLXAYH1g==" src="https://assets-cdn.github.com/assets/frameworks-2e94ed3c66d8555f8db9570edc592179343b714ef66914b6e7bbeeea8c9cf21d919879d79d014c3a77399cb9da85486bfd20053c7b557c527bd1c40b5c0607d6.js"></script>
    
    <script async="async" crossorigin="anonymous" integrity="sha512-k7KbMMnBd9DvHvAfs4HIAxAgiGtStBNJuecA99e23CeX4QaPj3Z2jxLg8YvU/IxIIUQcPJ3CeSAObKfHkTC47A==" src="https://assets-cdn.github.com/assets/github-93b29b30c9c177d0ef1ef01fb381c8031020886b52b41349b9e700f7d7b6dc2797e1068f8f76768f12e0f18bd4fc8c4821441c3c9dc279200e6ca7c79130b8ec.js"></script>
    
    
    
    
  <div class="js-stale-session-flash stale-session-flash flash flash-warn flash-banner d-none">
    <svg aria-hidden="true" class="octicon octicon-alert" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"/></svg>
    <span class="signed-in-tab-flash">You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
    <span class="signed-out-tab-flash">You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
  </div>
  <div class="facebox" id="facebox" style="display:none;">
  <div class="facebox-popup">
    <div class="facebox-content" role="dialog" aria-labelledby="facebox-header" aria-describedby="facebox-description">
    </div>
    <button type="button" class="facebox-close js-facebox-close" aria-label="Close modal">
      <svg aria-hidden="true" class="octicon octicon-x" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
    </button>
  </div>
</div>


  </body>
</html>


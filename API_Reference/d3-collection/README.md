





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
  
  <title>d3-collection/README.md at master · d3/d3-collection</title>
  <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
  <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
  <meta property="fb:app_id" content="1401488693436528">

    
    <meta content="https://avatars3.githubusercontent.com/u/1562726?s=400&amp;v=4" property="og:image" /><meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="d3/d3-collection" property="og:title" /><meta content="https://github.com/d3/d3-collection" property="og:url" /><meta content="d3-collection - Handy data structures for elements keyed by string." property="og:description" />

  <link rel="assets" href="https://assets-cdn.github.com/">
  <link rel="web-socket" href="wss://live.github.com/_sockets/VjI6MjM0MjAxNjIzOmJiNWUxNjQ2YjExYjBjZjIxMzRiN2ZiY2ViOTUyNGE3YmEzMjg4ODZkOGQ4MjNkNzY0NTVhZTZjYzQxYzgzZGQ=--5d264f2dc709c2c2b7cfc05a4376257480a77f4d">
  <meta name="pjax-timeout" content="1000">
  <link rel="sudo-modal" href="/sessions/sudo_modal">
  <meta name="request-id" content="F902:1FA0E:1195675:1986441:5A603D70" data-pjax-transient>
  

  <meta name="selected-link" value="repo_source" data-pjax-transient>

    <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
  <meta name="google-site-verification" content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA">
  <meta name="google-site-verification" content="GXs5KoUUkNCoaAZn7wPN-t01Pywp9M3sEjnt_3_ZWPc">
    <meta name="google-analytics" content="UA-3769691-2">

<meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="https://collector.githubapp.com/github-external/browser_event" name="octolytics-event-url" /><meta content="F902:1FA0E:1195675:1986441:5A603D70" name="octolytics-dimension-request_id" /><meta content="sea" name="octolytics-dimension-region_edge" /><meta content="iad" name="octolytics-dimension-region_render" /><meta content="16659379" name="octolytics-actor-id" /><meta content="xswei" name="octolytics-actor-login" /><meta content="72a8b786cd27412ba348c71058cf2aed3e8f8772266e5c157980395250fb923d" name="octolytics-actor-hash" />
<meta content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-pjax-transient="true" name="analytics-location" />




  <meta class="js-ga-set" name="dimension1" content="Logged In">


  

      <meta name="hostname" content="github.com">
  <meta name="user-login" content="xswei">

      <meta name="expected-hostname" content="github.com">
    <meta name="js-proxy-site-detection-payload" content="OWU0ZWEwZDQ1ZGM0MGU1NzI4OTIyNzBhZGRlNTQ1YWQ2YmFlZjQ5ZjA1Mzk3YjZhYjc4ODI3M2U0ODA1ZTAwYnx7InJlbW90ZV9hZGRyZXNzIjoiMjIwLjE4MS4xNzEuMTI1IiwicmVxdWVzdF9pZCI6IkY5MDI6MUZBMEU6MTE5NTY3NToxOTg2NDQxOjVBNjAzRDcwIiwidGltZXN0YW1wIjoxNTE2MjU2NjQyLCJob3N0IjoiZ2l0aHViLmNvbSJ9">

    <meta name="enabled-features" content="UNIVERSE_BANNER,FREE_TRIALS">

  <meta name="html-safe-nonce" content="95ac36701972faaa3306c820d3f61fe703aeac54">

  <meta http-equiv="x-pjax-version" content="c0275ff3857f879afa7c0ef3fbc951b4">
  

      <link href="https://github.com/d3/d3-collection/commits/master.atom" rel="alternate" title="Recent Commits to d3-collection:master" type="application/atom+xml">

  <meta name="description" content="d3-collection - Handy data structures for elements keyed by string.">
  <meta name="go-import" content="github.com/d3/d3-collection git https://github.com/d3/d3-collection.git">

  <meta content="1562726" name="octolytics-dimension-user_id" /><meta content="d3" name="octolytics-dimension-user_login" /><meta content="49227570" name="octolytics-dimension-repository_id" /><meta content="d3/d3-collection" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="49227570" name="octolytics-dimension-repository_network_root_id" /><meta content="d3/d3-collection" name="octolytics-dimension-repository_network_root_nwo" /><meta content="false" name="octolytics-dimension-repository_explore_github_marketplace_ci_cta_shown" />


    <link rel="canonical" href="https://github.com/d3/d3-collection/blob/master/README.md" data-pjax-transient>


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
  <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/d3/d3-collection/search" class="js-site-search-form" data-scoped-search-url="/d3/d3-collection/search" data-unscoped-search-url="/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <label class="form-control header-search-wrapper js-chromeless-input-container">
        <a href="/d3/d3-collection/blob/master/README.md" class="header-search-scope no-underline">This repository</a>
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
    <span title="d3/d3-collection">This repository</span>
  </div>
    <a class="dropdown-item" href="/d3/d3-collection/issues/new" data-ga-click="Header, create new issue">
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

        <li><!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/logout" class="logout-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="A6HjxqYY4/8xfqaht1L8rVwkGSAVPaJQQkqR5Z2tu26dx2ez7R9Xc0oudCFAwYQdH2jkdU3FVJjwPq5H3AW6EA==" /></div>
          <button type="submit" class="dropdown-item dropdown-signout" data-ga-click="Header, sign out, icon:logout">
            Sign out
          </button>
        </form></li>
      </ul>
    </details>
  </li>
</ul>


        <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/logout" class="sr-only right-0" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="nwqwSXgX+1YkrjVxhnzbWGI500uFiNAaGb+mBpiCuJIBbDQ8MxBP2l/+5/Fx76PoIXUuHt1wJtKry5mk2Sq57A==" /></div>
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
        <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="xo8UkdaE410kptOQryv4AwTD5r2CTR9iyMKFtI1ZDkarZleBMUVRGx95VRr1EW54hljLm9ywIVDqObvn5gQCCQ==" /></div>      <input class="form-control" id="repository_id" name="repository_id" type="hidden" value="49227570" />

        <div class="select-menu js-menu-container js-select-menu">
          <a href="/d3/d3-collection/subscription"
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
            href="/d3/d3-collection/watchers"
            aria-label="10 users are watching this repository">
            10
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
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/d3/d3-collection/unstar" class="starred js-social-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="1myW4Nut9wrFc+lYZno6ZmGXYiXMtUGo7DqxiiFJdyvGS3nqEhyxdyoMPocRv0EnIODlwVbJ4HoX9/OfOkDL0w==" /></div>
      <input type="hidden" name="context" value="repository"></input>
      <button
        type="submit"
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Unstar this repository" title="Unstar d3/d3-collection"
        data-ga-click="Repository, click unstar button, action:blob#show; text:Unstar">
        <svg aria-hidden="true" class="octicon octicon-star" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"/></svg>
        Unstar
      </button>
        <a class="social-count js-social-count" href="/d3/d3-collection/stargazers"
           aria-label="64 users starred this repository">
          64
        </a>
</form>
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/d3/d3-collection/star" class="unstarred js-social-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="439AYdhAj8E8BHcCMiKbe4LKKcBSUQ2VUReFpMozxzZm91xCuWsinruXxdfyaYOyoYVjlU67CsyxyciK8UG2Wg==" /></div>
      <input type="hidden" name="context" value="repository"></input>
      <button
        type="submit"
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Star this repository" title="Star d3/d3-collection"
        data-ga-click="Repository, click star button, action:blob#show; text:Star">
        <svg aria-hidden="true" class="octicon octicon-star" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"/></svg>
        Star
      </button>
        <a class="social-count js-social-count" href="/d3/d3-collection/stargazers"
           aria-label="64 users starred this repository">
          64
        </a>
</form>  </div>

  </li>

  <li>
          <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/d3/d3-collection/fork" class="btn-with-count" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="CrYal8W3KCKDXV9ENTwDUv7vT6YSh6zCarXua5v9TDvZgwK0ByMMZhcu9qxZZLuXpkMLI/wEOaGu16VYX+qvhA==" /></div>
            <button
                type="submit"
                class="btn btn-sm btn-with-count"
                data-ga-click="Repository, show fork modal, action:blob#show; text:Fork"
                title="Fork your own copy of d3/d3-collection to your account"
                aria-label="Fork your own copy of d3/d3-collection to your account">
              <svg aria-hidden="true" class="octicon octicon-repo-forked" height="16" version="1.1" viewBox="0 0 10 16" width="10"><path fill-rule="evenodd" d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
              Fork
            </button>
</form>
    <a href="/d3/d3-collection/network" class="social-count"
       aria-label="23 users forked this repository">
      23
    </a>
  </li>
</ul>

      <h1 class="public ">
  <svg aria-hidden="true" class="octicon octicon-repo" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
  <span class="author" itemprop="author"><a href="/d3" class="url fn" rel="author">d3</a></span><!--
--><span class="path-divider">/</span><!--
--><strong itemprop="name"><a href="/d3/d3-collection" data-pjax="#js-repo-pjax-container">d3-collection</a></strong>

</h1>

    </div>
    
<nav class="reponav js-repo-nav js-sidenav-container-pjax container"
     itemscope
     itemtype="http://schema.org/BreadcrumbList"
     role="navigation"
     data-pjax="#js-repo-pjax-container">

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/d3/d3-collection" class="js-selected-navigation-item selected reponav-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches repo_packages /d3/d3-collection" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-code" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z"/></svg>
      <span itemprop="name">Code</span>
      <meta itemprop="position" content="1">
</a>  </span>

    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a href="/d3/d3-collection/issues" class="js-selected-navigation-item reponav-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /d3/d3-collection/issues" itemprop="url">
        <svg aria-hidden="true" class="octicon octicon-issue-opened" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"/></svg>
        <span itemprop="name">Issues</span>
        <span class="Counter">4</span>
        <meta itemprop="position" content="2">
</a>    </span>

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/d3/d3-collection/pulls" class="js-selected-navigation-item reponav-item" data-hotkey="g p" data-selected-links="repo_pulls /d3/d3-collection/pulls" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-git-pull-request" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M11 11.28V5c-.03-.78-.34-1.47-.94-2.06C9.46 2.35 8.78 2.03 8 2H7V0L4 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0 0 10 15a1.993 1.993 0 0 0 1-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zM4 3c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v6.56A1.993 1.993 0 0 0 2 15a1.993 1.993 0 0 0 1-3.72V4.72c.59-.34 1-.98 1-1.72zm-.8 10c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
      <span itemprop="name">Pull requests</span>
      <span class="Counter">1</span>
      <meta itemprop="position" content="3">
</a>  </span>




  <a href="/d3/d3-collection/pulse" class="js-selected-navigation-item reponav-item" data-selected-links="repo_graphs repo_contributors dependency_graph pulse /d3/d3-collection/pulse">
    <svg aria-hidden="true" class="octicon octicon-graph" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M16 14v1H0V0h1v14h15zM5 13H3V8h2v5zm4 0H7V3h2v10zm4 0h-2V6h2v7z"/></svg>
    Insights
</a>

</nav>


  </div>

<div class="container new-discussion-timeline experiment-repo-nav ">
  <div class="repository-content ">

    
  <a href="/d3/d3-collection/blob/1eff7233bac174045331d275e7e0cb793dfdaa0d/README.md" class="d-none js-permalink-shortcut" data-hotkey="y">Permalink</a>

  <!-- blob contrib key: blob_contributors:v21:59607994f0f5ac2deb678c8f76e91fdf -->

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


            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/d3/d3-collection/blob/master/README.md"
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
              href="/d3/d3-collection/tree/v1.0.4/README.md"
              data-name="v1.0.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.4">
                v1.0.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-collection/tree/v1.0.3/README.md"
              data-name="v1.0.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.3">
                v1.0.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-collection/tree/v1.0.2/README.md"
              data-name="v1.0.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.2">
                v1.0.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-collection/tree/v1.0.1/README.md"
              data-name="v1.0.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.1">
                v1.0.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-collection/tree/v1.0.0/README.md"
              data-name="v1.0.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.0">
                v1.0.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-collection/tree/v0.3.1/README.md"
              data-name="v0.3.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.3.1">
                v0.3.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-collection/tree/v0.3.0/README.md"
              data-name="v0.3.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.3.0">
                v0.3.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-collection/tree/v0.2.0/README.md"
              data-name="v0.2.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.2.0">
                v0.2.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-collection/tree/v0.1.2/README.md"
              data-name="v0.1.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.1.2">
                v0.1.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-collection/tree/v0.1.1/README.md"
              data-name="v0.1.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.1.1">
                v0.1.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-collection/tree/v0.1.0/README.md"
              data-name="v0.1.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.1.0">
                v0.1.0
              </span>
            </a>
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>

    <div class="BtnGroup float-right">
      <a href="/d3/d3-collection/find/master"
            class="js-pjax-capture-input btn btn-sm BtnGroup-item"
            data-pjax
            data-hotkey="t">
        Find file
      </a>
      <button aria-label="Copy file path to clipboard" class="js-zeroclipboard btn btn-sm BtnGroup-item tooltipped tooltipped-s" data-copied-hint="Copied!" type="button">Copy path</button>
    </div>
    <div class="breadcrumb js-zeroclipboard-target">
      <span class="repo-root js-repo-root"><span class="js-path-segment"><a href="/d3/d3-collection"><span>d3-collection</span></a></span></span><span class="separator">/</span><strong class="final-path">README.md</strong>
    </div>
  </div>


  
  <div class="commit-tease">
      <span class="float-right">
        <a class="commit-tease-sha" href="/d3/d3-collection/commit/70d9105e54c77d7b075fe4857576ddf7d851c3aa" data-pjax>
          70d9105
        </a>
        <relative-time datetime="2017-06-21T16:11:27Z">Jun 21, 2017</relative-time>
      </span>
      <div>
        <img alt="@mbostock" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/230541?s=40&amp;v=4" width="20" />
        <a href="/mbostock" class="user-mention" rel="contributor">mbostock</a>
          <a href="/d3/d3-collection/commit/70d9105e54c77d7b075fe4857576ddf7d851c3aa" class="message" data-pjax="true" title="Clarify the interaction of sortValues and rollup.

Rather than ignore the leaf comparator when a rollup function is specified, the
leaf elements are now sorted prior to invoking the rollup function. Fixes #15.">Clarify the interaction of sortValues and rollup.</a>
      </div>

    <div class="commit-tease-contributors">
      <button type="button" class="btn-link muted-link contributors-toggle" data-facebox="#blob_contributors_box">
        <strong>2</strong>
         contributors
      </button>
          <a class="avatar-link tooltipped tooltipped-s" aria-label="mbostock" href="/d3/d3-collection/commits/master/README.md?author=mbostock"><img alt="@mbostock" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/230541?s=40&amp;v=4" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="Devinsuit" href="/d3/d3-collection/commits/master/README.md?author=Devinsuit"><img alt="@Devinsuit" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/11741306?s=40&amp;v=4" width="20" /> </a>


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
      </ul>
    </div>
  </div>


  <div class="file">
    <div class="file-header">
  <div class="file-actions">

    <div class="BtnGroup">
      <a href="/d3/d3-collection/raw/master/README.md" class="btn btn-sm BtnGroup-item" id="raw-url">Raw</a>
        <a href="/d3/d3-collection/blame/master/README.md" class="btn btn-sm js-update-url-with-hash BtnGroup-item" data-hotkey="b">Blame</a>
      <a href="/d3/d3-collection/commits/master/README.md" class="btn btn-sm BtnGroup-item" rel="nofollow">History</a>
    </div>

        <a class="btn-octicon tooltipped tooltipped-nw"
           href="github-windows://openRepo/https://github.com/d3/d3-collection?branch=master&amp;filepath=README.md"
           aria-label="Open this file in GitHub Desktop"
           data-ga-click="Repository, open with desktop, type:windows">
            <svg aria-hidden="true" class="octicon octicon-device-desktop" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M15 2H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5.34c-.25.61-.86 1.39-2.34 2h8c-1.48-.61-2.09-1.39-2.34-2H15c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 9H1V3h14v8z"/></svg>
        </a>

          <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/d3/d3-collection/edit/master/README.md" class="inline-form js-update-url-with-hash" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="aXWwAZkeK+buPrOVhn7jI3aoJ18MHF05xozb7FQ5NfJfb49adCgZekCx8qKzAG4WPt+gGEQlli3sSAF/zxP+7Q==" /></div>
            <button class="btn-octicon tooltipped tooltipped-nw" type="submit"
              aria-label="Fork this project and edit the file" data-hotkey="e" data-disable-with>
              <svg aria-hidden="true" class="octicon octicon-pencil" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z"/></svg>
            </button>
</form>
        <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/d3/d3-collection/delete/master/README.md" class="inline-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="CQu0F/1Wbboier7AvE3omZZdEJV/wMgyYlmy2DwtxsWDZbXaRm1PF5JClZY0/6kDayzNmm/Xj+HKVKCcTTspPQ==" /></div>
          <button class="btn-octicon btn-octicon-danger tooltipped tooltipped-nw" type="submit"
            aria-label="Fork this project and delete the file" data-disable-with>
            <svg aria-hidden="true" class="octicon octicon-trashcan" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M11 2H9c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1H2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1v9c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V5c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 12H3V5h1v8h1V5h1v8h1V5h1v8h1V5h1v9zm1-10H2V3h9v1z"/></svg>
          </button>
</form>  </div>

  <div class="file-info">
      272 lines (167 sloc)
      <span class="file-info-divider"></span>
    18.1 KB
  </div>
</div>

    
  <div id="readme" class="readme blob instapaper_body">
    <article class="markdown-body entry-content" itemprop="text"><h1><a href="#d3-collection" aria-hidden="true" class="anchor" id="user-content-d3-collection"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>d3-collection</h1>
<p>Handy data structures for elements keyed by string.</p>
<h2><a href="#installing" aria-hidden="true" class="anchor" id="user-content-installing"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installing</h2>
<p>If you use NPM, <code>npm install d3-collection</code>. Otherwise, download the <a href="https://github.com/d3/d3-collection/releases/latest">latest release</a>. You can also load directly from <a href="https://d3js.org">d3js.org</a>, either as a <a href="https://d3js.org/d3-collection.v1.min.js">standalone library</a> or as part of <a href="https://github.com/d3/d3">D3 4.0</a>. AMD, CommonJS, and vanilla environments are supported. In vanilla, a <code>d3</code> global is exported:</p>
<div class="highlight highlight-text-html-basic"><pre>&lt;<span class="pl-ent">script</span> <span class="pl-e">src</span>=<span class="pl-s"><span class="pl-pds">"</span>https://d3js.org/d3-collection.v1.min.js<span class="pl-pds">"</span></span>&gt;&lt;/<span class="pl-ent">script</span>&gt;
&lt;<span class="pl-ent">script</span>&gt;<span class="pl-s1"></span>
<span class="pl-s1"></span>
<span class="pl-s1"><span class="pl-k">var</span> map <span class="pl-k">=</span> <span class="pl-smi">d3</span>.<span class="pl-en">map</span>()</span>
<span class="pl-s1">    .<span class="pl-c1">set</span>(<span class="pl-s"><span class="pl-pds">"</span>foo<span class="pl-pds">"</span></span>, <span class="pl-c1">1</span>)</span>
<span class="pl-s1">    .<span class="pl-c1">set</span>(<span class="pl-s"><span class="pl-pds">"</span>bar<span class="pl-pds">"</span></span>, <span class="pl-c1">2</span>);</span>
<span class="pl-s1"></span>
<span class="pl-s1"></span><span class="pl-s1">&lt;</span>/<span class="pl-ent">script</span>&gt;</pre></div>
<p><a href="https://tonicdev.com/npm/d3-collection">Try d3-collection in your browser.</a></p>
<h2><a href="#api-reference" aria-hidden="true" class="anchor" id="user-content-api-reference"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>API Reference</h2>
<ul>
<li><a href="#objects">Objects</a></li>
<li><a href="#maps">Maps</a></li>
<li><a href="#sets">Sets</a></li>
<li><a href="#nests">Nests</a></li>
</ul>
<h3><a href="#objects" aria-hidden="true" class="anchor" id="user-content-objects"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Objects</h3>
<p>A common data type in JavaScript is the <em>associative array</em>, or more simply the <em>object</em>, which has a set of named properties. The standard mechanism for iterating over the keys (or property names) in an associative array is the <a href="https://developer.mozilla.org/en/JavaScript/Reference/Statements/for...in">for…in loop</a>. However, note that the iteration order is undefined. D3 provides several methods for converting associative arrays to standard arrays with numeric indexes.</p>
<p>A word of caution: it is tempting to use plain objects as maps, but this causes <a href="http://www.devthought.com/2012/01/18/an-object-is-not-a-hash/">unexpected behavior</a> when built-in property names are used as keys, such as <code>object["__proto__"] = 42</code> and <code>"hasOwnProperty" in object</code>. If you cannot guarantee that map keys and set values will be safe, use <a href="#maps">maps</a> and <a href="#sets">sets</a> (or their ES6 equivalents) instead of plain objects.</p>
<p><a name="user-content-keys" href="#keys">#</a> d3.<b>keys</b>(<i>object</i>) <a href="https://github.com/d3/d3-collection/blob/master/src/keys.js" title="Source">&lt;&gt;</a></p>
<p>Returns an array containing the property names of the specified object (an associative array). The order of the returned array is undefined.</p>
<p><a name="user-content-values" href="#values">#</a> d3.<b>values</b>(<i>object</i>) <a href="https://github.com/d3/d3-collection/blob/master/src/values.js" title="Source">&lt;&gt;</a></p>
<p>Returns an array containing the property values of the specified object (an associative array). The order of the returned array is undefined.</p>
<p><a name="user-content-entries" href="#entries">#</a> d3.<b>entries</b>(<i>object</i>) <a href="https://github.com/d3/d3-collection/blob/master/src/entries.js" title="Source">&lt;&gt;</a></p>
<p>Returns an array containing the property keys and values of the specified object (an associative array). Each entry is an object with a key and value attribute, such as <code>{key: "foo", value: 42}</code>. The order of the returned array is undefined.</p>
<div class="highlight highlight-source-js"><pre><span class="pl-smi">d3</span>.<span class="pl-c1">entries</span>({foo<span class="pl-k">:</span> <span class="pl-c1">42</span>, bar<span class="pl-k">:</span> <span class="pl-c1">true</span>}); <span class="pl-c"><span class="pl-c">//</span> [{key: "foo", value: 42}, {key: "bar", value: true}]</span></pre></div>
<h3><a href="#maps" aria-hidden="true" class="anchor" id="user-content-maps"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Maps</h3>
<p>Like <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map">ES6 Maps</a>, but with a few differences:</p>
<ul>
<li>Keys are coerced to strings.</li>
<li><a href="#map_each">map.each</a>, not <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/forEach">map.forEach</a>. (Also, no <em>thisArg</em>.)</li>
<li><a href="#map_remove">map.remove</a>, not <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/delete">map.delete</a>.</li>
<li><a href="#map_entries">map.entries</a> returns an array of {key, value} objects, not an iterator of [key, value].</li>
<li><a href="#map_size">map.size</a> is a method, not a <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/size">property</a>; also, there’s <a href="#map_empty">map.empty</a>.</li>
</ul>
<p><a name="user-content-map" href="#map">#</a> d3.<b>map</b>([<i>object</i>[, <i>key</i>]]) <a href="https://github.com/d3/d3-collection/blob/master/src/map.js" title="Source">&lt;&gt;</a></p>
<p>Constructs a new map. If <em>object</em> is specified, copies all enumerable properties from the specified object into this map. The specified object may also be an array or another map. An optional <em>key</em> function may be specified to compute the key for each value in the array. For example:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">var</span> map <span class="pl-k">=</span> <span class="pl-smi">d3</span>.<span class="pl-en">map</span>([{name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>foo<span class="pl-pds">"</span></span>}, {name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>bar<span class="pl-pds">"</span></span>}], <span class="pl-k">function</span>(<span class="pl-smi">d</span>) { <span class="pl-k">return</span> <span class="pl-smi">d</span>.<span class="pl-c1">name</span>; });
<span class="pl-smi">map</span>.<span class="pl-c1">get</span>(<span class="pl-s"><span class="pl-pds">"</span>foo<span class="pl-pds">"</span></span>); <span class="pl-c"><span class="pl-c">//</span> {"name": "foo"}</span>
<span class="pl-smi">map</span>.<span class="pl-c1">get</span>(<span class="pl-s"><span class="pl-pds">"</span>bar<span class="pl-pds">"</span></span>); <span class="pl-c"><span class="pl-c">//</span> {"name": "bar"}</span>
<span class="pl-smi">map</span>.<span class="pl-c1">get</span>(<span class="pl-s"><span class="pl-pds">"</span>baz<span class="pl-pds">"</span></span>); <span class="pl-c"><span class="pl-c">//</span> undefined</span></pre></div>
<p>See also <a href="#nests">nests</a>.</p>
<p><a name="user-content-map_has" href="#map_has">#</a> <i>map</i>.<b>has</b>(<i>key</i>) <a href="https://github.com/d3/d3-collection/blob/master/src/map.js#L7" title="Source">&lt;&gt;</a></p>
<p>Returns true if and only if this map has an entry for the specified <em>key</em> string. Note: the value may be <code>null</code> or <code>undefined</code>.</p>
<p><a name="user-content-map_get" href="#map_get">#</a> <i>map</i>.<b>get</b>(<i>key</i>) <a href="https://github.com/d3/d3-collection/blob/master/src/map.js#L10" title="Source">&lt;&gt;</a></p>
<p>Returns the value for the specified <em>key</em> string. If the map does not have an entry for the specified <em>key</em>, returns <code>undefined</code>.</p>
<p><a name="user-content-map_set" href="#map_set">#</a> <i>map</i>.<b>set</b>(<i>key</i>, <i>value</i>) <a href="https://github.com/d3/d3-collection/blob/master/src/map.js#L13" title="Source">&lt;&gt;</a></p>
<p>Sets the <em>value</em> for the specified <em>key</em> string. If the map previously had an entry for the same <em>key</em> string, the old entry is replaced with the new value. Returns the map, allowing chaining. For example:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">var</span> map <span class="pl-k">=</span> <span class="pl-smi">d3</span>.<span class="pl-en">map</span>()
    .<span class="pl-c1">set</span>(<span class="pl-s"><span class="pl-pds">"</span>foo<span class="pl-pds">"</span></span>, <span class="pl-c1">1</span>)
    .<span class="pl-c1">set</span>(<span class="pl-s"><span class="pl-pds">"</span>bar<span class="pl-pds">"</span></span>, <span class="pl-c1">2</span>)
    .<span class="pl-c1">set</span>(<span class="pl-s"><span class="pl-pds">"</span>baz<span class="pl-pds">"</span></span>, <span class="pl-c1">3</span>);

<span class="pl-smi">map</span>.<span class="pl-c1">get</span>(<span class="pl-s"><span class="pl-pds">"</span>foo<span class="pl-pds">"</span></span>); <span class="pl-c"><span class="pl-c">//</span> 1</span></pre></div>
<p><a name="user-content-map_remove" href="#map_remove">#</a> <i>map</i>.<b>remove</b>(<i>key</i>) <a href="https://github.com/d3/d3-collection/blob/master/src/map.js#L17" title="Source">&lt;&gt;</a></p>
<p>If the map has an entry for the specified <em>key</em> string, removes the entry and returns true. Otherwise, this method does nothing and returns false.</p>
<p><a name="user-content-map_clear" href="#map_clear">#</a> <i>map</i>.<b>clear</b>() <a href="https://github.com/d3/d3-collection/blob/master/src/map.js#L21" title="Source">&lt;&gt;</a></p>
<p>Removes all entries from this map.</p>
<p><a name="user-content-map_keys" href="#map_keys">#</a> <i>map</i>.<b>keys</b>() <a href="https://github.com/d3/d3-collection/blob/master/src/map.js#L24" title="Source">&lt;&gt;</a></p>
<p>Returns an array of string keys for every entry in this map. The order of the returned keys is arbitrary.</p>
<p><a name="user-content-map_values" href="#map_values">#</a> <i>map</i>.<b>values</b>() <a href="https://github.com/d3/d3-collection/blob/master/src/map.js#L29" title="Source">&lt;&gt;</a></p>
<p>Returns an array of values for every entry in this map. The order of the returned values is arbitrary.</p>
<p><a name="user-content-map_entries" href="#map_entries">#</a> <i>map</i>.<b>entries</b>() <a href="https://github.com/d3/d3-collection/blob/master/src/map.js#L34" title="Source">&lt;&gt;</a></p>
<p>Returns an array of key-value objects for each entry in this map. The order of the returned entries is arbitrary. Each entry’s key is a string, but the value has arbitrary type.</p>
<p><a name="user-content-map_each" href="#map_each">#</a> <i>map</i>.<b>each</b>(<i>function</i>) <a href="https://github.com/d3/d3-collection/blob/master/src/map.js#L48" title="Source">&lt;&gt;</a></p>
<p>Calls the specified <em>function</em> for each entry in this map, passing the entry’s value and key as arguments, followed by the map itself. Returns undefined. The iteration order is arbitrary.</p>
<p><a name="user-content-map_empty" href="#map_empty">#</a> <i>map</i>.<b>empty</b>() <a href="https://github.com/d3/d3-collection/blob/master/src/map.js#L44" title="Source">&lt;&gt;</a></p>
<p>Returns true if and only if this map has zero entries.</p>
<p><a name="user-content-map_size" href="#map_size">#</a> <i>map</i>.<b>size</b>() <a href="https://github.com/d3/d3-collection/blob/master/src/map.js#L39" title="Source">&lt;&gt;</a></p>
<p>Returns the number of entries in this map.</p>
<h3><a href="#sets" aria-hidden="true" class="anchor" id="user-content-sets"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Sets</h3>
<p>Like <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set">ES6 Sets</a>, but with a few differences:</p>
<ul>
<li>Values are coerced to strings.</li>
<li><a href="#set_each">set.each</a>, not <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/forEach">set.forEach</a>. (Also, no <em>thisArg</em>.)</li>
<li><a href="#set_remove">set.remove</a>, not <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/delete">set.delete</a>.</li>
<li><a href="#set_size">set.size</a> is a method, not a <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/size">property</a>; also, there’s <a href="#set_empty">set.empty</a>.</li>
</ul>
<p><a name="user-content-set" href="#set">#</a> d3.<b>set</b>([<i>array</i>[, <i>accessor</i>]]) <a href="https://github.com/d3/d3-collection/blob/master/src/set.js" title="Source">&lt;&gt;</a></p>
<p>Constructs a new set. If <em>array</em> is specified, adds the given <em>array</em> of string values to the returned set. The specified array may also be another set. An optional <em>accessor</em> function may be specified, which is equivalent to calling <em>array.map(accessor)</em> before constructing the set.</p>
<p><a name="user-content-set_has" href="#set_has">#</a> <i>set</i>.<b>has</b>(<i>value</i>) <a href="https://github.com/d3/d3-collection/blob/master/src/set.js#L9" title="Source">&lt;&gt;</a></p>
<p>Returns true if and only if this set has an entry for the specified <em>value</em> string.</p>
<p><a name="user-content-set_add" href="#set_add">#</a> <i>set</i>.<b>add</b>(<i>value</i>) <a href="https://github.com/d3/d3-collection/blob/master/src/set.js#L10" title="Source">&lt;&gt;</a></p>
<p>Adds the specified <em>value</em> string to this set. Returns the set, allowing chaining. For example:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">var</span> set <span class="pl-k">=</span> <span class="pl-smi">d3</span>.<span class="pl-c1">set</span>()
    .<span class="pl-c1">add</span>(<span class="pl-s"><span class="pl-pds">"</span>foo<span class="pl-pds">"</span></span>)
    .<span class="pl-c1">add</span>(<span class="pl-s"><span class="pl-pds">"</span>bar<span class="pl-pds">"</span></span>)
    .<span class="pl-c1">add</span>(<span class="pl-s"><span class="pl-pds">"</span>baz<span class="pl-pds">"</span></span>);

<span class="pl-smi">set</span>.<span class="pl-c1">has</span>(<span class="pl-s"><span class="pl-pds">"</span>foo<span class="pl-pds">"</span></span>); <span class="pl-c"><span class="pl-c">//</span> true</span></pre></div>
<p><a name="user-content-set_remove" href="#set_remove">#</a> <i>set</i>.<b>remove</b>(<i>value</i>) <a href="https://github.com/d3/d3-collection/blob/master/src/set.js#L15" title="Source">&lt;&gt;</a></p>
<p>If the set contains the specified <em>value</em> string, removes it and returns true. Otherwise, this method does nothing and returns false.</p>
<p><a name="user-content-set_clear" href="#set_clear">#</a> <i>set</i>.<b>clear</b>() <a href="https://github.com/d3/d3-collection/blob/master/src/set.js#L16" title="Source">&lt;&gt;</a></p>
<p>Removes all values from this set.</p>
<p><a name="user-content-set_values" href="#set_values">#</a> <i>set</i>.<b>values</b>() <a href="https://github.com/d3/d3-collection/blob/master/src/set.js#L17" title="Source">&lt;&gt;</a></p>
<p>Returns an array of the string values in this set. The order of the returned values is arbitrary. Can be used as a convenient way of computing the unique values for a set of strings. For example:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-smi">d3</span>.<span class="pl-c1">set</span>([<span class="pl-s"><span class="pl-pds">"</span>foo<span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>bar<span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>foo<span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>baz<span class="pl-pds">"</span></span>]).<span class="pl-c1">values</span>(); <span class="pl-c"><span class="pl-c">//</span> "foo", "bar", "baz"</span></pre></div>
<p><a name="user-content-set_each" href="#set_each">#</a> <i>set</i>.<b>each</b>(<i>function</i>) <a href="https://github.com/d3/d3-collection/blob/master/src/set.js#L20" title="Source">&lt;&gt;</a></p>
<p>Calls the specified <em>function</em> for each value in this set, passing the value as the first two arguments (for symmetry with <a href="#map_each"><em>map</em>.each</a>), followed by the set itself. Returns undefined. The iteration order is arbitrary.</p>
<p><a name="user-content-set_empty" href="#set_empty">#</a> <i>set</i>.<b>empty</b>() <a href="https://github.com/d3/d3-collection/blob/master/src/set.js#L19" title="Source">&lt;&gt;</a></p>
<p>Returns true if and only if this set has zero values.</p>
<p><a name="user-content-set_size" href="#set_size">#</a> <i>set</i>.<b>size</b>() <a href="https://github.com/d3/d3-collection/blob/master/src/set.js#L18" title="Source">&lt;&gt;</a></p>
<p>Returns the number of values in this set.</p>
<h3><a href="#nests" aria-hidden="true" class="anchor" id="user-content-nests"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Nests</h3>
<p>Nesting allows elements in an array to be grouped into a hierarchical tree structure; think of it like the GROUP BY operator in SQL, except you can have multiple levels of grouping, and the resulting output is a tree rather than a flat table. The levels in the tree are specified by key functions. The leaf nodes of the tree can be sorted by value, while the internal nodes can be sorted by key. An optional rollup function will collapse the elements in each leaf node using a summary function. The nest operator (the object returned by <a href="#nest">nest</a>) is reusable, and does not retain any references to the data that is nested.</p>
<p>For example, consider the following tabular data structure of Barley yields, from various sites in Minnesota during 1931-2:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">var</span> yields <span class="pl-k">=</span> [
  {yield<span class="pl-k">:</span> <span class="pl-c1">27.00</span>, variety<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>Manchuria<span class="pl-pds">"</span></span>, year<span class="pl-k">:</span> <span class="pl-c1">1931</span>, site<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>University Farm<span class="pl-pds">"</span></span>},
  {yield<span class="pl-k">:</span> <span class="pl-c1">48.87</span>, variety<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>Manchuria<span class="pl-pds">"</span></span>, year<span class="pl-k">:</span> <span class="pl-c1">1931</span>, site<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>Waseca<span class="pl-pds">"</span></span>},
  {yield<span class="pl-k">:</span> <span class="pl-c1">27.43</span>, variety<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>Manchuria<span class="pl-pds">"</span></span>, year<span class="pl-k">:</span> <span class="pl-c1">1931</span>, site<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>Morris<span class="pl-pds">"</span></span>},
  <span class="pl-k">...</span>
];</pre></div>
<p>To facilitate visualization, it may be useful to nest the elements first by year, and then by variety, as follows:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">var</span> entries <span class="pl-k">=</span> <span class="pl-smi">d3</span>.<span class="pl-en">nest</span>()
    .<span class="pl-c1">key</span>(<span class="pl-k">function</span>(<span class="pl-smi">d</span>) { <span class="pl-k">return</span> <span class="pl-smi">d</span>.<span class="pl-smi">year</span>; })
    .<span class="pl-c1">key</span>(<span class="pl-k">function</span>(<span class="pl-smi">d</span>) { <span class="pl-k">return</span> <span class="pl-smi">d</span>.<span class="pl-smi">variety</span>; })
    .<span class="pl-c1">entries</span>(yields);</pre></div>
<p>This returns a nested array. Each element of the outer array is a key-values pair, listing the values for each distinct key:</p>
<div class="highlight highlight-source-js"><pre>[{key<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>1931<span class="pl-pds">"</span></span>, values<span class="pl-k">:</span> [
   {key<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>Manchuria<span class="pl-pds">"</span></span>, values<span class="pl-k">:</span> [
     {yield<span class="pl-k">:</span> <span class="pl-c1">27.00</span>, variety<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>Manchuria<span class="pl-pds">"</span></span>, year<span class="pl-k">:</span> <span class="pl-c1">1931</span>, site<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>University Farm<span class="pl-pds">"</span></span>},
     {yield<span class="pl-k">:</span> <span class="pl-c1">48.87</span>, variety<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>Manchuria<span class="pl-pds">"</span></span>, year<span class="pl-k">:</span> <span class="pl-c1">1931</span>, site<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>Waseca<span class="pl-pds">"</span></span>},
     {yield<span class="pl-k">:</span> <span class="pl-c1">27.43</span>, variety<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>Manchuria<span class="pl-pds">"</span></span>, year<span class="pl-k">:</span> <span class="pl-c1">1931</span>, site<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>Morris<span class="pl-pds">"</span></span>}, <span class="pl-k">...</span>]},
   {key<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>Glabron<span class="pl-pds">"</span></span>, values<span class="pl-k">:</span> [
     {yield<span class="pl-k">:</span> <span class="pl-c1">43.07</span>, variety<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>Glabron<span class="pl-pds">"</span></span>, year<span class="pl-k">:</span> <span class="pl-c1">1931</span>, site<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>University Farm<span class="pl-pds">"</span></span>},
     {yield<span class="pl-k">:</span> <span class="pl-c1">55.20</span>, variety<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>Glabron<span class="pl-pds">"</span></span>, year<span class="pl-k">:</span> <span class="pl-c1">1931</span>, site<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>Waseca<span class="pl-pds">"</span></span>}, <span class="pl-k">...</span>]}, <span class="pl-k">...</span>]},
 {key<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>1932<span class="pl-pds">"</span></span>, values<span class="pl-k">:</span> <span class="pl-k">...</span>}]</pre></div>
<p>The nested form allows easy iteration and generation of hierarchical structures in SVG or HTML.</p>
<p>For a longer introduction to nesting, see:</p>
<ul>
<li>Phoebe Bright’s <a href="http://bl.ocks.org/phoebebright/raw/3176159/">D3 Nest Tutorial and examples</a></li>
<li>Shan Carter’s <a href="http://bl.ocks.org/shancarter/raw/4748131/">Mister Nester</a></li>
</ul>
<p><a name="user-content-nest" href="#nest">#</a> d3.<b>nest</b>() <a href="https://github.com/d3/d3-collection/blob/master/src/nest.js" title="Source">&lt;&gt;</a></p>
<p>Creates a new nest operator. The set of keys is initially empty.</p>
<p><a name="user-content-nest_key" href="#nest_key">#</a> <i>nest</i>.<b>key</b>(<i>key</i>) <a href="https://github.com/d3/d3-collection/blob/master/src/nest.js#L4" title="Source">&lt;&gt;</a></p>
<p>Registers a new <em>key</em> function. The <em>key</em> function will be invoked for each element in the input array and must return a string identifier to assign the element to its group. Most often, the function is a simple accessor, such as the year and variety accessors above. (Keys functions are <em>not</em> passed the input array index.) Each time a key is registered, it is pushed onto the end of the internal array of keys, and the nest operator applies an additional level of nesting.</p>
<p><a name="user-content-nest_sortKeys" href="#nest_sortKeys">#</a> <i>nest</i>.<b>sortKeys</b>(<i>comparator</i>) <a href="https://github.com/d3/d3-collection/blob/master/src/nest.js#L5" title="Source">&lt;&gt;</a></p>
<p>Sorts key values for the <a href="#nest_key">current key</a> using the specified <em>comparator</em> function, such as <a href="https://github.com/d3/d3-array#ascending">d3.ascending</a> or <a href="https://github.com/d3/d3-array#descending">d3.descending</a>. If no comparator is specified for the current key, the order in which keys will be returned is undefined. For example, to sort years in ascending order and varieties in descending order:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">var</span> entries <span class="pl-k">=</span> <span class="pl-smi">d3</span>.<span class="pl-en">nest</span>()
    .<span class="pl-c1">key</span>(<span class="pl-k">function</span>(<span class="pl-smi">d</span>) { <span class="pl-k">return</span> <span class="pl-smi">d</span>.<span class="pl-smi">year</span>; }).<span class="pl-en">sortKeys</span>(<span class="pl-smi">d3</span>.<span class="pl-smi">ascending</span>)
    .<span class="pl-c1">key</span>(<span class="pl-k">function</span>(<span class="pl-smi">d</span>) { <span class="pl-k">return</span> <span class="pl-smi">d</span>.<span class="pl-smi">variety</span>; }).<span class="pl-en">sortKeys</span>(<span class="pl-smi">d3</span>.<span class="pl-smi">descending</span>)
    .<span class="pl-c1">entries</span>(yields);</pre></div>
<p>Note that this only affects the result of <a href="#nest_entries"><em>nest</em>.entries</a>; the order of keys returned by <a href="#nest_map"><em>nest</em>.map</a> and <a href="#nest_object"><em>nest</em>.object</a> is always undefined, regardless of comparator.</p>
<p><a name="user-content-nest_sortValues" href="#nest_sortValues">#</a> <i>nest</i>.<b>sortValues</b>(<i>comparator</i>) <a href="https://github.com/d3/d3-collection/blob/master/src/nest.js#L6" title="Source">&lt;&gt;</a></p>
<p>Sorts leaf elements using the specified <em>comparator</em> function, such as <a href="https://github.com/d3/d3-array#ascending">d3.ascending</a> or <a href="https://github.com/d3/d3-array#descending">d3.descending</a>. This is roughly equivalent to sorting the input array before applying the nest operator; however it is typically more efficient as the size of each group is smaller. If no value comparator is specified, elements will be returned in the order they appeared in the input array. This applies to <a href="#nest_map"><em>nest</em>.map</a>, <a href="#nest_entries"><em>nest</em>.entries</a> and <a href="#nest_object"><em>nest</em>.object</a>.</p>
<p><a name="user-content-nest_rollup" href="#nest_rollup">#</a> <i>nest</i>.<b>rollup</b>(<i>function</i>) <a href="https://github.com/d3/d3-collection/blob/master/src/nest.js#L7" title="Source">&lt;&gt;</a></p>
<p>Specifies a rollup <em>function</em> to be applied on each group of leaf elements. The return value of the rollup function will replace the array of leaf values in either the associative array returned by <a href="#nest_map"><em>nest</em>.map</a> or <a href="#nest_object"><em>nest</em>.object</a>; for <a href="#nest_entries"><em>nest</em>.entries</a>, it replaces the leaf <em>entry</em>.values with <em>entry</em>.value. If a <a href="#nest_sortValues">leaf comparator</a> is specified, the leaf elements are sorted prior to invoking the rollup function.</p>
<p><a name="user-content-nest_map" href="#nest_map">#</a> <i>nest</i>.<b>map</b>(<i>array</i>) <a href="https://github.com/d3/d3-collection/blob/master/src/nest.js#L50" title="Source">&lt;&gt;</a></p>
<p>Applies the nest operator to the specified <em>array</em>, returning a nested <a href="#map">map</a>. Each entry in the returned map corresponds to a distinct key value returned by the first key function. The entry value depends on the number of registered key functions: if there is an additional key, the value is another map; otherwise, the value is the array of elements filtered from the input <em>array</em> that have the given key value. If no keys are defined, returns the input <em>array</em>.</p>
<p><a name="user-content-nest_object" href="#nest_object">#</a> <i>nest</i>.<b>object</b>(<i>array</i>) <a href="https://github.com/d3/d3-collection/blob/master/src/nest.js#L49" title="Source">&lt;&gt;</a></p>
<p>Applies the nest operator to the specified <em>array</em>, returning a nested object. Each entry in the returned associative array corresponds to a distinct key value returned by the first key function. The entry value depends on the number of registered key functions: if there is an additional key, the value is another associative array; otherwise, the value is the array of elements filtered from the input <em>array</em> that have the given key value.</p>
<p>Note: this method is unsafe if any of the keys conflict with built-in JavaScript properties, such as <code>__proto__</code>. If you cannot guarantee that the keys will be safe, you should use <a href="#nest_map">nest.map</a> instead.</p>
<p><a name="user-content-nest_entries" href="#nest_entries">#</a> <i>nest</i>.<b>entries</b>(<i>array</i>) <a href="https://github.com/d3/d3-collection/blob/master/src/nest.js#L51" title="Source">&lt;&gt;</a></p>
<p>Applies the nest operator to the specified <em>array</em>, returning an array of key-values entries. Conceptually, this is similar to applying <a href="#map_entries"><em>map</em>.entries</a> to the associative array returned by <a href="#nest_map"><em>nest</em>.map</a>, but it applies to every level of the hierarchy rather than just the first (outermost) level. Each entry in the returned array corresponds to a distinct key value returned by the first key function. The entry value depends on the number of registered key functions: if there is an additional key, the value is another nested array of entries; otherwise, the value is the array of elements filtered from the input <em>array</em> that have the given key value.</p>
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
      <li class="mr-3">&copy; 2018 <span title="0.37320s from unicorn-2657157768-6pt21">GitHub</span>, Inc.</li>
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


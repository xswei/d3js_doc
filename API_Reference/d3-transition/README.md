





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
  
  <title>d3-transition/README.md at master · d3/d3-transition</title>
  <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
  <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
  <meta property="fb:app_id" content="1401488693436528">

    
    <meta content="https://avatars3.githubusercontent.com/u/1562726?s=400&amp;v=4" property="og:image" /><meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="d3/d3-transition" property="og:title" /><meta content="https://github.com/d3/d3-transition" property="og:url" /><meta content="d3-transition - Animated transitions for D3 selections." property="og:description" />

  <link rel="assets" href="https://assets-cdn.github.com/">
  <link rel="web-socket" href="wss://live.github.com/_sockets/VjI6MjM0MjAxNjIzOjZkZTBiZDVlZDM0OWIxYWVmN2EwOTA2ZGRjMjRjOWMzZTdkNzUzMDQ2OGU0YTNhY2Q2ODg3NTUyZDA4YmE1ZTg=--e9a5708616487757f63f2890897382024c7fd94a">
  <meta name="pjax-timeout" content="1000">
  <link rel="sudo-modal" href="/sessions/sudo_modal">
  <meta name="request-id" content="FC26:1FA0E:11A97DB:19A375F:5A603F2C" data-pjax-transient>
  

  <meta name="selected-link" value="repo_source" data-pjax-transient>

    <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
  <meta name="google-site-verification" content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA">
  <meta name="google-site-verification" content="GXs5KoUUkNCoaAZn7wPN-t01Pywp9M3sEjnt_3_ZWPc">
    <meta name="google-analytics" content="UA-3769691-2">

<meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="https://collector.githubapp.com/github-external/browser_event" name="octolytics-event-url" /><meta content="FC26:1FA0E:11A97DB:19A375F:5A603F2C" name="octolytics-dimension-request_id" /><meta content="sea" name="octolytics-dimension-region_edge" /><meta content="iad" name="octolytics-dimension-region_render" /><meta content="16659379" name="octolytics-actor-id" /><meta content="xswei" name="octolytics-actor-login" /><meta content="72a8b786cd27412ba348c71058cf2aed3e8f8772266e5c157980395250fb923d" name="octolytics-actor-hash" />
<meta content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-pjax-transient="true" name="analytics-location" />




  <meta class="js-ga-set" name="dimension1" content="Logged In">


  

      <meta name="hostname" content="github.com">
  <meta name="user-login" content="xswei">

      <meta name="expected-hostname" content="github.com">
    <meta name="js-proxy-site-detection-payload" content="OWFkYzRmN2FhZGJiZDhhYTQ0NjdjOGIwN2IzYzBlZmE3MWQ5M2I4ZTI4MWQyYmQ4NDc2YjBmYmM3MTljNzZlZnx7InJlbW90ZV9hZGRyZXNzIjoiMjIwLjE4MS4xNzEuMTI1IiwicmVxdWVzdF9pZCI6IkZDMjY6MUZBMEU6MTFBOTdEQjoxOUEzNzVGOjVBNjAzRjJDIiwidGltZXN0YW1wIjoxNTE2MjU3MDY5LCJob3N0IjoiZ2l0aHViLmNvbSJ9">

    <meta name="enabled-features" content="LOG_ACCESSIBILITY,UNIVERSE_BANNER,FREE_TRIALS">

  <meta name="html-safe-nonce" content="95ac36701972faaa3306c820d3f61fe703aeac54">

  <meta http-equiv="x-pjax-version" content="c0275ff3857f879afa7c0ef3fbc951b4">
  

      <link href="https://github.com/d3/d3-transition/commits/master.atom" rel="alternate" title="Recent Commits to d3-transition:master" type="application/atom+xml">

  <meta name="description" content="d3-transition - Animated transitions for D3 selections.">
  <meta name="go-import" content="github.com/d3/d3-transition git https://github.com/d3/d3-transition.git">

  <meta content="1562726" name="octolytics-dimension-user_id" /><meta content="d3" name="octolytics-dimension-user_login" /><meta content="36456582" name="octolytics-dimension-repository_id" /><meta content="d3/d3-transition" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="36456582" name="octolytics-dimension-repository_network_root_id" /><meta content="d3/d3-transition" name="octolytics-dimension-repository_network_root_nwo" /><meta content="false" name="octolytics-dimension-repository_explore_github_marketplace_ci_cta_shown" />


    <link rel="canonical" href="https://github.com/d3/d3-transition/blob/master/README.md" data-pjax-transient>


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
  <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/d3/d3-transition/search" class="js-site-search-form" data-scoped-search-url="/d3/d3-transition/search" data-unscoped-search-url="/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <label class="form-control header-search-wrapper js-chromeless-input-container">
        <a href="/d3/d3-transition/blob/master/README.md" class="header-search-scope no-underline">This repository</a>
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
    <span title="d3/d3-transition">This repository</span>
  </div>
    <a class="dropdown-item" href="/d3/d3-transition/issues/new" data-ga-click="Header, create new issue">
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

        <li><!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/logout" class="logout-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="AAd5dQd76IBF0z/u21GIDlJjHjDiP8CXF1yvLVIA94ueYf0ATHxcDD6D7W4swvC+ES/jZbrHNl+lKJCPE6j29Q==" /></div>
          <button type="submit" class="dropdown-item dropdown-signout" data-ga-click="Header, sign out, icon:logout">
            Sign out
          </button>
        </form></li>
      </ul>
    </details>
  </li>
</ul>


        <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/logout" class="sr-only right-0" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="vHvAVd/DwZ1hiVsKWcmh3jRI+CVX7Tm1WF6bRTSaE38iHUQglMR1ERrZiYquWtludwQFcA8Vz33qKqTndTISAQ==" /></div>
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
        <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="OGSjblZxuc/2ax4nBkQ3NzzzDP8Ki3qzIVY/qhosxCZVjeB+sbALic20mK1cfqFMvmgh2VR2RIEDrQH5cXHIaQ==" /></div>      <input class="form-control" id="repository_id" name="repository_id" type="hidden" value="36456582" />

        <div class="select-menu js-menu-container js-select-menu">
          <a href="/d3/d3-transition/subscription"
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
            href="/d3/d3-transition/watchers"
            aria-label="14 users are watching this repository">
            14
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
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/d3/d3-transition/unstar" class="starred js-social-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="NkCvo0eaB/CbbqJp8ok9AZtYJ8geB1KZKK4dWCBkKk/MldCmDYhEBLbuGamWxHe80yRwhfHXSC2oct0U0wAJ9g==" /></div>
      <input type="hidden" name="context" value="repository"></input>
      <button
        type="submit"
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Unstar this repository" title="Unstar d3/d3-transition"
        data-ga-click="Repository, click unstar button, action:blob#show; text:Unstar">
        <svg aria-hidden="true" class="octicon octicon-star" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"/></svg>
        Unstar
      </button>
        <a class="social-count js-social-count" href="/d3/d3-transition/stargazers"
           aria-label="83 users starred this repository">
          83
        </a>
</form>
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/d3/d3-transition/star" class="unstarred js-social-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="1uaSdM3UIynxBedKc2reHu29jMZ1hMbw7btYxXm9CC/Zmz24jJBSCe40B7RrcNphUqNMvuJWRb/syVNE9+VXmQ==" /></div>
      <input type="hidden" name="context" value="repository"></input>
      <button
        type="submit"
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Star this repository" title="Star d3/d3-transition"
        data-ga-click="Repository, click star button, action:blob#show; text:Star">
        <svg aria-hidden="true" class="octicon octicon-star" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"/></svg>
        Star
      </button>
        <a class="social-count js-social-count" href="/d3/d3-transition/stargazers"
           aria-label="83 users starred this repository">
          83
        </a>
</form>  </div>

  </li>

  <li>
          <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/d3/d3-transition/fork" class="btn-with-count" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="TLC2Pq2puYFLE+KQDv7f6kB0Wzf9Ldz6Q/EVmFPiA5z7lgHShsfzCBYDhqjKq2P8nWS0G2VycKRN0XG2dONvrA==" /></div>
            <button
                type="submit"
                class="btn btn-sm btn-with-count"
                data-ga-click="Repository, show fork modal, action:blob#show; text:Fork"
                title="Fork your own copy of d3/d3-transition to your account"
                aria-label="Fork your own copy of d3/d3-transition to your account">
              <svg aria-hidden="true" class="octicon octicon-repo-forked" height="16" version="1.1" viewBox="0 0 10 16" width="10"><path fill-rule="evenodd" d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
              Fork
            </button>
</form>
    <a href="/d3/d3-transition/network" class="social-count"
       aria-label="28 users forked this repository">
      28
    </a>
  </li>
</ul>

      <h1 class="public ">
  <svg aria-hidden="true" class="octicon octicon-repo" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
  <span class="author" itemprop="author"><a href="/d3" class="url fn" rel="author">d3</a></span><!--
--><span class="path-divider">/</span><!--
--><strong itemprop="name"><a href="/d3/d3-transition" data-pjax="#js-repo-pjax-container">d3-transition</a></strong>

</h1>

    </div>
    
<nav class="reponav js-repo-nav js-sidenav-container-pjax container"
     itemscope
     itemtype="http://schema.org/BreadcrumbList"
     role="navigation"
     data-pjax="#js-repo-pjax-container">

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/d3/d3-transition" class="js-selected-navigation-item selected reponav-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches repo_packages /d3/d3-transition" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-code" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z"/></svg>
      <span itemprop="name">Code</span>
      <meta itemprop="position" content="1">
</a>  </span>

    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a href="/d3/d3-transition/issues" class="js-selected-navigation-item reponav-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /d3/d3-transition/issues" itemprop="url">
        <svg aria-hidden="true" class="octicon octicon-issue-opened" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"/></svg>
        <span itemprop="name">Issues</span>
        <span class="Counter">9</span>
        <meta itemprop="position" content="2">
</a>    </span>

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/d3/d3-transition/pulls" class="js-selected-navigation-item reponav-item" data-hotkey="g p" data-selected-links="repo_pulls /d3/d3-transition/pulls" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-git-pull-request" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M11 11.28V5c-.03-.78-.34-1.47-.94-2.06C9.46 2.35 8.78 2.03 8 2H7V0L4 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0 0 10 15a1.993 1.993 0 0 0 1-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zM4 3c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v6.56A1.993 1.993 0 0 0 2 15a1.993 1.993 0 0 0 1-3.72V4.72c.59-.34 1-.98 1-1.72zm-.8 10c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
      <span itemprop="name">Pull requests</span>
      <span class="Counter">0</span>
      <meta itemprop="position" content="3">
</a>  </span>




  <a href="/d3/d3-transition/pulse" class="js-selected-navigation-item reponav-item" data-selected-links="repo_graphs repo_contributors dependency_graph pulse /d3/d3-transition/pulse">
    <svg aria-hidden="true" class="octicon octicon-graph" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M16 14v1H0V0h1v14h15zM5 13H3V8h2v5zm4 0H7V3h2v10zm4 0h-2V6h2v7z"/></svg>
    Insights
</a>

</nav>


  </div>

<div class="container new-discussion-timeline experiment-repo-nav ">
  <div class="repository-content ">

    
  <a href="/d3/d3-transition/blob/f09357690900a61e77fec5c86af5c03d1196ce9a/README.md" class="d-none js-permalink-shortcut" data-hotkey="y">Permalink</a>

  <!-- blob contrib key: blob_contributors:v21:f39b1fbc9f9c67e1d7a0e827957c89ce -->

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
               href="/d3/d3-transition/blob/cancel/README.md"
               data-name="cancel"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                cancel
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/d3/d3-transition/blob/master/README.md"
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
              href="/d3/d3-transition/tree/v1.1.1/README.md"
              data-name="v1.1.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.1.1">
                v1.1.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-transition/tree/v1.1.0/README.md"
              data-name="v1.1.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.1.0">
                v1.1.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-transition/tree/v1.0.4/README.md"
              data-name="v1.0.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.4">
                v1.0.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-transition/tree/v1.0.3/README.md"
              data-name="v1.0.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.3">
                v1.0.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-transition/tree/v1.0.2/README.md"
              data-name="v1.0.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.2">
                v1.0.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-transition/tree/v1.0.1/README.md"
              data-name="v1.0.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.1">
                v1.0.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-transition/tree/v1.0.0/README.md"
              data-name="v1.0.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.0">
                v1.0.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-transition/tree/v0.3.1/README.md"
              data-name="v0.3.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.3.1">
                v0.3.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-transition/tree/v0.3.0/README.md"
              data-name="v0.3.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.3.0">
                v0.3.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-transition/tree/v0.2.10/README.md"
              data-name="v0.2.10"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.2.10">
                v0.2.10
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-transition/tree/v0.2.9/README.md"
              data-name="v0.2.9"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.2.9">
                v0.2.9
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-transition/tree/v0.2.8/README.md"
              data-name="v0.2.8"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.2.8">
                v0.2.8
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-transition/tree/v0.2.7/README.md"
              data-name="v0.2.7"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.2.7">
                v0.2.7
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-transition/tree/v0.2.6/README.md"
              data-name="v0.2.6"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.2.6">
                v0.2.6
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-transition/tree/v0.2.5/README.md"
              data-name="v0.2.5"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.2.5">
                v0.2.5
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-transition/tree/v0.2.4/README.md"
              data-name="v0.2.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.2.4">
                v0.2.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-transition/tree/v0.2.3/README.md"
              data-name="v0.2.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.2.3">
                v0.2.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-transition/tree/v0.2.2/README.md"
              data-name="v0.2.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.2.2">
                v0.2.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-transition/tree/v0.2.1/README.md"
              data-name="v0.2.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.2.1">
                v0.2.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-transition/tree/v0.2.0/README.md"
              data-name="v0.2.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.2.0">
                v0.2.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-transition/tree/v0.1.3/README.md"
              data-name="v0.1.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.1.3">
                v0.1.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-transition/tree/v0.1.2/README.md"
              data-name="v0.1.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.1.2">
                v0.1.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-transition/tree/v0.1.1/README.md"
              data-name="v0.1.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.1.1">
                v0.1.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-transition/tree/v0.1.0/README.md"
              data-name="v0.1.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.1.0">
                v0.1.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-transition/tree/v0.0.9/README.md"
              data-name="v0.0.9"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.0.9">
                v0.0.9
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-transition/tree/v0.0.8/README.md"
              data-name="v0.0.8"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.0.8">
                v0.0.8
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-transition/tree/v0.0.7/README.md"
              data-name="v0.0.7"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.0.7">
                v0.0.7
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-transition/tree/v0.0.6/README.md"
              data-name="v0.0.6"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.0.6">
                v0.0.6
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-transition/tree/v0.0.5/README.md"
              data-name="v0.0.5"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.0.5">
                v0.0.5
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-transition/tree/v0.0.4/README.md"
              data-name="v0.0.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.0.4">
                v0.0.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-transition/tree/v0.0.3/README.md"
              data-name="v0.0.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.0.3">
                v0.0.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-transition/tree/v0.0.2/README.md"
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
      <a href="/d3/d3-transition/find/master"
            class="js-pjax-capture-input btn btn-sm BtnGroup-item"
            data-pjax
            data-hotkey="t">
        Find file
      </a>
      <button aria-label="Copy file path to clipboard" class="js-zeroclipboard btn btn-sm BtnGroup-item tooltipped tooltipped-s" data-copied-hint="Copied!" type="button">Copy path</button>
    </div>
    <div class="breadcrumb js-zeroclipboard-target">
      <span class="repo-root js-repo-root"><span class="js-path-segment"><a href="/d3/d3-transition"><span>d3-transition</span></a></span></span><span class="separator">/</span><strong class="final-path">README.md</strong>
    </div>
  </div>


  
  <div class="commit-tease">
      <span class="float-right">
        <a class="commit-tease-sha" href="/d3/d3-transition/commit/d894452ffd3ff69effe1eb1fdfcb5fd9236ba8f3" data-pjax>
          d894452
        </a>
        <relative-time datetime="2017-07-07T16:39:01Z">Jul 7, 2017</relative-time>
      </span>
      <div>
        <img alt="@mbostock" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/230541?s=40&amp;v=4" width="20" />
        <a href="/mbostock" class="user-mention" rel="contributor">mbostock</a>
          <a href="/d3/d3-transition/commit/d894452ffd3ff69effe1eb1fdfcb5fd9236ba8f3" class="message" data-pjax="true" title="Document error messages.

Related #71.">Document error messages.</a>
      </div>

    <div class="commit-tease-contributors">
      <button type="button" class="btn-link muted-link contributors-toggle" data-facebox="#blob_contributors_box">
        <strong>2</strong>
         contributors
      </button>
          <a class="avatar-link tooltipped tooltipped-s" aria-label="mbostock" href="/d3/d3-transition/commits/master/README.md?author=mbostock"><img alt="@mbostock" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/230541?s=40&amp;v=4" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="Devinsuit" href="/d3/d3-transition/commits/master/README.md?author=Devinsuit"><img alt="@Devinsuit" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/11741306?s=40&amp;v=4" width="20" /> </a>


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
      <a href="/d3/d3-transition/raw/master/README.md" class="btn btn-sm BtnGroup-item" id="raw-url">Raw</a>
        <a href="/d3/d3-transition/blame/master/README.md" class="btn btn-sm js-update-url-with-hash BtnGroup-item" data-hotkey="b">Blame</a>
      <a href="/d3/d3-transition/commits/master/README.md" class="btn btn-sm BtnGroup-item" rel="nofollow">History</a>
    </div>

        <a class="btn-octicon tooltipped tooltipped-nw"
           href="github-windows://openRepo/https://github.com/d3/d3-transition?branch=master&amp;filepath=README.md"
           aria-label="Open this file in GitHub Desktop"
           data-ga-click="Repository, open with desktop, type:windows">
            <svg aria-hidden="true" class="octicon octicon-device-desktop" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M15 2H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5.34c-.25.61-.86 1.39-2.34 2h8c-1.48-.61-2.09-1.39-2.34-2H15c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 9H1V3h14v8z"/></svg>
        </a>

          <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/d3/d3-transition/edit/master/README.md" class="inline-form js-update-url-with-hash" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="Ge0Ic7j9rm4CrBmCbSMTjbfVQ7/gCq/c3XVueKWh5DdrEko8RF95WrqXQ+t9pq9JuqVuwrqQDrGrYp7otpHRIA==" /></div>
            <button class="btn-octicon tooltipped tooltipped-nw" type="submit"
              aria-label="Fork this project and edit the file" data-hotkey="e" data-disable-with>
              <svg aria-hidden="true" class="octicon octicon-pencil" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z"/></svg>
            </button>
</form>
        <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/d3/d3-transition/delete/master/README.md" class="inline-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="pm56H1YlCL4doK2voOcIqRCAfpKSTH/e3z7iAuGVQRbAKl/RTtGYHz1kP6nN8sM85rkKkoAYsYDeY/og7IrMaA==" /></div>
          <button class="btn-octicon btn-octicon-danger tooltipped tooltipped-nw" type="submit"
            aria-label="Fork this project and delete the file" data-disable-with>
            <svg aria-hidden="true" class="octicon octicon-trashcan" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M11 2H9c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1H2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1v9c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V5c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 12H3V5h1v8h1V5h1v8h1V5h1v8h1V5h1v9zm1-10H2V3h9v1z"/></svg>
          </button>
</form>  </div>

  <div class="file-info">
      430 lines (278 sloc)
      <span class="file-info-divider"></span>
    35.8 KB
  </div>
</div>

    
  <div id="readme" class="readme blob instapaper_body">
    <article class="markdown-body entry-content" itemprop="text"><h1><a href="#d3-transition" aria-hidden="true" class="anchor" id="user-content-d3-transition"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>d3-transition</h1>
<p>A transition is a <a href="https://github.com/d3/d3-selection">selection</a>-like interface for animating changes to the DOM. Instead of applying changes instantaneously, transitions smoothly interpolate the DOM from its current state to the desired target state over a given duration.</p>
<p>To apply a transition, select elements, call <a href="#selection_transition"><em>selection</em>.transition</a>, and then make the desired changes. For example:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-smi">d3</span>.<span class="pl-c1">select</span>(<span class="pl-s"><span class="pl-pds">"</span>body<span class="pl-pds">"</span></span>)
  .<span class="pl-en">transition</span>()
    .<span class="pl-c1">style</span>(<span class="pl-s"><span class="pl-pds">"</span>background-color<span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>red<span class="pl-pds">"</span></span>);</pre></div>
<p>Transitions support most selection methods (such as <a href="#transition_attr"><em>transition</em>.attr</a> and <a href="#transition_style"><em>transition</em>.style</a> in place of <a href="https://github.com/d3/d3-selection#selection_attr"><em>selection</em>.attr</a> and <a href="https://github.com/d3/d3-selection#selection_style"><em>selection</em>.style</a>), but not all methods are supported; for example, you must <a href="https://github.com/d3/d3-selection#selection_append">append</a> elements or <a href="https://github.com/d3/d3-selection#joining-data">bind data</a> before a transition starts. A <a href="#transition_remove"><em>transition</em>.remove</a> operator is provided for convenient removal of elements when the transition ends.</p>
<p>To compute intermediate state, transitions leverage a variety of <a href="https://github.com/d3/d3-interpolate">built-in interpolators</a>. <a href="https://github.com/d3/d3-interpolate#interpolateRgb">Colors</a>, <a href="https://github.com/d3/d3-interpolate#interpolateNumber">numbers</a>, and <a href="https://github.com/d3/d3-interpolate#interpolateTransform">transforms</a> are automatically detected. <a href="https://github.com/d3/d3-interpolate#interpolateString">Strings</a> with embedded numbers are also detected, as is common with many styles (such as padding or font sizes) and paths. To specify a custom interpolator, use <a href="#transition_attrTween"><em>transition</em>.attrTween</a>, <a href="#transition_styleTween"><em>transition</em>.styleTween</a> or <a href="#transition_tween"><em>transition</em>.tween</a>.</p>
<h2><a href="#installing" aria-hidden="true" class="anchor" id="user-content-installing"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installing</h2>
<p>If you use NPM, <code>npm install d3-transition</code>. Otherwise, download the <a href="https://github.com/d3/d3-transition/releases/latest">latest release</a>. You can also load directly from <a href="https://d3js.org" rel="nofollow">d3js.org</a>, either as a <a href="https://d3js.org/d3-transition.v1.min.js" rel="nofollow">standalone library</a> or as part of <a href="https://github.com/d3/d3">D3 4.0</a>. AMD, CommonJS, and vanilla environments are supported. In vanilla, a <code>d3</code> global is exported:</p>
<div class="highlight highlight-text-html-basic"><pre>&lt;<span class="pl-ent">script</span> <span class="pl-e">src</span>=<span class="pl-s"><span class="pl-pds">"</span>https://d3js.org/d3-color.v1.min.js<span class="pl-pds">"</span></span>&gt;&lt;/<span class="pl-ent">script</span>&gt;
&lt;<span class="pl-ent">script</span> <span class="pl-e">src</span>=<span class="pl-s"><span class="pl-pds">"</span>https://d3js.org/d3-dispatch.v1.min.js<span class="pl-pds">"</span></span>&gt;&lt;/<span class="pl-ent">script</span>&gt;
&lt;<span class="pl-ent">script</span> <span class="pl-e">src</span>=<span class="pl-s"><span class="pl-pds">"</span>https://d3js.org/d3-ease.v1.min.js<span class="pl-pds">"</span></span>&gt;&lt;/<span class="pl-ent">script</span>&gt;
&lt;<span class="pl-ent">script</span> <span class="pl-e">src</span>=<span class="pl-s"><span class="pl-pds">"</span>https://d3js.org/d3-interpolate.v1.min.js<span class="pl-pds">"</span></span>&gt;&lt;/<span class="pl-ent">script</span>&gt;
&lt;<span class="pl-ent">script</span> <span class="pl-e">src</span>=<span class="pl-s"><span class="pl-pds">"</span>https://d3js.org/d3-selection.v1.min.js<span class="pl-pds">"</span></span>&gt;&lt;/<span class="pl-ent">script</span>&gt;
&lt;<span class="pl-ent">script</span> <span class="pl-e">src</span>=<span class="pl-s"><span class="pl-pds">"</span>https://d3js.org/d3-timer.v1.min.js<span class="pl-pds">"</span></span>&gt;&lt;/<span class="pl-ent">script</span>&gt;
&lt;<span class="pl-ent">script</span> <span class="pl-e">src</span>=<span class="pl-s"><span class="pl-pds">"</span>https://d3js.org/d3-transition.v1.min.js<span class="pl-pds">"</span></span>&gt;&lt;/<span class="pl-ent">script</span>&gt;
&lt;<span class="pl-ent">script</span>&gt;<span class="pl-s1"></span>
<span class="pl-s1"></span>
<span class="pl-s1"><span class="pl-k">var</span> transition <span class="pl-k">=</span> <span class="pl-smi">d3</span>.<span class="pl-en">transition</span>();</span>
<span class="pl-s1"></span>
<span class="pl-s1"></span><span class="pl-s1">&lt;</span>/<span class="pl-ent">script</span>&gt;</pre></div>
<p><a href="https://tonicdev.com/npm/d3-transition" rel="nofollow">Try d3-transition in your browser.</a></p>
<h2><a href="#api-reference" aria-hidden="true" class="anchor" id="user-content-api-reference"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>API Reference</h2>
<ul>
<li><a href="#selecting-elements">Selecting Elements</a></li>
<li><a href="#modifying-elements">Modifying Elements</a></li>
<li><a href="#timing">Timing</a></li>
<li><a href="#control-flow">Control Flow</a></li>
<li><a href="#the-life-of-a-transition">The Life of a Transition</a></li>
</ul>
<h3><a href="#selecting-elements" aria-hidden="true" class="anchor" id="user-content-selecting-elements"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Selecting Elements</h3>
<p>Transitions are derived from <a href="https://github.com/d3/d3-selection">selections</a> via <a href="#selection_transition"><em>selection</em>.transition</a>. You can also create a transition on the document root element using <a href="#transition">d3.transition</a>.</p>
<p><a name="user-content-selection_transition" href="#selection_transition">#</a> <i>selection</i>.<b>transition</b>([<i>name</i>]) <a href="https://github.com/d3/d3-transition/blob/master/src/selection/transition.js" title="Source">&lt;&gt;</a></p>
<p>Returns a new transition on the given <em>selection</em> with the specified <em>name</em>. If a <em>name</em> is not specified, null is used. The new transition is only exclusive with other transitions of the same name.</p>
<p>If the <em>name</em> is a <a href="#transition">transition</a> instance, the returned transition has the same id and name as the specified transition. If a transition with the same id already exists on a selected element, the existing transition is returned for that element. Otherwise, the timing of the returned transition is inherited from the existing transition of the same id on the nearest ancestor of each selected element. Thus, this method can be used to synchronize a transition across multiple selections, or to re-select a transition for specific elements and modify its configuration. For example:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">var</span> t <span class="pl-k">=</span> <span class="pl-smi">d3</span>.<span class="pl-en">transition</span>()
    .<span class="pl-en">duration</span>(<span class="pl-c1">750</span>)
    .<span class="pl-en">ease</span>(<span class="pl-smi">d3</span>.<span class="pl-smi">easeLinear</span>);

<span class="pl-smi">d3</span>.<span class="pl-en">selectAll</span>(<span class="pl-s"><span class="pl-pds">"</span>.apple<span class="pl-pds">"</span></span>).<span class="pl-en">transition</span>(t)
    .<span class="pl-c1">style</span>(<span class="pl-s"><span class="pl-pds">"</span>fill<span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>red<span class="pl-pds">"</span></span>);

<span class="pl-smi">d3</span>.<span class="pl-en">selectAll</span>(<span class="pl-s"><span class="pl-pds">"</span>.orange<span class="pl-pds">"</span></span>).<span class="pl-en">transition</span>(t)
    .<span class="pl-c1">style</span>(<span class="pl-s"><span class="pl-pds">"</span>fill<span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>orange<span class="pl-pds">"</span></span>);</pre></div>
<p>If the specified <em>transition</em> is not found on a selected node or its ancestors (such as if the transition <a href="#the-life-of-a-transition">already ended</a>), the default timing parameters are used; however, in a future release, this will likely be changed to throw an error. See <a href="https://github.com/d3/d3-transition/issues/59">#59</a>.</p>
<p><a name="user-content-selection_interrupt" href="#selection_interrupt">#</a> <i>selection</i>.<b>interrupt</b>([<i>name</i>]) <a href="https://github.com/d3/d3-transition/blob/master/src/selection/interrupt.js" title="Source">&lt;&gt;</a></p>
<p>Interrupts the active transition of the specified <em>name</em> on the selected elements, and cancels any pending transitions with the specified <em>name</em>, if any. If a name is not specified, null is used.</p>
<p>Interrupting a transition on an element has no effect on any transitions on any descendant elements. For example, an <a href="https://github.com/d3/d3-axis">axis transition</a> consists of multiple independent, synchronized transitions on the descendants of the axis <a href="https://www.w3.org/TR/SVG/struct.html#Groups" rel="nofollow">G element</a> (the tick lines, the tick labels, the domain path, <em>etc.</em>). To interrupt the axis transition, you must therefore interrupt the descendants:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-smi">selection</span>.<span class="pl-en">selectAll</span>(<span class="pl-s"><span class="pl-pds">"</span>*<span class="pl-pds">"</span></span>).<span class="pl-en">interrupt</span>();</pre></div>
<p>The <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Universal_selectors" rel="nofollow">universal selector</a>, <code>*</code>, selects all descendant elements. If you also want to interrupt the G element itself:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-smi">selection</span>.<span class="pl-en">interrupt</span>().<span class="pl-en">selectAll</span>(<span class="pl-s"><span class="pl-pds">"</span>*<span class="pl-pds">"</span></span>).<span class="pl-en">interrupt</span>();</pre></div>
<p><a name="user-content-interrupt" href="#interrupt">#</a> d3.<b>interrupt</b>(<i>node</i>[, <i>name</i>]) <a href="https://github.com/d3/d3-transition/blob/master/src/interrupt.js" title="Source">&lt;&gt;</a></p>
<p>Interrupts the active transition of the specified <em>name</em> on the specified <em>node</em>, and cancels any pending transitions with the specified <em>name</em>, if any. If a name is not specified, null is used. See also <a href="#selection_interrupt"><em>selection</em>.interrupt</a>.</p>
<p><a name="user-content-transition" href="#transition">#</a> d3.<b>transition</b>([<i>name</i>]) <a href="https://github.com/d3/d3-transition/blob/master/src/transition/index.js#L29" title="Source">&lt;&gt;</a></p>
<p>Returns a new transition on the root element, <code>document.documentElement</code>, with the specified <em>name</em>. If a <em>name</em> is not specified, null is used. The new transition is only exclusive with other transitions of the same name. The <em>name</em> may also be a <a href="#transition">transition</a> instance; see <a href="#selection_transition"><em>selection</em>.transition</a>. This method is equivalent to:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-smi">d3</span>.<span class="pl-c1">selection</span>()
  .<span class="pl-en">transition</span>(name)</pre></div>
<p>This function can also be used to test for transitions (<code>instanceof d3.transition</code>) or to extend the transition prototype.</p>
<p><a name="user-content-transition_select" href="#transition_select">#</a> <i>transition</i>.<b>select</b>(<i>selector</i>) <a href="https://github.com/d3/d3-transition/blob/master/src/transition/select.js" title="Source">&lt;&gt;</a></p>
<p>For each selected element, selects the first descendant element that matches the specified <em>selector</em> string, if any, and returns a transition on the resulting selection. The <em>selector</em> may be specified either as a selector string or a function. If a function, it is evaluated for each selected element, in order, being passed the current datum <code>d</code> and index <code>i</code>, with the <code>this</code> context as the current DOM element. The new transition has the same id, name and timing as this transition; however, if a transition with the same id already exists on a selected element, the existing transition is returned for that element.</p>
<p>This method is equivalent to deriving the selection for this transition via <a href="#transition_selection"><em>transition</em>.selection</a>, creating a subselection via <a href="https://github.com/d3/d3-selection#selection_select"><em>selection</em>.select</a>, and then creating a new transition via <a href="#selection_transition"><em>selection</em>.transition</a>:</p>
<div class="highlight highlight-source-js"><pre>transition
  .<span class="pl-c1">selection</span>()
  .<span class="pl-c1">select</span>(selector)
  .<span class="pl-en">transition</span>(transition)</pre></div>
<p><a name="user-content-transition_selectAll" href="#transition_selectAll">#</a> <i>transition</i>.<b>selectAll</b>(<i>selector</i>) <a href="https://github.com/d3/d3-transition/blob/master/src/transition/selectAll.js" title="Source">&lt;&gt;</a></p>
<p>For each selected element, selects all descendant elements that match the specified <em>selector</em> string, if any, and returns a transition on the resulting selection. The <em>selector</em> may be specified either as a selector string or a function. If a function, it is evaluated for each selected element, in order, being passed the current datum <code>d</code> and index <code>i</code>, with the <code>this</code> context as the current DOM element. The new transition has the same id, name and timing as this transition; however, if a transition with the same id already exists on a selected element, the existing transition is returned for that element.</p>
<p>This method is equivalent to deriving the selection for this transition via <a href="#transition_selection"><em>transition</em>.selection</a>, creating a subselection via <a href="https://github.com/d3/d3-selection#selection_selectAll"><em>selection</em>.selectAll</a>, and then creating a new transition via <a href="#selection_transition"><em>selection</em>.transition</a>:</p>
<div class="highlight highlight-source-js"><pre>transition
  .<span class="pl-c1">selection</span>()
  .<span class="pl-en">selectAll</span>(selector)
  .<span class="pl-en">transition</span>(transition)</pre></div>
<p><a name="user-content-transition_filter" href="#transition_filter">#</a> <i>transition</i>.<b>filter</b>(<i>filter</i>) <a href="https://github.com/d3/d3-transition/blob/master/src/transition/filter.js" title="Source">&lt;&gt;</a></p>
<p>For each selected element, selects only the elements that match the specified <em>filter</em>, and returns a transition on the resulting selection. The <em>filter</em> may be specified either as a selector string or a function. If a function, it is evaluated for each selected element, in order, being passed the current datum <code>d</code> and index <code>i</code>, with the <code>this</code> context as the current DOM element. The new transition has the same id, name and timing as this transition; however, if a transition with the same id already exists on a selected element, the existing transition is returned for that element.</p>
<p>This method is equivalent to deriving the selection for this transition via <a href="#transition_selection"><em>transition</em>.selection</a>, creating a subselection via <a href="https://github.com/d3/d3-selection#selection_filter"><em>selection</em>.filter</a>, and then creating a new transition via <a href="#selection_transition"><em>selection</em>.transition</a>:</p>
<div class="highlight highlight-source-js"><pre>transition
  .<span class="pl-c1">selection</span>()
  .<span class="pl-en">filter</span>(filter)
  .<span class="pl-en">transition</span>(transition)</pre></div>
<p><a name="user-content-transition_merge" href="#transition_merge">#</a> <i>transition</i>.<b>merge</b>(<i>other</i>) <a href="https://github.com/d3/d3-transition/blob/master/src/transition/merge.js" title="Source">&lt;&gt;</a></p>
<p>Returns a new transition merging this transition with the specified <em>other</em> transition, which must have the same id as this transition. The returned transition has the same number of groups, the same parents, the same name and the same id as this transition. Any missing (null) elements in this transition are filled with the corresponding element, if present (not null), from the <em>other</em> transition.</p>
<p>This method is equivalent to deriving the selection for this transition via <a href="#transition_selection"><em>transition</em>.selection</a>, merging with the selection likewise derived from the <em>other</em> transition via <a href="https://github.com/d3/d3-selection#selection_merge"><em>selection</em>.merge</a>, and then creating a new transition via <a href="#selection_transition"><em>selection</em>.transition</a>:</p>
<div class="highlight highlight-source-js"><pre>transition
  .<span class="pl-c1">selection</span>()
  .<span class="pl-en">merge</span>(<span class="pl-smi">other</span>.<span class="pl-c1">selection</span>())
  .<span class="pl-en">transition</span>(transition)</pre></div>
<p><a name="user-content-transition_transition" href="#transition_transition">#</a> <i>transition</i>.<b>transition</b>() <a href="https://github.com/d3/d3-transition/blob/master/src/transition/transition.js" title="Source">&lt;&gt;</a></p>
<p>Returns a new transition on the same selected elements as this transition, scheduled to start when this transition ends. The new transition inherits a reference time equal to this transition’s time plus its <a href="#transition_delay">delay</a> and <a href="#transition_duration">duration</a>. The new transition also inherits this transition’s name, duration, and <a href="#transition_ease">easing</a>. This method can be used to schedule a sequence of chained transitions. For example:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-smi">d3</span>.<span class="pl-en">selectAll</span>(<span class="pl-s"><span class="pl-pds">"</span>.apple<span class="pl-pds">"</span></span>)
  .<span class="pl-en">transition</span>() <span class="pl-c"><span class="pl-c">//</span> First fade to green.</span>
    .<span class="pl-c1">style</span>(<span class="pl-s"><span class="pl-pds">"</span>fill<span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>green<span class="pl-pds">"</span></span>)
  .<span class="pl-en">transition</span>() <span class="pl-c"><span class="pl-c">//</span> Then red.</span>
    .<span class="pl-c1">style</span>(<span class="pl-s"><span class="pl-pds">"</span>fill<span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>red<span class="pl-pds">"</span></span>)
  .<span class="pl-en">transition</span>() <span class="pl-c"><span class="pl-c">//</span> Wait one second. Then brown, and remove.</span>
    .<span class="pl-en">delay</span>(<span class="pl-c1">1000</span>)
    .<span class="pl-c1">style</span>(<span class="pl-s"><span class="pl-pds">"</span>fill<span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>brown<span class="pl-pds">"</span></span>)
    .<span class="pl-c1">remove</span>();</pre></div>
<p>The delay for each transition is relative to its previous transition. Thus, in the above example, apples will stay red for one second before the last transition to brown starts.</p>
<p><a name="user-content-transition_selection" href="#transition_selection">#</a> <i>transition</i>.<b>selection</b>() <a href="https://github.com/d3/d3-transition/blob/master/src/transition/selection.js" title="Source">&lt;&gt;</a></p>
<p>Returns the <a href="https://github.com/d3/d3-selection#selection">selection</a> corresponding to this transition.</p>
<p><a name="user-content-active" href="#active">#</a> d3.<b>active</b>(<i>node</i>[, <i>name</i>]) <a href="https://github.com/d3/d3-transition/blob/master/src/active.js" title="Source">&lt;&gt;</a></p>
<p>Returns the active transition on the specified <em>node</em> with the specified <em>name</em>, if any. If no <em>name</em> is specified, null is used. Returns null if there is no such active transition on the specified node. This method is useful for creating chained transitions. For example, to initiate disco mode:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-smi">d3</span>.<span class="pl-en">selectAll</span>(<span class="pl-s"><span class="pl-pds">"</span>circle<span class="pl-pds">"</span></span>).<span class="pl-en">transition</span>()
    .<span class="pl-en">delay</span>(<span class="pl-k">function</span>(<span class="pl-smi">d</span>, <span class="pl-smi">i</span>) { <span class="pl-k">return</span> i <span class="pl-k">*</span> <span class="pl-c1">50</span>; })
    .<span class="pl-en">on</span>(<span class="pl-s"><span class="pl-pds">"</span>start<span class="pl-pds">"</span></span>, <span class="pl-k">function</span> <span class="pl-en">repeat</span>() {
        <span class="pl-smi">d3</span>.<span class="pl-en">active</span>(<span class="pl-c1">this</span>)
            .<span class="pl-c1">style</span>(<span class="pl-s"><span class="pl-pds">"</span>fill<span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>red<span class="pl-pds">"</span></span>)
          .<span class="pl-en">transition</span>()
            .<span class="pl-c1">style</span>(<span class="pl-s"><span class="pl-pds">"</span>fill<span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>green<span class="pl-pds">"</span></span>)
          .<span class="pl-en">transition</span>()
            .<span class="pl-c1">style</span>(<span class="pl-s"><span class="pl-pds">"</span>fill<span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>blue<span class="pl-pds">"</span></span>)
          .<span class="pl-en">transition</span>()
            .<span class="pl-en">on</span>(<span class="pl-s"><span class="pl-pds">"</span>start<span class="pl-pds">"</span></span>, repeat);
      });</pre></div>
<p>See <a href="http://bl.ocks.org/mbostock/70d5541b547cc222aa02" rel="nofollow">chained transitions</a> for an example.</p>
<h3><a href="#modifying-elements" aria-hidden="true" class="anchor" id="user-content-modifying-elements"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Modifying Elements</h3>
<p>After selecting elements and creating a transition with <a href="#selection_transition"><em>selection</em>.transition</a>, use the transition’s transformation methods to affect document content.</p>
<p><a name="user-content-transition_attr" href="#transition_attr">#</a> <i>transition</i>.<b>attr</b>(<i>name</i>, <i>value</i>) <a href="https://github.com/d3/d3-transition/blob/master/src/transition/attr.js" title="Source">&lt;&gt;</a></p>
<p>For each selected element, assigns the <a href="#transition_attrTween">attribute tween</a> for the attribute with the specified <em>name</em> to the specified target <em>value</em>. The starting value of the tween is the attribute’s value when the transition starts. The target <em>value</em> may be specified either as a constant or a function. If a function, it is immediately evaluated for each selected element, in order, being passed the current datum <code>d</code> and index <code>i</code>, with the <code>this</code> context as the current DOM element.</p>
<p>If the target value is null, the attribute is removed when the transition starts. Otherwise, an interpolator is chosen based on the type of the target value, using the following algorithm:</p>
<ol>
<li>If <em>value</em> is a number, use <a href="https://github.com/d3/d3-interpolate#interpolateNumber">interpolateNumber</a>.</li>
<li>If <em>value</em> is a <a href="https://github.com/d3/d3-color#color">color</a> or a string coercible to a color, use <a href="https://github.com/d3/d3-interpolate#interpolateRgb">interpolateRgb</a>.</li>
<li>Use <a href="https://github.com/d3/d3-interpolate#interpolateString">interpolateString</a>.</li>
</ol>
<p>To apply a different interpolator, use <a href="#transition_attrTween"><em>transition</em>.attrTween</a>.</p>
<p><a name="user-content-transition_attrTween" href="#transition_attrTween">#</a> <i>transition</i>.<b>attrTween</b>(<i>name</i>[, <i>factory</i>]) <a href="https://github.com/d3/d3-transition/blob/master/src/transition/attrTween.js" title="Source">&lt;&gt;</a></p>
<p>If <em>factory</em> is specified and not null, assigns the attribute <a href="#transition_tween">tween</a> for the attribute with the specified <em>name</em> to the specified interpolator <em>factory</em>. An interpolator factory is a function that returns an <a href="https://github.com/d3/d3-interpolate">interpolator</a>; when the transition starts, the <em>factory</em> is evaluated for each selected element, in order, being passed the current datum <code>d</code> and index <code>i</code>, with the <code>this</code> context as the current DOM element. The returned interpolator will then be invoked for each frame of the transition, in order, being passed the <a href="#transition_ease">eased</a> time <em>t</em>, typically in the range [0, 1]. Lastly, the return value of the interpolator will be used to set the attribute value. The interpolator must return a string. (To remove an attribute at the start of a transition, use <a href="#transition_attr"><em>transition</em>.attr</a>; to remove an attribute at the end of a transition, use <a href="#transition_on"><em>transition</em>.on</a> to listen for the <em>end</em> event.)</p>
<p>If the specified <em>factory</em> is null, removes the previously-assigned attribute tween of the specified <em>name</em>, if any. If <em>factory</em> is not specified, returns the current interpolator factory for attribute with the specified <em>name</em>, or undefined if no such tween exists.</p>
<p>For example, to interpolate the fill attribute from red to blue:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-smi">transition</span>.<span class="pl-en">attrTween</span>(<span class="pl-s"><span class="pl-pds">"</span>fill<span class="pl-pds">"</span></span>, <span class="pl-k">function</span>() {
  <span class="pl-k">return</span> <span class="pl-smi">d3</span>.<span class="pl-en">interpolateRgb</span>(<span class="pl-s"><span class="pl-pds">"</span>red<span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>blue<span class="pl-pds">"</span></span>);
});</pre></div>
<p>Or to interpolate from the current fill to blue, like <a href="#transition_attr"><em>transition</em>.attr</a>:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-smi">transition</span>.<span class="pl-en">attrTween</span>(<span class="pl-s"><span class="pl-pds">"</span>fill<span class="pl-pds">"</span></span>, <span class="pl-k">function</span>() {
  <span class="pl-k">return</span> <span class="pl-smi">d3</span>.<span class="pl-en">interpolateRgb</span>(<span class="pl-c1">this</span>.<span class="pl-c1">getAttribute</span>(<span class="pl-s"><span class="pl-pds">"</span>fill<span class="pl-pds">"</span></span>), <span class="pl-s"><span class="pl-pds">"</span>blue<span class="pl-pds">"</span></span>);
});</pre></div>
<p>Or to apply a custom rainbow interpolator:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-smi">transition</span>.<span class="pl-en">attrTween</span>(<span class="pl-s"><span class="pl-pds">"</span>fill<span class="pl-pds">"</span></span>, <span class="pl-k">function</span>() {
  <span class="pl-k">return</span> <span class="pl-k">function</span>(<span class="pl-smi">t</span>) {
    <span class="pl-k">return</span> <span class="pl-s"><span class="pl-pds">"</span>hsl(<span class="pl-pds">"</span></span> <span class="pl-k">+</span> t <span class="pl-k">*</span> <span class="pl-c1">360</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">"</span>,100%,50%)<span class="pl-pds">"</span></span>;
  };
});</pre></div>
<p>This method is useful to specify a custom interpolator, such as one that understands <a href="http://bl.ocks.org/mbostock/3916621" rel="nofollow">SVG paths</a>. A useful technique is <em>data interpolation</em>, where <a href="https://github.com/d3/d3-interpolate#interpolateObject">d3.interpolateObject</a> is used to interpolate two data values, and the resulting value is then used (say, with a <a href="https://github.com/d3/d3-shape">shape</a>) to compute the new attribute value.</p>
<p><a name="user-content-transition_style" href="#transition_style">#</a> <i>transition</i>.<b>style</b>(<i>name</i>, <i>value</i>[, <i>priority</i>]) <a href="https://github.com/d3/d3-transition/blob/master/src/transition/style.js" title="Source">&lt;&gt;</a></p>
<p>For each selected element, assigns the <a href="#transition_styleTween">style tween</a> for the style with the specified <em>name</em> to the specified target <em>value</em> with the specified <em>priority</em>. The starting value of the tween is the style’s inline value if present, and otherwise its computed value, when the transition starts. The target <em>value</em> may be specified either as a constant or a function. If a function, it is immediately evaluated for each selected element, in order, being passed the current datum <code>d</code> and index <code>i</code>, with the <code>this</code> context as the current DOM element.</p>
<p>If the target value is null, the style is removed when the transition starts. Otherwise, an interpolator is chosen based on the type of the target value, using the following algorithm:</p>
<ol>
<li>If <em>value</em> is a number, use <a href="https://github.com/d3/d3-interpolate#interpolateNumber">interpolateNumber</a>.</li>
<li>If <em>value</em> is a <a href="https://github.com/d3/d3-color#color">color</a> or a string coercible to a color, use <a href="https://github.com/d3/d3-interpolate#interpolateRgb">interpolateRgb</a>.</li>
<li>Use <a href="https://github.com/d3/d3-interpolate#interpolateString">interpolateString</a>.</li>
</ol>
<p>To apply a different interpolator, use <a href="#transition_styleTween"><em>transition</em>.styleTween</a>.</p>
<p><a name="user-content-transition_styleTween" href="#transition_styleTween">#</a> <i>transition</i>.<b>styleTween</b>(<i>name</i>[, <i>factory</i>[, <i>priority</i>]])) <a href="https://github.com/d3/d3-transition/blob/master/src/transition/styleTween.js" title="Source">&lt;&gt;</a></p>
<p>If <em>factory</em> is specified and not null, assigns the style <a href="#transition_tween">tween</a> for the style with the specified <em>name</em> to the specified interpolator <em>factory</em>. An interpolator factory is a function that returns an <a href="https://github.com/d3/d3-interpolate">interpolator</a>; when the transition starts, the <em>factory</em> is evaluated for each selected element, in order, being passed the current datum <code>d</code> and index <code>i</code>, with the <code>this</code> context as the current DOM element. The returned interpolator will then be invoked for each frame of the transition, in order, being passed the <a href="#transition_ease">eased</a> time <em>t</em>, typically in the range [0, 1]. Lastly, the return value of the interpolator will be used to set the style value with the specified <em>priority</em>. The interpolator must return a string. (To remove an style at the start of a transition, use <a href="#transition_style"><em>transition</em>.style</a>; to remove an style at the end of a transition, use <a href="#transition_on"><em>transition</em>.on</a> to listen for the <em>end</em> event.)</p>
<p>If the specified <em>factory</em> is null, removes the previously-assigned style tween of the specified <em>name</em>, if any. If <em>factory</em> is not specified, returns the current interpolator factory for style with the specified <em>name</em>, or undefined if no such tween exists.</p>
<p>For example, to interpolate the fill style from red to blue:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-smi">transition</span>.<span class="pl-en">styleTween</span>(<span class="pl-s"><span class="pl-pds">"</span>fill<span class="pl-pds">"</span></span>, <span class="pl-k">function</span>() {
  <span class="pl-k">return</span> <span class="pl-smi">d3</span>.<span class="pl-en">interpolateRgb</span>(<span class="pl-s"><span class="pl-pds">"</span>red<span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>blue<span class="pl-pds">"</span></span>);
});</pre></div>
<p>Or to interpolate from the current fill to blue, like <a href="#transition_style"><em>transition</em>.style</a>:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-smi">transition</span>.<span class="pl-en">styleTween</span>(<span class="pl-s"><span class="pl-pds">"</span>fill<span class="pl-pds">"</span></span>, <span class="pl-k">function</span>() {
  <span class="pl-k">return</span> <span class="pl-smi">d3</span>.<span class="pl-en">interpolateRgb</span>(<span class="pl-c1">this</span>.<span class="pl-c1">style</span>.<span class="pl-smi">fill</span>, <span class="pl-s"><span class="pl-pds">"</span>blue<span class="pl-pds">"</span></span>);
});</pre></div>
<p>Or to apply a custom rainbow interpolator:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-smi">transition</span>.<span class="pl-en">styleTween</span>(<span class="pl-s"><span class="pl-pds">"</span>fill<span class="pl-pds">"</span></span>, <span class="pl-k">function</span>() {
  <span class="pl-k">return</span> <span class="pl-k">function</span>(<span class="pl-smi">t</span>) {
    <span class="pl-k">return</span> <span class="pl-s"><span class="pl-pds">"</span>hsl(<span class="pl-pds">"</span></span> <span class="pl-k">+</span> t <span class="pl-k">*</span> <span class="pl-c1">360</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">"</span>,100%,50%)<span class="pl-pds">"</span></span>;
  };
});</pre></div>
<p>This method is useful to specify a custom interpolator, such as with <em>data interpolation</em>, where <a href="https://github.com/d3/d3-interpolate#interpolateObject">d3.interpolateObject</a> is used to interpolate two data values, and the resulting value is then used to compute the new style value.</p>
<p><a name="user-content-transition_text" href="#transition_text">#</a> <i>transition</i>.<b>text</b>(<i>value</i>) <a href="https://github.com/d3/d3-transition/blob/master/src/transition/text.js" title="Source">&lt;&gt;</a></p>
<p>For each selected element, sets the <a href="http://www.w3.org/TR/DOM-Level-3-Core/core.html#Node3-textContent" rel="nofollow">text content</a> to the specified target <em>value</em> when the transition starts. The <em>value</em> may be specified either as a constant or a function. If a function, it is immediately evaluated for each selected element, in order, being passed the current datum <code>d</code> and index <code>i</code>, with the <code>this</code> context as the current DOM element. The function’s return value is then used to set each element’s text content. A null value will clear the content.</p>
<p>To interpolate text rather than to set it on start, use <a href="#transition_tween"><em>transition</em>.tween</a> (<a href="http://bl.ocks.org/mbostock/7004f92cac972edef365" rel="nofollow">for example</a>) or append a replacement element and cross-fade opacity (<a href="http://bl.ocks.org/mbostock/f7dcecb19c4af317e464" rel="nofollow">for example</a>). Text is not interpolated by default because it is usually undesirable.</p>
<p><a name="user-content-transition_remove" href="#transition_remove">#</a> <i>transition</i>.<b>remove</b>() <a href="https://github.com/d3/d3-transition/blob/master/src/transition/remove.js" title="Source">&lt;&gt;</a></p>
<p>For each selected element, <a href="https://github.com/d3/d3-selection#selection_remove">removes</a> the element when the transition ends, as long as the element has no other active or pending transitions. If the element has other active or pending transitions, does nothing.</p>
<p><a name="user-content-transition_tween" href="#transition_tween">#</a> <i>transition</i>.<b>tween</b>(<i>name</i>[, <i>value</i>]) <a href="https://github.com/d3/d3-transition/blob/master/src/transition/tween.js" title="Source">&lt;&gt;</a></p>
<p>For each selected element, assigns the tween with the specified <em>name</em> with the specified <em>value</em> function. The <em>value</em> must be specified as a function that returns a function. When the transition starts, the <em>value</em> function is evaluated for each selected element, in order, being passed the current datum <code>d</code> and index <code>i</code>, with the <code>this</code> context as the current DOM element. The returned function is then invoked for each frame of the transition, in order, being passed the <a href="#transition_ease">eased</a> time <em>t</em>, typically in the range [0, 1]. If the specified <em>value</em> is null, removes the previously-assigned tween of the specified <em>name</em>, if any.</p>
<p>For example, to interpolate the fill attribute to blue, like <a href="#transition_attr"><em>transition</em>.attr</a>:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-smi">transition</span>.<span class="pl-en">tween</span>(<span class="pl-s"><span class="pl-pds">"</span>attr.fill<span class="pl-pds">"</span></span>, <span class="pl-k">function</span>() {
  <span class="pl-k">var</span> node <span class="pl-k">=</span> <span class="pl-c1">this</span>, i <span class="pl-k">=</span> <span class="pl-smi">d3</span>.<span class="pl-en">interpolateRgb</span>(<span class="pl-smi">node</span>.<span class="pl-c1">getAttribute</span>(<span class="pl-s"><span class="pl-pds">"</span>fill<span class="pl-pds">"</span></span>), <span class="pl-s"><span class="pl-pds">"</span>blue<span class="pl-pds">"</span></span>);
  <span class="pl-k">return</span> <span class="pl-k">function</span>(<span class="pl-smi">t</span>) {
    <span class="pl-smi">node</span>.<span class="pl-c1">setAttribute</span>(<span class="pl-s"><span class="pl-pds">"</span>fill<span class="pl-pds">"</span></span>, <span class="pl-en">i</span>(t));
  };
});</pre></div>
<p>This method is useful to specify a custom interpolator, or to perform side-effects, say to animate the <a href="http://bl.ocks.org/mbostock/1649463" rel="nofollow">scroll offset</a>.</p>
<h3><a href="#timing" aria-hidden="true" class="anchor" id="user-content-timing"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Timing</h3>
<p>The <a href="#transition_ease">easing</a>, <a href="#transition_delay">delay</a> and <a href="#transition_duration">duration</a> of a transition is configurable. For example, a per-element delay can be used to <a href="http://bl.ocks.org/mbostock/3885705" rel="nofollow">stagger the reordering</a> of elements, improving perception. See <a href="http://vis.berkeley.edu/papers/animated_transitions/" rel="nofollow">Animated Transitions in Statistical Data Graphics</a> for recommendations.</p>
<p><a name="user-content-transition_delay" href="#transition_delay">#</a> <i>transition</i>.<b>delay</b>([<i>value</i>]) <a href="https://github.com/d3/d3-transition/blob/master/src/transition/delay.js" title="Source">&lt;&gt;</a></p>
<p>For each selected element, sets the transition delay to the specified <em>value</em> in milliseconds. The <em>value</em> may be specified either as a constant or a function. If a function, it is immediately evaluated for each selected element, in order, being passed the current datum <code>d</code> and index <code>i</code>, with the <code>this</code> context as the current DOM element. The function’s return value is then used to set each element’s transition delay. If a delay is not specified, it defaults to zero.</p>
<p>If a <em>value</em> is not specified, returns the current value of the delay for the first (non-null) element in the transition. This is generally useful only if you know that the transition contains exactly one element.</p>
<p>Setting the delay to a multiple of the index <code>i</code> is a convenient way to stagger transitions across a set of elements. For example:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-smi">transition</span>.<span class="pl-en">delay</span>(<span class="pl-k">function</span>(<span class="pl-smi">d</span>, <span class="pl-smi">i</span>) { <span class="pl-k">return</span> i <span class="pl-k">*</span> <span class="pl-c1">10</span>; });</pre></div>
<p>Of course, you can also compute the delay as a function of the data, or <a href="https://github.com/d3/d3-selection#selection_sort">sort the selection</a> before computed an index-based delay.</p>
<p><a name="user-content-transition_duration" href="#transition_duration">#</a> <i>transition</i>.<b>duration</b>([<i>value</i>]) <a href="https://github.com/d3/d3-transition/blob/master/src/transition/duration.js" title="Source">&lt;&gt;</a></p>
<p>For each selected element, sets the transition duration to the specified <em>value</em> in milliseconds. The <em>value</em> may be specified either as a constant or a function. If a function, it is immediately evaluated for each selected element, in order, being passed the current datum <code>d</code> and index <code>i</code>, with the <code>this</code> context as the current DOM element. The function’s return value is then used to set each element’s transition duration. If a duration is not specified, it defaults to 250ms.</p>
<p>If a <em>value</em> is not specified, returns the current value of the duration for the first (non-null) element in the transition. This is generally useful only if you know that the transition contains exactly one element.</p>
<p><a name="user-content-transition_ease" href="#transition_ease">#</a> <i>transition</i>.<b>ease</b>([<i>value</i>]) <a href="https://github.com/d3/d3-transition/blob/master/src/transition/ease.js" title="Source">&lt;&gt;</a></p>
<p>Specifies the transition <a href="https://github.com/d3/d3-ease">easing function</a> for all selected elements. The <em>value</em> must be specified as a function. The easing function is invoked for each frame of the animation, being passed the normalized time <em>t</em> in the range [0, 1]; it must then return the eased time <em>tʹ</em> which is typically also in the range [0, 1]. A good easing function should return 0 if <em>t</em> = 0 and 1 if <em>t</em> = 1. If an easing function is not specified, it defaults to <a href="https://github.com/d3/d3-ease#easeCubic">d3.easeCubic</a>.</p>
<p>If a <em>value</em> is not specified, returns the current easing function for the first (non-null) element in the transition. This is generally useful only if you know that the transition contains exactly one element.</p>
<h3><a href="#control-flow" aria-hidden="true" class="anchor" id="user-content-control-flow"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Control Flow</h3>
<p>For advanced usage, transitions provide methods for custom control flow.</p>
<p><a name="user-content-transition_on" href="#transition_on">#</a> <i>transition</i>.<b>on</b>(<i>typenames</i>[, <i>listener</i>]) <a href="https://github.com/d3/d3-transition/blob/master/src/transition/on.js" title="Source">&lt;&gt;</a></p>
<p>Adds or removes a <em>listener</em> to each selected element for the specified event <em>typenames</em>. The <em>typenames</em> is one of the following string event types:</p>
<ul>
<li><code>start</code> - when the transition starts.</li>
<li><code>end</code> - when the transition ends.</li>
<li><code>interrupt</code> - when the transition is interrupted.</li>
</ul>
<p>See <a href="#the-life-of-a-transition">The Life of a Transition</a> for more. Note that these are <em>not</em> native DOM events as implemented by <a href="https://github.com/d3/d3-selection#selection_on"><em>selection</em>.on</a> and <a href="https://github.com/d3/d3-selection#selection_dispatch"><em>selection</em>.dispatch</a>, but transition events!</p>
<p>The type may be optionally followed by a period (<code>.</code>) and a name; the optional name allows multiple callbacks to be registered to receive events of the same type, such as <code>start.foo</code> and <code>start.bar</code>. To specify multiple typenames, separate typenames with spaces, such as <code>interrupt end</code> or <code>start.foo start.bar</code>.</p>
<p>When a specified transition event is dispatched on a selected node, the specified <em>listener</em> will be invoked for the transitioning element, being passed the current datum <code>d</code> and index <code>i</code>, with the <code>this</code> context as the current DOM element. Listeners always see the latest datum for their element, but the index is a property of the selection and is fixed when the listener is assigned; to update the index, re-assign the listener.</p>
<p>If an event listener was previously registered for the same <em>typename</em> on a selected element, the old listener is removed before the new listener is added. To remove a listener, pass null as the <em>listener</em>. To remove all listeners for a given name, pass null as the <em>listener</em> and <code>.foo</code> as the <em>typename</em>, where <code>foo</code> is the name; to remove all listeners with no name, specify <code>.</code> as the <em>typename</em>.</p>
<p>If a <em>listener</em> is not specified, returns the currently-assigned listener for the specified event <em>typename</em> on the first (non-null) selected element, if any. If multiple typenames are specified, the first matching listener is returned.</p>
<p><a name="user-content-transition_each" href="#transition_each">#</a> <i>transition</i>.<b>each</b>(<i>function</i>) <a href="https://github.com/d3/d3-selection/blob/master/src/selection/each.js" title="Source">&lt;&gt;</a></p>
<p>Invokes the specified <em>function</em> for each selected element, passing in the current datum <code>d</code> and index <code>i</code>, with the <code>this</code> context of the current DOM element. This method can be used to invoke arbitrary code for each selected element, and is useful for creating a context to access parent and child data simultaneously. Equivalent to <a href="https://github.com/d3/d3-selection#selection_each"><em>selection</em>.each</a>.</p>
<p><a name="user-content-transition_call" href="#transition_call">#</a> <i>transition</i>.<b>call</b>(<i>function</i>[, <i>arguments…</i>]) <a href="https://github.com/d3/d3-selection/blob/master/src/selection/call.js" title="Source">&lt;&gt;</a></p>
<p>Invokes the specified <em>function</em> exactly once, passing in this transition along with any optional <em>arguments</em>. Returns this transition. This is equivalent to invoking the function by hand but facilitates method chaining. For example, to set several attributes in a reusable function:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">function</span> <span class="pl-en">color</span>(<span class="pl-smi">transition</span>, <span class="pl-smi">fill</span>, <span class="pl-smi">stroke</span>) {
  transition
      .<span class="pl-c1">style</span>(<span class="pl-s"><span class="pl-pds">"</span>fill<span class="pl-pds">"</span></span>, fill)
      .<span class="pl-c1">style</span>(<span class="pl-s"><span class="pl-pds">"</span>stroke<span class="pl-pds">"</span></span>, stroke);
}</pre></div>
<p>Now say:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-smi">d3</span>.<span class="pl-en">selectAll</span>(<span class="pl-s"><span class="pl-pds">"</span>div<span class="pl-pds">"</span></span>).<span class="pl-en">transition</span>().<span class="pl-c1">call</span>(color, <span class="pl-s"><span class="pl-pds">"</span>red<span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>blue<span class="pl-pds">"</span></span>);</pre></div>
<p>This is equivalent to:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-en">color</span>(<span class="pl-smi">d3</span>.<span class="pl-en">selectAll</span>(<span class="pl-s"><span class="pl-pds">"</span>div<span class="pl-pds">"</span></span>).<span class="pl-en">transition</span>(), <span class="pl-s"><span class="pl-pds">"</span>red<span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>blue<span class="pl-pds">"</span></span>);</pre></div>
<p>Equivalent to <a href="https://github.com/d3/d3-selection#selection_call"><em>selection</em>.call</a>.</p>
<p><a name="user-content-transition_empty" href="#transition_empty">#</a> <i>transition</i>.<b>empty</b>() <a href="https://github.com/d3/d3-selection/blob/master/src/selection/empty.js" title="Source">&lt;&gt;</a></p>
<p>Returns true if this transition contains no (non-null) elements. Equivalent to <a href="https://github.com/d3/d3-selection#selection_empty"><em>selection</em>.empty</a>.</p>
<p><a name="user-content-transition_nodes" href="#transition_nodes">#</a> <i>transition</i>.<b>nodes</b>() <a href="https://github.com/d3/d3-selection/blob/master/src/selection/nodes.js" title="Source">&lt;&gt;</a></p>
<p>Returns an array of all (non-null) elements in this transition. Equivalent to <a href="https://github.com/d3/d3-selection#selection_nodes"><em>selection</em>.nodes</a>.</p>
<p><a name="user-content-transition_node" href="#transition_node">#</a> <i>transition</i>.<b>node</b>() <a href="https://github.com/d3/d3-selection/blob/master/src/selection/node.js" title="Source">&lt;&gt;</a></p>
<p>Returns the first (non-null) element in this transition. If the transition is empty, returns null. Equivalent to <a href="https://github.com/d3/d3-selection#selection_node"><em>selection</em>.node</a>.</p>
<p><a name="user-content-transition_size" href="#transition_size">#</a> <i>transition</i>.<b>size</b>() <a href="https://github.com/d3/d3-selection/blob/master/src/selection/size.js" title="Source">&lt;&gt;</a></p>
<p>Returns the total number of elements in this transition. Equivalent to <a href="https://github.com/d3/d3-selection#selection_size"><em>selection</em>.size</a>.</p>
<h3><a href="#the-life-of-a-transition" aria-hidden="true" class="anchor" id="user-content-the-life-of-a-transition"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>The Life of a Transition</h3>
<p>Immediately after creating a transition, such as by <a href="#selection_transition"><em>selection</em>.transition</a> or <a href="#transition_transition"><em>transition</em>.transition</a>, you may configure the transition using methods such as <a href="#transition_delay"><em>transition</em>.delay</a>, <a href="#transition_duration"><em>transition</em>.duration</a>, <a href="#transition_attr"><em>transition</em>.attr</a> and <a href="#transition_style"><em>transition</em>.style</a>. Methods that specify target values (such as <em>transition</em>.attr) are evaluated synchronously; however, methods that require the starting value for interpolation, such as <a href="#transition_attrTween"><em>transition</em>.attrTween</a> and <a href="#transition_styleTween"><em>transition</em>.styleTween</a>, must be deferred until the transition starts.</p>
<p>Shortly after creation, either at the end of the current frame or during the next frame, the transition is scheduled. At this point, the delay and <code>start</code> event listeners may no longer be changed; attempting to do so throws an error with the message “too late: already scheduled” (or if the transition has ended, “transition not found”).</p>
<p>When the transition subsequently starts, it interrupts the active transition of the same name on the same element, if any, dispatching an <code>interrupt</code> event to registered listeners. (Note that interrupts happen on start, not creation, and thus even a zero-delay transition will not immediately interrupt the active transition: the old transition is given a final frame. Use <a href="#selection_interrupt"><em>selection</em>.interrupt</a> to interrupt immediately.) The starting transition also cancels any pending transitions of the same name on the same element that were created before the starting transition. The transition then dispatches a <code>start</code> event to registered listeners. This is the last moment at which the transition may be modified: after starting, the transition’s timing, tweens, and listeners may no longer be changed; attempting to do so throws an error with the message “too late: already started” (or if the transition has ended, “transition not found”). The transition initializes its tweens immediately after starting.</p>
<p>During the frame the transition starts, but <em>after</em> all transitions starting this frame have been started, the transition invokes its tweens for the first time. Batching tween initialization, which typically involves reading from the DOM, improves performance by avoiding interleaved DOM reads and writes.</p>
<p>For each frame that a transition is active, it invokes its tweens with an <a href="#transition_ease">eased</a> <em>t</em>-value ranging from 0 to 1. Within each frame, the transition invokes its tweens in the order they were registered.</p>
<p>When a transition ends, it invokes its tweens a final time with a (non-eased) <em>t</em>-value of 1. It then dispatches an <code>end</code> event to registered listeners. This is the last moment at which the transition may be inspected: after ending, the transition is deleted from the element, and its configuration is destroyed. (A transition’s configuration is also destroyed on interrupt or cancel.) Attempting to inspect a transition after it is destroyed throws an error with the message “transition not found”.</p>
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
      <li class="mr-3">&copy; 2018 <span title="0.19878s from unicorn-2657157768-8p28m">GitHub</span>, Inc.</li>
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


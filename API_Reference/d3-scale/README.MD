





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
  
  <title>d3-scale/README.md at master · d3/d3-scale</title>
  <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
  <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
  <meta property="fb:app_id" content="1401488693436528">

    
    <meta content="https://avatars3.githubusercontent.com/u/1562726?s=400&amp;v=4" property="og:image" /><meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="d3/d3-scale" property="og:title" /><meta content="https://github.com/d3/d3-scale" property="og:url" /><meta content="d3-scale - Encodings that map abstract data to visual representation." property="og:description" />

  <link rel="assets" href="https://assets-cdn.github.com/">
  <link rel="web-socket" href="wss://live.github.com/_sockets/VjI6MjM0MjAxNjIzOjJlYmZiZThlMzdkY2I3YjNjYjVjZjI2ODY5YzgxOWYyNjVkYWQwYTMwZjVkMGFmOWRlZDc3MzFkNDEzNTAwZWU=--9bd43d82e85fbc6150cd7050d9a6bec9c102dcea">
  <meta name="pjax-timeout" content="1000">
  <link rel="sudo-modal" href="/sessions/sudo_modal">
  <meta name="request-id" content="F902:1FA0E:11A3B34:199B4D3:5A603EB5" data-pjax-transient>
  

  <meta name="selected-link" value="repo_source" data-pjax-transient>

    <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
  <meta name="google-site-verification" content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA">
  <meta name="google-site-verification" content="GXs5KoUUkNCoaAZn7wPN-t01Pywp9M3sEjnt_3_ZWPc">
    <meta name="google-analytics" content="UA-3769691-2">

<meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="https://collector.githubapp.com/github-external/browser_event" name="octolytics-event-url" /><meta content="F902:1FA0E:11A3B34:199B4D3:5A603EB5" name="octolytics-dimension-request_id" /><meta content="sea" name="octolytics-dimension-region_edge" /><meta content="iad" name="octolytics-dimension-region_render" /><meta content="16659379" name="octolytics-actor-id" /><meta content="xswei" name="octolytics-actor-login" /><meta content="72a8b786cd27412ba348c71058cf2aed3e8f8772266e5c157980395250fb923d" name="octolytics-actor-hash" />
<meta content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-pjax-transient="true" name="analytics-location" />




  <meta class="js-ga-set" name="dimension1" content="Logged In">


  

      <meta name="hostname" content="github.com">
  <meta name="user-login" content="xswei">

      <meta name="expected-hostname" content="github.com">
    <meta name="js-proxy-site-detection-payload" content="OTk2OTY5MDRjMmQwYmZjOGQyZmNmZjE2ZTA4NTgwNWE3ZDgwYzQzMWQyOGRmOWM2NDI3YjU1Mjk0NzFlYmMwZXx7InJlbW90ZV9hZGRyZXNzIjoiMjIwLjE4MS4xNzEuMTI1IiwicmVxdWVzdF9pZCI6IkY5MDI6MUZBMEU6MTFBM0IzNDoxOTlCNEQzOjVBNjAzRUI1IiwidGltZXN0YW1wIjoxNTE2MjU2OTUxLCJob3N0IjoiZ2l0aHViLmNvbSJ9">

    <meta name="enabled-features" content="UNIVERSE_BANNER,FREE_TRIALS">

  <meta name="html-safe-nonce" content="95ac36701972faaa3306c820d3f61fe703aeac54">

  <meta http-equiv="x-pjax-version" content="c0275ff3857f879afa7c0ef3fbc951b4">
  

      <link href="https://github.com/d3/d3-scale/commits/master.atom" rel="alternate" title="Recent Commits to d3-scale:master" type="application/atom+xml">

  <meta name="description" content="d3-scale - Encodings that map abstract data to visual representation.">
  <meta name="go-import" content="github.com/d3/d3-scale git https://github.com/d3/d3-scale.git">

  <meta content="1562726" name="octolytics-dimension-user_id" /><meta content="d3" name="octolytics-dimension-user_login" /><meta content="37559299" name="octolytics-dimension-repository_id" /><meta content="d3/d3-scale" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="37559299" name="octolytics-dimension-repository_network_root_id" /><meta content="d3/d3-scale" name="octolytics-dimension-repository_network_root_nwo" /><meta content="false" name="octolytics-dimension-repository_explore_github_marketplace_ci_cta_shown" />


    <link rel="canonical" href="https://github.com/d3/d3-scale/blob/master/README.md" data-pjax-transient>


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
  <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/d3/d3-scale/search" class="js-site-search-form" data-scoped-search-url="/d3/d3-scale/search" data-unscoped-search-url="/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <label class="form-control header-search-wrapper js-chromeless-input-container">
        <a href="/d3/d3-scale/blob/master/README.md" class="header-search-scope no-underline">This repository</a>
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
    <span title="d3/d3-scale">This repository</span>
  </div>
    <a class="dropdown-item" href="/d3/d3-scale/issues/new" data-ga-click="Header, create new issue">
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

        <li><!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/logout" class="logout-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="bIJ8xt7YbnN677wN9F+WFKS15mt/M9w0wBxjis33U/7y5Pizld/a/wG/bo0DzO6k5/kbPifLKvxyaFwojF9SgA==" /></div>
          <button type="submit" class="dropdown-item dropdown-signout" data-ga-click="Header, sign out, icon:logout">
            Sign out
          </button>
        </form></li>
      </ul>
    </details>
  </li>
</ul>


        <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/logout" class="sr-only right-0" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="3lCx956PtohUddoWfEC319whKh/T7EfBpVNU6A43cSlANjWC1YgCBC8lCJaL089nn23XSosUsQkXJ2tKT59wVw==" /></div>
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
        <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="HPP1pkLABIfxgroGtln7k+Hx1oyY7KM8T6SK4KZakjpxGra2pQG2wcpdPIzsY23oY2r7qsYRnQ5tX7SzzQeedQ==" /></div>      <input class="form-control" id="repository_id" name="repository_id" type="hidden" value="37559299" />

        <div class="select-menu js-menu-container js-select-menu">
          <a href="/d3/d3-scale/subscription"
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
            href="/d3/d3-scale/watchers"
            aria-label="41 users are watching this repository">
            41
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
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/d3/d3-scale/unstar" class="starred js-social-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="LUssEpBM6AUz9mKy0AFuM/UaC8Kps7WpytqsS+d3ietV95heOyzDyqcChislbgua/gSeYLFME/bhBNu+/Ifbnw==" /></div>
      <input type="hidden" name="context" value="repository"></input>
      <button
        type="submit"
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Unstar this repository" title="Unstar d3/d3-scale"
        data-ga-click="Repository, click unstar button, action:blob#show; text:Unstar">
        <svg aria-hidden="true" class="octicon octicon-star" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"/></svg>
        Unstar
      </button>
        <a class="social-count js-social-count" href="/d3/d3-scale/stargazers"
           aria-label="890 users starred this repository">
          890
        </a>
</form>
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/d3/d3-scale/star" class="unstarred js-social-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="qvlikEAvNv9gafaTDephDYwInJiTryEibQVYSyFp1459jHyklGmbKjLeCyZAF4q4lCIIX5kTOZMUzKeRupgJjw==" /></div>
      <input type="hidden" name="context" value="repository"></input>
      <button
        type="submit"
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Star this repository" title="Star d3/d3-scale"
        data-ga-click="Repository, click star button, action:blob#show; text:Star">
        <svg aria-hidden="true" class="octicon octicon-star" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"/></svg>
        Star
      </button>
        <a class="social-count js-social-count" href="/d3/d3-scale/stargazers"
           aria-label="890 users starred this repository">
          890
        </a>
</form>  </div>

  </li>

  <li>
          <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/d3/d3-scale/fork" class="btn-with-count" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="tRhQL6pQcPJe6fLPJeLW01AIG4qG8PThAAACQQBVJ2VTFpIBTJpZJYD02OGSWwb2QOiAGj2buFqN5zIJDkzuVQ==" /></div>
            <button
                type="submit"
                class="btn btn-sm btn-with-count"
                data-ga-click="Repository, show fork modal, action:blob#show; text:Fork"
                title="Fork your own copy of d3/d3-scale to your account"
                aria-label="Fork your own copy of d3/d3-scale to your account">
              <svg aria-hidden="true" class="octicon octicon-repo-forked" height="16" version="1.1" viewBox="0 0 10 16" width="10"><path fill-rule="evenodd" d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
              Fork
            </button>
</form>
    <a href="/d3/d3-scale/network" class="social-count"
       aria-label="152 users forked this repository">
      152
    </a>
  </li>
</ul>

      <h1 class="public ">
  <svg aria-hidden="true" class="octicon octicon-repo" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
  <span class="author" itemprop="author"><a href="/d3" class="url fn" rel="author">d3</a></span><!--
--><span class="path-divider">/</span><!--
--><strong itemprop="name"><a href="/d3/d3-scale" data-pjax="#js-repo-pjax-container">d3-scale</a></strong>

</h1>

    </div>
    
<nav class="reponav js-repo-nav js-sidenav-container-pjax container"
     itemscope
     itemtype="http://schema.org/BreadcrumbList"
     role="navigation"
     data-pjax="#js-repo-pjax-container">

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/d3/d3-scale" class="js-selected-navigation-item selected reponav-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches repo_packages /d3/d3-scale" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-code" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z"/></svg>
      <span itemprop="name">Code</span>
      <meta itemprop="position" content="1">
</a>  </span>

    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a href="/d3/d3-scale/issues" class="js-selected-navigation-item reponav-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /d3/d3-scale/issues" itemprop="url">
        <svg aria-hidden="true" class="octicon octicon-issue-opened" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"/></svg>
        <span itemprop="name">Issues</span>
        <span class="Counter">24</span>
        <meta itemprop="position" content="2">
</a>    </span>

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/d3/d3-scale/pulls" class="js-selected-navigation-item reponav-item" data-hotkey="g p" data-selected-links="repo_pulls /d3/d3-scale/pulls" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-git-pull-request" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M11 11.28V5c-.03-.78-.34-1.47-.94-2.06C9.46 2.35 8.78 2.03 8 2H7V0L4 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0 0 10 15a1.993 1.993 0 0 0 1-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zM4 3c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v6.56A1.993 1.993 0 0 0 2 15a1.993 1.993 0 0 0 1-3.72V4.72c.59-.34 1-.98 1-1.72zm-.8 10c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
      <span itemprop="name">Pull requests</span>
      <span class="Counter">8</span>
      <meta itemprop="position" content="3">
</a>  </span>




  <a href="/d3/d3-scale/pulse" class="js-selected-navigation-item reponav-item" data-selected-links="repo_graphs repo_contributors dependency_graph pulse /d3/d3-scale/pulse">
    <svg aria-hidden="true" class="octicon octicon-graph" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M16 14v1H0V0h1v14h15zM5 13H3V8h2v5zm4 0H7V3h2v10zm4 0h-2V6h2v7z"/></svg>
    Insights
</a>

</nav>


  </div>

<div class="container new-discussion-timeline experiment-repo-nav ">
  <div class="repository-content ">

    
  <a href="/d3/d3-scale/blob/8896a1515e3424b53000f31ff18cb4874004de9b/README.md" class="d-none js-permalink-shortcut" data-hotkey="y">Permalink</a>

  <!-- blob contrib key: blob_contributors:v21:aa6f4ce0086d238167322ba3553d3e06 -->

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
               href="/d3/d3-scale/blob/fix-test-tz/README.md"
               data-name="fix-test-tz"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                fix-test-tz
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/d3/d3-scale/blob/master/README.md"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                master
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/d3/d3-scale/blob/more-transforms/README.md"
               data-name="more-transforms"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                more-transforms
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/d3/d3-scale/blob/radial/README.md"
               data-name="radial"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                radial
              </span>
            </a>
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-scale/tree/v1.0.7/README.md"
              data-name="v1.0.7"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.7">
                v1.0.7
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-scale/tree/v1.0.6/README.md"
              data-name="v1.0.6"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.6">
                v1.0.6
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-scale/tree/v1.0.5/README.md"
              data-name="v1.0.5"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.5">
                v1.0.5
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-scale/tree/v1.0.4/README.md"
              data-name="v1.0.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.4">
                v1.0.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-scale/tree/v1.0.3/README.md"
              data-name="v1.0.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.3">
                v1.0.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-scale/tree/v1.0.2/README.md"
              data-name="v1.0.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.2">
                v1.0.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-scale/tree/v1.0.1/README.md"
              data-name="v1.0.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.1">
                v1.0.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-scale/tree/v1.0.0/README.md"
              data-name="v1.0.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.0">
                v1.0.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-scale/tree/v0.9.3/README.md"
              data-name="v0.9.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.9.3">
                v0.9.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-scale/tree/v0.9.2/README.md"
              data-name="v0.9.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.9.2">
                v0.9.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-scale/tree/v0.9.1/README.md"
              data-name="v0.9.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.9.1">
                v0.9.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-scale/tree/v0.9.0/README.md"
              data-name="v0.9.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.9.0">
                v0.9.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-scale/tree/v0.8.0/README.md"
              data-name="v0.8.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.8.0">
                v0.8.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-scale/tree/v0.7.2/README.md"
              data-name="v0.7.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.7.2">
                v0.7.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-scale/tree/v0.7.1/README.md"
              data-name="v0.7.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.7.1">
                v0.7.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-scale/tree/v0.7.0/README.md"
              data-name="v0.7.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.7.0">
                v0.7.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-scale/tree/v0.6.4/README.md"
              data-name="v0.6.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.6.4">
                v0.6.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-scale/tree/v0.6.3/README.md"
              data-name="v0.6.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.6.3">
                v0.6.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-scale/tree/v0.6.2/README.md"
              data-name="v0.6.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.6.2">
                v0.6.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-scale/tree/v0.6.1/README.md"
              data-name="v0.6.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.6.1">
                v0.6.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-scale/tree/v0.6.0/README.md"
              data-name="v0.6.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.6.0">
                v0.6.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-scale/tree/v0.5.3/README.md"
              data-name="v0.5.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.5.3">
                v0.5.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-scale/tree/v0.5.2/README.md"
              data-name="v0.5.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.5.2">
                v0.5.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-scale/tree/v0.5.1/README.md"
              data-name="v0.5.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.5.1">
                v0.5.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-scale/tree/v0.5.0/README.md"
              data-name="v0.5.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.5.0">
                v0.5.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-scale/tree/v0.4.1/README.md"
              data-name="v0.4.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.4.1">
                v0.4.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-scale/tree/v0.4.0/README.md"
              data-name="v0.4.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.4.0">
                v0.4.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-scale/tree/v0.3.0/README.md"
              data-name="v0.3.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.3.0">
                v0.3.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-scale/tree/v0.2.0/README.md"
              data-name="v0.2.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.2.0">
                v0.2.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-scale/tree/v0.1.5/README.md"
              data-name="v0.1.5"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.1.5">
                v0.1.5
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-scale/tree/v0.1.4/README.md"
              data-name="v0.1.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.1.4">
                v0.1.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-scale/tree/v0.1.3/README.md"
              data-name="v0.1.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.1.3">
                v0.1.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-scale/tree/v0.1.2/README.md"
              data-name="v0.1.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.1.2">
                v0.1.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-scale/tree/v0.1.1/README.md"
              data-name="v0.1.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.1.1">
                v0.1.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-scale/tree/v0.1.0/README.md"
              data-name="v0.1.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.1.0">
                v0.1.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-scale/tree/v0.0.2/README.md"
              data-name="v0.0.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.0.2">
                v0.0.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-scale/tree/v0.0.1/README.md"
              data-name="v0.0.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.0.1">
                v0.0.1
              </span>
            </a>
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>

    <div class="BtnGroup float-right">
      <a href="/d3/d3-scale/find/master"
            class="js-pjax-capture-input btn btn-sm BtnGroup-item"
            data-pjax
            data-hotkey="t">
        Find file
      </a>
      <button aria-label="Copy file path to clipboard" class="js-zeroclipboard btn btn-sm BtnGroup-item tooltipped tooltipped-s" data-copied-hint="Copied!" type="button">Copy path</button>
    </div>
    <div class="breadcrumb js-zeroclipboard-target">
      <span class="repo-root js-repo-root"><span class="js-path-segment"><a href="/d3/d3-scale"><span>d3-scale</span></a></span></span><span class="separator">/</span><strong class="final-path">README.md</strong>
    </div>
  </div>


  
  <div class="commit-tease">
      <span class="float-right">
        <a class="commit-tease-sha" href="/d3/d3-scale/commit/e98b17618015f0ab249d0c3e5a6021d19734fc8d" data-pjax>
          e98b176
        </a>
        <relative-time datetime="2016-11-03T06:49:03Z">Nov 3, 2016</relative-time>
      </span>
      <div>
        <img alt="@curran" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/68416?s=40&amp;v=4" width="20" />
        <a href="/curran" class="user-mention" rel="contributor">curran</a>
          <a href="/d3/d3-scale/commit/e98b17618015f0ab249d0c3e5a6021d19734fc8d" class="message" data-pjax="true" title="Correct typo: domain -&gt; range. Closes #82">Correct typo: domain -&gt; range. Closes</a> <a href="https://github.com/d3/d3-scale/issues/82" class="issue-link js-issue-link" data-url="https://github.com/d3/d3-scale/issues/82" data-id="186971419" data-error-text="Failed to load issue title" data-permission-text="Issue title is private">#82</a>
      </div>

    <div class="commit-tease-contributors">
      <button type="button" class="btn-link muted-link contributors-toggle" data-facebox="#blob_contributors_box">
        <strong>9</strong>
         contributors
      </button>
          <a class="avatar-link tooltipped tooltipped-s" aria-label="mbostock" href="/d3/d3-scale/commits/master/README.md?author=mbostock"><img alt="@mbostock" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/230541?s=40&amp;v=4" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="curran" href="/d3/d3-scale/commits/master/README.md?author=curran"><img alt="@curran" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/68416?s=40&amp;v=4" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="existentialism" href="/d3/d3-scale/commits/master/README.md?author=existentialism"><img alt="@existentialism" class="avatar" height="20" src="https://avatars3.githubusercontent.com/u/56288?s=40&amp;v=4" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="rausnitz" href="/d3/d3-scale/commits/master/README.md?author=rausnitz"><img alt="@rausnitz" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/6132143?s=40&amp;v=4" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="Devinsuit" href="/d3/d3-scale/commits/master/README.md?author=Devinsuit"><img alt="@Devinsuit" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/11741306?s=40&amp;v=4" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="lsbardel" href="/d3/d3-scale/commits/master/README.md?author=lsbardel"><img alt="@lsbardel" class="avatar" height="20" src="https://avatars3.githubusercontent.com/u/144320?s=40&amp;v=4" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="jeroenbe" href="/d3/d3-scale/commits/master/README.md?author=jeroenbe"><img alt="@jeroenbe" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/6019254?s=40&amp;v=4" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="devgru" href="/d3/d3-scale/commits/master/README.md?author=devgru"><img alt="@devgru" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/63065?s=40&amp;v=4" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="danielgavrilov" href="/d3/d3-scale/commits/master/README.md?author=danielgavrilov"><img alt="@danielgavrilov" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/1308115?s=40&amp;v=4" width="20" /> </a>


    </div>

    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header" data-facebox-id="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list" data-facebox-id="facebox-description">
          <li class="facebox-user-list-item">
            <img alt="@mbostock" height="24" src="https://avatars0.githubusercontent.com/u/230541?s=48&amp;v=4" width="24" />
            <a href="/mbostock">mbostock</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@curran" height="24" src="https://avatars3.githubusercontent.com/u/68416?s=48&amp;v=4" width="24" />
            <a href="/curran">curran</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@existentialism" height="24" src="https://avatars2.githubusercontent.com/u/56288?s=48&amp;v=4" width="24" />
            <a href="/existentialism">existentialism</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@rausnitz" height="24" src="https://avatars3.githubusercontent.com/u/6132143?s=48&amp;v=4" width="24" />
            <a href="/rausnitz">rausnitz</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@Devinsuit" height="24" src="https://avatars1.githubusercontent.com/u/11741306?s=48&amp;v=4" width="24" />
            <a href="/Devinsuit">Devinsuit</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@lsbardel" height="24" src="https://avatars2.githubusercontent.com/u/144320?s=48&amp;v=4" width="24" />
            <a href="/lsbardel">lsbardel</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@jeroenbe" height="24" src="https://avatars0.githubusercontent.com/u/6019254?s=48&amp;v=4" width="24" />
            <a href="/jeroenbe">jeroenbe</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@devgru" height="24" src="https://avatars3.githubusercontent.com/u/63065?s=48&amp;v=4" width="24" />
            <a href="/devgru">devgru</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@danielgavrilov" height="24" src="https://avatars3.githubusercontent.com/u/1308115?s=48&amp;v=4" width="24" />
            <a href="/danielgavrilov">danielgavrilov</a>
          </li>
      </ul>
    </div>
  </div>


  <div class="file">
    <div class="file-header">
  <div class="file-actions">

    <div class="BtnGroup">
      <a href="/d3/d3-scale/raw/master/README.md" class="btn btn-sm BtnGroup-item" id="raw-url">Raw</a>
        <a href="/d3/d3-scale/blame/master/README.md" class="btn btn-sm js-update-url-with-hash BtnGroup-item" data-hotkey="b">Blame</a>
      <a href="/d3/d3-scale/commits/master/README.md" class="btn btn-sm BtnGroup-item" rel="nofollow">History</a>
    </div>

        <a class="btn-octicon tooltipped tooltipped-nw"
           href="github-windows://openRepo/https://github.com/d3/d3-scale?branch=master&amp;filepath=README.md"
           aria-label="Open this file in GitHub Desktop"
           data-ga-click="Repository, open with desktop, type:windows">
            <svg aria-hidden="true" class="octicon octicon-device-desktop" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M15 2H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5.34c-.25.61-.86 1.39-2.34 2h8c-1.48-.61-2.09-1.39-2.34-2H15c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 9H1V3h14v8z"/></svg>
        </a>

          <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/d3/d3-scale/edit/master/README.md" class="inline-form js-update-url-with-hash" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="GaX3U/fBB0fT5/pf9gv+QUeSSXoqyKsDRsXzRYWs3NVk/1pQLvygR2ZXHEVKSZlVdzgJn9reHk9c9XNbwVv1JQ==" /></div>
            <button class="btn-octicon tooltipped tooltipped-nw" type="submit"
              aria-label="Fork this project and edit the file" data-hotkey="e" data-disable-with>
              <svg aria-hidden="true" class="octicon octicon-pencil" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z"/></svg>
            </button>
</form>
        <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/d3/d3-scale/delete/master/README.md" class="inline-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="xf1vOotOZRTALQfuzQxhYKlAclx0AR8lOOwY0fu59g2iKz/LrqqE7jh9/cKBX7N8DBJIXhOns0BVTo4WMyBcjg==" /></div>
          <button class="btn-octicon btn-octicon-danger tooltipped tooltipped-nw" type="submit"
            aria-label="Fork this project and delete the file" data-disable-with>
            <svg aria-hidden="true" class="octicon octicon-trashcan" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M11 2H9c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1H2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1v9c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V5c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 12H3V5h1v8h1V5h1v8h1V5h1v8h1V5h1v9zm1-10H2V3h9v1z"/></svg>
          </button>
</form>  </div>

  <div class="file-info">
      925 lines (544 sloc)
      <span class="file-info-divider"></span>
    70.1 KB
  </div>
</div>

    
  <div id="readme" class="readme blob instapaper_body">
    <article class="markdown-body entry-content" itemprop="text"><h1><a href="#d3-scale" aria-hidden="true" class="anchor" id="user-content-d3-scale"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>d3-scale</h1>
<p>Scales are a convenient abstraction for a fundamental task in visualization: mapping a dimension of abstract data to a visual representation. Although most often used for position-encoding quantitative data, such as mapping a measurement in meters to a position in pixels for dots in a scatterplot, scales can represent virtually any visual encoding, such as diverging colors, stroke widths, or symbol size. Scales can also be used with virtually any type of data, such as named categorical data or discrete data that requires sensible breaks.</p>
<p>For <a href="#continuous-scales">continuous</a> quantitative data, you typically want a <a href="#linear-scales">linear scale</a>. (For time series data, a <a href="#time-scales">time scale</a>.) If the distribution calls for it, consider transforming data using a <a href="#power-scales">power</a> or <a href="#log-scales">log</a> scale. A <a href="#quantize-scales">quantize scale</a> may aid differentiation by rounding continuous data to a fixed set of discrete values; similarly, a <a href="#quantile-scales">quantile scale</a> computes quantiles from a sample population, and a <a href="#threshold-scales">threshold scale</a> allows you to specify arbitrary breaks in continuous data. Several built-in <a href="#sequential-scales">sequential color schemes</a> are also provided; see <a href="https://github.com/d3/d3-scale-chromatic">d3-scale-chromatic</a> for more.</p>
<p>For discrete ordinal (ordered) or categorical (unordered) data, an <a href="#ordinal-scales">ordinal scale</a> specifies an explicit mapping from a set of data values to a corresponding set of visual attributes (such as colors). The related <a href="#band-scales">band</a> and <a href="#point-scales">point</a> scales are useful for position-encoding ordinal data, such as bars in a bar chart or dots in an categorical scatterplot. Several built-in <a href="#category-scales">categorical color scales</a> are also provided.</p>
<p>Scales have no intrinsic visual representation. However, most scales can <a href="#continuous_ticks">generate</a> and <a href="#continuous_tickFormat">format</a> ticks for reference marks to aid in the construction of axes.</p>
<p>For a longer introduction, see these recommended tutorials:</p>
<ul>
<li>
<p><a href="https://medium.com/@mbostock/introducing-d3-scale-61980c51545f">Introducing d3-scale</a> by Mike Bostock</p>
</li>
<li>
<p><a href="http://chimera.labs.oreilly.com/books/1230000000345/ch07.html">Chapter 7. Scales</a> of <em>Interactive Data Visualization for the Web</em> by Scott Murray</p>
</li>
<li>
<p><a href="http://www.jeromecukier.net/blog/2011/08/11/d3-scales-and-color/">d3: scales, and color.</a> by Jérôme Cukier</p>
</li>
</ul>
<h2><a href="#installing" aria-hidden="true" class="anchor" id="user-content-installing"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installing</h2>
<p>If you use NPM, <code>npm install d3-scale</code>. Otherwise, download the <a href="https://github.com/d3/d3-scale/releases/latest">latest release</a>. You can also load directly from <a href="https://d3js.org">d3js.org</a>, either as a <a href="https://d3js.org/d3-scale.v1.min.js">standalone library</a> or as part of <a href="https://github.com/d3/d3">D3 4.0</a>. AMD, CommonJS, and vanilla environments are supported. In vanilla, a <code>d3</code> global is exported:</p>
<div class="highlight highlight-text-html-basic"><pre>&lt;<span class="pl-ent">script</span> <span class="pl-e">src</span>=<span class="pl-s"><span class="pl-pds">"</span>https://d3js.org/d3-array.v1.min.js<span class="pl-pds">"</span></span>&gt;&lt;/<span class="pl-ent">script</span>&gt;
&lt;<span class="pl-ent">script</span> <span class="pl-e">src</span>=<span class="pl-s"><span class="pl-pds">"</span>https://d3js.org/d3-collection.v1.min.js<span class="pl-pds">"</span></span>&gt;&lt;/<span class="pl-ent">script</span>&gt;
&lt;<span class="pl-ent">script</span> <span class="pl-e">src</span>=<span class="pl-s"><span class="pl-pds">"</span>https://d3js.org/d3-color.v1.min.js<span class="pl-pds">"</span></span>&gt;&lt;/<span class="pl-ent">script</span>&gt;
&lt;<span class="pl-ent">script</span> <span class="pl-e">src</span>=<span class="pl-s"><span class="pl-pds">"</span>https://d3js.org/d3-format.v1.min.js<span class="pl-pds">"</span></span>&gt;&lt;/<span class="pl-ent">script</span>&gt;
&lt;<span class="pl-ent">script</span> <span class="pl-e">src</span>=<span class="pl-s"><span class="pl-pds">"</span>https://d3js.org/d3-interpolate.v1.min.js<span class="pl-pds">"</span></span>&gt;&lt;/<span class="pl-ent">script</span>&gt;
&lt;<span class="pl-ent">script</span> <span class="pl-e">src</span>=<span class="pl-s"><span class="pl-pds">"</span>https://d3js.org/d3-time.v1.min.js<span class="pl-pds">"</span></span>&gt;&lt;/<span class="pl-ent">script</span>&gt;
&lt;<span class="pl-ent">script</span> <span class="pl-e">src</span>=<span class="pl-s"><span class="pl-pds">"</span>https://d3js.org/d3-time-format.v2.min.js<span class="pl-pds">"</span></span>&gt;&lt;/<span class="pl-ent">script</span>&gt;
&lt;<span class="pl-ent">script</span> <span class="pl-e">src</span>=<span class="pl-s"><span class="pl-pds">"</span>https://d3js.org/d3-scale.v1.min.js<span class="pl-pds">"</span></span>&gt;&lt;/<span class="pl-ent">script</span>&gt;
&lt;<span class="pl-ent">script</span>&gt;<span class="pl-s1"></span>
<span class="pl-s1"></span>
<span class="pl-s1"><span class="pl-k">var</span> x <span class="pl-k">=</span> <span class="pl-smi">d3</span>.<span class="pl-en">scaleLinear</span>();</span>
<span class="pl-s1"></span>
<span class="pl-s1"></span><span class="pl-s1">&lt;</span>/<span class="pl-ent">script</span>&gt;</pre></div>
<p>(You can omit d3-time and d3-time-format if you’re not using <a href="#scaleTime">d3.scaleTime</a> or <a href="#scaleUtc">d3.scaleUtc</a>.)</p>
<p><a href="https://tonicdev.com/npm/d3-scale">Try d3-scale in your browser.</a></p>
<h2><a href="#api-reference" aria-hidden="true" class="anchor" id="user-content-api-reference"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>API Reference</h2>
<ul>
<li><a href="#continuous-scales">Continuous</a> (<a href="#linear-scales">Linear</a>, <a href="#power-scales">Power</a>, <a href="#log-scales">Log</a>, <a href="#identity-scales">Identity</a>, <a href="#time-scales">Time</a>)</li>
<li><a href="#sequential-scales">Sequential</a></li>
<li><a href="#quantize-scales">Quantize</a></li>
<li><a href="#quantile-scales">Quantile</a></li>
<li><a href="#threshold-scales">Threshold</a></li>
<li><a href="#ordinal-scales">Ordinal</a> (<a href="#band-scales">Band</a>, <a href="#point-scales">Point</a>, <a href="#category-scales">Category</a>)</li>
</ul>
<h3><a href="#continuous-scales" aria-hidden="true" class="anchor" id="user-content-continuous-scales"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Continuous Scales</h3>
<p>Continuous scales map a continuous, quantitative input <a href="#continuous_domain">domain</a> to a continuous output <a href="#continuous_range">range</a>. If the range is also numeric, the mapping may be <a href="#continuous_invert">inverted</a>. A continuous scale is not constructed directly; instead, try a <a href="#linear-scales">linear</a>, <a href="#power-scales">power</a>, <a href="#log-scales">log</a>, <a href="#identity-scales">identity</a>, <a href="#time-scales">time</a> or <a href="#sequential-scales">sequential color</a> scale.</p>
<p><a name="user-content-_continuous" href="#_continuous">#</a> <i>continuous</i>(<i>value</i>) <a href="https://github.com/d3/d3-scale/blob/master/src/continuous.js#L69" title="Source">&lt;&gt;</a></p>
<p>Given a <em>value</em> from the <a href="#continuous_domain">domain</a>, returns the corresponding value from the <a href="#continuous_range">range</a>. If the given <em>value</em> is outside the domain, and <a href="#continuous_clamp">clamping</a> is not enabled, the mapping may be extrapolated such that the returned value is outside the range. For example, to apply a position encoding:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">var</span> x <span class="pl-k">=</span> <span class="pl-smi">d3</span>.<span class="pl-en">scaleLinear</span>()
    .<span class="pl-en">domain</span>([<span class="pl-c1">10</span>, <span class="pl-c1">130</span>])
    .<span class="pl-en">range</span>([<span class="pl-c1">0</span>, <span class="pl-c1">960</span>]);

<span class="pl-en">x</span>(<span class="pl-c1">20</span>); <span class="pl-c"><span class="pl-c">//</span> 80</span>
<span class="pl-en">x</span>(<span class="pl-c1">50</span>); <span class="pl-c"><span class="pl-c">//</span> 320</span></pre></div>
<p>Or to apply a color encoding:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">var</span> color <span class="pl-k">=</span> <span class="pl-smi">d3</span>.<span class="pl-en">scaleLinear</span>()
    .<span class="pl-en">domain</span>([<span class="pl-c1">10</span>, <span class="pl-c1">100</span>])
    .<span class="pl-en">range</span>([<span class="pl-s"><span class="pl-pds">"</span>brown<span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>steelblue<span class="pl-pds">"</span></span>]);

<span class="pl-en">color</span>(<span class="pl-c1">20</span>); <span class="pl-c"><span class="pl-c">//</span> "#9a3439"</span>
<span class="pl-en">color</span>(<span class="pl-c1">50</span>); <span class="pl-c"><span class="pl-c">//</span> "#7b5167"</span></pre></div>
<p><a name="user-content-continuous_invert" href="#continuous_invert">#</a> <i>continuous</i>.<b>invert</b>(<i>value</i>) <a href="https://github.com/d3/d3-scale/blob/master/src/continuous.js#L88" title="Source">&lt;&gt;</a></p>
<p>Given a <em>value</em> from the <a href="#continuous_range">range</a>, returns the corresponding value from the <a href="#continuous_domain">domain</a>. Inversion is useful for interaction, say to determine the data value corresponding to the position of the mouse. For example, to invert a position encoding:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">var</span> x <span class="pl-k">=</span> <span class="pl-smi">d3</span>.<span class="pl-en">scaleLinear</span>()
    .<span class="pl-en">domain</span>([<span class="pl-c1">10</span>, <span class="pl-c1">130</span>])
    .<span class="pl-en">range</span>([<span class="pl-c1">0</span>, <span class="pl-c1">960</span>]);

<span class="pl-smi">x</span>.<span class="pl-en">invert</span>(<span class="pl-c1">80</span>); <span class="pl-c"><span class="pl-c">//</span> 20</span>
<span class="pl-smi">x</span>.<span class="pl-en">invert</span>(<span class="pl-c1">320</span>); <span class="pl-c"><span class="pl-c">//</span> 50</span></pre></div>
<p>If the given <em>value</em> is outside the range, and <a href="#continuous_clamp">clamping</a> is not enabled, the mapping may be extrapolated such that the returned value is outside the domain. This method is only supported if the range is numeric. If the range is not numeric, returns NaN.</p>
<p>For a valid value <em>y</em> in the range, <i>continuous</i>(<i>continuous</i>.invert(<i>y</i>)) approximately equals <em>y</em>; similarly, for a valid value <em>x</em> in the domain, <i>continuous</i>.invert(<i>continuous</i>(<i>x</i>)) approximately equals <em>x</em>. The scale and its inverse may not be exact due to the limitations of floating point precision.</p>
<p><a name="user-content-continuous_domain" href="#continuous_domain">#</a> <i>continuous</i>.<b>domain</b>([<i>domain</i>]) <a href="https://github.com/d3/d3-scale/blob/master/src/continuous.js#L92" title="Source">&lt;&gt;</a></p>
<p>If <em>domain</em> is specified, sets the scale’s domain to the specified array of numbers. The array must contain two or more elements. If the elements in the given array are not numbers, they will be coerced to numbers. If <em>domain</em> is not specified, returns a copy of the scale’s current domain.</p>
<p>Although continuous scales typically have two values each in their domain and range, specifying more than two values produces a piecewise scale. For example, to create a diverging color scale that interpolates between white and red for negative values, and white and green for positive values, say:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">var</span> color <span class="pl-k">=</span> <span class="pl-smi">d3</span>.<span class="pl-en">scaleLinear</span>()
    .<span class="pl-en">domain</span>([<span class="pl-k">-</span><span class="pl-c1">1</span>, <span class="pl-c1">0</span>, <span class="pl-c1">1</span>])
    .<span class="pl-en">range</span>([<span class="pl-s"><span class="pl-pds">"</span>red<span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>white<span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>green<span class="pl-pds">"</span></span>]);

<span class="pl-en">color</span>(<span class="pl-k">-</span><span class="pl-c1">0.5</span>); <span class="pl-c"><span class="pl-c">//</span> "rgb(255, 128, 128)"</span>
<span class="pl-en">color</span>(<span class="pl-k">+</span><span class="pl-c1">0.5</span>); <span class="pl-c"><span class="pl-c">//</span> "rgb(128, 192, 128)"</span></pre></div>
<p>Internally, a piecewise scale performs a <a href="https://github.com/d3/d3-array#bisect">binary search</a> for the range interpolator corresponding to the given domain value. Thus, the domain must be in ascending or descending order. If the domain and range have different lengths <em>N</em> and <em>M</em>, only the first <em>min(N,M)</em> elements in each are observed.</p>
<p><a name="user-content-continuous_range" href="#continuous_range">#</a> <i>continuous</i>.<b>range</b>([<i>range</i>]) <a href="https://github.com/d3/d3-scale/blob/master/src/continuous.js#L96" title="Source">&lt;&gt;</a></p>
<p>If <em>range</em> is specified, sets the scale’s range to the specified array of values. The array must contain two or more elements. Unlike the <a href="#continuous_domain">domain</a>, elements in the given array need not be numbers; any value that is supported by the underlying <a href="#continuous_interpolate">interpolator</a> will work, though note that numeric ranges are required for <a href="#continuous_invert">invert</a>. If <em>range</em> is not specified, returns a copy of the scale’s current range. See <a href="#continuous_interpolate"><em>continuous</em>.interpolate</a> for more examples.</p>
<p><a name="user-content-continuous_rangeRound" href="#continuous_rangeRound">#</a> <i>continuous</i>.<b>rangeRound</b>([<i>range</i>]) <a href="https://github.com/d3/d3-scale/blob/master/src/continuous.js#L100" title="Source">&lt;&gt;</a></p>
<p>Sets the scale’s <a href="#continuous_range"><em>range</em></a> to the specified array of values while also setting the scale’s <a href="#continuous_interpolate">interpolator</a> to <a href="https://github.com/d3/d3-interpolate#interpolateRound">interpolateRound</a>. This is a convenience method equivalent to:</p>
<div class="highlight highlight-source-js"><pre>continuous
    .<span class="pl-en">range</span>(range)
    .<span class="pl-en">interpolate</span>(<span class="pl-smi">d3</span>.<span class="pl-smi">interpolateRound</span>);</pre></div>
<p>The rounding interpolator is sometimes useful for avoiding antialiasing artifacts, though also consider the <a href="https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/shape-rendering">shape-rendering</a> “crispEdges” styles. Note that this interpolator can only be used with numeric ranges.</p>
<p><a name="user-content-continuous_clamp" href="#continuous_clamp">#</a> <i>continuous</i>.<b>clamp</b>(<i>clamp</i>) <a href="https://github.com/d3/d3-scale/blob/master/src/continuous.js#L104" title="Source">&lt;&gt;</a></p>
<p>If <em>clamp</em> is specified, enables or disables clamping accordingly. If clamping is disabled and the scale is passed a value outside the <a href="#continuous_domain">domain</a>, the scale may return a value outside the <a href="#continuous_range">range</a> through extrapolation. If clamping is enabled, the return value of the scale is always within the scale’s range. Clamping similarly applies to <a href="#continuous_invert"><em>continuous</em>.invert</a>. For example:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">var</span> x <span class="pl-k">=</span> <span class="pl-smi">d3</span>.<span class="pl-en">scaleLinear</span>()
    .<span class="pl-en">domain</span>([<span class="pl-c1">10</span>, <span class="pl-c1">130</span>])
    .<span class="pl-en">range</span>([<span class="pl-c1">0</span>, <span class="pl-c1">960</span>]);

<span class="pl-en">x</span>(<span class="pl-k">-</span><span class="pl-c1">10</span>); <span class="pl-c"><span class="pl-c">//</span> -160, outside range</span>
<span class="pl-smi">x</span>.<span class="pl-en">invert</span>(<span class="pl-k">-</span><span class="pl-c1">160</span>); <span class="pl-c"><span class="pl-c">//</span> -10, outside domain</span>

<span class="pl-smi">x</span>.<span class="pl-en">clamp</span>(<span class="pl-c1">true</span>);
<span class="pl-en">x</span>(<span class="pl-k">-</span><span class="pl-c1">10</span>); <span class="pl-c"><span class="pl-c">//</span> 0, clamped to range</span>
<span class="pl-smi">x</span>.<span class="pl-en">invert</span>(<span class="pl-k">-</span><span class="pl-c1">160</span>); <span class="pl-c"><span class="pl-c">//</span> 10, clamped to domain</span></pre></div>
<p>If <em>clamp</em> is not specified, returns whether or not the scale currently clamps values to within the range.</p>
<p><a name="user-content-continuous_interpolate" href="#continuous_interpolate">#</a> <i>continuous</i>.<b>interpolate</b>(<i>interpolate</i>) <a href="https://github.com/d3/d3-scale/blob/master/src/continuous.js#L108" title="Source">&lt;&gt;</a></p>
<p>If <em>interpolate</em> is specified, sets the scale’s <a href="#continuous_range">range</a> interpolator factory. This interpolator factory is used to create interpolators for each adjacent pair of values from the range; these interpolators then map a normalized domain parameter <em>t</em> in [0, 1] to the corresponding value in the range. If <em>factory</em> is not specified, returns the scale’s current interpolator factory, which defaults to <a href="https://github.com/d3/d3-interpolate#interpolate">interpolate</a>. See <a href="https://github.com/d3/d3-interpolate">d3-interpolate</a> for more interpolators.</p>
<p>For example, consider a diverging color scale with three colors in the range:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">var</span> color <span class="pl-k">=</span> <span class="pl-smi">d3</span>.<span class="pl-en">scaleLinear</span>()
    .<span class="pl-en">domain</span>([<span class="pl-k">-</span><span class="pl-c1">100</span>, <span class="pl-c1">0</span>, <span class="pl-k">+</span><span class="pl-c1">100</span>])
    .<span class="pl-en">range</span>([<span class="pl-s"><span class="pl-pds">"</span>red<span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>white<span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>green<span class="pl-pds">"</span></span>]);</pre></div>
<p>Two interpolators are created internally by the scale, equivalent to:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">var</span> i0 <span class="pl-k">=</span> <span class="pl-smi">d3</span>.<span class="pl-en">interpolate</span>(<span class="pl-s"><span class="pl-pds">"</span>red<span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>white<span class="pl-pds">"</span></span>),
    i1 <span class="pl-k">=</span> <span class="pl-smi">d3</span>.<span class="pl-en">interpolate</span>(<span class="pl-s"><span class="pl-pds">"</span>white<span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>green<span class="pl-pds">"</span></span>);</pre></div>
<p>A common reason to specify a custom interpolator is to change the color space of interpolation. For example, to use <a href="https://github.com/d3/d3-interpolate#interpolateHcl">HCL</a>:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">var</span> color <span class="pl-k">=</span> <span class="pl-smi">d3</span>.<span class="pl-en">scaleLinear</span>()
    .<span class="pl-en">domain</span>([<span class="pl-c1">10</span>, <span class="pl-c1">100</span>])
    .<span class="pl-en">range</span>([<span class="pl-s"><span class="pl-pds">"</span>brown<span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>steelblue<span class="pl-pds">"</span></span>])
    .<span class="pl-en">interpolate</span>(<span class="pl-smi">d3</span>.<span class="pl-smi">interpolateHcl</span>);</pre></div>
<p>Or for <a href="https://github.com/d3/d3-interpolate#interpolateCubehelix">Cubehelix</a> with a custom gamma:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">var</span> color <span class="pl-k">=</span> <span class="pl-smi">d3</span>.<span class="pl-en">scaleLinear</span>()
    .<span class="pl-en">domain</span>([<span class="pl-c1">10</span>, <span class="pl-c1">100</span>])
    .<span class="pl-en">range</span>([<span class="pl-s"><span class="pl-pds">"</span>brown<span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>steelblue<span class="pl-pds">"</span></span>])
    .<span class="pl-en">interpolate</span>(<span class="pl-smi">d3</span>.<span class="pl-smi">interpolateCubehelix</span>.<span class="pl-en">gamma</span>(<span class="pl-c1">3</span>));</pre></div>
<p>Note: the <a href="https://github.com/d3/d3-interpolate#interpolate">default interpolator</a> <strong>may reuse return values</strong>. For example, if the range values are objects, then the value interpolator always returns the same object, modifying it in-place. If the scale is used to set an attribute or style, this is typically acceptable (and desirable for performance); however, if you need to store the scale’s return value, you must specify your own interpolator or make a copy as appropriate.</p>
<p><a name="user-content-continuous_ticks" href="#continuous_ticks">#</a> <i>continuous</i>.<b>ticks</b>([<i>count</i>])</p>
<p>Returns approximately <em>count</em> representative values from the scale’s <a href="#continuous_domain">domain</a>. If <em>count</em> is not specified, it defaults to 10. The returned tick values are uniformly spaced, have human-readable values (such as multiples of powers of 10), and are guaranteed to be within the extent of the domain. Ticks are often used to display reference lines, or tick marks, in conjunction with the visualized data. The specified <em>count</em> is only a hint; the scale may return more or fewer values depending on the domain. See also d3-array’s <a href="https://github.com/d3/d3-array#ticks">ticks</a>.</p>
<p><a name="user-content-continuous_tickFormat" href="#continuous_tickFormat">#</a> <i>continuous</i>.<b>tickFormat</b>([<i>count</i>[, <i>specifier</i>]]) <a href="https://github.com/d3/d3-scale/blob/master/src/tickFormat.js" title="Source">&lt;&gt;</a></p>
<p>Returns a <a href="https://github.com/d3/d3-format">number format</a> function suitable for displaying a tick value, automatically computing the appropriate precision based on the fixed interval between tick values. The specified <em>count</em> should have the same value as the count that is used to generate the <a href="#continuous_ticks">tick values</a>.</p>
<p>An optional <em>specifier</em> allows a <a href="https://github.com/d3/d3-format#locale_format">custom format</a> where the precision of the format is automatically set by the scale as appropriate for the tick interval. For example, to format percentage change, you might say:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">var</span> x <span class="pl-k">=</span> <span class="pl-smi">d3</span>.<span class="pl-en">scaleLinear</span>()
    .<span class="pl-en">domain</span>([<span class="pl-k">-</span><span class="pl-c1">1</span>, <span class="pl-c1">1</span>])
    .<span class="pl-en">range</span>([<span class="pl-c1">0</span>, <span class="pl-c1">960</span>]);

<span class="pl-k">var</span> ticks <span class="pl-k">=</span> <span class="pl-smi">x</span>.<span class="pl-en">ticks</span>(<span class="pl-c1">5</span>),
    tickFormat <span class="pl-k">=</span> <span class="pl-smi">x</span>.<span class="pl-en">tickFormat</span>(<span class="pl-c1">5</span>, <span class="pl-s"><span class="pl-pds">"</span>+%<span class="pl-pds">"</span></span>);

<span class="pl-smi">ticks</span>.<span class="pl-en">map</span>(tickFormat); <span class="pl-c"><span class="pl-c">//</span> ["-100%", "-50%", "+0%", "+50%", "+100%"]</span></pre></div>
<p>If <em>specifier</em> uses the format type <code>s</code>, the scale will return a <a href="https://github.com/d3/d3-format#locale_formatPrefix">SI-prefix format</a> based on the largest value in the domain. If the <em>specifier</em> already specifies a precision, this method is equivalent to <a href="https://github.com/d3/d3-format#locale_format"><em>locale</em>.format</a>.</p>
<p><a name="user-content-continuous_nice" href="#continuous_nice">#</a> <i>continuous</i>.<b>nice</b>([<i>count</i>]) <a href="https://github.com/d3/d3-scale/blob/master/src/nice.js" title="Source">&lt;&gt;</a></p>
<p>Extends the <a href="#continuous_domain">domain</a> so that it starts and ends on nice round values. This method typically modifies the scale’s domain, and may only extend the bounds to the nearest round value. An optional tick <em>count</em> argument allows greater control over the step size used to extend the bounds, guaranteeing that the returned <a href="#continuous_ticks">ticks</a> will exactly cover the domain. Nicing is useful if the domain is computed from data, say using <a href="https://github.com/d3/d3-array#extent">extent</a>, and may be irregular. For example, for a domain of [0.201479…, 0.996679…], a nice domain might be [0.2, 1.0]. If the domain has more than two values, nicing the domain only affects the first and last value. See also d3-array’s <a href="https://github.com/d3/d3-array#tickStep">tickStep</a>.</p>
<p>Nicing a scale only modifies the current domain; it does not automatically nice domains that are subsequently set using <a href="#continuous_domain"><em>continuous</em>.domain</a>. You must re-nice the scale after setting the new domain, if desired.</p>
<p><a name="user-content-continuous_copy" href="#continuous_copy">#</a> <i>continuous</i>.<b>copy</b>() <a href="https://github.com/d3/d3-scale/blob/master/src/continuous.js#L59" title="Source">&lt;&gt;</a></p>
<p>Returns an exact copy of this scale. Changes to this scale will not affect the returned scale, and vice versa.</p>
<h4><a href="#linear-scales" aria-hidden="true" class="anchor" id="user-content-linear-scales"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Linear Scales</h4>
<p><a name="user-content-scaleLinear" href="#scaleLinear">#</a> d3.<b>scaleLinear</b>() <a href="https://github.com/d3/d3-scale/blob/master/src/linear.js" title="Source">&lt;&gt;</a></p>
<p>Constructs a new <a href="#continuous-scales">continuous scale</a> with the unit <a href="#continuous_domain">domain</a> [0, 1], the unit <a href="#continuous_range">range</a> [0, 1], the <a href="https://github.com/d3/d3-interpolate#interpolate">default</a> <a href="#continuous_interpolate">interpolator</a> and <a href="#continuous_clamp">clamping</a> disabled. Linear scales are a good default choice for continuous quantitative data because they preserve proportional differences. Each range value <em>y</em> can be expressed as a function of the domain value <em>x</em>: <em>y</em> = <em>mx</em> + <em>b</em>.</p>
<h4><a href="#power-scales" aria-hidden="true" class="anchor" id="user-content-power-scales"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Power Scales</h4>
<p>Power scales are similar to <a href="#linear-scales">linear scales</a>, except an exponential transform is applied to the input domain value before the output range value is computed. Each range value <em>y</em> can be expressed as a function of the domain value <em>x</em>: <em>y</em> = <em>mx^k</em> + <em>b</em>, where <em>k</em> is the <a href="#pow_exponent">exponent</a> value. Power scales also support negative domain values, in which case the input value and the resulting output value are multiplied by -1.</p>
<p><a name="user-content-scalePow" href="#scalePow">#</a> d3.<b>scalePow</b>() <a href="https://github.com/d3/d3-scale/blob/master/src/pow.js" title="Source">&lt;&gt;</a></p>
<p>Constructs a new <a href="#continuous-scales">continuous scale</a> with the unit <a href="#continuous_domain">domain</a> [0, 1], the unit <a href="#continuous_range">range</a> [0, 1], the <a href="#pow_exponent">exponent</a> 1, the <a href="https://github.com/d3/d3-interpolate#interpolate">default</a> <a href="#continuous_interpolate">interpolator</a> and <a href="#continuous_clamp">clamping</a> disabled. (Note that this is effectively a <a href="#linear-scales">linear</a> scale until you set a different exponent.)</p>
<p><a name="user-content-pow" href="#_pow">#</a> <i>pow</i>(<i>value</i>) <a href="https://github.com/d3/d3-scale/blob/master/src/pow.js#L9" title="Source">&lt;&gt;</a></p>
<p>See <a href="#_continuous"><em>continuous</em></a>.</p>
<p><a name="user-content-pow_invert" href="#pow_invert">#</a> <i>pow</i>.<b>invert</b>(<i>value</i>)</p>
<p>See <a href="#continuous_invert"><em>continuous</em>.invert</a>.</p>
<p><a name="user-content-pow_exponent" href="#pow_exponent">#</a> <i>pow</i>.<b>exponent</b>([<i>exponent</i>]) <a href="https://github.com/d3/d3-scale/blob/master/src/pow.js#L25" title="Source">&lt;&gt;</a></p>
<p>If <em>exponent</em> is specified, sets the current exponent to the given numeric value. If <em>exponent</em> is not specified, returns the current exponent, which defaults to 1. (Note that this is effectively a <a href="#linear-scales">linear</a> scale until you set a different exponent.)</p>
<p><a name="user-content-pow_domain" href="#pow_domain">#</a> <i>pow</i>.<b>domain</b>([<i>domain</i>])</p>
<p>See <a href="#continuous_domain"><em>continuous</em>.domain</a>.</p>
<p><a name="user-content-pow_range" href="#pow_range">#</a> <i>pow</i>.<b>range</b>([<i>range</i>])</p>
<p>See <a href="#continuous_range"><em>continuous</em>.range</a>.</p>
<p><a name="user-content-pow_rangeRound" href="#pow_rangeRound">#</a> <i>pow</i>.<b>rangeRound</b>([<i>range</i>])</p>
<p>See <a href="#continuous_rangeRound"><em>continuous</em>.rangeRound</a>.</p>
<p><a name="user-content-pow_clamp" href="#pow_clamp">#</a> <i>pow</i>.<b>clamp</b>(<i>clamp</i>)</p>
<p>See <a href="#continuous_clamp"><em>continuous</em>.clamp</a>.</p>
<p><a name="user-content-pow_interpolate" href="#pow_interpolate">#</a> <i>pow</i>.<b>interpolate</b>(<i>interpolate</i>)</p>
<p>See <a href="#continuous_interpolate"><em>continuous</em>.interpolate</a>.</p>
<p><a name="user-content-pow_ticks" href="#pow_ticks">#</a> <i>pow</i>.<b>ticks</b>([<i>count</i>])</p>
<p>See <a href="#continuous_ticks"><em>continuous</em>.ticks</a>.</p>
<p><a name="user-content-pow_tickFormat" href="#pow_tickFormat">#</a> <i>pow</i>.<b>tickFormat</b>([<i>count</i>[, <i>specifier</i>]])</p>
<p>See <a href="#continuous_tickFormat"><em>continuous</em>.tickFormat</a>.</p>
<p><a name="user-content-pow_nice" href="#pow_nice">#</a> <i>pow</i>.<b>nice</b>([<i>count</i>])</p>
<p>See <a href="#continuous_nice"><em>continuous</em>.nice</a>.</p>
<p><a name="user-content-pow_copy" href="#pow_copy">#</a> <i>pow</i>.<b>copy</b>() <a href="https://github.com/d3/d3-scale/blob/master/src/pow.js#L29" title="Source">&lt;&gt;</a></p>
<p>See <a href="#continuous_copy"><em>continuous</em>.copy</a>.</p>
<p><a name="user-content-scaleSqrt" href="#scaleSqrt">#</a> d3.<b>scaleSqrt</b>() <a href="https://github.com/d3/d3-scale/blob/master/src/pow.js#L36" title="Source">&lt;&gt;</a></p>
<p>Constructs a new <a href="#continuous-scales">continuous</a> <a href="#power-scales">power scale</a> with the unit <a href="#continuous_domain">domain</a> [0, 1], the unit <a href="#continuous_range">range</a> [0, 1], the <a href="#pow_exponent">exponent</a> 0.5, the <a href="https://github.com/d3/d3-interpolate#interpolate">default</a> <a href="#continuous_interpolate">interpolator</a> and <a href="#continuous_clamp">clamping</a> disabled. This is a convenience method equivalent to <code>d3.scalePow().exponent(0.5)</code>.</p>
<h4><a href="#log-scales" aria-hidden="true" class="anchor" id="user-content-log-scales"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Log Scales</h4>
<p>Log scales are similar to <a href="#linear-scales">linear scales</a>, except a logarithmic transform is applied to the input domain value before the output range value is computed. The mapping to the range value <em>y</em> can be expressed as a function of the domain value <em>x</em>: <em>y</em> = <em>m</em> log(<i>x</i>) + <em>b</em>.</p>
<p>As log(0) = -∞, a log scale domain must be <strong>strictly-positive or strictly-negative</strong>; the domain must not include or cross zero. A log scale with a positive domain has a well-defined behavior for positive values, and a log scale with a negative domain has a well-defined behavior for negative values. (For a negative domain, input and output values are implicitly multiplied by -1.) The behavior of the scale is undefined if you pass a negative value to a log scale with a positive domain or vice versa.</p>
<p><a name="user-content-scaleLog" href="#scaleLog">#</a> d3.<b>scaleLog</b>() <a href="https://github.com/d3/d3-scale/blob/master/src/log.js" title="Source">&lt;&gt;</a></p>
<p>Constructs a new <a href="#continuous-scales">continuous scale</a> with the <a href="#log_domain">domain</a> [1, 10], the unit <a href="#log_range">range</a> [0, 1], the <a href="#log_base">base</a> 10, the <a href="https://github.com/d3/d3-interpolate#interpolate">default</a> <a href="#log_interpolate">interpolator</a> and <a href="#log_clamp">clamping</a> disabled.</p>
<p><a name="user-content-log" href="#_log">#</a> <i>log</i>(<i>value</i>) <a href="https://github.com/d3/d3-scale/blob/master/src/log.js#L42" title="Source">&lt;&gt;</a></p>
<p>See <a href="#_continuous"><em>continuous</em></a>.</p>
<p><a name="user-content-log_invert" href="#log_invert">#</a> <i>log</i>.<b>invert</b>(<i>value</i>)</p>
<p>See <a href="#continuous_invert"><em>continuous</em>.invert</a>.</p>
<p><a name="user-content-log_base" href="#log_base">#</a> <i>log</i>.<b>base</b>([<i>base</i>]) <a href="https://github.com/d3/d3-scale/blob/master/src/log.js#L55" title="Source">&lt;&gt;</a></p>
<p>If <em>base</em> is specified, sets the base for this logarithmic scale to the specified value. If <em>base</em> is not specified, returns the current base, which defaults to 10.</p>
<p><a name="user-content-log_domain" href="#log_domain">#</a> <i>log</i>.<b>domain</b>([<i>domain</i>]) <a href="https://github.com/d3/d3-scale/blob/master/src/log.js#L59" title="Source">&lt;&gt;</a></p>
<p>See <a href="#continuous_domain"><em>continuous</em>.domain</a>.</p>
<p><a name="user-content-log_range" href="#log_range">#</a> <i>log</i>.<b>range</b>([<i>range</i>]) <a href="https://github.com/d3/d3-scale/blob/master/src/continuous.js#L96" title="Source">&lt;&gt;</a></p>
<p>See <a href="#continuous_range"><em>continuous</em>.range</a>.</p>
<p><a name="user-content-log_rangeRound" href="#log_rangeRound">#</a> <i>log</i>.<b>rangeRound</b>([<i>range</i>])</p>
<p>See <a href="#continuous_rangeRound"><em>continuous</em>.rangeRound</a>.</p>
<p><a name="user-content-log_clamp" href="#log_clamp">#</a> <i>log</i>.<b>clamp</b>(<i>clamp</i>)</p>
<p>See <a href="#continuous_clamp"><em>continuous</em>.clamp</a>.</p>
<p><a name="user-content-log_interpolate" href="#log_interpolate">#</a> <i>log</i>.<b>interpolate</b>(<i>interpolate</i>)</p>
<p>See <a href="#continuous_interpolate"><em>continuous</em>.interpolate</a>.</p>
<p><a name="user-content-log_ticks" href="#log_ticks">#</a> <i>log</i>.<b>ticks</b>([<i>count</i>]) <a href="https://github.com/d3/d3-scale/blob/master/src/log.js#L63" title="Source">&lt;&gt;</a></p>
<p>Like <a href="#continuous_ticks"><em>continuous</em>.ticks</a>, but customized for a log scale. If the <a href="#log_base">base</a> is an integer, the returned ticks are uniformly spaced within each integer power of base; otherwise, one tick per power of base is returned. The returned ticks are guaranteed to be within the extent of the domain. If the orders of magnitude in the <a href="#log_domain">domain</a> is greater than <em>count</em>, then at most one tick per power is returned. Otherwise, the tick values are unfiltered, but note that you can use <a href="#log_tickFormat"><em>log</em>.tickFormat</a> to filter the display of tick labels. If <em>count</em> is not specified, it defaults to 10.</p>
<p><a name="user-content-log_tickFormat" href="#log_tickFormat">#</a> <i>log</i>.<b>tickFormat</b>([<i>count</i>[, <i>specifier</i>]]) <a href="https://github.com/d3/d3-scale/blob/master/src/log.js#L103" title="Source">&lt;&gt;</a></p>
<p>Like <a href="#continuous_tickFormat"><em>continuous</em>.tickFormat</a>, but customized for a log scale. The specified <em>count</em> typically has the same value as the count that is used to generate the <a href="#continuous_ticks">tick values</a>. If there are too many ticks, the formatter may return the empty string for some of the tick labels; however, note that the ticks are still shown. To disable filtering, specify a <em>count</em> of Infinity. When specifying a count, you may also provide a format <em>specifier</em> or format function. For example, to get a tick formatter that will display 20 ticks of a currency, say <code>log.tickFormat(20, "$,f")</code>. If the specifier does not have a defined precision, the precision will be set automatically by the scale, returning the appropriate format. This provides a convenient way of specifying a format whose precision will be automatically set by the scale.</p>
<p><a name="user-content-log_nice" href="#log_nice">#</a> <i>log</i>.<b>nice</b>() <a href="https://github.com/d3/d3-scale/blob/master/src/log.js#L116" title="Source">&lt;&gt;</a></p>
<p>Like <a href="#continuous_nice"><em>continuous</em>.nice</a>, except extends the domain to integer powers of <a href="#log_base">base</a>. For example, for a domain of [0.201479…, 0.996679…], and base 10, the nice domain is [0.1, 1]. If the domain has more than two values, nicing the domain only affects the first and last value.</p>
<p><a name="user-content-log_copy" href="#log_copy">#</a> <i>log</i>.<b>copy</b>() <a href="https://github.com/d3/d3-scale/blob/master/src/log.js#L123" title="Source">&lt;&gt;</a></p>
<p>See <a href="#continuous_copy"><em>continuous</em>.copy</a>.</p>
<h4><a href="#identity-scales" aria-hidden="true" class="anchor" id="user-content-identity-scales"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Identity Scales</h4>
<p>Identity scales are a special case of <a href="#linear-scales">linear scales</a> where the domain and range are identical; the scale and its invert method are thus the identity function. These scales are occasionally useful when working with pixel coordinates, say in conjunction with an axis or brush. Identity scales do not support <a href="#continuous_rangeRound">rangeRound</a>, <a href="#continuous_clamp">clamp</a> or <a href="#continuous_interpolate">interpolate</a>.</p>
<p><a name="user-content-scaleIdentity" href="#scaleIdentity">#</a> d3.<b>scaleIdentity</b>() <a href="https://github.com/d3/d3-scale/blob/master/src/identity.js" title="Source">&lt;&gt;</a></p>
<p>Constructs a new identity scale with the unit <a href="#continuous_domain">domain</a> [0, 1] and the unit <a href="#continuous_range">range</a> [0, 1].</p>
<h4><a href="#time-scales" aria-hidden="true" class="anchor" id="user-content-time-scales"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Time Scales</h4>
<p>Time scales are a variant of <a href="#linear-scales">linear scales</a> that have a temporal domain: domain values are coerced to <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Date">dates</a> rather than numbers, and <a href="#continuous_invert">invert</a> likewise returns a date. Time scales implement <a href="#time_ticks">ticks</a> based on <a href="https://github.com/d3/d3-time">calendar intervals</a>, taking the pain out of generating axes for temporal domains.</p>
<p>For example, to create a position encoding:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">var</span> x <span class="pl-k">=</span> <span class="pl-smi">d3</span>.<span class="pl-en">scaleTime</span>()
    .<span class="pl-en">domain</span>([<span class="pl-k">new</span> <span class="pl-en">Date</span>(<span class="pl-c1">2000</span>, <span class="pl-c1">0</span>, <span class="pl-c1">1</span>), <span class="pl-k">new</span> <span class="pl-en">Date</span>(<span class="pl-c1">2000</span>, <span class="pl-c1">0</span>, <span class="pl-c1">2</span>)])
    .<span class="pl-en">range</span>([<span class="pl-c1">0</span>, <span class="pl-c1">960</span>]);

<span class="pl-en">x</span>(<span class="pl-k">new</span> <span class="pl-en">Date</span>(<span class="pl-c1">2000</span>, <span class="pl-c1">0</span>, <span class="pl-c1">1</span>,  <span class="pl-c1">5</span>)); <span class="pl-c"><span class="pl-c">//</span> 200</span>
<span class="pl-en">x</span>(<span class="pl-k">new</span> <span class="pl-en">Date</span>(<span class="pl-c1">2000</span>, <span class="pl-c1">0</span>, <span class="pl-c1">1</span>, <span class="pl-c1">16</span>)); <span class="pl-c"><span class="pl-c">//</span> 640</span>
<span class="pl-smi">x</span>.<span class="pl-en">invert</span>(<span class="pl-c1">200</span>); <span class="pl-c"><span class="pl-c">//</span> Sat Jan 01 2000 05:00:00 GMT-0800 (PST)</span>
<span class="pl-smi">x</span>.<span class="pl-en">invert</span>(<span class="pl-c1">640</span>); <span class="pl-c"><span class="pl-c">//</span> Sat Jan 01 2000 16:00:00 GMT-0800 (PST)</span></pre></div>
<p>For a valid value <em>y</em> in the range, <i>time</i>(<i>time</i>.invert(<i>y</i>)) equals <em>y</em>; similarly, for a valid value <em>x</em> in the domain, <i>time</i>.invert(<i>time</i>(<i>x</i>)) equals <em>x</em>. The invert method is useful for interaction, say to determine the value in the domain that corresponds to the pixel location under the mouse.</p>
<p><a name="user-content-scaleTime" href="#scaleTime">#</a> d3.<b>scaleTime</b>() <a href="https://github.com/d3/d3-scale/blob/master/src/time.js" title="Source">&lt;&gt;</a></p>
<p>Constructs a new time scale with the <a href="#time_domain">domain</a> [2000-01-01, 2000-01-02], the unit <a href="#time_range">range</a> [0, 1], the <a href="https://github.com/d3/d3-interpolate#interpolate">default</a> <a href="#time_interpolate">interpolator</a> and <a href="#time_clamp">clamping</a> disabled.</p>
<p><a name="user-content-time" href="#_time">#</a> <i>time</i>(<i>value</i>) <a href="https://github.com/d3/d3-scale/blob/master/src/time.js#L133" title="Source">&lt;&gt;</a></p>
<p>See <a href="#_continuous"><em>continuous</em></a>.</p>
<p><a name="user-content-time_invert" href="#time_invert">#</a> <i>time</i>.<b>invert</b>(<i>value</i>) <a href="https://github.com/d3/d3-scale/blob/master/src/time.js#L95" title="Source">&lt;&gt;</a></p>
<p>See <a href="#continuous_invert"><em>continuous</em>.invert</a>.</p>
<p><a name="user-content-time_domain" href="#time_domain">#</a> <i>time</i>.<b>domain</b>([<i>domain</i>]) <a href="https://github.com/d3/d3-scale/blob/master/src/time.js#L99" title="Source">&lt;&gt;</a></p>
<p>See <a href="#continuous_domain"><em>continuous</em>.domain</a>.</p>
<p><a name="user-content-time_range" href="#time_range">#</a> <i>time</i>.<b>range</b>([<i>range</i>])</p>
<p>See <a href="#continuous_range"><em>continuous</em>.range</a>.</p>
<p><a name="user-content-time_rangeRound" href="#time_rangeRound">#</a> <i>time</i>.<b>rangeRound</b>([<i>range</i>])</p>
<p>See <a href="#continuous_rangeRound"><em>continuous</em>.rangeRound</a>.</p>
<p><a name="user-content-time_clamp" href="#time_clamp">#</a> <i>time</i>.<b>clamp</b>(<i>clamp</i>)</p>
<p>See <a href="#continuous_clamp"><em>continuous</em>.clamp</a>.</p>
<p><a name="user-content-time_interpolate" href="#time_interpolate">#</a> <i>time</i>.<b>interpolate</b>(<i>interpolate</i>)</p>
<p>See <a href="#continuous_interpolate"><em>continuous</em>.interpolate</a>.</p>
<p><a name="user-content-time_ticks" href="#time_ticks">#</a> <i>time</i>.<b>ticks</b>([<i>count</i>]) <a href="https://github.com/d3/d3-scale/blob/master/src/time.js#L103" title="Source">&lt;&gt;</a>
<br><a name="user-content-time_ticks" href="#time_ticks">#</a> <i>time</i>.<b>ticks</b>([<i>interval</i>])</p>
<p>Returns representative dates from the scale’s <a href="#time_domain">domain</a>. The returned tick values are uniformly-spaced (mostly), have sensible values (such as every day at midnight), and are guaranteed to be within the extent of the domain. Ticks are often used to display reference lines, or tick marks, in conjunction with the visualized data.</p>
<p>An optional <em>count</em> may be specified to affect how many ticks are generated. If <em>count</em> is not specified, it defaults to 10. The specified <em>count</em> is only a hint; the scale may return more or fewer values depending on the domain. For example, to create ten default ticks, say:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">var</span> x <span class="pl-k">=</span> <span class="pl-smi">d3</span>.<span class="pl-en">scaleTime</span>();

<span class="pl-smi">x</span>.<span class="pl-en">ticks</span>(<span class="pl-c1">10</span>);
<span class="pl-c"><span class="pl-c">//</span> [Sat Jan 01 2000 00:00:00 GMT-0800 (PST),</span>
<span class="pl-c"><span class="pl-c">//</span>  Sat Jan 01 2000 03:00:00 GMT-0800 (PST),</span>
<span class="pl-c"><span class="pl-c">//</span>  Sat Jan 01 2000 06:00:00 GMT-0800 (PST),</span>
<span class="pl-c"><span class="pl-c">//</span>  Sat Jan 01 2000 09:00:00 GMT-0800 (PST),</span>
<span class="pl-c"><span class="pl-c">//</span>  Sat Jan 01 2000 12:00:00 GMT-0800 (PST),</span>
<span class="pl-c"><span class="pl-c">//</span>  Sat Jan 01 2000 15:00:00 GMT-0800 (PST),</span>
<span class="pl-c"><span class="pl-c">//</span>  Sat Jan 01 2000 18:00:00 GMT-0800 (PST),</span>
<span class="pl-c"><span class="pl-c">//</span>  Sat Jan 01 2000 21:00:00 GMT-0800 (PST),</span>
<span class="pl-c"><span class="pl-c">//</span>  Sun Jan 02 2000 00:00:00 GMT-0800 (PST)]</span></pre></div>
<p>The following time intervals are considered for automatic ticks:</p>
<ul>
<li>1-, 5-, 15- and 30-second.</li>
<li>1-, 5-, 15- and 30-minute.</li>
<li>1-, 3-, 6- and 12-hour.</li>
<li>1- and 2-day.</li>
<li>1-week.</li>
<li>1- and 3-month.</li>
<li>1-year.</li>
</ul>
<p>In lieu of a <em>count</em>, a <a href="https://github.com/d3/d3-time#intervals">time <em>interval</em></a> may be explicitly specified. To prune the generated ticks for a given time <em>interval</em>, use <a href="https://github.com/d3/d3-time#interval_every"><em>interval</em>.every</a>. For example, to generate ticks at 15-<a href="https://github.com/d3/d3-time#minute">minute</a> intervals:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">var</span> x <span class="pl-k">=</span> <span class="pl-smi">d3</span>.<span class="pl-en">scaleTime</span>()
    .<span class="pl-en">domain</span>([<span class="pl-k">new</span> <span class="pl-en">Date</span>(<span class="pl-c1">2000</span>, <span class="pl-c1">0</span>, <span class="pl-c1">1</span>, <span class="pl-c1">0</span>), <span class="pl-k">new</span> <span class="pl-en">Date</span>(<span class="pl-c1">2000</span>, <span class="pl-c1">0</span>, <span class="pl-c1">1</span>, <span class="pl-c1">2</span>)]);

<span class="pl-smi">x</span>.<span class="pl-en">ticks</span>(<span class="pl-smi">d3</span>.<span class="pl-smi">timeMinute</span>.<span class="pl-en">every</span>(<span class="pl-c1">15</span>));
<span class="pl-c"><span class="pl-c">//</span> [Sat Jan 01 2000 00:00:00 GMT-0800 (PST),</span>
<span class="pl-c"><span class="pl-c">//</span>  Sat Jan 01 2000 00:15:00 GMT-0800 (PST),</span>
<span class="pl-c"><span class="pl-c">//</span>  Sat Jan 01 2000 00:30:00 GMT-0800 (PST),</span>
<span class="pl-c"><span class="pl-c">//</span>  Sat Jan 01 2000 00:45:00 GMT-0800 (PST),</span>
<span class="pl-c"><span class="pl-c">//</span>  Sat Jan 01 2000 01:00:00 GMT-0800 (PST),</span>
<span class="pl-c"><span class="pl-c">//</span>  Sat Jan 01 2000 01:15:00 GMT-0800 (PST),</span>
<span class="pl-c"><span class="pl-c">//</span>  Sat Jan 01 2000 01:30:00 GMT-0800 (PST),</span>
<span class="pl-c"><span class="pl-c">//</span>  Sat Jan 01 2000 01:45:00 GMT-0800 (PST),</span>
<span class="pl-c"><span class="pl-c">//</span>  Sat Jan 01 2000 02:00:00 GMT-0800 (PST)]</span></pre></div>
<p>Alternatively, pass a test function to <a href="https://github.com/d3/d3-time#interval_filter"><em>interval</em>.filter</a>:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-smi">x</span>.<span class="pl-en">ticks</span>(<span class="pl-smi">d3</span>.<span class="pl-smi">timeMinute</span>.<span class="pl-en">filter</span>(<span class="pl-k">function</span>(<span class="pl-smi">d</span>) {
  <span class="pl-k">return</span> <span class="pl-smi">d</span>.<span class="pl-c1">getMinutes</span>() <span class="pl-k">%</span> <span class="pl-c1">15</span> <span class="pl-k">===</span> <span class="pl-c1">0</span>;
}));</pre></div>
<p>Note: in some cases, such as with day ticks, specifying a <em>step</em> can result in irregular spacing of ticks because time intervals have varying length.</p>
<p><a name="user-content-time_tickFormat" href="#time_tickFormat">#</a> <i>time</i>.<b>tickFormat</b>([<i>count</i>[, <i>specifier</i>]]) <a href="https://github.com/d3/d3-scale/blob/master/src/time.js#L115" title="Source">&lt;&gt;</a>
<br><a href="#time_tickFormat">#</a> <i>time</i>.<b>tickFormat</b>([<i>interval</i>[, <i>specifier</i>]])</p>
<p>Returns a time format function suitable for displaying <a href="#time_ticks">tick</a> values. The specified <em>count</em> or <em>interval</em> is currently ignored, but is accepted for consistency with other scales such as <a href="#continuous_tickFormat"><em>continuous</em>.tickFormat</a>. If a format <em>specifier</em> is specified, this method is equivalent to <a href="https://github.com/d3/d3-time-format#format">format</a>. If <em>specifier</em> is not specified, the default time format is returned. The default multi-scale time format chooses a human-readable representation based on the specified date as follows:</p>
<ul>
<li><code>%Y</code> - for year boundaries, such as <code>2011</code>.</li>
<li><code>%B</code> - for month boundaries, such as <code>February</code>.</li>
<li><code>%b %d</code> - for week boundaries, such as <code>Feb 06</code>.</li>
<li><code>%a %d</code> - for day boundaries, such as <code>Mon 07</code>.</li>
<li><code>%I %p</code> - for hour boundaries, such as <code>01 AM</code>.</li>
<li><code>%I:%M</code> - for minute boundaries, such as <code>01:23</code>.</li>
<li><code>:%S</code> - for second boundaries, such as <code>:45</code>.</li>
<li><code>.%L</code> - milliseconds for all other times, such as <code>.012</code>.</li>
</ul>
<p>Although somewhat unusual, this default behavior has the benefit of providing both local and global context: for example, formatting a sequence of ticks as [11 PM, Mon 07, 01 AM] reveals information about hours, dates, and day simultaneously, rather than just the hours [11 PM, 12 AM, 01 AM]. See <a href="https://github.com/d3/d3-time-format">d3-time-format</a> if you’d like to roll your own conditional time format.</p>
<p><a name="user-content-time_nice" href="#time_nice">#</a> <i>time</i>.<b>nice</b>([<i>count</i>]) <a href="https://github.com/d3/d3-scale/blob/master/src/time.js#L119" title="Source">&lt;&gt;</a>
<br><a name="user-content-time_nice" href="#time_nice">#</a> <i>time</i>.<b>nice</b>([<i>interval</i>[, <i>step</i>]])</p>
<p>Extends the <a href="#time_domain">domain</a> so that it starts and ends on nice round values. This method typically modifies the scale’s domain, and may only extend the bounds to the nearest round value. See <a href="#continuous_nice"><em>continuous</em>.nice</a> for more.</p>
<p>An optional tick <em>count</em> argument allows greater control over the step size used to extend the bounds, guaranteeing that the returned <a href="#time_ticks">ticks</a> will exactly cover the domain. Alternatively, a <a href="https://github.com/d3/d3-time#intervals">time <em>interval</em></a> may be specified to explicitly set the ticks. If an <em>interval</em> is specified, an optional <em>step</em> may also be specified to skip some ticks. For example, <code>time.nice(d3.timeSecond, 10)</code> will extend the domain to an even ten seconds (0, 10, 20, <i>etc.</i>). See <a href="#time_ticks"><em>time</em>.ticks</a> and <a href="https://github.com/d3/d3-time#interval_every"><em>interval</em>.every</a> for further detail.</p>
<p>Nicing is useful if the domain is computed from data, say using <a href="https://github.com/d3/d3-array#extent">extent</a>, and may be irregular. For example, for a domain of [2009-07-13T00:02, 2009-07-13T23:48], the nice domain is [2009-07-13, 2009-07-14]. If the domain has more than two values, nicing the domain only affects the first and last value.</p>
<p><a name="user-content-scaleUtc" href="#scaleUtc">#</a> d3.<b>scaleUtc</b>() <a href="https://github.com/d3/d3-scale/blob/master/src/utcTime.js" title="Source">&lt;&gt;</a></p>
<p>Equivalent to <a href="#time">time</a>, but the returned time scale operates in <a href="https://en.wikipedia.org/wiki/Coordinated_Universal_Time">Coordinated Universal Time</a> rather than local time.</p>
<h3><a href="#sequential-scales" aria-hidden="true" class="anchor" id="user-content-sequential-scales"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Sequential Scales</h3>
<p>Sequential scales are similar to <a href="#continuous-scales">continuous scales</a> in that they map a continuous, numeric input domain to a continuous output range. However, unlike continuous scales, the output range of a sequential scale is fixed by its interpolator and not configurable. These scales do not expose <a href="#continuous_invert">invert</a>, <a href="#continuous_range">range</a>, <a href="#continuous_rangeRound">rangeRound</a> and <a href="#continuous_interpolate">interpolate</a> methods.</p>
<p><a name="user-content-scaleSequential" href="#scaleSequential">#</a> d3.<b>scaleSequential</b>(<i>interpolator</i>) <a href="https://github.com/d3/d3-scale/blob/master/src/sequential.js" title="Source">&lt;&gt;</a></p>
<p>Constructs a new sequential scale with the given <a href="#sequential_interpolator"><em>interpolator</em></a> function. When the scale is <a href="#_sequential">applied</a>, the interpolator will be invoked with a value typically in the range [0, 1], where 0 represents the start of the domain, and 1 represents the end of the domain. For example, to implement the ill-advised <a href="https://github.com/d3/d3-color#hsl">HSL</a> rainbow scale:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">var</span> rainbow <span class="pl-k">=</span> <span class="pl-smi">d3</span>.<span class="pl-en">scaleSequential</span>(<span class="pl-k">function</span>(<span class="pl-smi">t</span>) {
  <span class="pl-k">return</span> <span class="pl-smi">d3</span>.<span class="pl-en">hsl</span>(t <span class="pl-k">*</span> <span class="pl-c1">360</span>, <span class="pl-c1">1</span>, <span class="pl-c1">0.5</span>) <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">"</span><span class="pl-pds">"</span></span>;
});</pre></div>
<p>A more aesthetically-pleasing and perceptually-effective cyclical hue encoding is to use <a href="#interpolateRainbow">d3.interpolateRainbow</a>:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">var</span> rainbow <span class="pl-k">=</span> <span class="pl-smi">d3</span>.<span class="pl-en">scaleSequential</span>(<span class="pl-smi">d3</span>.<span class="pl-smi">interpolateRainbow</span>);</pre></div>
<p>For even more sequential color schemes, see <a href="https://github.com/d3/d3-scale-chromatic">d3-scale-chromatic</a>.</p>
<p><a name="user-content-_sequential" href="#_sequential">#</a> <i>sequential</i>(<i>value</i>) <a href="https://github.com/d3/d3-scale/blob/master/src/sequential.js#L3" title="Source">&lt;&gt;</a></p>
<p>See <a href="#_continuous"><em>continuous</em></a>.</p>
<p><a name="user-content-sequential_domain" href="#sequential_domain">#</a> <i>sequential</i>.<b>domain</b>([<i>domain</i>]) <a href="https://github.com/d3/d3-scale/blob/master/src/sequential.js#L13" title="Source">&lt;&gt;</a></p>
<p>See <a href="#continuous_domain"><em>continuous</em>.domain</a>. Note that a sequential scale’s domain must be numeric and must contain exactly two values.</p>
<p><a name="user-content-sequential_clamp" href="#sequential_clamp">#</a> <i>sequential</i>.<b>clamp</b>([<i>clamp</i>]) <a href="https://github.com/d3/d3-scale/blob/master/src/sequential.js#L17" title="Source">&lt;&gt;</a></p>
<p>See <a href="#continuous_clamp"><em>continuous</em>.clamp</a>.</p>
<p><a name="user-content-sequential_interpolator" href="#sequential_interpolator">#</a> <i>sequential</i>.<b>interpolator</b>([<i>interpolator</i>]) <a href="https://github.com/d3/d3-scale/blob/master/src/sequential.js#L21" title="Source">&lt;&gt;</a></p>
<p>If <em>interpolator</em> is specified, sets the scale’s interpolator to the specified function. If <em>interpolator</em> is not specified, returns the scale’s current interpolator.</p>
<p><a name="user-content-sequential_copy" href="#sequential_copy">#</a> <i>sequential</i>.<b>copy</b>() <a href="https://github.com/d3/d3-scale/blob/master/src/sequential.js#L25" title="Source">&lt;&gt;</a></p>
<p>See <a href="#continuous_copy"><em>continuous</em>.copy</a>.</p>
<p><a name="user-content-interpolateViridis" href="#interpolateViridis">#</a> d3.<b>interpolateViridis</b>(<i>t</i>) <a href="https://github.com/d3/d3-scale/blob/master/src/viridis.js" title="Source">&lt;&gt;</a></p>
<p><a href="https://raw.githubusercontent.com/d3/d3-scale/master/img/viridis.png" target="_blank"><img src="https://raw.githubusercontent.com/d3/d3-scale/master/img/viridis.png" width="100%" height="40" alt="viridis" style="max-width:100%;"></a></p>
<p>Given a number <em>t</em> in the range [0,1], returns the corresponding color from the “viridis” perceptually-uniform color scheme designed by <a href="https://bids.github.io/colormap/">van der Walt, Smith and Firing</a> for matplotlib, represented as an RGB string.</p>
<p><a name="user-content-interpolateInferno" href="#interpolateInferno">#</a> d3.<b>interpolateInferno</b>(<i>t</i>)</p>
<p><a href="https://raw.githubusercontent.com/d3/d3-scale/master/img/inferno.png" target="_blank"><img src="https://raw.githubusercontent.com/d3/d3-scale/master/img/inferno.png" width="100%" height="40" alt="inferno" style="max-width:100%;"></a></p>
<p>Given a number <em>t</em> in the range [0,1], returns the corresponding color from the “inferno” perceptually-uniform color scheme designed by <a href="https://bids.github.io/colormap/">van der Walt and Smith</a> for matplotlib, represented as an RGB string.</p>
<p><a name="user-content-interpolateMagma" href="#interpolateMagma">#</a> d3.<b>interpolateMagma</b>(<i>t</i>)</p>
<p><a href="https://raw.githubusercontent.com/d3/d3-scale/master/img/magma.png" target="_blank"><img src="https://raw.githubusercontent.com/d3/d3-scale/master/img/magma.png" width="100%" height="40" alt="magma" style="max-width:100%;"></a></p>
<p>Given a number <em>t</em> in the range [0,1], returns the corresponding color from the “magma” perceptually-uniform color scheme designed by <a href="https://bids.github.io/colormap/">van der Walt and Smith</a> for matplotlib, represented as an RGB string.</p>
<p><a name="user-content-interpolatePlasma" href="#interpolatePlasma">#</a> d3.<b>interpolatePlasma</b>(<i>t</i>)</p>
<p><a href="https://raw.githubusercontent.com/d3/d3-scale/master/img/plasma.png" target="_blank"><img src="https://raw.githubusercontent.com/d3/d3-scale/master/img/plasma.png" width="100%" height="40" alt="plasma" style="max-width:100%;"></a></p>
<p>Given a number <em>t</em> in the range [0,1], returns the corresponding color from the “plasma” perceptually-uniform color scheme designed by <a href="https://bids.github.io/colormap/">van der Walt and Smith</a> for matplotlib, represented as an RGB string.</p>
<p><a name="user-content-interpolateWarm" href="#interpolateWarm">#</a> d3.<b>interpolateWarm</b>(<i>t</i>)</p>
<p><a href="https://raw.githubusercontent.com/d3/d3-scale/master/img/warm.png" target="_blank"><img src="https://raw.githubusercontent.com/d3/d3-scale/master/img/warm.png" width="100%" height="40" alt="warm" style="max-width:100%;"></a></p>
<p>Given a number <em>t</em> in the range [0,1], returns the corresponding color from a 180° rotation of <a href="https://mycarta.wordpress.com/2013/02/21/perceptual-rainbow-palette-the-method/">Niccoli’s perceptual rainbow</a>, represented as an RGB string.</p>
<p><a name="user-content-interpolateCool" href="#interpolateCool">#</a> d3.<b>interpolateCool</b>(<i>t</i>)</p>
<p><a href="https://raw.githubusercontent.com/d3/d3-scale/master/img/cool.png" target="_blank"><img src="https://raw.githubusercontent.com/d3/d3-scale/master/img/cool.png" width="100%" height="40" alt="cool" style="max-width:100%;"></a></p>
<p>Given a number <em>t</em> in the range [0,1], returns the corresponding color from <a href="https://mycarta.wordpress.com/2013/02/21/perceptual-rainbow-palette-the-method/">Niccoli’s perceptual rainbow</a>, represented as an RGB string.</p>
<p><a name="user-content-interpolateRainbow" href="#interpolateRainbow">#</a> d3.<b>interpolateRainbow</b>(<i>t</i>) <a href="https://github.com/d3/d3-scale/blob/master/src/rainbow.js" title="Source">&lt;&gt;</a></p>
<p><a href="https://raw.githubusercontent.com/d3/d3-scale/master/img/rainbow.png" target="_blank"><img src="https://raw.githubusercontent.com/d3/d3-scale/master/img/rainbow.png" width="100%" height="40" alt="rainbow" style="max-width:100%;"></a></p>
<p>Given a number <em>t</em> in the range [0,1], returns the corresponding color from <a href="#interpolateWarm">d3.interpolateWarm</a> scale from [0.0, 0.5] followed by the <a href="#interpolateCool">d3.interpolateCool</a> scale from [0.5, 1.0], thus implementing the cyclical <a href="http://bl.ocks.org/mbostock/310c99e53880faec2434">less-angry rainbow</a> color scheme.</p>
<p><a name="user-content-interpolateCubehelixDefault" href="#interpolateCubehelixDefault">#</a> d3.<b>interpolateCubehelixDefault</b>(<i>t</i>) <a href="https://github.com/d3/d3-scale/blob/master/src/cubehelix.js" title="Source">&lt;&gt;</a></p>
<p><a href="https://raw.githubusercontent.com/d3/d3-scale/master/img/cubehelix.png" target="_blank"><img src="https://raw.githubusercontent.com/d3/d3-scale/master/img/cubehelix.png" width="100%" height="40" alt="cubehelix" style="max-width:100%;"></a></p>
<p>Given a number <em>t</em> in the range [0,1], returns the corresponding color from <a href="https://www.mrao.cam.ac.uk/%7Edag/CUBEHELIX/">Green’s default Cubehelix</a> represented as an RGB string.</p>
<h3><a href="#quantize-scales" aria-hidden="true" class="anchor" id="user-content-quantize-scales"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Quantize Scales</h3>
<p>Quantize scales are similar to <a href="#linear-scales">linear scales</a>, except they use a discrete rather than continuous range. The continuous input domain is divided into uniform segments based on the number of values in (<em>i.e.</em>, the cardinality of) the output range. Each range value <em>y</em> can be expressed as a quantized linear function of the domain value <em>x</em>: <em>y</em> = <em>m round(x)</em> + <em>b</em>. See <a href="http://bl.ocks.org/mbostock/4060606">bl.ocks.org/4060606</a> for an example.</p>
<p><a name="user-content-scaleQuantize" href="#scaleQuantize">#</a> d3.<b>scaleQuantize</b>() <a href="https://github.com/d3/d3-scale/blob/master/src/quantize.js" title="Source">&lt;&gt;</a></p>
<p>Constructs a new quantize scale with the unit <a href="#quantize_domain">domain</a> [0, 1] and the unit <a href="#quantize_range">range</a> [0, 1]. Thus, the default quantize scale is equivalent to the <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Math/round">Math.round</a> function.</p>
<p><a name="user-content-_quantize" href="#_quantize">#</a> <i>quantize</i>(<i>value</i>) <a href="https://github.com/d3/d3-scale/blob/master/src/quantize.js#L5" title="Source">&lt;&gt;</a></p>
<p>Given a <em>value</em> in the input <a href="#quantize_domain">domain</a>, returns the corresponding value in the output <a href="#quantize_range">range</a>. For example, to apply a color encoding:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">var</span> color <span class="pl-k">=</span> <span class="pl-smi">d3</span>.<span class="pl-en">scaleQuantize</span>()
    .<span class="pl-en">domain</span>([<span class="pl-c1">0</span>, <span class="pl-c1">1</span>])
    .<span class="pl-en">range</span>([<span class="pl-s"><span class="pl-pds">"</span>brown<span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>steelblue<span class="pl-pds">"</span></span>]);

<span class="pl-en">color</span>(<span class="pl-c1">0.49</span>); <span class="pl-c"><span class="pl-c">//</span> "brown"</span>
<span class="pl-en">color</span>(<span class="pl-c1">0.51</span>); <span class="pl-c"><span class="pl-c">//</span> "steelblue"</span></pre></div>
<p>Or dividing the domain into three equally-sized parts with different range values to compute an appropriate stroke width:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">var</span> width <span class="pl-k">=</span> <span class="pl-smi">d3</span>.<span class="pl-en">scaleQuantize</span>()
    .<span class="pl-en">domain</span>([<span class="pl-c1">10</span>, <span class="pl-c1">100</span>])
    .<span class="pl-en">range</span>([<span class="pl-c1">1</span>, <span class="pl-c1">2</span>, <span class="pl-c1">4</span>]);

<span class="pl-en">width</span>(<span class="pl-c1">20</span>); <span class="pl-c"><span class="pl-c">//</span> 1</span>
<span class="pl-en">width</span>(<span class="pl-c1">50</span>); <span class="pl-c"><span class="pl-c">//</span> 2</span>
<span class="pl-en">width</span>(<span class="pl-c1">80</span>); <span class="pl-c"><span class="pl-c">//</span> 4</span></pre></div>
<p><a name="user-content-quantize_invertExtent" href="#quantize_invertExtent">#</a> <i>quantize</i>.<b>invertExtent</b>(<i>value</i>) <a href="https://github.com/d3/d3-scale/blob/master/src/quantize.js#L31" title="Source">&lt;&gt;</a></p>
<p>Returns the extent of values in the <a href="#quantize_domain">domain</a> [<i>x0</i>, <i>x1</i>] for the corresponding <em>value</em> in the <a href="#quantize_range">range</a>: the inverse of <a href="#_quantize"><em>quantize</em></a>. This method is useful for interaction, say to determine the value in the domain that corresponds to the pixel location under the mouse.</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">var</span> width <span class="pl-k">=</span> <span class="pl-smi">d3</span>.<span class="pl-en">scaleQuantize</span>()
    .<span class="pl-en">domain</span>([<span class="pl-c1">10</span>, <span class="pl-c1">100</span>])
    .<span class="pl-en">range</span>([<span class="pl-c1">1</span>, <span class="pl-c1">2</span>, <span class="pl-c1">4</span>]);

<span class="pl-smi">width</span>.<span class="pl-en">invertExtent</span>(<span class="pl-c1">2</span>); <span class="pl-c"><span class="pl-c">//</span> [40, 70]</span></pre></div>
<p><a name="user-content-quantize_domain" href="#quantize_domain">#</a> <i>quantize</i>.<b>domain</b>([<i>domain</i>]) <a href="https://github.com/d3/d3-scale/blob/master/src/quantize.js#L23" title="Source">&lt;&gt;</a></p>
<p>If <em>domain</em> is specified, sets the scale’s domain to the specified two-element array of numbers. If the elements in the given array are not numbers, they will be coerced to numbers. If <em>domain</em> is not specified, returns the scale’s current domain.</p>
<p><a name="user-content-quantize_range" href="#quantize_range">#</a> <i>quantize</i>.<b>range</b>([<i>range</i>]) <a href="https://github.com/d3/d3-scale/blob/master/src/quantize.js#L27" title="Source">&lt;&gt;</a></p>
<p>If <em>range</em> is specified, sets the scale’s range to the specified array of values. The array may contain any number of discrete values. The elements in the given array need not be numbers; any value or type will work. If <em>range</em> is not specified, returns the scale’s current range.</p>
<p><a name="user-content-quantize_ticks" href="#quantize_ticks">#</a> <i>quantize</i>.<b>ticks</b>([<i>count</i>])</p>
<p>Equivalent to <a href="#continuous_ticks"><em>continuous</em>.ticks</a>.</p>
<p><a name="user-content-quantize_tickFormat" href="#quantize_tickFormat">#</a> <i>quantize</i>.<b>tickFormat</b>([<i>count</i>[, <i>specifier</i>]]) <a href="https://github.com/d3/d3-scale/blob/master/src/linear.js#L14" title="Source">&lt;&gt;</a></p>
<p>Equivalent to <a href="#continuous_tickFormat"><em>continuous</em>.tickFormat</a>.</p>
<p><a name="user-content-quantize_nice" href="#quantize_nice">#</a> <i>quantize</i>.<b>nice</b>()</p>
<p>Equivalent to <a href="#continuous_nice"><em>continuous</em>.nice</a>.</p>
<p><a name="user-content-quantize_copy" href="#quantize_copy">#</a> <i>quantize</i>.<b>copy</b>() <a href="https://github.com/d3/d3-scale/blob/master/src/quantize.js#L39" title="Source">&lt;&gt;</a></p>
<p>Returns an exact copy of this scale. Changes to this scale will not affect the returned scale, and vice versa.</p>
<h3><a href="#quantile-scales" aria-hidden="true" class="anchor" id="user-content-quantile-scales"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Quantile Scales</h3>
<p>Quantile scales map a sampled input domain to a discrete range. The domain is considered continuous and thus the scale will accept any reasonable input value; however, the domain is specified as a discrete set of sample values. The number of values in (the cardinality of) the output range determines the number of quantiles that will be computed from the domain. To compute the quantiles, the domain is sorted, and treated as a <a href="https://en.wikipedia.org/wiki/Quantile#Quantiles_of_a_population">population of discrete values</a>; see d3-array’s <a href="https://github.com/d3/d3-array#quantile">quantile</a>. See <a href="http://bl.ocks.org/mbostock/8ca036b3505121279daf">bl.ocks.org/8ca036b3505121279daf</a> for an example.</p>
<p><a name="user-content-scaleQuantile" href="#scaleQuantile">#</a> d3.<b>scaleQuantile</b>() <a href="https://github.com/d3/d3-scale/blob/master/src/quantile.js" title="Source">&lt;&gt;</a></p>
<p>Constructs a new quantile scale with an empty <a href="#quantile_domain">domain</a> and an empty <a href="#quantile_range">range</a>. The quantile scale is invalid until both a domain and range are specified.</p>
<p><a name="user-content-_quantile" href="#_quantile">#</a> <i>quantile</i>(<i>value</i>) <a href="https://github.com/d3/d3-scale/blob/master/src/quantile.js#L4" title="Source">&lt;&gt;</a></p>
<p>Given a <em>value</em> in the input <a href="#quantile_domain">domain</a>, returns the corresponding value in the output <a href="#quantile_range">range</a>.</p>
<p><a name="user-content-quantile_invertExtent" href="#quantile_invertExtent">#</a> <i>quantile</i>.<b>invertExtent</b>(<i>value</i>) <a href="https://github.com/d3/d3-scale/blob/master/src/quantile.js#L20" title="Source">&lt;&gt;</a></p>
<p>Returns the extent of values in the <a href="#quantile_domain">domain</a> [<i>x0</i>, <i>x1</i>] for the corresponding <em>value</em> in the <a href="#quantile_range">range</a>: the inverse of <a href="#_quantile"><em>quantile</em></a>. This method is useful for interaction, say to determine the value in the domain that corresponds to the pixel location under the mouse.</p>
<p><a name="user-content-quantile_domain" href="#quantile_domain">#</a> <i>quantile</i>.<b>domain</b>([<i>domain</i>]) <a href="https://github.com/d3/d3-scale/blob/master/src/quantile.js#L28" title="Source">&lt;&gt;</a></p>
<p>If <em>domain</em> is specified, sets the domain of the quantile scale to the specified set of discrete numeric values. The array must not be empty, and must contain at least one numeric value; NaN, null and undefined values are ignored and not considered part of the sample population. If the elements in the given array are not numbers, they will be coerced to numbers. A copy of the input array is sorted and stored internally. If <em>domain</em> is not specified, returns the scale’s current domain.</p>
<p><a name="user-content-quantile_range" href="#quantile_range">#</a> <i>quantile</i>.<b>range</b>([<i>range</i>]) <a href="https://github.com/d3/d3-scale/blob/master/src/quantile.js#L36" title="Source">&lt;&gt;</a></p>
<p>If <em>range</em> is specified, sets the discrete values in the range. The array must not be empty, and may contain any type of value. The number of values in (the cardinality, or length, of) the <em>range</em> array determines the number of quantiles that are computed. For example, to compute quartiles, <em>range</em> must be an array of four elements such as [0, 1, 2, 3]. If <em>range</em> is not specified, returns the current range.</p>
<p><a name="user-content-quantile_quantiles" href="#quantile_quantiles">#</a> <i>quantile</i>.<b>quantiles</b>() <a href="https://github.com/d3/d3-scale/blob/master/src/quantile.js#L40" title="Source">&lt;&gt;</a></p>
<p>Returns the quantile thresholds. If the <a href="#quantile_range">range</a> contains <em>n</em> discrete values, the returned array will contain <em>n</em> - 1 thresholds. Values less than the first threshold are considered in the first quantile; values greater than or equal to the first threshold but less than the second threshold are in the second quantile, and so on. Internally, the thresholds array is used with <a href="https://github.com/d3/d3-array#bisect">bisect</a> to find the output quantile associated with the given input value.</p>
<p><a name="user-content-quantile_copy" href="#quantile_copy">#</a> <i>quantile</i>.<b>copy</b>() <a href="https://github.com/d3/d3-scale/blob/master/src/quantile.js#L44" title="Source">&lt;&gt;</a></p>
<p>Returns an exact copy of this scale. Changes to this scale will not affect the returned scale, and vice versa.</p>
<h3><a href="#threshold-scales" aria-hidden="true" class="anchor" id="user-content-threshold-scales"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Threshold Scales</h3>
<p>Threshold scales are similar to <a href="#quantize-scales">quantize scales</a>, except they allow you to map arbitrary subsets of the domain to discrete values in the range. The input domain is still continuous, and divided into slices based on a set of threshold values. See <a href="http://bl.ocks.org/mbostock/3306362">bl.ocks.org/3306362</a> for an example.</p>
<p><a name="user-content-scaleThreshold" href="#scaleThreshold">#</a> d3.<b>scaleThreshold</b>() <a href="https://github.com/d3/d3-scale/blob/master/src/threshold.js" title="Source">&lt;&gt;</a></p>
<p>Constructs a new threshold scale with the default <a href="#threshold_domain">domain</a> [0.5] and the default <a href="#threshold_range">range</a> [0, 1]. Thus, the default threshold scale is equivalent to the <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Math/round">Math.round</a> function for numbers; for example threshold(0.49) returns 0, and threshold(0.51) returns 1.</p>
<p><a name="user-content-_threshold" href="#_threshold">#</a> <i>threshold</i>(<i>value</i>) <a href="https://github.com/d3/d3-scale/blob/master/src/threshold.js#L4" title="Source">&lt;&gt;</a></p>
<p>Given a <em>value</em> in the input <a href="#threshold_domain">domain</a>, returns the corresponding value in the output <a href="#threshold_range">range</a>. For example:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">var</span> color <span class="pl-k">=</span> <span class="pl-smi">d3</span>.<span class="pl-en">scaleThreshold</span>()
    .<span class="pl-en">domain</span>([<span class="pl-c1">0</span>, <span class="pl-c1">1</span>])
    .<span class="pl-en">range</span>([<span class="pl-s"><span class="pl-pds">"</span>red<span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>white<span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>green<span class="pl-pds">"</span></span>]);

<span class="pl-en">color</span>(<span class="pl-k">-</span><span class="pl-c1">1</span>);   <span class="pl-c"><span class="pl-c">//</span> "red"</span>
<span class="pl-en">color</span>(<span class="pl-c1">0</span>);    <span class="pl-c"><span class="pl-c">//</span> "white"</span>
<span class="pl-en">color</span>(<span class="pl-c1">0.5</span>);  <span class="pl-c"><span class="pl-c">//</span> "white"</span>
<span class="pl-en">color</span>(<span class="pl-c1">1</span>);    <span class="pl-c"><span class="pl-c">//</span> "green"</span>
<span class="pl-en">color</span>(<span class="pl-c1">1000</span>); <span class="pl-c"><span class="pl-c">//</span> "green"</span></pre></div>
<p><a name="user-content-threshold_invertExtent" href="#threshold_invertExtent">#</a> <i>threshold</i>.<b>invertExtent</b>(<i>value</i>) <a href="https://github.com/d3/d3-scale/blob/master/src/threshold.js#L21" title="Source">&lt;&gt;</a></p>
<p>Returns the extent of values in the <a href="#threshold_domain">domain</a> [<i>x0</i>, <i>x1</i>] for the corresponding <em>value</em> in the <a href="#threshold_range">range</a>, representing the inverse mapping from range to domain. This method is useful for interaction, say to determine the value in the domain that corresponds to the pixel location under the mouse. For example:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">var</span> color <span class="pl-k">=</span> <span class="pl-smi">d3</span>.<span class="pl-en">scaleThreshold</span>()
    .<span class="pl-en">domain</span>([<span class="pl-c1">0</span>, <span class="pl-c1">1</span>])
    .<span class="pl-en">range</span>([<span class="pl-s"><span class="pl-pds">"</span>red<span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>white<span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>green<span class="pl-pds">"</span></span>]);

<span class="pl-smi">color</span>.<span class="pl-en">invertExtent</span>(<span class="pl-s"><span class="pl-pds">"</span>red<span class="pl-pds">"</span></span>); <span class="pl-c"><span class="pl-c">//</span> [undefined, 0]</span>
<span class="pl-smi">color</span>.<span class="pl-en">invertExtent</span>(<span class="pl-s"><span class="pl-pds">"</span>white<span class="pl-pds">"</span></span>); <span class="pl-c"><span class="pl-c">//</span> [0, 1]</span>
<span class="pl-smi">color</span>.<span class="pl-en">invertExtent</span>(<span class="pl-s"><span class="pl-pds">"</span>green<span class="pl-pds">"</span></span>); <span class="pl-c"><span class="pl-c">//</span> [1, undefined]</span></pre></div>
<p><a name="user-content-threshold_domain" href="#threshold_domain">#</a> <i>threshold</i>.<b>domain</b>([<i>domain</i>]) <a href="https://github.com/d3/d3-scale/blob/master/src/threshold.js#L13" title="Source">&lt;&gt;</a></p>
<p>If <em>domain</em> is specified, sets the scale’s domain to the specified array of values. The values must be in sorted ascending order, or the behavior of the scale is undefined. The values are typically numbers, but any naturally ordered values (such as strings) will work; a threshold scale can be used to encode any type that is ordered. If the number of values in the scale’s range is N+1, the number of values in the scale’s domain must be N. If there are fewer than N elements in the domain, the additional values in the range are ignored. If there are more than N elements in the domain, the scale may return undefined for some inputs. If <em>domain</em> is not specified, returns the scale’s current domain.</p>
<p><a name="user-content-threshold_range" href="#threshold_range">#</a> <i>threshold</i>.<b>range</b>([<i>range</i>]) <a href="https://github.com/d3/d3-scale/blob/master/src/threshold.js#L17" title="Source">&lt;&gt;</a></p>
<p>If <em>range</em> is specified, sets the scale’s range to the specified array of values. If the number of values in the scale’s domain is N, the number of values in the scale’s range must be N+1. If there are fewer than N+1 elements in the range, the scale may return undefined for some inputs. If there are more than N+1 elements in the range, the additional values are ignored. The elements in the given array need not be numbers; any value or type will work. If <em>range</em> is not specified, returns the scale’s current range.</p>
<p><a name="user-content-threshold_copy" href="#threshold_copy">#</a> <i>threshold</i>.<b>copy</b>() <a href="https://github.com/d3/d3-scale/blob/master/src/threshold.js#L26" title="Source">&lt;&gt;</a></p>
<p>Returns an exact copy of this scale. Changes to this scale will not affect the returned scale, and vice versa.</p>
<h3><a href="#ordinal-scales" aria-hidden="true" class="anchor" id="user-content-ordinal-scales"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Ordinal Scales</h3>
<p>Unlike <a href="#continuous-scales">continuous scales</a>, ordinal scales have a discrete domain and range. For example, an ordinal scale might map a set of named categories to a set of colors, or determine the horizontal positions of columns in a column chart.</p>
<p><a name="user-content-scaleOrdinal" href="#scaleOrdinal">#</a> d3.<b>scaleOrdinal</b>([<i>range</i>]) <a href="https://github.com/d3/d3-scale/blob/master/src/ordinal.js" title="Source">&lt;&gt;</a></p>
<p>Constructs a new ordinal scale with an empty <a href="#ordinal_domain">domain</a> and the specified <a href="#ordinal_range"><em>range</em></a>. If a <em>range</em> is not specified, it defaults to the empty array; an ordinal scale always returns undefined until a non-empty range is defined.</p>
<p><a name="user-content-_ordinal" href="#_ordinal">#</a> <i>ordinal</i>(<i>value</i>) <a href="https://github.com/d3/d3-scale/blob/master/src/ordinal.js#L6" title="Source">&lt;&gt;</a></p>
<p>Given a <em>value</em> in the input <a href="#ordinal_domain">domain</a>, returns the corresponding value in the output <a href="#ordinal_range">range</a>. If the given <em>value</em> is not in the scale’s <a href="#ordinal_domain">domain</a>, returns the <a href="#ordinal_value">unknown</a>; or, if the unknown value is <a href="#scaleImplicit">implicit</a> (the default), then the <em>value</em> is implicitly added to the domain and the next-available value in the range is assigned to <em>value</em>, such that this and subsequent invocations of the scale given the same input <em>value</em> return the same output value.</p>
<p><a name="user-content-ordinal_domain" href="#ordinal_domain">#</a> <i>ordinal</i>.<b>domain</b>([<i>domain</i>]) <a href="https://github.com/d3/d3-scale/blob/master/src/ordinal.js#L22" title="Source">&lt;&gt;</a></p>
<p>If <em>domain</em> is specified, sets the domain to the specified array of values. The first element in <em>domain</em> will be mapped to the first element in the range, the second domain value to the second range value, and so on. Domain values are stored internally in a map from stringified value to index; the resulting index is then used to retrieve a value from the range. Thus, an ordinal scale’s values must be coercible to a string, and the stringified version of the domain value uniquely identifies the corresponding range value. If <em>domain</em> is not specified, this method returns the current domain.</p>
<p>Setting the domain on an ordinal scale is optional if the <a href="#ordinal_unknown">unknown value</a> is <a href="#scaleImplicit">implicit</a> (the default). In this case, the domain will be inferred implicitly from usage by assigning each unique value passed to the scale a new value from the range. Note that an explicit domain is recommended to ensure deterministic behavior, as inferring the domain from usage will be dependent on ordering.</p>
<p><a name="user-content-ordinal_range" href="#ordinal_range">#</a> <i>ordinal</i>.<b>range</b>([<i>range</i>]) <a href="https://github.com/d3/d3-scale/blob/master/src/ordinal.js#L30" title="Source">&lt;&gt;</a></p>
<p>If <em>range</em> is specified, sets the range of the ordinal scale to the specified array of values. The first element in the domain will be mapped to the first element in <em>range</em>, the second domain value to the second range value, and so on. If there are fewer elements in the range than in the domain, the scale will reuse values from the start of the range. If <em>range</em> is not specified, this method returns the current range.</p>
<p><a name="user-content-ordinal_unknown" href="#ordinal_unknown">#</a> <i>ordinal</i>.<b>unknown</b>([<i>value</i>]) <a href="https://github.com/d3/d3-scale/blob/master/src/ordinal.js#L34" title="Source">&lt;&gt;</a></p>
<p>If <em>value</em> is specified, sets the output value of the scale for unknown input values and returns this scale. If <em>value</em> is not specified, returns the current unknown value, which defaults to <a href="#implicit">implicit</a>. The implicit value enables implicit domain construction; see <a href="#ordinal_domain"><em>ordinal</em>.domain</a>.</p>
<p><a name="user-content-ordinal_copy" href="#ordinal_copy">#</a> <i>ordinal</i>.<b>copy</b>() <a href="https://github.com/d3/d3-scale/blob/master/src/ordinal.js#L38" title="Source">&lt;&gt;</a></p>
<p>Returns an exact copy of this ordinal scale. Changes to this scale will not affect the returned scale, and vice versa.</p>
<p><a name="user-content-scaleImplicit" href="#scaleImplicit">#</a> d3.<b>scaleImplicit</b></p>
<p>A special value for <a href="#ordinal_unknown"><em>ordinal</em>.unknown</a> that enables implicit domain construction: unknown values are implicitly added to the domain.</p>
<h4><a href="#band-scales" aria-hidden="true" class="anchor" id="user-content-band-scales"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Band Scales</h4>
<p>Band scales are like <a href="#ordinal-scales">ordinal scales</a> except the output range is continuous and numeric. Discrete output values are automatically computed by the scale by dividing the continuous range into uniform bands. Band scales are typically used for bar charts with an ordinal or categorical dimension. The <a href="#ordinal_unknown">unknown value</a> of a band scale is effectively undefined: they do not allow implicit domain construction.</p>
<p><a href="https://raw.githubusercontent.com/d3/d3-scale/master/img/band.png" target="_blank"><img src="https://raw.githubusercontent.com/d3/d3-scale/master/img/band.png" width="751" height="238" alt="band" style="max-width:100%;"></a></p>
<p><a name="user-content-scaleBand" href="#scaleBand">#</a> d3.<b>scaleBand</b>() <a href="https://github.com/d3/d3-scale/blob/master/src/band.js" title="Source">&lt;&gt;</a></p>
<p>Constructs a new band scale with the empty <a href="#band_domain">domain</a>, the unit <a href="#band_range">range</a> [0, 1], no <a href="#band_padding">padding</a>, no <a href="#band_round">rounding</a> and center <a href="#band_align">alignment</a>.</p>
<p><a name="user-content-_band" href="#_band">#</a> <i>band</i>(<em>value</em>) <a href="https://github.com/d3/d3-scale/blob/master/src/band.js#L4" title="Source">&lt;&gt;</a></p>
<p>Given a <em>value</em> in the input <a href="#band_domain">domain</a>, returns the start of the corresponding band derived from the output <a href="#band_range">range</a>. If the given <em>value</em> is not in the scale’s domain, returns undefined.</p>
<p><a name="user-content-band_domain" href="#band_domain">#</a> <i>band</i>.<b>domain</b>([<i>domain</i>]) <a href="https://github.com/d3/d3-scale/blob/master/src/band.js#L32" title="Source">&lt;&gt;</a></p>
<p>If <em>domain</em> is specified, sets the domain to the specified array of values. The first element in <em>domain</em> will be mapped to the first band, the second domain value to the second band, and so on. Domain values are stored internally in a map from stringified value to index; the resulting index is then used to determine the band. Thus, a band scale’s values must be coercible to a string, and the stringified version of the domain value uniquely identifies the corresponding band. If <em>domain</em> is not specified, this method returns the current domain.</p>
<p><a name="user-content-band_range" href="#band_range">#</a> <i>band</i>.<b>range</b>([<i>range</i>]) <a href="https://github.com/d3/d3-scale/blob/master/src/band.js#L36" title="Source">&lt;&gt;</a></p>
<p>If <em>range</em> is specified, sets the scale’s range to the specified two-element array of numbers. If the elements in the given array are not numbers, they will be coerced to numbers. If <em>range</em> is not specified, returns the scale’s current range, which defaults to [0, 1].</p>
<p><a name="user-content-band_rangeRound" href="#band_rangeRound">#</a> <i>band</i>.<b>rangeRound</b>([<i>range</i>]) <a href="https://github.com/d3/d3-scale/blob/master/src/band.js#L40" title="Source">&lt;&gt;</a></p>
<p>Sets the scale’s <a href="#band_range"><em>range</em></a> to the specified two-element array of numbers while also enabling <a href="#band_round">rounding</a>. This is a convenience method equivalent to:</p>
<div class="highlight highlight-source-js"><pre>band
    .<span class="pl-en">range</span>(range)
    .<span class="pl-en">round</span>(<span class="pl-c1">true</span>);</pre></div>
<p>Rounding is sometimes useful for avoiding antialiasing artifacts, though also consider the <a href="https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/shape-rendering">shape-rendering</a> “crispEdges” styles.</p>
<p><a name="user-content-band_round" href="#band_round">#</a> <i>band</i>.<b>round</b>([<i>round</i>]) <a href="https://github.com/d3/d3-scale/blob/master/src/band.js#L52" title="Source">&lt;&gt;</a></p>
<p>If <em>round</em> is specified, enables or disables rounding accordingly. If rounding is enabled, the start and stop of each band will be integers. Rounding is sometimes useful for avoiding antialiasing artifacts, though also consider the <a href="https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/shape-rendering">shape-rendering</a> “crispEdges” styles. Note that if the width of the domain is not a multiple of the cardinality of the range, there may be leftover unused space, even without padding! Use <a href="#band_align"><em>band</em>.align</a> to specify how the leftover space is distributed.</p>
<p><a name="user-content-band_paddingInner" href="#band_paddingInner">#</a> <i>band</i>.<b>paddingInner</b>([<i>padding</i>]) <a href="https://github.com/d3/d3-scale/blob/master/src/band.js#L60" title="Source">&lt;&gt;</a></p>
<p>If <em>padding</em> is specified, sets the inner padding to the specified value which must be in the range [0, 1]. If <em>padding</em> is not specified, returns the current inner padding which defaults to 0. The inner padding determines the ratio of the range that is reserved for blank space between bands.</p>
<p><a name="user-content-band_paddingOuter" href="#band_paddingOuter">#</a> <i>band</i>.<b>paddingOuter</b>([<i>padding</i>]) <a href="https://github.com/d3/d3-scale/blob/master/src/band.js#L64" title="Source">&lt;&gt;</a></p>
<p>If <em>padding</em> is specified, sets the outer padding to the specified value which must be in the range [0, 1]. If <em>padding</em> is not specified, returns the current outer padding which defaults to 0. The outer padding determines the ratio of the range that is reserved for blank space before the first band and after the last band.</p>
<p><a name="user-content-band_padding" href="#band_padding">#</a> <i>band</i>.<b>padding</b>([<i>padding</i>]) <a href="https://github.com/d3/d3-scale/blob/master/src/band.js#L56" title="Source">&lt;&gt;</a></p>
<p>A convenience method for setting the <a href="#band_paddingInner">inner</a> and <a href="#band_paddingOuter">outer</a> padding to the same <em>padding</em> value. If <em>padding</em> is not specified, returns the inner padding.</p>
<p><a name="user-content-band_align" href="#band_align">#</a> <i>band</i>.<b>align</b>([<i>align</i>]) <a href="https://github.com/d3/d3-scale/blob/master/src/band.js#L68" title="Source">&lt;&gt;</a></p>
<p>If <em>align</em> is specified, sets the alignment to the specified value which must be in the range [0, 1]. If <em>align</em> is not specified, returns the current alignment which defaults to 0.5. The alignment determines how any leftover unused space in the range is distributed. A value of 0.5 indicates that the leftover space should be equally distributed before the first band and after the last band; <em>i.e.</em>, the bands should be centered within the range. A value of 0 or 1 may be used to shift the bands to one side, say to position them adjacent to an axis.</p>
<p><a name="user-content-band_bandwidth" href="#band_bandwidth">#</a> <i>band</i>.<b>bandwidth</b>() <a href="https://github.com/d3/d3-scale/blob/master/src/band.js#L44" title="Source">&lt;&gt;</a></p>
<p>Returns the width of each band.</p>
<p><a name="user-content-band_step" href="#band_step">#</a> <i>band</i>.<b>step</b>() <a href="https://github.com/d3/d3-scale/blob/master/src/band.js#L48" title="Source">&lt;&gt;</a></p>
<p>Returns the distance between the starts of adjacent bands.</p>
<p><a name="user-content-band_copy" href="#band_copy">#</a> <i>band</i>.<b>copy</b>() <a href="https://github.com/d3/d3-scale/blob/master/src/band.js#L72" title="Source">&lt;&gt;</a></p>
<p>Returns an exact copy of this scale. Changes to this scale will not affect the returned scale, and vice versa.</p>
<h4><a href="#point-scales" aria-hidden="true" class="anchor" id="user-content-point-scales"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Point Scales</h4>
<p>Point scales are a variant of <a href="#band-scales">band scales</a> with the bandwidth fixed to zero. Point scales are typically used for scatterplots with an ordinal or categorical dimension. The <a href="#ordinal_unknown">unknown value</a> of a point scale is always undefined: they do not allow implicit domain construction.</p>
<p><a href="https://raw.githubusercontent.com/d3/d3-scale/master/img/point.png" target="_blank"><img src="https://raw.githubusercontent.com/d3/d3-scale/master/img/point.png" width="648" height="155" alt="point" style="max-width:100%;"></a></p>
<p><a name="user-content-scalePoint" href="#scalePoint">#</a> d3.<b>scalePoint</b>()</p>
<p>Constructs a new point scale with the empty <a href="#point_domain">domain</a>, the unit <a href="#point_range">range</a> [0, 1], no <a href="#point_padding">padding</a>, no <a href="#point_round">rounding</a> and center <a href="#point_align">alignment</a>.</p>
<p><a name="user-content-_point" href="#_point">#</a> <i>point</i>(<em>value</em>)</p>
<p>Given a <em>value</em> in the input <a href="#point_domain">domain</a>, returns the corresponding point derived from the output <a href="#point_range">range</a>. If the given <em>value</em> is not in the scale’s domain, returns undefined.</p>
<p><a name="user-content-point_domain" href="#point_domain">#</a> <i>point</i>.<b>domain</b>([<i>domain</i>])</p>
<p>If <em>domain</em> is specified, sets the domain to the specified array of values. The first element in <em>domain</em> will be mapped to the first point, the second domain value to the second point, and so on. Domain values are stored internally in a map from stringified value to index; the resulting index is then used to determine the point. Thus, a point scale’s values must be coercible to a string, and the stringified version of the domain value uniquely identifies the corresponding point. If <em>domain</em> is not specified, this method returns the current domain.</p>
<p><a name="user-content-point_range" href="#point_range">#</a> <i>point</i>.<b>range</b>([<i>range</i>])</p>
<p>If <em>range</em> is specified, sets the scale’s range to the specified two-element array of numbers. If the elements in the given array are not numbers, they will be coerced to numbers. If <em>range</em> is not specified, returns the scale’s current range, which defaults to [0, 1].</p>
<p><a name="user-content-point_rangeRound" href="#point_rangeRound">#</a> <i>point</i>.<b>rangeRound</b>([<i>range</i>])</p>
<p>Sets the scale’s <a href="#point_range"><em>range</em></a> to the specified two-element array of numbers while also enabling <a href="#point_round">rounding</a>. This is a convenience method equivalent to:</p>
<div class="highlight highlight-source-js"><pre>point
    .<span class="pl-en">range</span>(range)
    .<span class="pl-en">round</span>(<span class="pl-c1">true</span>);</pre></div>
<p>Rounding is sometimes useful for avoiding antialiasing artifacts, though also consider the <a href="https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/shape-rendering">shape-rendering</a> “crispEdges” styles.</p>
<p><a name="user-content-point_round" href="#point_round">#</a> <i>point</i>.<b>round</b>([<i>round</i>])</p>
<p>If <em>round</em> is specified, enables or disables rounding accordingly. If rounding is enabled, the position of each point will be integers. Rounding is sometimes useful for avoiding antialiasing artifacts, though also consider the <a href="https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/shape-rendering">shape-rendering</a> “crispEdges” styles. Note that if the width of the domain is not a multiple of the cardinality of the range, there may be leftover unused space, even without padding! Use <a href="#point_align"><em>point</em>.align</a> to specify how the leftover space is distributed.</p>
<p><a name="user-content-point_padding" href="#point_padding">#</a> <i>point</i>.<b>padding</b>([<i>padding</i>])</p>
<p>If <em>padding</em> is specified, sets the outer padding to the specified value which must be in the range [0, 1]. If <em>padding</em> is not specified, returns the current outer padding which defaults to 0. The outer padding determines the ratio of the range that is reserved for blank space before the first point and after the last point. Equivalent to <a href="#band_paddingOuter"><em>band</em>.paddingOuter</a>.</p>
<p><a name="user-content-point_align" href="#point_align">#</a> <i>point</i>.<b>align</b>([<i>align</i>])</p>
<p>If <em>align</em> is specified, sets the alignment to the specified value which must be in the range [0, 1]. If <em>align</em> is not specified, returns the current alignment which defaults to 0.5. The alignment determines how any leftover unused space in the range is distributed. A value of 0.5 indicates that the leftover space should be equally distributed before the first point and after the last point; <em>i.e.</em>, the points should be centered within the range. A value of 0 or 1 may be used to shift the points to one side, say to position them adjacent to an axis.</p>
<p><a name="user-content-point_bandwidth" href="#point_bandwidth">#</a> <i>point</i>.<b>bandwidth</b>()</p>
<p>Returns zero.</p>
<p><a name="user-content-point_step" href="#point_step">#</a> <i>point</i>.<b>step</b>()</p>
<p>Returns the distance between the starts of adjacent points.</p>
<p><a name="user-content-point_copy" href="#point_copy">#</a> <i>point</i>.<b>copy</b>()</p>
<p>Returns an exact copy of this scale. Changes to this scale will not affect the returned scale, and vice versa.</p>
<h4><a href="#category-scales" aria-hidden="true" class="anchor" id="user-content-category-scales"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Category Scales</h4>
<p>These color schemes are designed to work with <a href="#scaleOrdinal">d3.scaleOrdinal</a>. For example:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">var</span> color <span class="pl-k">=</span> <span class="pl-smi">d3</span>.<span class="pl-en">scaleOrdinal</span>(<span class="pl-smi">d3</span>.<span class="pl-smi">schemeCategory10</span>);</pre></div>
<p>For even more category scales, see <a href="https://github.com/d3/d3-scale-chromatic">d3-scale-chromatic</a>.</p>
<p><a name="user-content-schemeCategory10" href="#schemeCategory10">#</a> d3.<b>schemeCategory10</b> <a href="https://github.com/d3/d3-scale/blob/master/src/category10.js" title="Source">&lt;&gt;</a></p>
<p><a href="https://raw.githubusercontent.com/d3/d3-scale/master/img/category10.png" target="_blank"><img src="https://raw.githubusercontent.com/d3/d3-scale/master/img/category10.png" width="100%" height="40" alt="category10" style="max-width:100%;"></a></p>
<p>An array of ten categorical colors represented as RGB hexadecimal strings.</p>
<p><a name="user-content-schemeCategory20" href="#schemeCategory20">#</a> d3.<b>schemeCategory20</b> <a href="https://github.com/d3/d3-scale/blob/master/src/category20.js" title="Source">&lt;&gt;</a></p>
<p><a href="https://raw.githubusercontent.com/d3/d3-scale/master/img/category20.png" target="_blank"><img src="https://raw.githubusercontent.com/d3/d3-scale/master/img/category20.png" width="100%" height="40" alt="category20" style="max-width:100%;"></a></p>
<p>An array of twenty categorical colors represented as RGB hexadecimal strings.</p>
<p><a name="user-content-schemeCategory20b" href="#schemeCategory20b">#</a> d3.<b>schemeCategory20b</b> <a href="https://github.com/d3/d3-scale/blob/master/src/category20b.js" title="Source">&lt;&gt;</a></p>
<p><a href="https://raw.githubusercontent.com/d3/d3-scale/master/img/category20b.png" target="_blank"><img src="https://raw.githubusercontent.com/d3/d3-scale/master/img/category20b.png" width="100%" height="40" alt="category20b" style="max-width:100%;"></a></p>
<p>An array of twenty categorical colors represented as RGB hexadecimal strings.</p>
<p><a name="user-content-schemeCategory20c" href="#schemeCategory20c">#</a> d3.<b>schemeCategory20c</b> <a href="https://github.com/d3/d3-scale/blob/master/src/category20c.js" title="Source">&lt;&gt;</a></p>
<p><a href="https://raw.githubusercontent.com/d3/d3-scale/master/img/category20c.png" target="_blank"><img src="https://raw.githubusercontent.com/d3/d3-scale/master/img/category20c.png" width="100%" height="40" alt="category20c" style="max-width:100%;"></a></p>
<p>An array of twenty categorical colors represented as RGB hexadecimal strings. This color scale includes color specifications and designs developed by Cynthia Brewer (<a href="http://colorbrewer2.org/">colorbrewer2.org</a>).</p>
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
      <li class="mr-3">&copy; 2018 <span title="0.21933s from unicorn-2657157768-ch418">GitHub</span>, Inc.</li>
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








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
  
  <title>d3-zoom/README.md at master · d3/d3-zoom</title>
  <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
  <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
  <meta property="fb:app_id" content="1401488693436528">

    
    <meta content="https://avatars3.githubusercontent.com/u/1562726?s=400&amp;v=4" property="og:image" /><meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="d3/d3-zoom" property="og:title" /><meta content="https://github.com/d3/d3-zoom" property="og:url" /><meta content="d3-zoom - Pan and zoom SVG, HTML or Canvas using mouse or touch input." property="og:description" />

  <link rel="assets" href="https://assets-cdn.github.com/">
  <link rel="web-socket" href="wss://live.github.com/_sockets/VjI6MjM0MjAxNjIzOmFhNTM3NGM3NzczOGM2NTA1ZDVkNjdiZDE0ZDYyMjM3ZjYzZDJlZGJmNjg0NDM3MjM5ZmM4ZjY1NDk5MTU2NTY=--47239cb830f4bcfdec256be0bdfae7735abc6c0e">
  <meta name="pjax-timeout" content="1000">
  <link rel="sudo-modal" href="/sessions/sudo_modal">
  <meta name="request-id" content="FC26:1FA0E:11AB183:19A5B4F:5A603F4E" data-pjax-transient>
  

  <meta name="selected-link" value="repo_source" data-pjax-transient>

    <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
  <meta name="google-site-verification" content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA">
  <meta name="google-site-verification" content="GXs5KoUUkNCoaAZn7wPN-t01Pywp9M3sEjnt_3_ZWPc">
    <meta name="google-analytics" content="UA-3769691-2">

<meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="https://collector.githubapp.com/github-external/browser_event" name="octolytics-event-url" /><meta content="FC26:1FA0E:11AB183:19A5B4F:5A603F4E" name="octolytics-dimension-request_id" /><meta content="sea" name="octolytics-dimension-region_edge" /><meta content="iad" name="octolytics-dimension-region_render" /><meta content="16659379" name="octolytics-actor-id" /><meta content="xswei" name="octolytics-actor-login" /><meta content="72a8b786cd27412ba348c71058cf2aed3e8f8772266e5c157980395250fb923d" name="octolytics-actor-hash" />
<meta content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-pjax-transient="true" name="analytics-location" />




  <meta class="js-ga-set" name="dimension1" content="Logged In">


  

      <meta name="hostname" content="github.com">
  <meta name="user-login" content="xswei">

      <meta name="expected-hostname" content="github.com">
    <meta name="js-proxy-site-detection-payload" content="NDliYTQwM2U1YjgxNTZjMjZjYmU2ZGVjMjdhYjk3YTQwNjdlNmJhZTk0ZjkxN2ZmODRmZGY5MjJjYmVlYjZlNHx7InJlbW90ZV9hZGRyZXNzIjoiMjIwLjE4MS4xNzEuMTI1IiwicmVxdWVzdF9pZCI6IkZDMjY6MUZBMEU6MTFBQjE4MzoxOUE1QjRGOjVBNjAzRjRFIiwidGltZXN0YW1wIjoxNTE2MjU3MTA0LCJob3N0IjoiZ2l0aHViLmNvbSJ9">

    <meta name="enabled-features" content="UNIVERSE_BANNER,FREE_TRIALS">

  <meta name="html-safe-nonce" content="95ac36701972faaa3306c820d3f61fe703aeac54">

  <meta http-equiv="x-pjax-version" content="c0275ff3857f879afa7c0ef3fbc951b4">
  

      <link href="https://github.com/d3/d3-zoom/commits/master.atom" rel="alternate" title="Recent Commits to d3-zoom:master" type="application/atom+xml">

  <meta name="description" content="d3-zoom - Pan and zoom SVG, HTML or Canvas using mouse or touch input.">
  <meta name="go-import" content="github.com/d3/d3-zoom git https://github.com/d3/d3-zoom.git">

  <meta content="1562726" name="octolytics-dimension-user_id" /><meta content="d3" name="octolytics-dimension-user_login" /><meta content="57910253" name="octolytics-dimension-repository_id" /><meta content="d3/d3-zoom" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="57910253" name="octolytics-dimension-repository_network_root_id" /><meta content="d3/d3-zoom" name="octolytics-dimension-repository_network_root_nwo" /><meta content="false" name="octolytics-dimension-repository_explore_github_marketplace_ci_cta_shown" />


    <link rel="canonical" href="https://github.com/d3/d3-zoom/blob/master/README.md" data-pjax-transient>


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
  <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/d3/d3-zoom/search" class="js-site-search-form" data-scoped-search-url="/d3/d3-zoom/search" data-unscoped-search-url="/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <label class="form-control header-search-wrapper js-chromeless-input-container">
        <a href="/d3/d3-zoom/blob/master/README.md" class="header-search-scope no-underline">This repository</a>
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
    <span title="d3/d3-zoom">This repository</span>
  </div>
    <a class="dropdown-item" href="/d3/d3-zoom/issues/new" data-ga-click="Header, create new issue">
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

        <li><!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/logout" class="logout-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="SswIM/QdY9tVVfDojjiUIH6XyUkAZzlpXdEibBB6rajUqoxGvxrXVy4FImh5q+yQPds0HFifz6HvpR3OUdKs1g==" /></div>
          <button type="submit" class="dropdown-item dropdown-signout" data-ga-click="Header, sign out, icon:logout">
            Sign out
          </button>
        </form></li>
      </ul>
    </details>
  </li>
</ul>


        <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/logout" class="sr-only right-0" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="+kp4ex9uT73FC6lYVNNHq8e5UXKXcFCuhq/SioMsfQJkLPwOVGn7Mb5be9ijQD8bhPWsJ8+IpmY02+0owoR8fA==" /></div>
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
        <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="bNIYfip/pcLNZYtSHq70s0equiVf1f6jSuMtTZDU38cBO1tuzb4XhPa6DdhElGLIxTGXAwEowJFoGBMe+4nTiA==" /></div>      <input class="form-control" id="repository_id" name="repository_id" type="hidden" value="57910253" />

        <div class="select-menu js-menu-container js-select-menu">
          <a href="/d3/d3-zoom/subscription"
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
            href="/d3/d3-zoom/watchers"
            aria-label="15 users are watching this repository">
            15
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
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/d3/d3-zoom/unstar" class="starred js-social-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="Mj8jJSEaQQXnSt2Gnjyvaf3w5t4GaprYOUuZLKiZMMC+PDgku71dxXmDV3autIhdvRQ+f7SX47rwd95qGlj5kg==" /></div>
      <input type="hidden" name="context" value="repository"></input>
      <button
        type="submit"
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Unstar this repository" title="Unstar d3/d3-zoom"
        data-ga-click="Repository, click unstar button, action:blob#show; text:Unstar">
        <svg aria-hidden="true" class="octicon octicon-star" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"/></svg>
        Unstar
      </button>
        <a class="social-count js-social-count" href="/d3/d3-zoom/stargazers"
           aria-label="108 users starred this repository">
          108
        </a>
</form>
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/d3/d3-zoom/star" class="unstarred js-social-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="FfmNUXM91WMnmzQbEWuEdPNS0s6DY8rJwURItC1vQuqfZAR2ptCovtcygL62SRQQJCCEYeoya5b2LJ50GOsaPQ==" /></div>
      <input type="hidden" name="context" value="repository"></input>
      <button
        type="submit"
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Star this repository" title="Star d3/d3-zoom"
        data-ga-click="Repository, click star button, action:blob#show; text:Star">
        <svg aria-hidden="true" class="octicon octicon-star" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"/></svg>
        Star
      </button>
        <a class="social-count js-social-count" href="/d3/d3-zoom/stargazers"
           aria-label="108 users starred this repository">
          108
        </a>
</form>  </div>

  </li>

  <li>
          <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/d3/d3-zoom/fork" class="btn-with-count" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="H9XRn+/X0I+BljlW7bn00tkoNy9Z4atOMvoQ96NErE+sOiYBEC1uMB/z1trVcT4jQqjDGb+KKq5AV782HFCk6g==" /></div>
            <button
                type="submit"
                class="btn btn-sm btn-with-count"
                data-ga-click="Repository, show fork modal, action:blob#show; text:Fork"
                title="Fork your own copy of d3/d3-zoom to your account"
                aria-label="Fork your own copy of d3/d3-zoom to your account">
              <svg aria-hidden="true" class="octicon octicon-repo-forked" height="16" version="1.1" viewBox="0 0 10 16" width="10"><path fill-rule="evenodd" d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
              Fork
            </button>
</form>
    <a href="/d3/d3-zoom/network" class="social-count"
       aria-label="52 users forked this repository">
      52
    </a>
  </li>
</ul>

      <h1 class="public ">
  <svg aria-hidden="true" class="octicon octicon-repo" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
  <span class="author" itemprop="author"><a href="/d3" class="url fn" rel="author">d3</a></span><!--
--><span class="path-divider">/</span><!--
--><strong itemprop="name"><a href="/d3/d3-zoom" data-pjax="#js-repo-pjax-container">d3-zoom</a></strong>

</h1>

    </div>
    
<nav class="reponav js-repo-nav js-sidenav-container-pjax container"
     itemscope
     itemtype="http://schema.org/BreadcrumbList"
     role="navigation"
     data-pjax="#js-repo-pjax-container">

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/d3/d3-zoom" class="js-selected-navigation-item selected reponav-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches repo_packages /d3/d3-zoom" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-code" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z"/></svg>
      <span itemprop="name">Code</span>
      <meta itemprop="position" content="1">
</a>  </span>

    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a href="/d3/d3-zoom/issues" class="js-selected-navigation-item reponav-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /d3/d3-zoom/issues" itemprop="url">
        <svg aria-hidden="true" class="octicon octicon-issue-opened" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"/></svg>
        <span itemprop="name">Issues</span>
        <span class="Counter">19</span>
        <meta itemprop="position" content="2">
</a>    </span>

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/d3/d3-zoom/pulls" class="js-selected-navigation-item reponav-item" data-hotkey="g p" data-selected-links="repo_pulls /d3/d3-zoom/pulls" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-git-pull-request" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M11 11.28V5c-.03-.78-.34-1.47-.94-2.06C9.46 2.35 8.78 2.03 8 2H7V0L4 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0 0 10 15a1.993 1.993 0 0 0 1-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zM4 3c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v6.56A1.993 1.993 0 0 0 2 15a1.993 1.993 0 0 0 1-3.72V4.72c.59-.34 1-.98 1-1.72zm-.8 10c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
      <span itemprop="name">Pull requests</span>
      <span class="Counter">3</span>
      <meta itemprop="position" content="3">
</a>  </span>




  <a href="/d3/d3-zoom/pulse" class="js-selected-navigation-item reponav-item" data-selected-links="repo_graphs repo_contributors dependency_graph pulse /d3/d3-zoom/pulse">
    <svg aria-hidden="true" class="octicon octicon-graph" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M16 14v1H0V0h1v14h15zM5 13H3V8h2v5zm4 0H7V3h2v10zm4 0h-2V6h2v7z"/></svg>
    Insights
</a>

</nav>


  </div>

<div class="container new-discussion-timeline experiment-repo-nav ">
  <div class="repository-content ">

    
  <a href="/d3/d3-zoom/blob/4d2f32a3c959f8a20fcd9f2805d76b2f0af4379e/README.md" class="d-none js-permalink-shortcut" data-hotkey="y">Permalink</a>

  <!-- blob contrib key: blob_contributors:v21:2fd8b3f97fb5885932166ebd5c068126 -->

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
               href="/d3/d3-zoom/blob/fix-touchstart/README.md"
               data-name="fix-touchstart"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                fix-touchstart
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/d3/d3-zoom/blob/master/README.md"
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
              href="/d3/d3-zoom/tree/v1.7.1/README.md"
              data-name="v1.7.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.7.1">
                v1.7.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-zoom/tree/v1.7.0/README.md"
              data-name="v1.7.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.7.0">
                v1.7.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-zoom/tree/v1.6.0/README.md"
              data-name="v1.6.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.6.0">
                v1.6.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-zoom/tree/v1.5.0/README.md"
              data-name="v1.5.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.5.0">
                v1.5.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-zoom/tree/v1.3.1/README.md"
              data-name="v1.3.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.3.1">
                v1.3.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-zoom/tree/v1.3.0/README.md"
              data-name="v1.3.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.3.0">
                v1.3.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-zoom/tree/v1.2.0/README.md"
              data-name="v1.2.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.2.0">
                v1.2.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-zoom/tree/v1.1.4/README.md"
              data-name="v1.1.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.1.4">
                v1.1.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-zoom/tree/v1.1.3/README.md"
              data-name="v1.1.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.1.3">
                v1.1.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-zoom/tree/v1.1.2/README.md"
              data-name="v1.1.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.1.2">
                v1.1.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-zoom/tree/v1.1.1/README.md"
              data-name="v1.1.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.1.1">
                v1.1.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-zoom/tree/v1.1.0/README.md"
              data-name="v1.1.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.1.0">
                v1.1.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-zoom/tree/v1.0.3/README.md"
              data-name="v1.0.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.3">
                v1.0.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-zoom/tree/v1.0.2/README.md"
              data-name="v1.0.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.2">
                v1.0.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-zoom/tree/v1.0.1/README.md"
              data-name="v1.0.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.1">
                v1.0.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-zoom/tree/v1.0.0/README.md"
              data-name="v1.0.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.0">
                v1.0.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-zoom/tree/v0.3.1/README.md"
              data-name="v0.3.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.3.1">
                v0.3.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-zoom/tree/v0.3.0/README.md"
              data-name="v0.3.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.3.0">
                v0.3.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-zoom/tree/v0.2.2/README.md"
              data-name="v0.2.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.2.2">
                v0.2.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-zoom/tree/v0.2.1/README.md"
              data-name="v0.2.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.2.1">
                v0.2.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-zoom/tree/v0.2.0/README.md"
              data-name="v0.2.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.2.0">
                v0.2.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-zoom/tree/v0.1.0/README.md"
              data-name="v0.1.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.1.0">
                v0.1.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-zoom/tree/v0.0.2/README.md"
              data-name="v0.0.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.0.2">
                v0.0.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-zoom/tree/v0.0.1/README.md"
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
      <a href="/d3/d3-zoom/find/master"
            class="js-pjax-capture-input btn btn-sm BtnGroup-item"
            data-pjax
            data-hotkey="t">
        Find file
      </a>
      <button aria-label="Copy file path to clipboard" class="js-zeroclipboard btn btn-sm BtnGroup-item tooltipped tooltipped-s" data-copied-hint="Copied!" type="button">Copy path</button>
    </div>
    <div class="breadcrumb js-zeroclipboard-target">
      <span class="repo-root js-repo-root"><span class="js-path-segment"><a href="/d3/d3-zoom"><span>d3-zoom</span></a></span></span><span class="separator">/</span><strong class="final-path">README.md</strong>
    </div>
  </div>


  
  <div class="commit-tease">
      <span class="float-right">
        <a class="commit-tease-sha" href="/d3/d3-zoom/commit/929ff6f3e2f3519fe5da34e26d2eea1da74dbd52" data-pjax>
          929ff6f
        </a>
        <relative-time datetime="2017-10-25T17:19:23Z">Oct 25, 2017</relative-time>
      </span>
      <div>
        <img alt="@mbostock" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/230541?s=40&amp;v=4" width="20" />
        <a href="/mbostock" class="user-mention" rel="contributor">mbostock</a>
          <a href="/d3/d3-zoom/commit/929ff6f3e2f3519fe5da34e26d2eea1da74dbd52" class="message" data-pjax="true" title="Fix typo.">Fix typo.</a>
      </div>

    <div class="commit-tease-contributors">
      <button type="button" class="btn-link muted-link contributors-toggle" data-facebox="#blob_contributors_box">
        <strong>5</strong>
         contributors
      </button>
          <a class="avatar-link tooltipped tooltipped-s" aria-label="mbostock" href="/d3/d3-zoom/commits/master/README.md?author=mbostock"><img alt="@mbostock" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/230541?s=40&amp;v=4" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="ondras" href="/d3/d3-zoom/commits/master/README.md?author=ondras"><img alt="@ondras" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/192172?s=40&amp;v=4" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="tmcw" href="/d3/d3-zoom/commits/master/README.md?author=tmcw"><img alt="@tmcw" class="avatar" height="20" src="https://avatars3.githubusercontent.com/u/32314?s=40&amp;v=4" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="Devinsuit" href="/d3/d3-zoom/commits/master/README.md?author=Devinsuit"><img alt="@Devinsuit" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/11741306?s=40&amp;v=4" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="Fil" href="/d3/d3-zoom/commits/master/README.md?author=Fil"><img alt="@Fil" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/7001?s=40&amp;v=4" width="20" /> </a>


    </div>

    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header" data-facebox-id="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list" data-facebox-id="facebox-description">
          <li class="facebox-user-list-item">
            <img alt="@mbostock" height="24" src="https://avatars0.githubusercontent.com/u/230541?s=48&amp;v=4" width="24" />
            <a href="/mbostock">mbostock</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@ondras" height="24" src="https://avatars0.githubusercontent.com/u/192172?s=48&amp;v=4" width="24" />
            <a href="/ondras">ondras</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@tmcw" height="24" src="https://avatars2.githubusercontent.com/u/32314?s=48&amp;v=4" width="24" />
            <a href="/tmcw">tmcw</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@Devinsuit" height="24" src="https://avatars1.githubusercontent.com/u/11741306?s=48&amp;v=4" width="24" />
            <a href="/Devinsuit">Devinsuit</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@Fil" height="24" src="https://avatars3.githubusercontent.com/u/7001?s=48&amp;v=4" width="24" />
            <a href="/Fil">Fil</a>
          </li>
      </ul>
    </div>
  </div>


  <div class="file">
    <div class="file-header">
  <div class="file-actions">

    <div class="BtnGroup">
      <a href="/d3/d3-zoom/raw/master/README.md" class="btn btn-sm BtnGroup-item" id="raw-url">Raw</a>
        <a href="/d3/d3-zoom/blame/master/README.md" class="btn btn-sm js-update-url-with-hash BtnGroup-item" data-hotkey="b">Blame</a>
      <a href="/d3/d3-zoom/commits/master/README.md" class="btn btn-sm BtnGroup-item" rel="nofollow">History</a>
    </div>

        <a class="btn-octicon tooltipped tooltipped-nw"
           href="github-windows://openRepo/https://github.com/d3/d3-zoom?branch=master&amp;filepath=README.md"
           aria-label="Open this file in GitHub Desktop"
           data-ga-click="Repository, open with desktop, type:windows">
            <svg aria-hidden="true" class="octicon octicon-device-desktop" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M15 2H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5.34c-.25.61-.86 1.39-2.34 2h8c-1.48-.61-2.09-1.39-2.34-2H15c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 9H1V3h14v8z"/></svg>
        </a>

          <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/d3/d3-zoom/edit/master/README.md" class="inline-form js-update-url-with-hash" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="sdg4h6Ln1aqA9GKniw848l4wA+4tjNFlIMoMa87BQ/AxyLux4QeVE2X7F3Qbf8rWlAfsycYBGlXu54A4ZtctBw==" /></div>
            <button class="btn-octicon tooltipped tooltipped-nw" type="submit"
              aria-label="Fork this project and edit the file" data-hotkey="e" data-disable-with>
              <svg aria-hidden="true" class="octicon octicon-pencil" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z"/></svg>
            </button>
</form>
        <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/d3/d3-zoom/delete/master/README.md" class="inline-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="Tjp1zp5TQ44evIr/THweBn6LbohnzMd0JLznVmrBdeNBtbHLv7qSvn/cbYhZI00dYs2MKGCzKFRIP9kON6jQFA==" /></div>
          <button class="btn-octicon btn-octicon-danger tooltipped tooltipped-nw" type="submit"
            aria-label="Fork this project and delete the file" data-disable-with>
            <svg aria-hidden="true" class="octicon octicon-trashcan" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M11 2H9c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1H2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1v9c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V5c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 12H3V5h1v8h1V5h1v8h1V5h1v8h1V5h1v9zm1-10H2V3h9v1z"/></svg>
          </button>
</form>  </div>

  <div class="file-info">
      399 lines (257 sloc)
      <span class="file-info-divider"></span>
    35.9 KB
  </div>
</div>

    
  <div id="readme" class="readme blob instapaper_body">
    <article class="markdown-body entry-content" itemprop="text"><h1><a href="#d3-zoom" aria-hidden="true" class="anchor" id="user-content-d3-zoom"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>d3-zoom</h1>
<p>Panning and zooming are popular interaction techniques which let the user focus on a region of interest by restricting the view. It is easy to learn due to direct manipulation: click-and-drag to pan (translate), spin the wheel to zoom (scale), or use touch. Panning and zooming are widely used in web-based mapping, but can also be used with visualizations such as time-series and scatterplots.</p>
<p>The zoom behavior implemented by d3-zoom is a convenient but flexible abstraction for enabling pan-and-zoom on <a href="https://github.com/d3/d3-selection">selections</a>. It handles a surprising variety of <a href="#api-reference">input events</a> and browser quirks. The zoom behavior is agnostic about the DOM, so you can use it with SVG, HTML or Canvas.</p>
<p><a href="https://bl.ocks.org/mbostock/d1f7b58631e71fbf9c568345ee04a60e"><img alt="Canvas Zooming" src="https://raw.githubusercontent.com/d3/d3-zoom/master/img/dots.png" width="420" height="219" style="max-width:100%;"></a><a href="https://bl.ocks.org/mbostock/4e3925cdc804db257a86fdef3a032a45"><img alt="SVG Zooming" src="https://raw.githubusercontent.com/d3/d3-zoom/master/img/dots.png" width="420" height="219" style="max-width:100%;"></a></p>
<p>The zoom behavior is also designed to work with <a href="https://github.com/d3/d3-scale">d3-scale</a> and <a href="https://github.com/d3/d3-axis">d3-axis</a>; see <a href="#transform_rescaleX"><em>transform</em>.rescaleX</a> and <a href="#transform_rescaleY"><em>transform</em>.rescaleY</a>. You can also restrict zooming using <a href="#zoom_scaleExtent"><em>zoom</em>.scaleExtent</a> and panning using <a href="#zoom_translateExtent"><em>zoom</em>.translateExtent</a>.</p>
<p><a href="https://bl.ocks.org/mbostock/db6b4335bf1662b413e7968910104f0f"><img alt="Axis Zooming" src="https://raw.githubusercontent.com/d3/d3-zoom/master/img/axis.png" width="420" height="219" style="max-width:100%;"></a></p>
<p>The zoom behavior can be combined with other behaviors, such as <a href="https://github.com/d3/d3-drag">d3-drag</a> for dragging, and <a href="https://github.com/d3/d3-brush">d3-brush</a> for focus + context.</p>
<p><a href="https://bl.ocks.org/mbostock/3127661b6f13f9316be745e77fdfb084"><img alt="Drag &amp; Zoom II" src="https://raw.githubusercontent.com/d3/d3-zoom/master/img/dots.png" width="420" height="219" style="max-width:100%;"></a><a href="https://bl.ocks.org/mbostock/34f08d5e11952a80609169b7917d4172"><img alt="Brush &amp; Zoom" src="https://raw.githubusercontent.com/d3/d3-zoom/master/img/brush.png" width="420" height="219" style="max-width:100%;"></a></p>
<p>The zoom behavior can be controlled programmatically using <a href="#zoom_transform"><em>zoom</em>.transform</a>, allowing you to implement user interface controls which drive the display or to stage animated tours through your data. Smooth zoom transitions are based on <a href="http://www.win.tue.nl/%7Evanwijk/zoompan.pdf">“Smooth and efficient zooming and panning”</a> by Jarke J. van Wijk and Wim A.A. Nuij.</p>
<p><a href="https://bl.ocks.org/mbostock/b783fbb2e673561d214e09c7fb5cedee"><img alt="Zoom Transitions" src="https://raw.githubusercontent.com/d3/d3-zoom/master/img/transition.png" width="420" height="219" style="max-width:100%;"></a></p>
<p>See also <a href="https://github.com/d3/d3-tile">d3-tile</a> for examples panning and zooming maps.</p>
<h2><a href="#installing" aria-hidden="true" class="anchor" id="user-content-installing"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installing</h2>
<p>If you use NPM, <code>npm install d3-zoom</code>. Otherwise, download the <a href="https://github.com/d3/d3-zoom/releases/latest">latest release</a>. You can also load directly from <a href="https://d3js.org">d3js.org</a>, either as a <a href="https://d3js.org/d3-zoom.v1.min.js">standalone library</a> or as part of <a href="https://github.com/d3/d3">D3 4.0</a>. AMD, CommonJS, and vanilla environments are supported. In vanilla, a <code>d3</code> global is exported:</p>
<div class="highlight highlight-text-html-basic"><pre>&lt;<span class="pl-ent">script</span> <span class="pl-e">src</span>=<span class="pl-s"><span class="pl-pds">"</span>https://d3js.org/d3-color.v1.min.js<span class="pl-pds">"</span></span>&gt;&lt;/<span class="pl-ent">script</span>&gt;
&lt;<span class="pl-ent">script</span> <span class="pl-e">src</span>=<span class="pl-s"><span class="pl-pds">"</span>https://d3js.org/d3-dispatch.v1.min.js<span class="pl-pds">"</span></span>&gt;&lt;/<span class="pl-ent">script</span>&gt;
&lt;<span class="pl-ent">script</span> <span class="pl-e">src</span>=<span class="pl-s"><span class="pl-pds">"</span>https://d3js.org/d3-ease.v1.min.js<span class="pl-pds">"</span></span>&gt;&lt;/<span class="pl-ent">script</span>&gt;
&lt;<span class="pl-ent">script</span> <span class="pl-e">src</span>=<span class="pl-s"><span class="pl-pds">"</span>https://d3js.org/d3-interpolate.v1.min.js<span class="pl-pds">"</span></span>&gt;&lt;/<span class="pl-ent">script</span>&gt;
&lt;<span class="pl-ent">script</span> <span class="pl-e">src</span>=<span class="pl-s"><span class="pl-pds">"</span>https://d3js.org/d3-selection.v1.min.js<span class="pl-pds">"</span></span>&gt;&lt;/<span class="pl-ent">script</span>&gt;
&lt;<span class="pl-ent">script</span> <span class="pl-e">src</span>=<span class="pl-s"><span class="pl-pds">"</span>https://d3js.org/d3-timer.v1.min.js<span class="pl-pds">"</span></span>&gt;&lt;/<span class="pl-ent">script</span>&gt;
&lt;<span class="pl-ent">script</span> <span class="pl-e">src</span>=<span class="pl-s"><span class="pl-pds">"</span>https://d3js.org/d3-transition.v1.min.js<span class="pl-pds">"</span></span>&gt;&lt;/<span class="pl-ent">script</span>&gt;
&lt;<span class="pl-ent">script</span> <span class="pl-e">src</span>=<span class="pl-s"><span class="pl-pds">"</span>https://d3js.org/d3-drag.v1.min.js<span class="pl-pds">"</span></span>&gt;&lt;/<span class="pl-ent">script</span>&gt;
&lt;<span class="pl-ent">script</span> <span class="pl-e">src</span>=<span class="pl-s"><span class="pl-pds">"</span>https://d3js.org/d3-zoom.v1.min.js<span class="pl-pds">"</span></span>&gt;&lt;/<span class="pl-ent">script</span>&gt;
&lt;<span class="pl-ent">script</span>&gt;<span class="pl-s1"></span>
<span class="pl-s1"></span>
<span class="pl-s1"><span class="pl-k">var</span> zoom <span class="pl-k">=</span> <span class="pl-smi">d3</span>.<span class="pl-en">zoom</span>();</span>
<span class="pl-s1"></span>
<span class="pl-s1"></span><span class="pl-s1">&lt;</span>/<span class="pl-ent">script</span>&gt;</pre></div>
<p><a href="https://tonicdev.com/npm/d3-zoom">Try d3-zoom in your browser.</a></p>
<h2><a href="#api-reference" aria-hidden="true" class="anchor" id="user-content-api-reference"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>API Reference</h2>
<p>This table describes how the zoom behavior interprets native events:</p>
<table>
<thead>
<tr>
<th>Event</th>
<th>Listening Element</th>
<th>Zoom Event</th>
<th>Default Prevented?</th>
</tr>
</thead>
<tbody>
<tr>
<td>mousedown⁵</td>
<td>selection</td>
<td>start</td>
<td>no¹</td>
</tr>
<tr>
<td>mousemove²</td>
<td>window¹</td>
<td>zoom</td>
<td>yes</td>
</tr>
<tr>
<td>mouseup²</td>
<td>window¹</td>
<td>end</td>
<td>yes</td>
</tr>
<tr>
<td>dragstart²</td>
<td>window</td>
<td>-</td>
<td>yes</td>
</tr>
<tr>
<td>selectstart²</td>
<td>window</td>
<td>-</td>
<td>yes</td>
</tr>
<tr>
<td>click³</td>
<td>window</td>
<td>-</td>
<td>yes</td>
</tr>
<tr>
<td>dblclick</td>
<td>selection</td>
<td><em>multiple</em>⁶</td>
<td>yes</td>
</tr>
<tr>
<td>wheel⁸</td>
<td>selection</td>
<td>zoom⁷</td>
<td>yes</td>
</tr>
<tr>
<td>touchstart</td>
<td>selection</td>
<td><em>multiple</em>⁶</td>
<td>no⁴</td>
</tr>
<tr>
<td>touchmove</td>
<td>selection</td>
<td>zoom</td>
<td>yes</td>
</tr>
<tr>
<td>touchend</td>
<td>selection</td>
<td>end</td>
<td>no⁴</td>
</tr>
<tr>
<td>touchcancel</td>
<td>selection</td>
<td>end</td>
<td>no⁴</td>
</tr></tbody></table>
<p>The propagation of all consumed events is <a href="https://dom.spec.whatwg.org/#dom-event-stopimmediatepropagation">immediately stopped</a>.</p>
<p>¹ Necessary to capture events outside an iframe; see <a href="https://github.com/d3/d3-drag/issues/9">d3-drag#9</a>.
<br>² Only applies during an active, mouse-based gesture; see <a href="https://github.com/d3/d3-drag/issues/9">d3-drag#9</a>.
<br>³ Only applies immediately after some mouse-based gestures; see <a href="#zoom_clickDistance"><em>zoom</em>.clickDistance</a>.
<br>⁴ Necessary to allow <a href="https://developer.apple.com/library/ios/documentation/AppleApplications/Reference/SafariWebContent/HandlingEvents/HandlingEvents.html#//apple_ref/doc/uid/TP40006511-SW7">click emulation</a> on touch input; see <a href="https://github.com/d3/d3-drag/issues/9">d3-drag#9</a>.
<br>⁵ Ignored if within 500ms of a touch gesture ending; assumes <a href="https://developer.apple.com/library/ios/documentation/AppleApplications/Reference/SafariWebContent/HandlingEvents/HandlingEvents.html#//apple_ref/doc/uid/TP40006511-SW7">click emulation</a>.
<br>⁶ Double-click and double-tap initiate a transition that emits start, zoom and end events.
<br>⁷ The first wheel event emits a start event; an end event is emitted when no wheel events are received for 150ms.
<br>⁸ Ignored if already at the corresponding limit of the <a href="#zoom_scaleExtent">scale extent</a>.</p>
<p><a href="#zoom" name="user-content-zoom">#</a> d3.<b>zoom</b>() <a href="https://github.com/d3/d3-zoom/blob/master/src/zoom.js" title="Source">&lt;&gt;</a></p>
<p>Creates a new zoom behavior. The returned behavior, <a href="#_drag"><em>zoom</em></a>, is both an object and a function, and is typically applied to selected elements via <a href="https://github.com/d3/d3-selection#selection_call"><em>selection</em>.call</a>.</p>
<p><a href="#_zoom" name="user-content-_zoom">#</a> <i>zoom</i>(<i>selection</i>) <a href="https://github.com/d3/d3-zoom/blob/master/src/zoom.js#L62" title="Source">&lt;&gt;</a></p>
<p>Applies this zoom behavior to the specified <a href="https://github.com/d3/d3-selection"><em>selection</em></a>, binding the necessary event listeners to allow panning and zooming, and initializing the <a href="#zoom-transforms">zoom transform</a> on each selected element to the identity transform if not already defined. This function is typically not invoked directly, and is instead invoked via <a href="https://github.com/d3/d3-selection#selection_call"><em>selection</em>.call</a>. For example, to instantiate a zoom behavior and apply it to a selection:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-smi">selection</span>.<span class="pl-c1">call</span>(<span class="pl-smi">d3</span>.<span class="pl-en">zoom</span>().<span class="pl-en">on</span>(<span class="pl-s"><span class="pl-pds">"</span>zoom<span class="pl-pds">"</span></span>, zoomed));</pre></div>
<p>Internally, the zoom behavior uses <a href="https://github.com/d3/d3-selection#selection_on"><em>selection</em>.on</a> to bind the necessary event listeners for zooming. The listeners use the name <code>.zoom</code>, so you can subsequently unbind the zoom behavior as follows:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-smi">selection</span>.<span class="pl-en">on</span>(<span class="pl-s"><span class="pl-pds">"</span>.zoom<span class="pl-pds">"</span></span>, <span class="pl-c1">null</span>);</pre></div>
<p>To disable just wheel-driven zooming (say to not interfere with native scrolling), you can remove the zoom behavior’s wheel event listener after applying the zoom behavior to the selection:</p>
<div class="highlight highlight-source-js"><pre>selection
    .<span class="pl-c1">call</span>(zoom)
    .<span class="pl-en">on</span>(<span class="pl-s"><span class="pl-pds">"</span>wheel.zoom<span class="pl-pds">"</span></span>, <span class="pl-c1">null</span>);</pre></div>
<p>Alternatively, use <a href="#zoom_filter"><em>zoom</em>.filter</a> for greater control over which events can initiate zoom gestures.</p>
<p>Applying the zoom behavior also sets the <a href="https://developer.apple.com/library/mac/documentation/AppleApplications/Reference/SafariWebContent/AdjustingtheTextSize/AdjustingtheTextSize.html#//apple_ref/doc/uid/TP40006510-SW5">-webkit-tap-highlight-color</a> style to transparent, disabling the tap highlight on iOS. If you want a different tap highlight color, remove or re-apply this style after applying the drag behavior.</p>
<p><a href="#zoom_transform" name="user-content-zoom_transform">#</a> <i>zoom</i>.<b>transform</b>(<i>selection</i>, <i>transform</i>) <a href="https://github.com/d3/d3-zoom/blob/master/src/zoom.js#L76" title="Source">&lt;&gt;</a></p>
<p>If <em>selection</em> is a selection, sets the <a href="#zoomTransform">current zoom transform</a> of the selected elements to the specified <em>transform</em>, instantaneously emitting start, zoom and end <a href="#zoom-events">events</a>. If <em>selection</em> is a transition, defines a “zoom” tween to the specified <em>transform</em> using <a href="https://github.com/d3/d3-interpolate#interpolateZoom">d3.interpolateZoom</a>, emitting a start event when the transition starts, zoom events for each tick of the transition, and then an end event when the transition ends (or is interrupted). The <em>transform</em> may be specified either as a <a href="#zoom-transforms">zoom transform</a> or as a function that returns a zoom transform. If a function, it is invoked for each selected element, being passed the current datum <code>d</code> and index <code>i</code>, with the <code>this</code> context as the current DOM element.</p>
<p>This function is typically not invoked directly, and is instead invoked via <a href="https://github.com/d3/d3-selection#selection_call"><em>selection</em>.call</a> or <a href="https://github.com/d3/d3-transition#transition_call"><em>transition</em>.call</a>. For example, to reset the zoom transform to the <a href="#zoomIdentity">identity transform</a> instantaneously:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-smi">selection</span>.<span class="pl-c1">call</span>(<span class="pl-smi">zoom</span>.<span class="pl-smi">transform</span>, <span class="pl-smi">d3</span>.<span class="pl-smi">zoomIdentity</span>);</pre></div>
<p>To smoothly reset the zoom transform to the identity transform over 750 milliseconds:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-smi">selection</span>.<span class="pl-en">transition</span>().<span class="pl-en">duration</span>(<span class="pl-c1">750</span>).<span class="pl-c1">call</span>(<span class="pl-smi">zoom</span>.<span class="pl-smi">transform</span>, <span class="pl-smi">d3</span>.<span class="pl-smi">zoomIdentity</span>);</pre></div>
<p>This method requires that you specify the new zoom transform completely, and does not enforce the defined <a href="#zoom_scaleExtent">scale extent</a> and <a href="#zoom_translateExtent">translate extent</a>, if any. To derive a new transform from the existing transform, and to enforce the scale and translate extents, see the convenience methods <a href="#zoom_translateBy"><em>zoom</em>.translateBy</a>, <a href="#zoom_scaleBy"><em>zoom</em>.scaleBy</a> and <a href="#zoom_scaleTo"><em>zoom</em>.scaleTo</a>.</p>
<p><a href="#zoom_translateBy" name="user-content-zoom_translateBy">#</a> <i>zoom</i>.<b>translateBy</b>(<i>selection</i>, <i>x</i>, <i>y</i>) <a href="https://github.com/d3/d3-zoom/blob/master/src/zoom.js#L110" title="Source">&lt;&gt;</a></p>
<p>If <em>selection</em> is a selection, <a href="#transform_translate">translates</a> the <a href="#zoomTransform">current zoom transform</a> of the selected elements by <em>x</em> and <em>y</em>, such that the new <em>t<sub>x1</sub></em> = <em>t<sub>x0</sub></em> + <em>kx</em> and <em>t<sub>y1</sub></em> = <em>t<sub>y0</sub></em> + <em>ky</em>. If <em>selection</em> is a transition, defines a “zoom” tween translating the current transform. This method is a convenience method for <a href="#zoom_transform"><em>zoom</em>.transform</a>. The <em>x</em> and <em>y</em> translation amounts may be specified either as numbers or as functions that returns numbers. If a function, it is invoked for each selected element, being passed the current datum <code>d</code> and index <code>i</code>, with the <code>this</code> context as the current DOM element.</p>
<p><a href="#zoom_translateTo" name="user-content-zoom_translateTo">#</a> <i>zoom</i>.<b>translateTo</b>(<i>selection</i>, <i>x</i>, <i>y</i>) <a href="https://github.com/d3/d3-zoom/blob/master/src/zoom.js#L119" title="Source">&lt;&gt;</a></p>
<p>If <em>selection</em> is a selection, <a href="#transform_translate">translates</a> the <a href="#zoomTransform">current zoom transform</a> of the selected elements such that the specified position ⟨<em>x</em>,<em>y</em>⟩ appears at the center of the <a href="#zoom_extent">viewport extent</a>. The new <em>t<sub>x</sub></em> = <em>c<sub>x</sub></em> - <em>kx</em> and <em>t<sub>y</sub></em> = <em>c<sub>y</sub></em> - <em>ky</em>, where ⟨<em>c<sub>x</sub></em>,<em>c<sub>y</sub></em>⟩ is the center. If <em>selection</em> is a transition, defines a “zoom” tween translating the current transform. This method is a convenience method for <a href="#zoom_transform"><em>zoom</em>.transform</a>. The <em>x</em> and <em>y</em> coordinates may be specified either as numbers or as functions that returns numbers. If a function, it is invoked for each selected element, being passed the current datum <code>d</code> and index <code>i</code>, with the <code>this</code> context as the current DOM element.</p>
<p><a href="#zoom_scaleBy" name="user-content-zoom_scaleBy">#</a> <i>zoom</i>.<b>scaleBy</b>(<i>selection</i>, <i>k</i>) <a href="https://github.com/d3/d3-zoom/blob/master/src/zoom.js#L91" title="Source">&lt;&gt;</a></p>
<p>If <em>selection</em> is a selection, <a href="#transform_scale">scales</a> the <a href="#zoomTransform">current zoom transform</a> of the selected elements by <em>k</em>, such that the new <em>k₁</em> = <em>k₀k</em>. If <em>selection</em> is a transition, defines a “zoom” tween translating the current transform. This method is a convenience method for <a href="#zoom_transform"><em>zoom</em>.transform</a>. The <em>k</em> scale factor may be specified either as numbers or as functions that returns numbers. If a function, it is invoked for each selected element, being passed the current datum <code>d</code> and index <code>i</code>, with the <code>this</code> context as the current DOM element.</p>
<p><a href="#zoom_scaleTo" name="user-content-zoom_scaleTo">#</a> <i>zoom</i>.<b>scaleTo</b>(<i>selection</i>, <i>k</i>) <a href="https://github.com/d3/d3-zoom/blob/master/src/zoom.js#L99" title="Source">&lt;&gt;</a></p>
<p>If <em>selection</em> is a selection, <a href="#transform_scale">scales</a> the <a href="#zoomTransform">current zoom transform</a> of the selected elements to <em>k</em>, such that the new <em>k₁</em> = <em>k</em>. If <em>selection</em> is a transition, defines a “zoom” tween translating the current transform. This method is a convenience method for <a href="#zoom_transform"><em>zoom</em>.transform</a>. The <em>k</em> scale factor may be specified either as numbers or as functions that returns numbers. If a function, it is invoked for each selected element, being passed the current datum <code>d</code> and index <code>i</code>, with the <code>this</code> context as the current DOM element.</p>
<p><a href="#zoom_constrain" name="user-content-zoom_constrain">#</a> <i>zoom</i>.<b>constrain</b>([<i>constrain</i>]) <a href="https://github.com/d3/d3-zoom/blob/master/src/zoom.js#403" title="Source">&lt;&gt;</a></p>
<p>If <em>constrain</em> is specified, sets the transform constraint function to the specified function and returns the zoom behavior. If <em>constrain</em> is not specified, returns the current constraint function, which defaults to:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">function</span> <span class="pl-en">constrain</span>(<span class="pl-smi">transform</span>, <span class="pl-smi">extent</span>, <span class="pl-smi">translateExtent</span>) {
  <span class="pl-k">var</span> dx0 <span class="pl-k">=</span> <span class="pl-smi">transform</span>.<span class="pl-en">invertX</span>(extent[<span class="pl-c1">0</span>][<span class="pl-c1">0</span>]) <span class="pl-k">-</span> translateExtent[<span class="pl-c1">0</span>][<span class="pl-c1">0</span>],
      dx1 <span class="pl-k">=</span> <span class="pl-smi">transform</span>.<span class="pl-en">invertX</span>(extent[<span class="pl-c1">1</span>][<span class="pl-c1">0</span>]) <span class="pl-k">-</span> translateExtent[<span class="pl-c1">1</span>][<span class="pl-c1">0</span>],
      dy0 <span class="pl-k">=</span> <span class="pl-smi">transform</span>.<span class="pl-en">invertY</span>(extent[<span class="pl-c1">0</span>][<span class="pl-c1">1</span>]) <span class="pl-k">-</span> translateExtent[<span class="pl-c1">0</span>][<span class="pl-c1">1</span>],
      dy1 <span class="pl-k">=</span> <span class="pl-smi">transform</span>.<span class="pl-en">invertY</span>(extent[<span class="pl-c1">1</span>][<span class="pl-c1">1</span>]) <span class="pl-k">-</span> translateExtent[<span class="pl-c1">1</span>][<span class="pl-c1">1</span>];
  <span class="pl-k">return</span> <span class="pl-smi">transform</span>.<span class="pl-en">translate</span>(
    dx1 <span class="pl-k">&gt;</span> dx0 <span class="pl-k">?</span> (dx0 <span class="pl-k">+</span> dx1) <span class="pl-k">/</span> <span class="pl-c1">2</span> <span class="pl-k">:</span> <span class="pl-c1">Math</span>.<span class="pl-c1">min</span>(<span class="pl-c1">0</span>, dx0) <span class="pl-k">||</span> <span class="pl-c1">Math</span>.<span class="pl-c1">max</span>(<span class="pl-c1">0</span>, dx1),
    dy1 <span class="pl-k">&gt;</span> dy0 <span class="pl-k">?</span> (dy0 <span class="pl-k">+</span> dy1) <span class="pl-k">/</span> <span class="pl-c1">2</span> <span class="pl-k">:</span> <span class="pl-c1">Math</span>.<span class="pl-c1">min</span>(<span class="pl-c1">0</span>, dy0) <span class="pl-k">||</span> <span class="pl-c1">Math</span>.<span class="pl-c1">max</span>(<span class="pl-c1">0</span>, dy1)
  );
}</pre></div>
<p>The constraint function must return a <a href="#zoom-transforms"><em>transform</em></a> given the current <em>transform</em>, <a href="#zoom_extent">viewport extent</a> and <a href="#zoom_translateExtent">translate extent</a>. The default implementation attempts to ensure that the viewport extent does not go outside the translate extent.</p>
<p><a href="#zoom_filter" name="user-content-zoom_filter">#</a> <i>zoom</i>.<b>filter</b>([<i>filter</i>]) <a href="https://github.com/d3/d3-zoom/blob/master/src/zoom.js#L386" title="Source">&lt;&gt;</a></p>
<p>If <em>filter</em> is specified, sets the filter to the specified function and returns the zoom behavior. If <em>filter</em> is not specified, returns the current filter, which defaults to:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">function</span> <span class="pl-en">filter</span>() {
  <span class="pl-k">return</span> <span class="pl-k">!</span><span class="pl-smi">d3</span>.<span class="pl-c1">event</span>.<span class="pl-smi">button</span>;
}</pre></div>
<p>If the filter returns falsey, the initiating event is ignored and no zoom gestures are started. Thus, the filter determines which input events are ignored. The default filter ignores mousedown events on secondary buttons, since those buttons are typically intended for other purposes, such as the context menu.</p>
<p><a href="#zoom_touchable" name="user-content-zoom_touchable">#</a> <i>zoom</i>.<b>touchable</b>([<i>touchable</i>]) <a href="https://github.com/d3/d3-zoom/blob/master/src/zoom.js#L390" title="Source">&lt;&gt;</a></p>
<p>If <em>touchable</em> is specified, sets the touch support detector to the specified function and returns the zoom behavior. If <em>touchable</em> is not specified, returns the current touch support detector, which defaults to:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">function</span> <span class="pl-en">touchable</span>() {
  <span class="pl-k">return</span> <span class="pl-s"><span class="pl-pds">"</span>ontouchstart<span class="pl-pds">"</span></span> <span class="pl-k">in</span> <span class="pl-c1">this</span>;
}</pre></div>
<p>Touch event listeners are only registered if the detector returns truthy for the corresponding element when the zoom behavior is <a href="#_zoom">applied</a>. The default detector works well for most browsers that are capable of touch input, but not all; Chrome’s mobile device emulator, for example, fails detection.</p>
<p><a href="#zoom_wheelDelta" name="user-content-zoom_wheelDelta">#</a> <i>zoom</i>.<b>wheelDelta</b>([<i>delta</i>]) <a href="https://github.com/d3/d3-zoom/blob/master/src/zoom.js#L382" title="Source">&lt;&gt;</a></p>
<p>If <em>delta</em> is specified, sets the wheel delta function to the specified function and returns the zoom behavior. If <em>delta</em> is not specified, returns the current wheel delta function, which defaults to:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">function</span> <span class="pl-en">wheelDelta</span>() {
  <span class="pl-k">return</span> <span class="pl-k">-</span><span class="pl-smi">d3</span>.<span class="pl-c1">event</span>.<span class="pl-smi">deltaY</span> <span class="pl-k">*</span> (<span class="pl-smi">d3</span>.<span class="pl-c1">event</span>.<span class="pl-smi">deltaMode</span> <span class="pl-k">?</span> <span class="pl-c1">120</span> <span class="pl-k">:</span> <span class="pl-c1">1</span>) <span class="pl-k">/</span> <span class="pl-c1">500</span>;
}</pre></div>
<p>The value <em>Δ</em> returned by the wheel delta function determines the amount of scaling applied in response to a <a href="https://developer.mozilla.org/en-US/docs/Web/API/WheelEvent">WheelEvent</a>. The scale factor <a href="#zoomTransform"><em>transform</em>.k</a> is multiplied by 2<sup><em>Δ</em></sup>; for example, a <em>Δ</em> of +1 doubles the scale factor, <em>Δ</em> of -1 halves the scale factor.</p>
<p><a href="#zoom_extent" name="user-content-zoom_extent">#</a> <i>zoom</i>.<b>extent</b>([<i>extent</i>]) <a href="https://github.com/d3/d3-zoom/blob/master/src/zoom.js#L394" title="Source">&lt;&gt;</a></p>
<p>If <em>extent</em> is specified, sets the viewport extent to the specified array of points [[<em>x0</em>, <em>y0</em>], [<em>x1</em>, <em>y1</em>]], where [<em>x0</em>, <em>y0</em>] is the top-left corner of the viewport and [<em>x1</em>, <em>y1</em>] is the bottom-right corner of the viewport, and returns this zoom behavior. The <em>extent</em> may also be specified as a function which returns such an array; if a function, it is invoked for each selected element, being passed the current datum <code>d</code> and index <code>i</code>, with the <code>this</code> context as the current DOM element.</p>
<p>If <em>extent</em> is not specified, returns the current extent accessor, which defaults to [[0, 0], [<em>width</em>, <em>height</em>]] where <em>width</em> is the <a href="https://developer.mozilla.org/en-US/docs/Web/API/Element/clientWidth">client width</a> of the element and <em>height</em> is its <a href="https://developer.mozilla.org/en-US/docs/Web/API/Element/clientHeight">client height</a>; for SVG elements, the nearest ancestor SVG element’s <a href="https://www.w3.org/TR/SVG/struct.html#SVGElementWidthAttribute">width</a> and <a href="https://www.w3.org/TR/SVG/struct.html#SVGElementHeightAttribute">height</a> is used. In this case, the owner SVG element must have defined <a href="https://www.w3.org/TR/SVG/struct.html#SVGElementWidthAttribute">width</a> and <a href="https://www.w3.org/TR/SVG/struct.html#SVGElementHeightAttribute">height</a> attributes rather than (for example) relying on CSS properties or the viewBox attribute; SVG provides no programmatic method for retrieving the <a href="https://www.w3.org/TR/SVG/coords.html#ViewportSpace">initial viewport size</a>. Alternatively, consider using <a href="https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect"><em>element</em>.getBoundingClientRect</a>. (In Firefox, <a href="https://developer.mozilla.org/en-US/docs/Web/API/Element/clientWidth"><em>element</em>.clientWidth</a> and <a href="https://developer.mozilla.org/en-US/docs/Web/API/Element/clientHeight"><em>element</em>.clientHeight</a> is zero for SVG elements!)</p>
<p>The viewport extent affects several functions: the center of the viewport remains fixed during changes by <a href="#zoom_scaleBy"><em>zoom</em>.scaleBy</a> and <a href="#zoom_scaleTo"><em>zoom</em>.scaleTo</a>; the viewport center and dimensions affect the path chosen by <a href="https://github.com/d3/d3-interpolate#interpolateZoom">d3.interpolateZoom</a>; and the viewport extent is needed to enforce the optional <a href="#zoom_translateExtent">translate extent</a>.</p>
<p><a href="#zoom_scaleExtent" name="user-content-zoom_scaleExtent">#</a> <i>zoom</i>.<b>scaleExtent</b>([<i>extent</i>]) <a href="https://github.com/d3/d3-zoom/blob/master/src/zoom.js#L398" title="Source">&lt;&gt;</a></p>
<p>If <em>extent</em> is specified, sets the scale extent to the specified array of numbers [<em>k0</em>, <em>k1</em>] where <em>k0</em> is the minimum allowed scale factor and <em>k1</em> is the maximum allowed scale factor, and returns this zoom behavior. If <em>extent</em> is not specified, returns the current scale extent, which defaults to [0, ∞]. The scale extent restricts zooming in and out. It is enforced on interaction and when using <a href="#zoom_scaleBy"><em>zoom</em>.scaleBy</a>, <a href="#zoom_scaleTo"><em>zoom</em>.scaleTo</a> and <a href="#zoom_translateBy"><em>zoom</em>.translateBy</a>; however, it is not enforced when using <a href="#zoom_transform"><em>zoom</em>.transform</a> to set the transform explicitly.</p>
<p>If the user tries to zoom by wheeling when already at the corresponding limit of the scale extent, the wheel events will be ignored and not initiate a zoom gesture. This allows the user to scroll down past a zoomable area after zooming in, or to scroll up after zooming out. If you would prefer to always prevent scrolling on wheel input regardless of the scale extent, register a wheel event listener to prevent the browser default behavior:</p>
<div class="highlight highlight-source-js"><pre>selection
    .<span class="pl-c1">call</span>(zoom)
    .<span class="pl-en">on</span>(<span class="pl-s"><span class="pl-pds">"</span>wheel<span class="pl-pds">"</span></span>, <span class="pl-k">function</span>() { <span class="pl-smi">d3</span>.<span class="pl-c1">event</span>.<span class="pl-c1">preventDefault</span>(); });</pre></div>
<p><a href="#zoom_translateExtent" name="user-content-zoom_translateExtent">#</a> <i>zoom</i>.<b>translateExtent</b>([<i>extent</i>]) <a href="https://github.com/d3/d3-zoom/blob/master/src/zoom.js#L402" title="Source">&lt;&gt;</a></p>
<p>If <em>extent</em> is specified, sets the translate extent to the specified array of points [[<em>x0</em>, <em>y0</em>], [<em>x1</em>, <em>y1</em>]], where [<em>x0</em>, <em>y0</em>] is the top-left corner of the world and [<em>x1</em>, <em>y1</em>] is the bottom-right corner of the world, and returns this zoom behavior. If <em>extent</em> is not specified, returns the current translate extent, which defaults to [[-∞, -∞], [+∞, +∞]]. The translate extent restricts panning, and may cause translation on zoom out. It is enforced on interaction and when using <a href="#zoom_scaleBy"><em>zoom</em>.scaleBy</a>, <a href="#zoom_scaleTo"><em>zoom</em>.scaleTo</a> and <a href="#zoom_translateBy"><em>zoom</em>.translateBy</a>; however, it is not enforced when using <a href="#zoom_transform"><em>zoom</em>.transform</a> to set the transform explicitly.</p>
<p><a href="#zoom_clickDistance" name="user-content-zoom_clickDistance">#</a> <i>zoom</i>.<b>clickDistance</b>([<i>distance</i>]) <a href="https://github.com/d3/d3-zoom/blob/master/src/zoom.js#L419" title="Source">&lt;&gt;</a></p>
<p>If <em>distance</em> is specified, sets the maximum distance that the mouse can move between mousedown and mouseup that will trigger a subsequent click event. If at any point between mousedown and mouseup the mouse is greater than or equal to <em>distance</em> from its position on mousedown, the click event following mouseup will be suppressed. If <em>distance</em> is not specified, returns the current distance threshold, which defaults to zero. The distance threshold is measured in client coordinates (<a href="https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/clientX"><em>event</em>.clientX</a> and <a href="https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/clientY"><em>event</em>.clientY</a>).</p>
<p><a href="#zoom_duration" name="user-content-zoom_duration">#</a> <i>zoom</i>.<b>duration</b>([<i>duration</i>]) <a href="https://github.com/d3/d3-zoom/blob/master/src/zoom.js#L406" title="Source">&lt;&gt;</a></p>
<p>If <em>duration</em> is specified, sets the duration for zoom transitions on double-click and double-tap to the specified number of milliseconds and returns the zoom behavior. If <em>duration</em> is not specified, returns the current duration, which defaults to 250 milliseconds. If the duration is not greater than zero, double-click and -tap trigger instantaneous changes to the zoom transform rather than initiating smooth transitions.</p>
<p>To disable double-click and double-tap transitions, you can remove the zoom behavior’s dblclick event listener after applying the zoom behavior to the selection:</p>
<div class="highlight highlight-source-js"><pre>selection
    .<span class="pl-c1">call</span>(zoom)
    .<span class="pl-en">on</span>(<span class="pl-s"><span class="pl-pds">"</span>dblclick.zoom<span class="pl-pds">"</span></span>, <span class="pl-c1">null</span>);</pre></div>
<p><a href="#zoom_interpolate" name="user-content-zoom_interpolate">#</a> <i>zoom</i>.<b>interpolate</b>([<i>interpolate</i>]) <a href="https://github.com/d3/d3-zoom/blob/master/src/zoom.js#L410" title="Source">&lt;&gt;</a></p>
<p>If <em>interpolate</em> is specified, sets the interpolation factory for zoom transitions to the specified function. If <em>interpolate</em> is not specified, returns the current interpolation factory, which defaults to <a href="https://github.com/d3/d3-interpolate#interpolateZoom">d3.interpolateZoom</a> to implement smooth zooming. To apply direct interpolation between two views, try <a href="https://github.com/d3/d3-interpolate#interpolate">d3.interpolate</a> instead.</p>
<p><a href="#zoom_on" name="user-content-zoom_on">#</a> <i>zoom</i>.<b>on</b>(<i>typenames</i>[, <i>listener</i>]) <a href="https://github.com/d3/d3-zoom/blob/master/src/zoom.js#L414" title="Source">&lt;&gt;</a></p>
<p>If <em>listener</em> is specified, sets the event <em>listener</em> for the specified <em>typenames</em> and returns the zoom behavior. If an event listener was already registered for the same type and name, the existing listener is removed before the new listener is added. If <em>listener</em> is null, removes the current event listeners for the specified <em>typenames</em>, if any. If <em>listener</em> is not specified, returns the first currently-assigned listener matching the specified <em>typenames</em>, if any. When a specified event is dispatched, each <em>listener</em> will be invoked with the same context and arguments as <a href="https://github.com/d3/d3-selection#selection_on"><em>selection</em>.on</a> listeners: the current datum <code>d</code> and index <code>i</code>, with the <code>this</code> context as the current DOM element.</p>
<p>The <em>typenames</em> is a string containing one or more <em>typename</em> separated by whitespace. Each <em>typename</em> is a <em>type</em>, optionally followed by a period (<code>.</code>) and a <em>name</em>, such as <code>zoom.foo</code> and <code>zoom.bar</code>; the name allows multiple listeners to be registered for the same <em>type</em>. The <em>type</em> must be one of the following:</p>
<ul>
<li><code>start</code> - after zooming begins (such as on mousedown).</li>
<li><code>zoom</code> - after a change to the zoom transform (such as on mousemove).</li>
<li><code>end</code> - after zooming ends (such as on mouseup ).</li>
</ul>
<p>See <a href="https://github.com/d3/d3-dispatch#dispatch_on"><em>dispatch</em>.on</a> for more.</p>
<h3><a href="#zoom-events" aria-hidden="true" class="anchor" id="user-content-zoom-events"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Zoom Events</h3>
<p>When a <a href="#zoom_on">zoom event listener</a> is invoked, <a href="https://github.com/d3/d3-selection#event">d3.event</a> is set to the current zoom event. The <em>event</em> object exposes several fields:</p>
<ul>
<li><em>event</em>.target - the associated <a href="#zoom">zoom behavior</a>.</li>
<li><em>event</em>.type - the string “start”, “zoom” or “end”; see <a href="#zoom_on"><em>zoom</em>.on</a>.</li>
<li><em>event</em>.transform - the current <a href="#zoom-transforms">zoom transform</a>.</li>
<li><em>event</em>.sourceEvent - the underlying input event, such as mousemove or touchmove.</li>
</ul>
<h3><a href="#zoom-transforms" aria-hidden="true" class="anchor" id="user-content-zoom-transforms"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Zoom Transforms</h3>
<p>The zoom behavior stores the zoom state on the element to which the zoom behavior was <a href="#_zoom">applied</a>, not on the zoom behavior itself. This is because the zoom behavior can be applied to many elements simultaneously, and each element can be zoomed independently. The zoom state can change either on user interaction or programmatically via <a href="#zoom_transform"><em>zoom</em>.transform</a>.</p>
<p>To retrieve the zoom state, use <em>event</em>.transform on the current <a href="#zoom-events">zoom event</a> within a zoom event listener (see <a href="#zoom_on"><em>zoom</em>.on</a>), or use <a href="#zoomTransform">d3.zoomTransform</a> for a given node. The latter is particularly useful for modifying the zoom state programmatically, say to implement buttons for zooming in and out.</p>
<p><a href="#zoomTransform" name="user-content-zoomTransform">#</a> d3.<b>zoomTransform</b>(<i>node</i>) <a href="https://github.com/d3/d3-zoom/blob/master/src/transform.js" title="Source">&lt;&gt;</a></p>
<p>Returns the current transform for the specified <em>node</em>. Note that <em>node</em> should typically be a DOM element, not a <em>selection</em>. (A selection may consist of multiple nodes, in different states, and this function only returns a single transform.) If you have a selection, call <a href="https://github.com/d3/d3-selection#selection_node"><em>selection</em>.node</a> first:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">var</span> transform <span class="pl-k">=</span> <span class="pl-smi">d3</span>.<span class="pl-en">zoomTransform</span>(<span class="pl-smi">selection</span>.<span class="pl-en">node</span>());</pre></div>
<p>In the context of an <a href="https://github.com/d3/d3-selection#selection_on">event listener</a>, the <em>node</em> is typically the element that received the input event (which should be equal to <a href="#zoom-events"><em>event</em>.transform</a>), <em>this</em>:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">var</span> transform <span class="pl-k">=</span> <span class="pl-smi">d3</span>.<span class="pl-en">zoomTransform</span>(<span class="pl-c1">this</span>);</pre></div>
<p>Internally, an element’s transform is stored as <em>element</em>.__zoom; however, you should use this method rather than accessing it directly. If the given <em>node</em> has no defined transform, returns the <a href="#zoomIdentity">identity transformation</a>. The returned transform represents a two-dimensional <a href="https://en.wikipedia.org/wiki/Transformation_matrix#Affine_transformations">transformation matrix</a> of the form:</p>
<p><em>k</em> 0 <em>t<sub>x</sub></em>
<br>0 <em>k</em> <em>t<sub>y</sub></em>
<br>0 0 1</p>
<p>(This matrix is capable of representing only scale and translation; a future release may also allow rotation, though this would probably not be a backwards-compatible change.) The position ⟨<em>x</em>,<em>y</em>⟩ is transformed to ⟨<em>xk</em> + <em>t<sub>x</sub></em>,<em>yk</em> + <em>t<sub>y</sub></em>⟩. The transform object exposes the following properties:</p>
<ul>
<li><em>transform</em>.x - the translation amount <em>t<sub>x</sub></em> along the <em>x</em>-axis.</li>
<li><em>transform</em>.y - the translation amount <em>t<sub>y</sub></em> along the <em>y</em>-axis.</li>
<li><em>transform</em>.k - the scale factor <em>k</em>.</li>
</ul>
<p>These properties should be considered read-only; instead of mutating a transform, use <a href="#transform_scale"><em>transform</em>.scale</a> and <a href="#transform_translate"><em>transform</em>.translate</a> to derive a new transform. Also see <a href="#zoom_scaleBy"><em>zoom</em>.scaleBy</a>, <a href="#zoom_scaleTo"><em>zoom</em>.scaleTo</a> and <a href="#zoom_translateBy"><em>zoom</em>.translateBy</a> for convenience methods on the zoom behavior. To create a transform with a given <em>k</em>, <em>t<sub>x</sub></em>, and <em>t<sub>y</sub></em>:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">var</span> t <span class="pl-k">=</span> <span class="pl-smi">d3</span>.<span class="pl-smi">zoomIdentity</span>.<span class="pl-en">translate</span>(x, y).<span class="pl-en">scale</span>(k);</pre></div>
<p>To apply the transformation to a <a href="https://www.w3.org/TR/2dcontext/">Canvas 2D context</a>, use <a href="https://www.w3.org/TR/2dcontext/#dom-context-2d-translate"><em>context</em>.translate</a> followed by <a href="https://www.w3.org/TR/2dcontext/#dom-context-2d-scale"><em>context</em>.scale</a>:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-smi">context</span>.<span class="pl-en">translate</span>(<span class="pl-smi">transform</span>.<span class="pl-c1">x</span>, <span class="pl-smi">transform</span>.<span class="pl-c1">y</span>);
<span class="pl-smi">context</span>.<span class="pl-en">scale</span>(<span class="pl-smi">transform</span>.<span class="pl-smi">k</span>, <span class="pl-smi">transform</span>.<span class="pl-smi">k</span>);</pre></div>
<p>Similarly, to apply the transformation to HTML elements via <a href="https://www.w3.org/TR/css-transforms-1/">CSS</a>:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-smi">div</span>.<span class="pl-c1">style</span>(<span class="pl-s"><span class="pl-pds">"</span>transform<span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>translate(<span class="pl-pds">"</span></span> <span class="pl-k">+</span> <span class="pl-smi">transform</span>.<span class="pl-c1">x</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">"</span>px,<span class="pl-pds">"</span></span> <span class="pl-k">+</span> <span class="pl-smi">transform</span>.<span class="pl-c1">y</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">"</span>px) scale(<span class="pl-pds">"</span></span> <span class="pl-k">+</span> <span class="pl-smi">transform</span>.<span class="pl-smi">k</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">"</span>)<span class="pl-pds">"</span></span>);
<span class="pl-smi">div</span>.<span class="pl-c1">style</span>(<span class="pl-s"><span class="pl-pds">"</span>transform-origin<span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>0 0<span class="pl-pds">"</span></span>);</pre></div>
<p>To apply the transformation to <a href="https://www.w3.org/TR/SVG/coords.html#TransformAttribute">SVG</a>:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-smi">g</span>.<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">"</span>transform<span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>translate(<span class="pl-pds">"</span></span> <span class="pl-k">+</span> <span class="pl-smi">transform</span>.<span class="pl-c1">x</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">"</span>,<span class="pl-pds">"</span></span> <span class="pl-k">+</span> <span class="pl-smi">transform</span>.<span class="pl-c1">y</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">"</span>) scale(<span class="pl-pds">"</span></span> <span class="pl-k">+</span> <span class="pl-smi">transform</span>.<span class="pl-smi">k</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">"</span>)<span class="pl-pds">"</span></span>);</pre></div>
<p>Or more simply, taking advantage of <a href="#transform_toString"><em>transform</em>.toString</a>:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-smi">g</span>.<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">"</span>transform<span class="pl-pds">"</span></span>, transform);</pre></div>
<p>Note that the order of transformations matters! The translate must be applied before the scale.</p>
<p><a href="#transform_scale" name="user-content-transform_scale">#</a> <i>transform</i>.<b>scale</b>(<i>k</i>) <a href="https://github.com/d3/d3-zoom/blob/master/src/transform.js#L9" title="Source">&lt;&gt;</a></p>
<p>Returns a transform whose scale <em>k₁</em> is equal to <em>k₀k</em>, where <em>k₀</em> is this transform’s scale.</p>
<p><a href="#transform_translate" name="user-content-transform_translate">#</a> <i>transform</i>.<b>translate</b>(<i>x</i>, <i>y</i>) <a href="https://github.com/d3/d3-zoom/blob/master/src/transform.js#L12" title="Source">&lt;&gt;</a></p>
<p>Returns a transform whose translation <em>t<sub>x1</sub></em> and <em>t<sub>y1</sub></em> is equal to <em>t<sub>x0</sub></em> + <em>x</em> and <em>t<sub>y0</sub></em> + <em>y</em>, where <em>t<sub>x0</sub></em> and <em>t<sub>y0</sub></em> is this transform’s translation.</p>
<p><a href="#transform_apply" name="user-content-transform_apply">#</a> <i>transform</i>.<b>apply</b>(<i>point</i>) <a href="https://github.com/d3/d3-zoom/blob/master/src/transform.js#L15" title="Source">&lt;&gt;</a></p>
<p>Returns the transformation of the specified <em>point</em> which is a two-element array of numbers [<em>x</em>, <em>y</em>]. The returned point is equal to [<em>xk</em> + <em>t<sub>x</sub></em>, <em>yk</em> + <em>t<sub>y</sub></em>].</p>
<p><a href="#transform_applyX" name="user-content-transform_applyX">#</a> <i>transform</i>.<b>applyX</b>(<i>x</i>) <a href="https://github.com/d3/d3-zoom/blob/master/src/transform.js#L18" title="Source">&lt;&gt;</a></p>
<p>Returns the transformation of the specified <em>x</em>-coordinate, <em>xk</em> + <em>t<sub>x</sub></em>.</p>
<p><a href="#transform_applyY" name="user-content-transform_applyY">#</a> <i>transform</i>.<b>applyY</b>(<i>y</i>) <a href="https://github.com/d3/d3-zoom/blob/master/src/transform.js#L21" title="Source">&lt;&gt;</a></p>
<p>Returns the transformation of the specified <em>y</em>-coordinate, <em>yk</em> + <em>t<sub>y</sub></em>.</p>
<p><a href="#transform_invert" name="user-content-transform_invert">#</a> <i>transform</i>.<b>invert</b>(<i>point</i>) <a href="https://github.com/d3/d3-zoom/blob/master/src/transform.js#L24" title="Source">&lt;&gt;</a></p>
<p>Returns the inverse transformation of the specified <em>point</em> which is a two-element array of numbers [<em>x</em>, <em>y</em>]. The returned point is equal to [(<em>x</em> - <em>t<sub>x</sub></em>) / <em>k</em>, (<em>y</em> - <em>t<sub>y</sub></em>) / <em>k</em>].</p>
<p><a href="#transform_invertX" name="user-content-transform_invertX">#</a> <i>transform</i>.<b>invertX</b>(<i>x</i>) <a href="https://github.com/d3/d3-zoom/blob/master/src/transform.js#L27" title="Source">&lt;&gt;</a></p>
<p>Returns the inverse transformation of the specified <em>x</em>-coordinate, (<em>x</em> - <em>t<sub>x</sub></em>) / <em>k</em>.</p>
<p><a href="#transform_invertY" name="user-content-transform_invertY">#</a> <i>transform</i>.<b>invertY</b>(<i>y</i>) <a href="https://github.com/d3/d3-zoom/blob/master/src/transform.js#L30" title="Source">&lt;&gt;</a></p>
<p>Returns the inverse transformation of the specified <em>y</em>-coordinate, (<em>y</em> - <em>t<sub>y</sub></em>) / <em>k</em>.</p>
<p><a href="#transform_rescaleX" name="user-content-transform_rescaleX">#</a> <i>transform</i>.<b>rescaleX</b>(<i>x</i>) <a href="https://github.com/d3/d3-zoom/blob/master/src/transform.js#L33" title="Source">&lt;&gt;</a></p>
<p>Returns a <a href="https://github.com/d3/d3-scale#continuous_copy">copy</a> of the <a href="https://github.com/d3/d3-scale#continuous-scales">continuous scale</a> <em>x</em> whose <a href="https://github.com/d3/d3-scale#continuous_domain">domain</a> is transformed. This is implemented by first applying the <a href="#transform_invertX">inverse <em>x</em>-transform</a> on the scale’s <a href="https://github.com/d3/d3-scale#continuous_range">range</a>, and then applying the <a href="https://github.com/d3/d3-scale#continuous_invert">inverse scale</a> to compute the corresponding domain:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">function</span> <span class="pl-en">rescaleX</span>(<span class="pl-smi">x</span>) {
  <span class="pl-k">var</span> range <span class="pl-k">=</span> <span class="pl-smi">x</span>.<span class="pl-en">range</span>().<span class="pl-en">map</span>(<span class="pl-smi">transform</span>.<span class="pl-smi">invertX</span>, transform),
      domain <span class="pl-k">=</span> <span class="pl-smi">range</span>.<span class="pl-en">map</span>(<span class="pl-smi">x</span>.<span class="pl-smi">invert</span>, x);
  <span class="pl-k">return</span> <span class="pl-smi">x</span>.<span class="pl-en">copy</span>().<span class="pl-en">domain</span>(domain);
}</pre></div>
<p>The scale <em>x</em> must use <a href="https://github.com/d3/d3-interpolate#interpolateNumber">d3.interpolateNumber</a>; do not use <a href="https://github.com/d3/d3-scale#continuous_rangeRound"><em>continuous</em>.rangeRound</a> as this reduces the accuracy of <a href="https://github.com/d3/d3-scale#continuous_invert"><em>continuous</em>.invert</a> and can lead to an inaccurate rescaled domain. This method does not modify the input scale <em>x</em>; <em>x</em> thus represents the untransformed scale, while the returned scale represents its transformed view.</p>
<p><a href="#transform_rescaleY" name="user-content-transform_rescaleY">#</a> <i>transform</i>.<b>rescaleY</b>(<i>y</i>) <a href="https://github.com/d3/d3-zoom/blob/master/src/transform.js#L36" title="Source">&lt;&gt;</a></p>
<p>Returns a <a href="https://github.com/d3/d3-scale#continuous_copy">copy</a> of the <a href="https://github.com/d3/d3-scale#continuous-scales">continuous scale</a> <em>y</em> whose <a href="https://github.com/d3/d3-scale#continuous_domain">domain</a> is transformed. This is implemented by first applying the <a href="#transform_invertY">inverse <em>y</em>-transform</a> on the scale’s <a href="https://github.com/d3/d3-scale#continuous_range">range</a>, and then applying the <a href="https://github.com/d3/d3-scale#continuous_invert">inverse scale</a> to compute the corresponding domain:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">function</span> <span class="pl-en">rescaleY</span>(<span class="pl-smi">y</span>) {
  <span class="pl-k">var</span> range <span class="pl-k">=</span> <span class="pl-smi">y</span>.<span class="pl-en">range</span>().<span class="pl-en">map</span>(<span class="pl-smi">transform</span>.<span class="pl-smi">invertY</span>, transform),
      domain <span class="pl-k">=</span> <span class="pl-smi">range</span>.<span class="pl-en">map</span>(<span class="pl-smi">y</span>.<span class="pl-smi">invert</span>, y);
  <span class="pl-k">return</span> <span class="pl-smi">y</span>.<span class="pl-en">copy</span>().<span class="pl-en">domain</span>(domain);
}</pre></div>
<p>The scale <em>y</em> must use <a href="https://github.com/d3/d3-interpolate#interpolateNumber">d3.interpolateNumber</a>; do not use <a href="https://github.com/d3/d3-scale#continuous_rangeRound"><em>continuous</em>.rangeRound</a> as this reduces the accuracy of <a href="https://github.com/d3/d3-scale#continuous_invert"><em>continuous</em>.invert</a> and can lead to an inaccurate rescaled domain. This method does not modify the input scale <em>y</em>; <em>y</em> thus represents the untransformed scale, while the returned scale represents its transformed view.</p>
<p><a href="#transform_toString" name="user-content-transform_toString">#</a> <i>transform</i>.<b>toString</b>() <a href="https://github.com/d3/d3-zoom/blob/master/src/transform.js#L39" title="Source">&lt;&gt;</a></p>
<p>Returns a string representing the <a href="https://www.w3.org/TR/SVG/coords.html#TransformAttribute">SVG transform</a> corresponding to this transform. Implemented as:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">function</span> <span class="pl-en">toString</span>() {
  <span class="pl-k">return</span> <span class="pl-s"><span class="pl-pds">"</span>translate(<span class="pl-pds">"</span></span> <span class="pl-k">+</span> <span class="pl-c1">this</span>.<span class="pl-c1">x</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">"</span>,<span class="pl-pds">"</span></span> <span class="pl-k">+</span> <span class="pl-c1">this</span>.<span class="pl-c1">y</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">"</span>) scale(<span class="pl-pds">"</span></span> <span class="pl-k">+</span> <span class="pl-c1">this</span>.<span class="pl-smi">k</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">"</span>)<span class="pl-pds">"</span></span>;
}</pre></div>
<p><a href="#zoomIdentity" name="user-content-zoomIdentity">#</a> d3.<b>zoomIdentity</b> <a href="https://github.com/d3/d3-zoom/blob/master/src/transform.js#L44" title="Source">&lt;&gt;</a></p>
<p>The identity transform, where <em>k</em> = 1, <em>t<sub>x</sub></em> = <em>t<sub>y</sub></em> = 0.</p>
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
      <li class="mr-3">&copy; 2018 <span title="0.22540s from unicorn-2657157768-6pt21">GitHub</span>, Inc.</li>
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


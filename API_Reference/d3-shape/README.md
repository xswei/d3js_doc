





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
  
  <title>d3-shape/README.md at master · d3/d3-shape</title>
  <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
  <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
  <meta property="fb:app_id" content="1401488693436528">

    
    <meta content="https://avatars3.githubusercontent.com/u/1562726?s=400&amp;v=4" property="og:image" /><meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="d3/d3-shape" property="og:title" /><meta content="https://github.com/d3/d3-shape" property="og:url" /><meta content="d3-shape - Graphical primitives for visualization, such as lines and areas." property="og:description" />

  <link rel="assets" href="https://assets-cdn.github.com/">
  <link rel="web-socket" href="wss://live.github.com/_sockets/VjI6MjM0MjAxNjIzOjg2ZTE4YjdkMWI4ZGU5YjExM2ZjZDZkNWIzNmY4MTAxYTk0MjVhZDQyMzIwODMwN2RlZGNiYjRiZjM1ZmY3MzQ=--f14ad5320702558a7d359d5645420da08a6096f8">
  <meta name="pjax-timeout" content="1000">
  <link rel="sudo-modal" href="/sessions/sudo_modal">
  <meta name="request-id" content="FC26:1FA0E:11A5D65:199E590:5A603EE2" data-pjax-transient>
  

  <meta name="selected-link" value="repo_source" data-pjax-transient>

    <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
  <meta name="google-site-verification" content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA">
  <meta name="google-site-verification" content="GXs5KoUUkNCoaAZn7wPN-t01Pywp9M3sEjnt_3_ZWPc">
    <meta name="google-analytics" content="UA-3769691-2">

<meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="https://collector.githubapp.com/github-external/browser_event" name="octolytics-event-url" /><meta content="FC26:1FA0E:11A5D65:199E590:5A603EE2" name="octolytics-dimension-request_id" /><meta content="sea" name="octolytics-dimension-region_edge" /><meta content="iad" name="octolytics-dimension-region_render" /><meta content="16659379" name="octolytics-actor-id" /><meta content="xswei" name="octolytics-actor-login" /><meta content="72a8b786cd27412ba348c71058cf2aed3e8f8772266e5c157980395250fb923d" name="octolytics-actor-hash" />
<meta content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-pjax-transient="true" name="analytics-location" />




  <meta class="js-ga-set" name="dimension1" content="Logged In">


  

      <meta name="hostname" content="github.com">
  <meta name="user-login" content="xswei">

      <meta name="expected-hostname" content="github.com">
    <meta name="js-proxy-site-detection-payload" content="OGExZmI5OWViZWQyMGRmNzNlYmE5YThiZjRjNzAzYTNkMGUwMWRlYTcwNzc0YjE1NGFhMWFmYzhmMmI5OGRiY3x7InJlbW90ZV9hZGRyZXNzIjoiMjIwLjE4MS4xNzEuMTI1IiwicmVxdWVzdF9pZCI6IkZDMjY6MUZBMEU6MTFBNUQ2NToxOTlFNTkwOjVBNjAzRUUyIiwidGltZXN0YW1wIjoxNTE2MjU2OTk2LCJob3N0IjoiZ2l0aHViLmNvbSJ9">

    <meta name="enabled-features" content="UNIVERSE_BANNER,FREE_TRIALS">

  <meta name="html-safe-nonce" content="95ac36701972faaa3306c820d3f61fe703aeac54">

  <meta http-equiv="x-pjax-version" content="c0275ff3857f879afa7c0ef3fbc951b4">
  

      <link href="https://github.com/d3/d3-shape/commits/master.atom" rel="alternate" title="Recent Commits to d3-shape:master" type="application/atom+xml">

  <meta name="description" content="d3-shape - Graphical primitives for visualization, such as lines and areas.">
  <meta name="go-import" content="github.com/d3/d3-shape git https://github.com/d3/d3-shape.git">

  <meta content="1562726" name="octolytics-dimension-user_id" /><meta content="d3" name="octolytics-dimension-user_login" /><meta content="38640773" name="octolytics-dimension-repository_id" /><meta content="d3/d3-shape" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="38640773" name="octolytics-dimension-repository_network_root_id" /><meta content="d3/d3-shape" name="octolytics-dimension-repository_network_root_nwo" /><meta content="false" name="octolytics-dimension-repository_explore_github_marketplace_ci_cta_shown" />


    <link rel="canonical" href="https://github.com/d3/d3-shape/blob/master/README.md" data-pjax-transient>


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
  <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/d3/d3-shape/search" class="js-site-search-form" data-scoped-search-url="/d3/d3-shape/search" data-unscoped-search-url="/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <label class="form-control header-search-wrapper js-chromeless-input-container">
        <a href="/d3/d3-shape/blob/master/README.md" class="header-search-scope no-underline">This repository</a>
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
    <span title="d3/d3-shape">This repository</span>
  </div>
    <a class="dropdown-item" href="/d3/d3-shape/issues/new" data-ga-click="Header, create new issue">
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

        <li><!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/logout" class="logout-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="xr+nZp7W46oK4gTK1Z0gps2BW0AfWKyNAZcnrlBpFYlY2SMT1dFXJnGy1koiDlgWjs2mFUegWkWz4xgMEcEU9w==" /></div>
          <button type="submit" class="dropdown-item dropdown-signout" data-ga-click="Header, sign out, icon:logout">
            Sign out
          </button>
        </form></li>
      </ul>
    </details>
  </li>
</ul>


        <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/logout" class="sr-only right-0" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="fy4XqYz6h2BsQXkNTZJyAJxYj8UYUAIDc+Wdd0ZRKs3hSJPcx/0z7BcRq426AQqw3xRykECo9MvBkaLVB/krsw==" /></div>
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
        <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="h75giWzPhgEvWuFbq7ygW0psfF7nJcpppWZwwPw9gknqVyOZiw40RxSFZ9HxhjYgyPdReLnY9FuHnU6Tl2COBg==" /></div>      <input class="form-control" id="repository_id" name="repository_id" type="hidden" value="38640773" />

        <div class="select-menu js-menu-container js-select-menu">
          <a href="/d3/d3-shape/subscription"
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
            href="/d3/d3-shape/watchers"
            aria-label="54 users are watching this repository">
            54
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
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/d3/d3-shape/unstar" class="starred js-social-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="jAb3zTMH0rvmh+7Lwv8HcA2c8XVimsnYg2PJ1BD4mZuGe3A5MFZk0uVUWve+jWER/hbIKOEH82NOncuEiEjZDw==" /></div>
      <input type="hidden" name="context" value="repository"></input>
      <button
        type="submit"
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Unstar this repository" title="Unstar d3/d3-shape"
        data-ga-click="Repository, click unstar button, action:blob#show; text:Unstar">
        <svg aria-hidden="true" class="octicon octicon-star" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"/></svg>
        Unstar
      </button>
        <a class="social-count js-social-count" href="/d3/d3-shape/stargazers"
           aria-label="1528 users starred this repository">
          1,528
        </a>
</form>
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/d3/d3-shape/star" class="unstarred js-social-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="jMGcNBQWnNSY3tle/5zoiWTwh+GV/uUF03gCUYU4H8Cjrl/icPqhyFCVxYxYpx1oYurXp6E9AbcCgPPCBniBYg==" /></div>
      <input type="hidden" name="context" value="repository"></input>
      <button
        type="submit"
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Star this repository" title="Star d3/d3-shape"
        data-ga-click="Repository, click star button, action:blob#show; text:Star">
        <svg aria-hidden="true" class="octicon octicon-star" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"/></svg>
        Star
      </button>
        <a class="social-count js-social-count" href="/d3/d3-shape/stargazers"
           aria-label="1528 users starred this repository">
          1,528
        </a>
</form>  </div>

  </li>

  <li>
          <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/d3/d3-shape/fork" class="btn-with-count" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="YEyoFGq4tP1dZr9tfVSIN4RnOPFIHJVyAgsQre/1VRH/u+qQTE7UGAvCmQYQmWcFAXiDPqJlSKYyPrTDfnAhfw==" /></div>
            <button
                type="submit"
                class="btn btn-sm btn-with-count"
                data-ga-click="Repository, show fork modal, action:blob#show; text:Fork"
                title="Fork your own copy of d3/d3-shape to your account"
                aria-label="Fork your own copy of d3/d3-shape to your account">
              <svg aria-hidden="true" class="octicon octicon-repo-forked" height="16" version="1.1" viewBox="0 0 10 16" width="10"><path fill-rule="evenodd" d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
              Fork
            </button>
</form>
    <a href="/d3/d3-shape/network" class="social-count"
       aria-label="148 users forked this repository">
      148
    </a>
  </li>
</ul>

      <h1 class="public ">
  <svg aria-hidden="true" class="octicon octicon-repo" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
  <span class="author" itemprop="author"><a href="/d3" class="url fn" rel="author">d3</a></span><!--
--><span class="path-divider">/</span><!--
--><strong itemprop="name"><a href="/d3/d3-shape" data-pjax="#js-repo-pjax-container">d3-shape</a></strong>

</h1>

    </div>
    
<nav class="reponav js-repo-nav js-sidenav-container-pjax container"
     itemscope
     itemtype="http://schema.org/BreadcrumbList"
     role="navigation"
     data-pjax="#js-repo-pjax-container">

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/d3/d3-shape" class="js-selected-navigation-item selected reponav-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches repo_packages /d3/d3-shape" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-code" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z"/></svg>
      <span itemprop="name">Code</span>
      <meta itemprop="position" content="1">
</a>  </span>

    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a href="/d3/d3-shape/issues" class="js-selected-navigation-item reponav-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /d3/d3-shape/issues" itemprop="url">
        <svg aria-hidden="true" class="octicon octicon-issue-opened" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"/></svg>
        <span itemprop="name">Issues</span>
        <span class="Counter">7</span>
        <meta itemprop="position" content="2">
</a>    </span>

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/d3/d3-shape/pulls" class="js-selected-navigation-item reponav-item" data-hotkey="g p" data-selected-links="repo_pulls /d3/d3-shape/pulls" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-git-pull-request" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M11 11.28V5c-.03-.78-.34-1.47-.94-2.06C9.46 2.35 8.78 2.03 8 2H7V0L4 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0 0 10 15a1.993 1.993 0 0 0 1-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zM4 3c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v6.56A1.993 1.993 0 0 0 2 15a1.993 1.993 0 0 0 1-3.72V4.72c.59-.34 1-.98 1-1.72zm-.8 10c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
      <span itemprop="name">Pull requests</span>
      <span class="Counter">2</span>
      <meta itemprop="position" content="3">
</a>  </span>




  <a href="/d3/d3-shape/pulse" class="js-selected-navigation-item reponav-item" data-selected-links="repo_graphs repo_contributors dependency_graph pulse /d3/d3-shape/pulse">
    <svg aria-hidden="true" class="octicon octicon-graph" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M16 14v1H0V0h1v14h15zM5 13H3V8h2v5zm4 0H7V3h2v10zm4 0h-2V6h2v7z"/></svg>
    Insights
</a>

</nav>


  </div>

<div class="container new-discussion-timeline experiment-repo-nav ">
  <div class="repository-content ">

    
  <a href="/d3/d3-shape/blob/acb6053eae36fe6dcdb0b62fe2691bee2acc511b/README.md" class="d-none js-permalink-shortcut" data-hotkey="y">Permalink</a>

  <!-- blob contrib key: blob_contributors:v21:1b949df0cf31d193a2f5ad1ae158a1fd -->

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
               href="/d3/d3-shape/blob/arealine/README.md"
               data-name="arealine"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                arealine
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/d3/d3-shape/blob/asymmetric-pad-angle/README.md"
               data-name="asymmetric-pad-angle"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                asymmetric-pad-angle
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/d3/d3-shape/blob/master/README.md"
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
              href="/d3/d3-shape/tree/v1.2.0/README.md"
              data-name="v1.2.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.2.0">
                v1.2.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-shape/tree/v1.1.1/README.md"
              data-name="v1.1.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.1.1">
                v1.1.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-shape/tree/v1.1.0/README.md"
              data-name="v1.1.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.1.0">
                v1.1.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-shape/tree/v1.0.6/README.md"
              data-name="v1.0.6"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.6">
                v1.0.6
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-shape/tree/v1.0.5/README.md"
              data-name="v1.0.5"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.5">
                v1.0.5
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-shape/tree/v1.0.4/README.md"
              data-name="v1.0.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.4">
                v1.0.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-shape/tree/v1.0.3/README.md"
              data-name="v1.0.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.3">
                v1.0.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-shape/tree/v1.0.2/README.md"
              data-name="v1.0.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.2">
                v1.0.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-shape/tree/v1.0.1/README.md"
              data-name="v1.0.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.1">
                v1.0.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-shape/tree/v1.0.0/README.md"
              data-name="v1.0.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.0">
                v1.0.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-shape/tree/v0.7.1/README.md"
              data-name="v0.7.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.7.1">
                v0.7.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-shape/tree/v0.7.0/README.md"
              data-name="v0.7.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.7.0">
                v0.7.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-shape/tree/v0.6.1/README.md"
              data-name="v0.6.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.6.1">
                v0.6.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-shape/tree/v0.6.0/README.md"
              data-name="v0.6.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.6.0">
                v0.6.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-shape/tree/v0.5.1/README.md"
              data-name="v0.5.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.5.1">
                v0.5.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-shape/tree/v0.5.0/README.md"
              data-name="v0.5.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.5.0">
                v0.5.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-shape/tree/v0.4.0/README.md"
              data-name="v0.4.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.4.0">
                v0.4.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-shape/tree/v0.3.0/README.md"
              data-name="v0.3.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.3.0">
                v0.3.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-shape/tree/v0.2.2/README.md"
              data-name="v0.2.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.2.2">
                v0.2.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-shape/tree/v0.2.1/README.md"
              data-name="v0.2.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.2.1">
                v0.2.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-shape/tree/v0.2.0/README.md"
              data-name="v0.2.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.2.0">
                v0.2.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-shape/tree/v0.1.0/README.md"
              data-name="v0.1.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.1.0">
                v0.1.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-shape/tree/v0.0.3/README.md"
              data-name="v0.0.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.0.3">
                v0.0.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-shape/tree/v0.0.2/README.md"
              data-name="v0.0.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.0.2">
                v0.0.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-shape/tree/v0.0.1/README.md"
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
      <a href="/d3/d3-shape/find/master"
            class="js-pjax-capture-input btn btn-sm BtnGroup-item"
            data-pjax
            data-hotkey="t">
        Find file
      </a>
      <button aria-label="Copy file path to clipboard" class="js-zeroclipboard btn btn-sm BtnGroup-item tooltipped tooltipped-s" data-copied-hint="Copied!" type="button">Copy path</button>
    </div>
    <div class="breadcrumb js-zeroclipboard-target">
      <span class="repo-root js-repo-root"><span class="js-path-segment"><a href="/d3/d3-shape"><span>d3-shape</span></a></span></span><span class="separator">/</span><strong class="final-path">README.md</strong>
    </div>
  </div>


  
  <div class="commit-tease">
      <span class="float-right">
        <a class="commit-tease-sha" href="/d3/d3-shape/commit/af4384e54452e7604ecbe188ae3b12b5882923c4" data-pjax>
          af4384e
        </a>
        <relative-time datetime="2017-05-16T15:04:36Z">May 16, 2017</relative-time>
      </span>
      <div>
        <img alt="@mbostock" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/230541?s=40&amp;v=4" width="20" />
        <a href="/mbostock" class="user-mention" rel="contributor">mbostock</a>
          <a href="/d3/d3-shape/commit/af4384e54452e7604ecbe188ae3b12b5882923c4" class="message" data-pjax="true" title="Add d3.pointRadial.

Rename d3.radialArea to d3.areaRadial.
Rename d3.radialLine to d3.lineRadial.
Fixes #104.">Add d3.pointRadial.</a>
      </div>

    <div class="commit-tease-contributors">
      <button type="button" class="btn-link muted-link contributors-toggle" data-facebox="#blob_contributors_box">
        <strong>8</strong>
         contributors
      </button>
          <a class="avatar-link tooltipped tooltipped-s" aria-label="mbostock" href="/d3/d3-shape/commits/master/README.md?author=mbostock"><img alt="@mbostock" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/230541?s=40&amp;v=4" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="anderspitman" href="/d3/d3-shape/commits/master/README.md?author=anderspitman"><img alt="@anderspitman" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/7820200?s=40&amp;v=4" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="Devinsuit" href="/d3/d3-shape/commits/master/README.md?author=Devinsuit"><img alt="@Devinsuit" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/11741306?s=40&amp;v=4" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="likev" href="/d3/d3-shape/commits/master/README.md?author=likev"><img alt="@likev" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/3146974?s=40&amp;v=4" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="dechov" href="/d3/d3-shape/commits/master/README.md?author=dechov"><img alt="@dechov" class="avatar" height="20" src="https://avatars3.githubusercontent.com/u/1867547?s=40&amp;v=4" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="davidwatkins73" href="/d3/d3-shape/commits/master/README.md?author=davidwatkins73"><img alt="@davidwatkins73" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/576829?s=40&amp;v=4" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="pzl" href="/d3/d3-shape/commits/master/README.md?author=pzl"><img alt="@pzl" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/315796?s=40&amp;v=4" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="ColinEberhardt" href="/d3/d3-shape/commits/master/README.md?author=ColinEberhardt"><img alt="@ColinEberhardt" class="avatar" height="20" src="https://avatars3.githubusercontent.com/u/1098110?s=40&amp;v=4" width="20" /> </a>


    </div>

    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header" data-facebox-id="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list" data-facebox-id="facebox-description">
          <li class="facebox-user-list-item">
            <img alt="@mbostock" height="24" src="https://avatars0.githubusercontent.com/u/230541?s=48&amp;v=4" width="24" />
            <a href="/mbostock">mbostock</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@anderspitman" height="24" src="https://avatars1.githubusercontent.com/u/7820200?s=48&amp;v=4" width="24" />
            <a href="/anderspitman">anderspitman</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@Devinsuit" height="24" src="https://avatars1.githubusercontent.com/u/11741306?s=48&amp;v=4" width="24" />
            <a href="/Devinsuit">Devinsuit</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@likev" height="24" src="https://avatars1.githubusercontent.com/u/3146974?s=48&amp;v=4" width="24" />
            <a href="/likev">likev</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@dechov" height="24" src="https://avatars2.githubusercontent.com/u/1867547?s=48&amp;v=4" width="24" />
            <a href="/dechov">dechov</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@davidwatkins73" height="24" src="https://avatars1.githubusercontent.com/u/576829?s=48&amp;v=4" width="24" />
            <a href="/davidwatkins73">davidwatkins73</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@pzl" height="24" src="https://avatars3.githubusercontent.com/u/315796?s=48&amp;v=4" width="24" />
            <a href="/pzl">pzl</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@ColinEberhardt" height="24" src="https://avatars2.githubusercontent.com/u/1098110?s=48&amp;v=4" width="24" />
            <a href="/ColinEberhardt">ColinEberhardt</a>
          </li>
      </ul>
    </div>
  </div>


  <div class="file">
    <div class="file-header">
  <div class="file-actions">

    <div class="BtnGroup">
      <a href="/d3/d3-shape/raw/master/README.md" class="btn btn-sm BtnGroup-item" id="raw-url">Raw</a>
        <a href="/d3/d3-shape/blame/master/README.md" class="btn btn-sm js-update-url-with-hash BtnGroup-item" data-hotkey="b">Blame</a>
      <a href="/d3/d3-shape/commits/master/README.md" class="btn btn-sm BtnGroup-item" rel="nofollow">History</a>
    </div>

        <a class="btn-octicon tooltipped tooltipped-nw"
           href="github-windows://openRepo/https://github.com/d3/d3-shape?branch=master&amp;filepath=README.md"
           aria-label="Open this file in GitHub Desktop"
           data-ga-click="Repository, open with desktop, type:windows">
            <svg aria-hidden="true" class="octicon octicon-device-desktop" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M15 2H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5.34c-.25.61-.86 1.39-2.34 2h8c-1.48-.61-2.09-1.39-2.34-2H15c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 9H1V3h14v8z"/></svg>
        </a>

          <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/d3/d3-shape/edit/master/README.md" class="inline-form js-update-url-with-hash" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="4iW2HoAqW2XU85pqN61x9pvIqnhfJhhinwXCv3pnyYT8p2hApIOLswVfwMl9dSB42+lrCEPzVqhu9mtfD4zX3g==" /></div>
            <button class="btn-octicon tooltipped tooltipped-nw" type="submit"
              aria-label="Edit the file in your fork of this project" data-hotkey="e" data-disable-with>
              <svg aria-hidden="true" class="octicon octicon-pencil" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z"/></svg>
            </button>
</form>
        <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/d3/d3-shape/delete/master/README.md" class="inline-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="vfJDyFFLnulDKF/Mfie48vLTkTdi1tO5VOLece4WCQKIsrSNxscLYrTd03DRsZuDvOX8rCZtN0VVwfPUHTgObA==" /></div>
          <button class="btn-octicon btn-octicon-danger tooltipped tooltipped-nw" type="submit"
            aria-label="Delete the file in your fork of this project" data-disable-with>
            <svg aria-hidden="true" class="octicon octicon-trashcan" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M11 2H9c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1H2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1v9c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V5c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 12H3V5h1v8h1V5h1v8h1V5h1v8h1V5h1v9zm1-10H2V3h9v1z"/></svg>
          </button>
</form>  </div>

  <div class="file-info">
      1147 lines (706 sloc)
      <span class="file-info-divider"></span>
    87.9 KB
  </div>
</div>

    
  <div id="readme" class="readme blob instapaper_body">
    <article class="markdown-body entry-content" itemprop="text"><h1><a href="#d3-shape" aria-hidden="true" class="anchor" id="user-content-d3-shape"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>d3-shape</h1>
<p>Visualizations typically consist of discrete graphical marks, such as <a href="#symbols">symbols</a>, <a href="#arcs">arcs</a>, <a href="#lines">lines</a> and <a href="#areas">areas</a>. While the rectangles of a bar chart may be easy enough to generate directly using <a href="http://www.w3.org/TR/SVG/paths.html#PathData">SVG</a> or <a href="http://www.w3.org/TR/2dcontext/#canvaspathmethods">Canvas</a>, other shapes are complex, such as rounded annular sectors and centripetal Catmull–Rom splines. This module provides a variety of shape generators for your convenience.</p>
<p>As with other aspects of D3, these shapes are driven by data: each shape generator exposes accessors that control how the input data are mapped to a visual representation. For example, you might define a line generator for a time series by <a href="https://github.com/d3/d3-scale">scaling</a> fields of your data to fit the chart:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">var</span> line <span class="pl-k">=</span> <span class="pl-smi">d3</span>.<span class="pl-en">line</span>()
    .<span class="pl-c1">x</span>(<span class="pl-k">function</span>(<span class="pl-smi">d</span>) { <span class="pl-k">return</span> <span class="pl-en">x</span>(<span class="pl-smi">d</span>.<span class="pl-smi">date</span>); })
    .<span class="pl-c1">y</span>(<span class="pl-k">function</span>(<span class="pl-smi">d</span>) { <span class="pl-k">return</span> <span class="pl-en">y</span>(<span class="pl-smi">d</span>.<span class="pl-c1">value</span>); });</pre></div>
<p>This line generator can then be used to compute the <code>d</code> attribute of an SVG path element:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-smi">path</span>.<span class="pl-en">datum</span>(data).<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">"</span>d<span class="pl-pds">"</span></span>, line);</pre></div>
<p>Or you can use it to render to a Canvas 2D context:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-smi">line</span>.<span class="pl-en">context</span>(context)(data);</pre></div>
<p>For more, read <a href="https://medium.com/@mbostock/introducing-d3-shape-73f8367e6d12">Introducing d3-shape</a>.</p>
<h2><a href="#installing" aria-hidden="true" class="anchor" id="user-content-installing"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installing</h2>
<p>If you use NPM, <code>npm install d3-shape</code>. Otherwise, download the <a href="https://github.com/d3/d3-shape/releases/latest">latest release</a>. You can also load directly from <a href="https://d3js.org">d3js.org</a>, either as a <a href="https://d3js.org/d3-shape.v1.min.js">standalone library</a> or as part of <a href="https://github.com/d3/d3">D3 4.0</a>. AMD, CommonJS, and vanilla environments are supported. In vanilla, a <code>d3</code> global is exported:</p>
<div class="highlight highlight-text-html-basic"><pre>&lt;<span class="pl-ent">script</span> <span class="pl-e">src</span>=<span class="pl-s"><span class="pl-pds">"</span>https://d3js.org/d3-path.v1.min.js<span class="pl-pds">"</span></span>&gt;&lt;/<span class="pl-ent">script</span>&gt;
&lt;<span class="pl-ent">script</span> <span class="pl-e">src</span>=<span class="pl-s"><span class="pl-pds">"</span>https://d3js.org/d3-shape.v1.min.js<span class="pl-pds">"</span></span>&gt;&lt;/<span class="pl-ent">script</span>&gt;
&lt;<span class="pl-ent">script</span>&gt;<span class="pl-s1"></span>
<span class="pl-s1"></span>
<span class="pl-s1"><span class="pl-k">var</span> line <span class="pl-k">=</span> <span class="pl-smi">d3</span>.<span class="pl-en">line</span>();</span>
<span class="pl-s1"></span>
<span class="pl-s1"></span><span class="pl-s1">&lt;</span>/<span class="pl-ent">script</span>&gt;</pre></div>
<p><a href="https://tonicdev.com/npm/d3-shape">Try d3-shape in your browser.</a></p>
<h2><a href="#api-reference" aria-hidden="true" class="anchor" id="user-content-api-reference"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>API Reference</h2>
<ul>
<li><a href="#arcs">Arcs</a></li>
<li><a href="#pies">Pies</a></li>
<li><a href="#lines">Lines</a></li>
<li><a href="#areas">Areas</a></li>
<li><a href="#curves">Curves</a></li>
<li><a href="#custom-curves">Custom Curves</a></li>
<li><a href="#links">Links</a></li>
<li><a href="#symbols">Symbols</a></li>
<li><a href="#custom-symbol-types">Custom Symbol Types</a></li>
<li><a href="#stacks">Stacks</a></li>
</ul>
<h3><a href="#arcs" aria-hidden="true" class="anchor" id="user-content-arcs"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Arcs</h3>
<p><a href="http://bl.ocks.org/mbostock/8878e7fd82034f1d63cf"><img alt="Pie Chart" src="https://raw.githubusercontent.com/d3/d3-shape/master/img/pie.png" width="295" height="295" style="max-width:100%;"></a><a href="http://bl.ocks.org/mbostock/2394b23da1994fc202e1"><img alt="Donut Chart" src="https://raw.githubusercontent.com/d3/d3-shape/master/img/donut.png" width="295" height="295" style="max-width:100%;"></a></p>
<p>The arc generator produces a <a href="https://en.wikipedia.org/wiki/Circular_sector">circular</a> or <a href="https://en.wikipedia.org/wiki/Annulus_(mathematics)">annular</a> sector, as in a pie or donut chart. If the difference between the <a href="#arc_startAngle">start</a> and <a href="#arc_endAngle">end</a> angles (the <em>angular span</em>) is greater than <a href="https://en.wikipedia.org/wiki/Turn_(geometry)#Tau_proposal">τ</a>, the arc generator will produce a complete circle or annulus. If it is less than τ, arcs may have <a href="#arc_cornerRadius">rounded corners</a> and <a href="#arc_padAngle">angular padding</a>. Arcs are always centered at ⟨0,0⟩; use a transform (see: <a href="http://www.w3.org/TR/SVG/coords.html#TransformAttribute">SVG</a>, <a href="http://www.w3.org/TR/2dcontext/#transformations">Canvas</a>) to move the arc to a different position.</p>
<p>See also the <a href="#pies">pie generator</a>, which computes the necessary angles to represent an array of data as a pie or donut chart; these angles can then be passed to an arc generator.</p>
<p><a name="user-content-arc" href="#arc">#</a> d3.<b>arc</b>() <a href="https://github.com/d3/d3-shape/blob/master/src/arc.js" title="Source">&lt;&gt;</a></p>
<p>Constructs a new arc generator with the default settings.</p>
<p><a name="user-content-_arc" href="#_arc">#</a> <i>arc</i>(<i>arguments…</i>) <a href="https://github.com/d3/d3-shape/blob/master/src/arc.js#L89" title="Source">&lt;&gt;</a></p>
<p>Generates an arc for the given <em>arguments</em>. The <em>arguments</em> are arbitrary; they are simply propagated to the arc generator’s accessor functions along with the <code>this</code> object. For example, with the default settings, an object with radii and angles is expected:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">var</span> arc <span class="pl-k">=</span> <span class="pl-smi">d3</span>.<span class="pl-en">arc</span>();

<span class="pl-en">arc</span>({
  innerRadius<span class="pl-k">:</span> <span class="pl-c1">0</span>,
  outerRadius<span class="pl-k">:</span> <span class="pl-c1">100</span>,
  startAngle<span class="pl-k">:</span> <span class="pl-c1">0</span>,
  endAngle<span class="pl-k">:</span> <span class="pl-c1">Math</span>.<span class="pl-c1">PI</span> <span class="pl-k">/</span> <span class="pl-c1">2</span>
}); <span class="pl-c"><span class="pl-c">//</span> "M0,-100A100,100,0,0,1,100,0L0,0Z"</span></pre></div>
<p>If the radii and angles are instead defined as constants, you can generate an arc without any arguments:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">var</span> arc <span class="pl-k">=</span> <span class="pl-smi">d3</span>.<span class="pl-en">arc</span>()
    .<span class="pl-en">innerRadius</span>(<span class="pl-c1">0</span>)
    .<span class="pl-en">outerRadius</span>(<span class="pl-c1">100</span>)
    .<span class="pl-en">startAngle</span>(<span class="pl-c1">0</span>)
    .<span class="pl-en">endAngle</span>(<span class="pl-c1">Math</span>.<span class="pl-c1">PI</span> <span class="pl-k">/</span> <span class="pl-c1">2</span>);

<span class="pl-en">arc</span>(); <span class="pl-c"><span class="pl-c">//</span> "M0,-100A100,100,0,0,1,100,0L0,0Z"</span></pre></div>
<p>If the arc generator has a <a href="#arc_context">context</a>, then the arc is rendered to this context as a sequence of <a href="http://www.w3.org/TR/2dcontext/#canvaspathmethods">path method</a> calls and this function returns void. Otherwise, a <a href="http://www.w3.org/TR/SVG/paths.html#PathData">path data</a> string is returned.</p>
<p><a name="user-content-arc_centroid" href="#arc_centroid">#</a> <i>arc</i>.<b>centroid</b>(<i>arguments…</i>) <a href="https://github.com/d3/d3-shape/blob/master/src/arc.js#L224" title="Source">&lt;&gt;</a></p>
<p>Computes the midpoint [<em>x</em>, <em>y</em>] of the center line of the arc that would be <a href="#_arc">generated</a> by the given <em>arguments</em>. The <em>arguments</em> are arbitrary; they are simply propagated to the arc generator’s accessor functions along with the <code>this</code> object. To be consistent with the generated arc, the accessors must be deterministic, <em>i.e.</em>, return the same value given the same arguments. The midpoint is defined as (<a href="#arc_startAngle">startAngle</a> + <a href="#arc_endAngle">endAngle</a>) / 2 and (<a href="#arc_innerRadius">innerRadius</a> + <a href="#arc_outerRadius">outerRadius</a>) / 2. For example:</p>
<p><a href="http://bl.ocks.org/mbostock/9b5a2fd1ce1a146f27e4"><img alt="Circular Sector Centroids" src="https://raw.githubusercontent.com/d3/d3-shape/master/img/centroid-circular-sector.png" width="250" height="250" style="max-width:100%;"></a><a href="http://bl.ocks.org/mbostock/c274877f647361f3df7d"><img alt="Annular Sector Centroids" src="https://raw.githubusercontent.com/d3/d3-shape/master/img/centroid-annular-sector.png" width="250" height="250" style="max-width:100%;"></a></p>
<p>Note that this is <strong>not the geometric center</strong> of the arc, which may be outside the arc; this method is merely a convenience for positioning labels.</p>
<p><a name="user-content-arc_innerRadius" href="#arc_innerRadius">#</a> <i>arc</i>.<b>innerRadius</b>([<i>radius</i>]) <a href="https://github.com/d3/d3-shape/blob/master/src/arc.js#L230" title="Source">&lt;&gt;</a></p>
<p>If <em>radius</em> is specified, sets the inner radius to the specified function or number and returns this arc generator. If <em>radius</em> is not specified, returns the current inner radius accessor, which defaults to:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">function</span> <span class="pl-en">innerRadius</span>(<span class="pl-smi">d</span>) {
  <span class="pl-k">return</span> <span class="pl-smi">d</span>.<span class="pl-smi">innerRadius</span>;
}</pre></div>
<p>Specifying the inner radius as a function is useful for constructing a stacked polar bar chart, often in conjunction with a <a href="https://github.com/d3/d3-scale#sqrt">sqrt scale</a>. More commonly, a constant inner radius is used for a donut or pie chart. If the outer radius is smaller than the inner radius, the inner and outer radii are swapped. A negative value is treated as zero.</p>
<p><a name="user-content-arc_outerRadius" href="#arc_outerRadius">#</a> <i>arc</i>.<b>outerRadius</b>([<i>radius</i>]) <a href="https://github.com/d3/d3-shape/blob/master/src/arc.js#L234" title="Source">&lt;&gt;</a></p>
<p>If <em>radius</em> is specified, sets the outer radius to the specified function or number and returns this arc generator. If <em>radius</em> is not specified, returns the current outer radius accessor, which defaults to:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">function</span> <span class="pl-en">outerRadius</span>(<span class="pl-smi">d</span>) {
  <span class="pl-k">return</span> <span class="pl-smi">d</span>.<span class="pl-smi">outerRadius</span>;
}</pre></div>
<p>Specifying the outer radius as a function is useful for constructing a coxcomb or polar bar chart, often in conjunction with a <a href="https://github.com/d3/d3-scale#sqrt">sqrt scale</a>. More commonly, a constant outer radius is used for a pie or donut chart. If the outer radius is smaller than the inner radius, the inner and outer radii are swapped. A negative value is treated as zero.</p>
<p><a name="user-content-arc_cornerRadius" href="#arc_cornerRadius">#</a> <i>arc</i>.<b>cornerRadius</b>([<i>radius</i>]) <a href="https://github.com/d3/d3-shape/blob/master/src/arc.js#L238" title="Source">&lt;&gt;</a></p>
<p>If <em>radius</em> is specified, sets the corner radius to the specified function or number and returns this arc generator. If <em>radius</em> is not specified, returns the current corner radius accessor, which defaults to:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">function</span> <span class="pl-en">cornerRadius</span>() {
  <span class="pl-k">return</span> <span class="pl-c1">0</span>;
}</pre></div>
<p>If the corner radius is greater than zero, the corners of the arc are rounded using circles of the given radius. For a circular sector, the two outer corners are rounded; for an annular sector, all four corners are rounded. The corner circles are shown in this diagram:</p>
<p><a href="http://bl.ocks.org/mbostock/e5e3680f3079cf5c3437"><img alt="Rounded Circular Sectors" src="https://raw.githubusercontent.com/d3/d3-shape/master/img/rounded-circular-sector.png" width="250" height="250" style="max-width:100%;"></a><a href="http://bl.ocks.org/mbostock/f41f50e06a6c04828b6e"><img alt="Rounded Annular Sectors" src="https://raw.githubusercontent.com/d3/d3-shape/master/img/rounded-annular-sector.png" width="250" height="250" style="max-width:100%;"></a></p>
<p>The corner radius may not be larger than (<a href="#arc_outerRadius">outerRadius</a> - <a href="#arc_innerRadius">innerRadius</a>) / 2. In addition, for arcs whose angular span is less than π, the corner radius may be reduced as two adjacent rounded corners intersect. This is occurs more often with the inner corners. See the <a href="http://bl.ocks.org/mbostock/b7671cb38efdfa5da3af">arc corners animation</a> for illustration.</p>
<p><a name="user-content-arc_startAngle" href="#arc_startAngle">#</a> <i>arc</i>.<b>startAngle</b>([<i>angle</i>]) <a href="https://github.com/d3/d3-shape/blob/master/src/arc.js#L246" title="Source">&lt;&gt;</a></p>
<p>If <em>angle</em> is specified, sets the start angle to the specified function or number and returns this arc generator. If <em>angle</em> is not specified, returns the current start angle accessor, which defaults to:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">function</span> <span class="pl-en">startAngle</span>(<span class="pl-smi">d</span>) {
  <span class="pl-k">return</span> <span class="pl-smi">d</span>.<span class="pl-smi">startAngle</span>;
}</pre></div>
<p>The <em>angle</em> is specified in radians, with 0 at -<em>y</em> (12 o’clock) and positive angles proceeding clockwise. If |endAngle - startAngle| ≥ τ, a complete circle or annulus is generated rather than a sector.</p>
<p><a name="user-content-arc_endAngle" href="#arc_endAngle">#</a> <i>arc</i>.<b>endAngle</b>([<i>angle</i>]) <a href="https://github.com/d3/d3-shape/blob/master/src/arc.js#L250" title="Source">&lt;&gt;</a></p>
<p>If <em>angle</em> is specified, sets the end angle to the specified function or number and returns this arc generator. If <em>angle</em> is not specified, returns the current end angle accessor, which defaults to:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">function</span> <span class="pl-en">endAngle</span>(<span class="pl-smi">d</span>) {
  <span class="pl-k">return</span> <span class="pl-smi">d</span>.<span class="pl-smi">endAngle</span>;
}</pre></div>
<p>The <em>angle</em> is specified in radians, with 0 at -<em>y</em> (12 o’clock) and positive angles proceeding clockwise. If |endAngle - startAngle| ≥ τ, a complete circle or annulus is generated rather than a sector.</p>
<p><a name="user-content-arc_padAngle" href="#arc_padAngle">#</a> <i>arc</i>.<b>padAngle</b>([<i>angle</i>]) <a href="https://github.com/d3/d3-shape/blob/master/src/arc.js#L254" title="Source">&lt;&gt;</a></p>
<p>If <em>angle</em> is specified, sets the pad angle to the specified function or number and returns this arc generator. If <em>angle</em> is not specified, returns the current pad angle accessor, which defaults to:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">function</span> <span class="pl-en">padAngle</span>() {
  <span class="pl-k">return</span> d <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">d</span>.<span class="pl-smi">padAngle</span>;
}</pre></div>
<p>The pad angle is converted to a fixed linear distance separating adjacent arcs, defined as <a href="#arc_padRadius">padRadius</a> * padAngle. This distance is subtracted equally from the <a href="#arc_startAngle">start</a> and <a href="#arc_endAngle">end</a> of the arc. If the arc forms a complete circle or annulus, as when |endAngle - startAngle| ≥ τ, the pad angle is ignored.</p>
<p>If the <a href="#arc_innerRadius">inner radius</a> or angular span is small relative to the pad angle, it may not be possible to maintain parallel edges between adjacent arcs. In this case, the inner edge of the arc may collapse to a point, similar to a circular sector. For this reason, padding is typically only applied to annular sectors (<em>i.e.</em>, when innerRadius is positive), as shown in this diagram:</p>
<p><a href="http://bl.ocks.org/mbostock/f37b07b92633781a46f7"><img alt="Padded Circular Sectors" src="https://raw.githubusercontent.com/d3/d3-shape/master/img/padded-circular-sector.png" width="250" height="250" style="max-width:100%;"></a><a href="http://bl.ocks.org/mbostock/99f0a6533f7c949cf8b8"><img alt="Padded Annular Sectors" src="https://raw.githubusercontent.com/d3/d3-shape/master/img/padded-annular-sector.png" width="250" height="250" style="max-width:100%;"></a></p>
<p>The recommended minimum inner radius when using padding is outerRadius * padAngle / sin(θ), where θ is the angular span of the smallest arc before padding. For example, if the outer radius is 200 pixels and the pad angle is 0.02 radians, a reasonable θ is 0.04 radians, and a reasonable inner radius is 100 pixels. See the <a href="http://bl.ocks.org/mbostock/053fcc2295a445afab07">arc padding animation</a> for illustration.</p>
<p>Often, the pad angle is not set directly on the arc generator, but is instead computed by the <a href="#pies">pie generator</a> so as to ensure that the area of padded arcs is proportional to their value; see <a href="#pie_padAngle"><em>pie</em>.padAngle</a>. See the <a href="http://bl.ocks.org/mbostock/3e961b4c97a1b543fff2">pie padding animation</a> for illustration. If you apply a constant pad angle to the arc generator directly, it tends to subtract disproportionately from smaller arcs, introducing distortion.</p>
<p><a name="user-content-arc_padRadius" href="#arc_padRadius">#</a> <i>arc</i>.<b>padRadius</b>([<i>radius</i>]) <a href="https://github.com/d3/d3-shape/blob/master/src/arc.js#L242" title="Source">&lt;&gt;</a></p>
<p>If <em>radius</em> is specified, sets the pad radius to the specified function or number and returns this arc generator. If <em>radius</em> is not specified, returns the current pad radius accessor, which defaults to null, indicating that the pad radius should be automatically computed as sqrt(<a href="#arc_innerRadius">innerRadius</a> * innerRadius + <a href="#arc_outerRadius">outerRadius</a> * outerRadius). The pad radius determines the fixed linear distance separating adjacent arcs, defined as padRadius * <a href="#arc_padAngle">padAngle</a>.</p>
<p><a name="user-content-arc_context" href="#arc_context">#</a> <i>arc</i>.<b>context</b>([<i>context</i>]) <a href="https://github.com/d3/d3-shape/blob/master/src/arc.js#L258" title="Source">&lt;&gt;</a></p>
<p>If <em>context</em> is specified, sets the context and returns this arc generator. If <em>context</em> is not specified, returns the current context, which defaults to null. If the context is not null, then the <a href="#_arc">generated arc</a> is rendered to this context as a sequence of <a href="http://www.w3.org/TR/2dcontext/#canvaspathmethods">path method</a> calls. Otherwise, a <a href="http://www.w3.org/TR/SVG/paths.html#PathData">path data</a> string representing the generated arc is returned.</p>
<h3><a href="#pies" aria-hidden="true" class="anchor" id="user-content-pies"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Pies</h3>
<p>The pie generator does not produce a shape directly, but instead computes the necessary angles to represent a tabular dataset as a pie or donut chart; these angles can then be passed to an <a href="#arcs">arc generator</a>.</p>
<p><a name="user-content-pie" href="#pie">#</a> d3.<b>pie</b>() <a href="https://github.com/d3/d3-shape/blob/master/src/pie.js" title="Source">&lt;&gt;</a></p>
<p>Constructs a new pie generator with the default settings.</p>
<p><a name="user-content-_pie" href="#_pie">#</a> <i>pie</i>(<i>data</i>[, <i>arguments…</i>]) <a href="https://github.com/d3/d3-shape/blob/master/src/pie.js#L14" title="Source">&lt;&gt;</a></p>
<p>Generates a pie for the given array of <em>data</em>, returning an array of objects representing each datum’s arc angles. Any additional <em>arguments</em> are arbitrary; they are simply propagated to the pie generator’s accessor functions along with the <code>this</code> object. The length of the returned array is the same as <em>data</em>, and each element <em>i</em> in the returned array corresponds to the element <em>i</em> in the input data. Each object in the returned array has the following properties:</p>
<ul>
<li><code>data</code> - the input datum; the corresponding element in the input data array.</li>
<li><code>value</code> - the numeric <a href="#pie_value">value</a> of the arc.</li>
<li><code>index</code> - the zero-based <a href="#pie_sort">sorted index</a> of the arc.</li>
<li><code>startAngle</code> - the <a href="#pie_startAngle">start angle</a> of the arc.</li>
<li><code>endAngle</code> - the <a href="#pie_endAngle">end angle</a> of the arc.</li>
<li><code>padAngle</code> - the <a href="#pie_padAngle">pad angle</a> of the arc.</li>
</ul>
<p>This representation is designed to work with the arc generator’s default <a href="#arc_startAngle">startAngle</a>, <a href="#arc_endAngle">endAngle</a> and <a href="#arc_padAngle">padAngle</a> accessors. The angular units are arbitrary, but if you plan to use the pie generator in conjunction with an <a href="#arcs">arc generator</a>, you should specify angles in radians, with 0 at -<em>y</em> (12 o’clock) and positive angles proceeding clockwise.</p>
<p>Given a small dataset of numbers, here is how to compute the arc angles to render this data as a pie chart:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">var</span> data <span class="pl-k">=</span> [<span class="pl-c1">1</span>, <span class="pl-c1">1</span>, <span class="pl-c1">2</span>, <span class="pl-c1">3</span>, <span class="pl-c1">5</span>, <span class="pl-c1">8</span>, <span class="pl-c1">13</span>, <span class="pl-c1">21</span>];
<span class="pl-k">var</span> arcs <span class="pl-k">=</span> <span class="pl-smi">d3</span>.<span class="pl-en">pie</span>()(data);</pre></div>
<p>The first pair of parens, <code>pie()</code>, <a href="#pie">constructs</a> a default pie generator. The second, <code>pie()(data)</code>, <a href="#_pie">invokes</a> this generator on the dataset, returning an array of objects:</p>
<div class="highlight highlight-source-json"><pre>[
  {<span class="pl-s"><span class="pl-pds">"</span>data<span class="pl-pds">"</span></span>:  <span class="pl-c1">1</span>, <span class="pl-s"><span class="pl-pds">"</span>value<span class="pl-pds">"</span></span>:  <span class="pl-c1">1</span>, <span class="pl-s"><span class="pl-pds">"</span>index<span class="pl-pds">"</span></span>: <span class="pl-c1">6</span>, <span class="pl-s"><span class="pl-pds">"</span>startAngle<span class="pl-pds">"</span></span>: <span class="pl-c1">6.050474740247008</span>, <span class="pl-s"><span class="pl-pds">"</span>endAngle<span class="pl-pds">"</span></span>: <span class="pl-c1">6.166830023713296</span>, <span class="pl-s"><span class="pl-pds">"</span>padAngle<span class="pl-pds">"</span></span>: <span class="pl-c1">0</span>},
  {<span class="pl-s"><span class="pl-pds">"</span>data<span class="pl-pds">"</span></span>:  <span class="pl-c1">1</span>, <span class="pl-s"><span class="pl-pds">"</span>value<span class="pl-pds">"</span></span>:  <span class="pl-c1">1</span>, <span class="pl-s"><span class="pl-pds">"</span>index<span class="pl-pds">"</span></span>: <span class="pl-c1">7</span>, <span class="pl-s"><span class="pl-pds">"</span>startAngle<span class="pl-pds">"</span></span>: <span class="pl-c1">6.166830023713296</span>, <span class="pl-s"><span class="pl-pds">"</span>endAngle<span class="pl-pds">"</span></span>: <span class="pl-c1">6.283185307179584</span>, <span class="pl-s"><span class="pl-pds">"</span>padAngle<span class="pl-pds">"</span></span>: <span class="pl-c1">0</span>},
  {<span class="pl-s"><span class="pl-pds">"</span>data<span class="pl-pds">"</span></span>:  <span class="pl-c1">2</span>, <span class="pl-s"><span class="pl-pds">"</span>value<span class="pl-pds">"</span></span>:  <span class="pl-c1">2</span>, <span class="pl-s"><span class="pl-pds">"</span>index<span class="pl-pds">"</span></span>: <span class="pl-c1">5</span>, <span class="pl-s"><span class="pl-pds">"</span>startAngle<span class="pl-pds">"</span></span>: <span class="pl-c1">5.817764173314431</span>, <span class="pl-s"><span class="pl-pds">"</span>endAngle<span class="pl-pds">"</span></span>: <span class="pl-c1">6.050474740247008</span>, <span class="pl-s"><span class="pl-pds">"</span>padAngle<span class="pl-pds">"</span></span>: <span class="pl-c1">0</span>},
  {<span class="pl-s"><span class="pl-pds">"</span>data<span class="pl-pds">"</span></span>:  <span class="pl-c1">3</span>, <span class="pl-s"><span class="pl-pds">"</span>value<span class="pl-pds">"</span></span>:  <span class="pl-c1">3</span>, <span class="pl-s"><span class="pl-pds">"</span>index<span class="pl-pds">"</span></span>: <span class="pl-c1">4</span>, <span class="pl-s"><span class="pl-pds">"</span>startAngle<span class="pl-pds">"</span></span>: <span class="pl-c1">5.468698322915565</span>, <span class="pl-s"><span class="pl-pds">"</span>endAngle<span class="pl-pds">"</span></span>: <span class="pl-c1">5.817764173314431</span>, <span class="pl-s"><span class="pl-pds">"</span>padAngle<span class="pl-pds">"</span></span>: <span class="pl-c1">0</span>},
  {<span class="pl-s"><span class="pl-pds">"</span>data<span class="pl-pds">"</span></span>:  <span class="pl-c1">5</span>, <span class="pl-s"><span class="pl-pds">"</span>value<span class="pl-pds">"</span></span>:  <span class="pl-c1">5</span>, <span class="pl-s"><span class="pl-pds">"</span>index<span class="pl-pds">"</span></span>: <span class="pl-c1">3</span>, <span class="pl-s"><span class="pl-pds">"</span>startAngle<span class="pl-pds">"</span></span>: <span class="pl-c1">4.886921905584122</span>, <span class="pl-s"><span class="pl-pds">"</span>endAngle<span class="pl-pds">"</span></span>: <span class="pl-c1">5.468698322915565</span>, <span class="pl-s"><span class="pl-pds">"</span>padAngle<span class="pl-pds">"</span></span>: <span class="pl-c1">0</span>},
  {<span class="pl-s"><span class="pl-pds">"</span>data<span class="pl-pds">"</span></span>:  <span class="pl-c1">8</span>, <span class="pl-s"><span class="pl-pds">"</span>value<span class="pl-pds">"</span></span>:  <span class="pl-c1">8</span>, <span class="pl-s"><span class="pl-pds">"</span>index<span class="pl-pds">"</span></span>: <span class="pl-c1">2</span>, <span class="pl-s"><span class="pl-pds">"</span>startAngle<span class="pl-pds">"</span></span>: <span class="pl-c1">3.956079637853813</span>, <span class="pl-s"><span class="pl-pds">"</span>endAngle<span class="pl-pds">"</span></span>: <span class="pl-c1">4.886921905584122</span>, <span class="pl-s"><span class="pl-pds">"</span>padAngle<span class="pl-pds">"</span></span>: <span class="pl-c1">0</span>},
  {<span class="pl-s"><span class="pl-pds">"</span>data<span class="pl-pds">"</span></span>: <span class="pl-c1">13</span>, <span class="pl-s"><span class="pl-pds">"</span>value<span class="pl-pds">"</span></span>: <span class="pl-c1">13</span>, <span class="pl-s"><span class="pl-pds">"</span>index<span class="pl-pds">"</span></span>: <span class="pl-c1">1</span>, <span class="pl-s"><span class="pl-pds">"</span>startAngle<span class="pl-pds">"</span></span>: <span class="pl-c1">2.443460952792061</span>, <span class="pl-s"><span class="pl-pds">"</span>endAngle<span class="pl-pds">"</span></span>: <span class="pl-c1">3.956079637853813</span>, <span class="pl-s"><span class="pl-pds">"</span>padAngle<span class="pl-pds">"</span></span>: <span class="pl-c1">0</span>},
  {<span class="pl-s"><span class="pl-pds">"</span>data<span class="pl-pds">"</span></span>: <span class="pl-c1">21</span>, <span class="pl-s"><span class="pl-pds">"</span>value<span class="pl-pds">"</span></span>: <span class="pl-c1">21</span>, <span class="pl-s"><span class="pl-pds">"</span>index<span class="pl-pds">"</span></span>: <span class="pl-c1">0</span>, <span class="pl-s"><span class="pl-pds">"</span>startAngle<span class="pl-pds">"</span></span>: <span class="pl-c1">0.000000000000000</span>, <span class="pl-s"><span class="pl-pds">"</span>endAngle<span class="pl-pds">"</span></span>: <span class="pl-c1">2.443460952792061</span>, <span class="pl-s"><span class="pl-pds">"</span>padAngle<span class="pl-pds">"</span></span>: <span class="pl-c1">0</span>}
]</pre></div>
<p>Note that the returned array is in the same order as the data, even though this pie chart is <a href="#pie_sortValues">sorted</a> by descending value, starting with the arc for the last datum (value 21) at 12 o’clock.</p>
<p><a name="user-content-pie_value" href="#pie_value">#</a> <i>pie</i>.<b>value</b>([<i>value</i>]) <a href="https://github.com/d3/d3-shape/blob/master/src/pie.js#L54" title="Source">&lt;&gt;</a></p>
<p>If <em>value</em> is specified, sets the value accessor to the specified function or number and returns this pie generator. If <em>value</em> is not specified, returns the current value accessor, which defaults to:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">function</span> <span class="pl-en">value</span>(<span class="pl-smi">d</span>) {
  <span class="pl-k">return</span> d;
}</pre></div>
<p>When a pie is <a href="#_pie">generated</a>, the value accessor will be invoked for each element in the input data array, being passed the element <code>d</code>, the index <code>i</code>, and the array <code>data</code> as three arguments. The default value accessor assumes that the input data are numbers, or that they are coercible to numbers using <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf">valueOf</a>. If your data are not simply numbers, then you should specify an accessor that returns the corresponding numeric value for a given datum. For example:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">var</span> data <span class="pl-k">=</span> [
  {<span class="pl-s"><span class="pl-pds">"</span>number<span class="pl-pds">"</span></span><span class="pl-k">:</span>  <span class="pl-c1">4</span>, <span class="pl-s"><span class="pl-pds">"</span>name<span class="pl-pds">"</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>Locke<span class="pl-pds">"</span></span>},
  {<span class="pl-s"><span class="pl-pds">"</span>number<span class="pl-pds">"</span></span><span class="pl-k">:</span>  <span class="pl-c1">8</span>, <span class="pl-s"><span class="pl-pds">"</span>name<span class="pl-pds">"</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>Reyes<span class="pl-pds">"</span></span>},
  {<span class="pl-s"><span class="pl-pds">"</span>number<span class="pl-pds">"</span></span><span class="pl-k">:</span> <span class="pl-c1">15</span>, <span class="pl-s"><span class="pl-pds">"</span>name<span class="pl-pds">"</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>Ford<span class="pl-pds">"</span></span>},
  {<span class="pl-s"><span class="pl-pds">"</span>number<span class="pl-pds">"</span></span><span class="pl-k">:</span> <span class="pl-c1">16</span>, <span class="pl-s"><span class="pl-pds">"</span>name<span class="pl-pds">"</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>Jarrah<span class="pl-pds">"</span></span>},
  {<span class="pl-s"><span class="pl-pds">"</span>number<span class="pl-pds">"</span></span><span class="pl-k">:</span> <span class="pl-c1">23</span>, <span class="pl-s"><span class="pl-pds">"</span>name<span class="pl-pds">"</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>Shephard<span class="pl-pds">"</span></span>},
  {<span class="pl-s"><span class="pl-pds">"</span>number<span class="pl-pds">"</span></span><span class="pl-k">:</span> <span class="pl-c1">42</span>, <span class="pl-s"><span class="pl-pds">"</span>name<span class="pl-pds">"</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>Kwon<span class="pl-pds">"</span></span>}
];

<span class="pl-k">var</span> arcs <span class="pl-k">=</span> <span class="pl-smi">d3</span>.<span class="pl-en">pie</span>()
    .<span class="pl-c1">value</span>(<span class="pl-k">function</span>(<span class="pl-smi">d</span>) { <span class="pl-k">return</span> <span class="pl-smi">d</span>.<span class="pl-smi">number</span>; })
    (data);</pre></div>
<p>This is similar to <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map">mapping</a> your data to values before invoking the pie generator:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">var</span> arcs <span class="pl-k">=</span> <span class="pl-smi">d3</span>.<span class="pl-en">pie</span>()(<span class="pl-smi">data</span>.<span class="pl-en">map</span>(<span class="pl-k">function</span>(<span class="pl-smi">d</span>) { <span class="pl-k">return</span> <span class="pl-smi">d</span>.<span class="pl-smi">number</span>; }));</pre></div>
<p>The benefit of an accessor is that the input data remains associated with the returned objects, thereby making it easier to access other fields of the data, for example to set the color or to add text labels.</p>
<p><a name="user-content-pie_sort" href="#pie_sort">#</a> <i>pie</i>.<b>sort</b>([<i>compare</i>]) <a href="https://github.com/d3/d3-shape/blob/master/src/pie.js#L62" title="Source">&lt;&gt;</a></p>
<p>If <em>compare</em> is specified, sets the data comparator to the specified function and returns this pie generator. If <em>compare</em> is not specified, returns the current data comparator, which defaults to null. If both the data comparator and the value comparator are null, then arcs are positioned in the original input order. Otherwise, the data is sorted according to the data comparator, and the resulting order is used. Setting the data comparator implicitly sets the <a href="#pie_sortValues">value comparator</a> to null.</p>
<p>The <em>compare</em> function takes two arguments <em>a</em> and <em>b</em>, each elements from the input data array. If the arc for <em>a</em> should be before the arc for <em>b</em>, then the comparator must return a number less than zero; if the arc for <em>a</em> should be after the arc for <em>b</em>, then the comparator must return a number greater than zero; returning zero means that the relative order of <em>a</em> and <em>b</em> is unspecified. For example, to sort arcs by their associated name:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-smi">pie</span>.<span class="pl-c1">sort</span>(<span class="pl-k">function</span>(<span class="pl-smi">a</span>, <span class="pl-smi">b</span>) { <span class="pl-k">return</span> <span class="pl-smi">a</span>.<span class="pl-c1">name</span>.<span class="pl-en">localeCompare</span>(<span class="pl-smi">b</span>.<span class="pl-c1">name</span>); });</pre></div>
<p>Sorting does not affect the order of the <a href="#_pie">generated arc array</a> which is always in the same order as the input data array; it merely affects the computed angles of each arc. The first arc starts at the <a href="#pie_startAngle">start angle</a> and the last arc ends at the <a href="#pie_endAngle">end angle</a>.</p>
<p><a name="user-content-pie_sortValues" href="#pie_sortValues">#</a> <i>pie</i>.<b>sortValues</b>([<i>compare</i>]) <a href="https://github.com/d3/d3-shape/blob/master/src/pie.js#L58" title="Source">&lt;&gt;</a></p>
<p>If <em>compare</em> is specified, sets the value comparator to the specified function and returns this pie generator. If <em>compare</em> is not specified, returns the current value comparator, which defaults to descending value. The default value comparator is implemented as:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">function</span> <span class="pl-en">compare</span>(<span class="pl-smi">a</span>, <span class="pl-smi">b</span>) {
  <span class="pl-k">return</span> b <span class="pl-k">-</span> a;
}</pre></div>
<p>If both the data comparator and the value comparator are null, then arcs are positioned in the original input order. Otherwise, the data is sorted according to the data comparator, and the resulting order is used. Setting the value comparator implicitly sets the <a href="#pie_sort">data comparator</a> to null.</p>
<p>The value comparator is similar to the <a href="#pie_sort">data comparator</a>, except the two arguments <em>a</em> and <em>b</em> are values derived from the input data array using the <a href="#pie_value">value accessor</a>, not the data elements. If the arc for <em>a</em> should be before the arc for <em>b</em>, then the comparator must return a number less than zero; if the arc for <em>a</em> should be after the arc for <em>b</em>, then the comparator must return a number greater than zero; returning zero means that the relative order of <em>a</em> and <em>b</em> is unspecified. For example, to sort arcs by ascending value:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-smi">pie</span>.<span class="pl-en">sortValues</span>(<span class="pl-k">function</span>(<span class="pl-smi">a</span>, <span class="pl-smi">b</span>) { <span class="pl-k">return</span> a <span class="pl-k">-</span> b; });</pre></div>
<p>Sorting does not affect the order of the <a href="#_pie">generated arc array</a> which is always in the same order as the input data array; it merely affects the computed angles of each arc. The first arc starts at the <a href="#pie_startAngle">start angle</a> and the last arc ends at the <a href="#pie_endAngle">end angle</a>.</p>
<p><a name="user-content-pie_startAngle" href="#pie_startAngle">#</a> <i>pie</i>.<b>startAngle</b>([<i>angle</i>]) <a href="https://github.com/d3/d3-shape/blob/master/src/pie.js#L66" title="Source">&lt;&gt;</a></p>
<p>If <em>angle</em> is specified, sets the overall start angle of the pie to the specified function or number and returns this pie generator. If <em>angle</em> is not specified, returns the current start angle accessor, which defaults to:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">function</span> <span class="pl-en">startAngle</span>() {
  <span class="pl-k">return</span> <span class="pl-c1">0</span>;
}</pre></div>
<p>The start angle here means the <em>overall</em> start angle of the pie, <em>i.e.</em>, the start angle of the first arc. The start angle accessor is invoked once, being passed the same arguments and <code>this</code> context as the <a href="#_pie">pie generator</a>. The units of <em>angle</em> are arbitrary, but if you plan to use the pie generator in conjunction with an <a href="#arcs">arc generator</a>, you should specify an angle in radians, with 0 at -<em>y</em> (12 o’clock) and positive angles proceeding clockwise.</p>
<p><a name="user-content-pie_endAngle" href="#pie_endAngle">#</a> <i>pie</i>.<b>endAngle</b>([<i>angle</i>]) <a href="https://github.com/d3/d3-shape/blob/master/src/pie.js#L70" title="Source">&lt;&gt;</a></p>
<p>If <em>angle</em> is specified, sets the overall end angle of the pie to the specified function or number and returns this pie generator. If <em>angle</em> is not specified, returns the current end angle accessor, which defaults to:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">function</span> <span class="pl-en">endAngle</span>() {
  <span class="pl-k">return</span> <span class="pl-c1">2</span> <span class="pl-k">*</span> <span class="pl-c1">Math</span>.<span class="pl-c1">PI</span>;
}</pre></div>
<p>The end angle here means the <em>overall</em> end angle of the pie, <em>i.e.</em>, the end angle of the last arc. The end angle accessor is invoked once, being passed the same arguments and <code>this</code> context as the <a href="#_pie">pie generator</a>. The units of <em>angle</em> are arbitrary, but if you plan to use the pie generator in conjunction with an <a href="#arcs">arc generator</a>, you should specify an angle in radians, with 0 at -<em>y</em> (12 o’clock) and positive angles proceeding clockwise.</p>
<p>The value of the end angle is constrained to <a href="#pie_startAngle">startAngle</a> ± τ, such that |endAngle - startAngle| ≤ τ.</p>
<p><a name="user-content-pie_padAngle" href="#pie_padAngle">#</a> <i>pie</i>.<b>padAngle</b>([<i>angle</i>]) <a href="https://github.com/d3/d3-shape/blob/master/src/pie.js#L74" title="Source">&lt;&gt;</a></p>
<p>If <em>angle</em> is specified, sets the pad angle to the specified function or number and returns this pie generator. If <em>angle</em> is not specified, returns the current pad angle accessor, which defaults to:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">function</span> <span class="pl-en">padAngle</span>() {
  <span class="pl-k">return</span> <span class="pl-c1">0</span>;
}</pre></div>
<p>The pad angle here means the angular separation between each adjacent arc. The total amount of padding reserved is the specified <em>angle</em> times the number of elements in the input data array, and at most |endAngle - startAngle|; the remaining space is then divided proportionally by <a href="#pie_value">value</a> such that the relative area of each arc is preserved. See the <a href="http://bl.ocks.org/mbostock/3e961b4c97a1b543fff2">pie padding animation</a> for illustration. The pad angle accessor is invoked once, being passed the same arguments and <code>this</code> context as the <a href="#_pie">pie generator</a>. The units of <em>angle</em> are arbitrary, but if you plan to use the pie generator in conjunction with an <a href="#arcs">arc generator</a>, you should specify an angle in radians.</p>
<h3><a href="#lines" aria-hidden="true" class="anchor" id="user-content-lines"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Lines</h3>
<p><a href="http://bl.ocks.org/mbostock/1550e57e12e73b86ad9e"><img width="295" height="154" alt="Line Chart" src="https://raw.githubusercontent.com/d3/d3-shape/master/img/line.png" style="max-width:100%;"></a></p>
<p>The line generator produces a <a href="https://en.wikipedia.org/wiki/Spline_(mathematics)">spline</a> or <a href="https://en.wikipedia.org/wiki/Polygonal_chain">polyline</a>, as in a line chart. Lines also appear in many other visualization types, such as the links in <a href="http://bl.ocks.org/mbostock/7607999">hierarchical edge bundling</a>.</p>
<p><a name="user-content-line" href="#line">#</a> d3.<b>line</b>() <a href="https://github.com/d3/d3-shape/blob/master/src/line.js" title="Source">&lt;&gt;</a></p>
<p>Constructs a new line generator with the default settings.</p>
<p><a name="user-content-_line" href="#_line">#</a> <i>line</i>(<i>data</i>) <a href="https://github.com/d3/d3-shape/blob/master/src/line.js#L14" title="Source">&lt;&gt;</a></p>
<p>Generates a line for the given array of <em>data</em>. Depending on this line generator’s associated <a href="#line_curve">curve</a>, the given input <em>data</em> may need to be sorted by <em>x</em>-value before being passed to the line generator. If the line generator has a <a href="#line_context">context</a>, then the line is rendered to this context as a sequence of <a href="http://www.w3.org/TR/2dcontext/#canvaspathmethods">path method</a> calls and this function returns void. Otherwise, a <a href="http://www.w3.org/TR/SVG/paths.html#PathData">path data</a> string is returned.</p>
<p><a name="user-content-line_x" href="#line_x">#</a> <i>line</i>.<b>x</b>([<i>x</i>]) <a href="https://github.com/d3/d3-shape/blob/master/src/line.js#L34" title="Source">&lt;&gt;</a></p>
<p>If <em>x</em> is specified, sets the x accessor to the specified function or number and returns this line generator. If <em>x</em> is not specified, returns the current x accessor, which defaults to:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">function</span> <span class="pl-en">x</span>(<span class="pl-smi">d</span>) {
  <span class="pl-k">return</span> d[<span class="pl-c1">0</span>];
}</pre></div>
<p>When a line is <a href="#_line">generated</a>, the x accessor will be invoked for each <a href="#line_defined">defined</a> element in the input data array, being passed the element <code>d</code>, the index <code>i</code>, and the array <code>data</code> as three arguments. The default x accessor assumes that the input data are two-element arrays of numbers. If your data are in a different format, or if you wish to transform the data before rendering, then you should specify a custom accessor. For example, if <code>x</code> is a <a href="https://github.com/d3/d3-scale#time-scales">time scale</a> and <code>y</code> is a <a href="https://github.com/d3/d3-scale#linear-scales">linear scale</a>:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">var</span> data <span class="pl-k">=</span> [
  {date<span class="pl-k">:</span> <span class="pl-k">new</span> <span class="pl-en">Date</span>(<span class="pl-c1">2007</span>, <span class="pl-c1">3</span>, <span class="pl-c1">24</span>), value<span class="pl-k">:</span> <span class="pl-c1">93.24</span>},
  {date<span class="pl-k">:</span> <span class="pl-k">new</span> <span class="pl-en">Date</span>(<span class="pl-c1">2007</span>, <span class="pl-c1">3</span>, <span class="pl-c1">25</span>), value<span class="pl-k">:</span> <span class="pl-c1">95.35</span>},
  {date<span class="pl-k">:</span> <span class="pl-k">new</span> <span class="pl-en">Date</span>(<span class="pl-c1">2007</span>, <span class="pl-c1">3</span>, <span class="pl-c1">26</span>), value<span class="pl-k">:</span> <span class="pl-c1">98.84</span>},
  {date<span class="pl-k">:</span> <span class="pl-k">new</span> <span class="pl-en">Date</span>(<span class="pl-c1">2007</span>, <span class="pl-c1">3</span>, <span class="pl-c1">27</span>), value<span class="pl-k">:</span> <span class="pl-c1">99.92</span>},
  {date<span class="pl-k">:</span> <span class="pl-k">new</span> <span class="pl-en">Date</span>(<span class="pl-c1">2007</span>, <span class="pl-c1">3</span>, <span class="pl-c1">30</span>), value<span class="pl-k">:</span> <span class="pl-c1">99.80</span>},
  {date<span class="pl-k">:</span> <span class="pl-k">new</span> <span class="pl-en">Date</span>(<span class="pl-c1">2007</span>, <span class="pl-c1">4</span>,  <span class="pl-c1">1</span>), value<span class="pl-k">:</span> <span class="pl-c1">99.47</span>},
  …
];

<span class="pl-k">var</span> line <span class="pl-k">=</span> <span class="pl-smi">d3</span>.<span class="pl-en">line</span>()
    .<span class="pl-c1">x</span>(<span class="pl-k">function</span>(<span class="pl-smi">d</span>) { <span class="pl-k">return</span> <span class="pl-en">x</span>(<span class="pl-smi">d</span>.<span class="pl-smi">date</span>); })
    .<span class="pl-c1">y</span>(<span class="pl-k">function</span>(<span class="pl-smi">d</span>) { <span class="pl-k">return</span> <span class="pl-en">y</span>(<span class="pl-smi">d</span>.<span class="pl-c1">value</span>); });</pre></div>
<p><a name="user-content-line_y" href="#line_y">#</a> <i>line</i>.<b>y</b>([<i>y</i>]) <a href="https://github.com/d3/d3-shape/blob/master/src/line.js#L38" title="Source">&lt;&gt;</a></p>
<p>If <em>y</em> is specified, sets the y accessor to the specified function or number and returns this line generator. If <em>y</em> is not specified, returns the current y accessor, which defaults to:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">function</span> <span class="pl-en">y</span>(<span class="pl-smi">d</span>) {
  <span class="pl-k">return</span> d[<span class="pl-c1">1</span>];
}</pre></div>
<p>When a line is <a href="#_line">generated</a>, the y accessor will be invoked for each <a href="#line_defined">defined</a> element in the input data array, being passed the element <code>d</code>, the index <code>i</code>, and the array <code>data</code> as three arguments. The default y accessor assumes that the input data are two-element arrays of numbers. See <a href="#line_x"><em>line</em>.x</a> for more information.</p>
<p><a name="user-content-line_defined" href="#line_defined">#</a> <i>line</i>.<b>defined</b>([<i>defined</i>]) <a href="https://github.com/d3/d3-shape/blob/master/src/line.js#L42" title="Source">&lt;&gt;</a></p>
<p>If <em>defined</em> is specified, sets the defined accessor to the specified function or boolean and returns this line generator. If <em>defined</em> is not specified, returns the current defined accessor, which defaults to:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">function</span> <span class="pl-en">defined</span>() {
  <span class="pl-k">return</span> <span class="pl-c1">true</span>;
}</pre></div>
<p>The default accessor thus assumes that the input data is always defined. When a line is <a href="#_line">generated</a>, the defined accessor will be invoked for each element in the input data array, being passed the element <code>d</code>, the index <code>i</code>, and the array <code>data</code> as three arguments. If the given element is defined (<em>i.e.</em>, if the defined accessor returns a truthy value for this element), the <a href="#line_x">x</a> and <a href="#line_y">y</a> accessors will subsequently be evaluated and the point will be added to the current line segment. Otherwise, the element will be skipped, the current line segment will be ended, and a new line segment will be generated for the next defined point. As a result, the generated line may have several discrete segments. For example:</p>
<p><a href="http://bl.ocks.org/mbostock/0533f44f2cfabecc5e3a"><img src="https://raw.githubusercontent.com/d3/d3-shape/master/img/line-defined.png" width="480" height="250" alt="Line with Missing Data" style="max-width:100%;"></a></p>
<p>Note that if a line segment consists of only a single point, it may appear invisible unless rendered with rounded or square <a href="https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-linecap">line caps</a>. In addition, some curves such as <a href="#curveCardinalOpen">curveCardinalOpen</a> only render a visible segment if it contains multiple points.</p>
<p><a name="user-content-line_curve" href="#line_curve">#</a> <i>line</i>.<b>curve</b>([<i>curve</i>]) <a href="https://github.com/d3/d3-shape/blob/master/src/line.js#L46" title="Source">&lt;&gt;</a></p>
<p>If <em>curve</em> is specified, sets the <a href="#curves">curve factory</a> and returns this line generator. If <em>curve</em> is not specified, returns the current curve factory, which defaults to <a href="#curveLinear">curveLinear</a>.</p>
<p><a name="user-content-line_context" href="#line_context">#</a> <i>line</i>.<b>context</b>([<i>context</i>]) <a href="https://github.com/d3/d3-shape/blob/master/src/line.js#L50" title="Source">&lt;&gt;</a></p>
<p>If <em>context</em> is specified, sets the context and returns this line generator. If <em>context</em> is not specified, returns the current context, which defaults to null. If the context is not null, then the <a href="#_line">generated line</a> is rendered to this context as a sequence of <a href="http://www.w3.org/TR/2dcontext/#canvaspathmethods">path method</a> calls. Otherwise, a <a href="http://www.w3.org/TR/SVG/paths.html#PathData">path data</a> string representing the generated line is returned.</p>
<p><a name="user-content-lineRadial" href="#lineRadial">#</a> d3.<b>lineRadial</b>() <a href="https://github.com/d3/d3-shape/blob/master/src/lineRadial.js" title="Source">&lt;&gt;</a></p>
<p><a href="https://raw.githubusercontent.com/d3/d3-shape/master/img/line-radial.png" target="_blank"><img alt="Radial Line" width="250" height="250" src="https://raw.githubusercontent.com/d3/d3-shape/master/img/line-radial.png" style="max-width:100%;"></a></p>
<p>Constructs a new radial line generator with the default settings. A radial line generator is equivalent to the standard Cartesian <a href="#line">line generator</a>, except the <a href="#line_x">x</a> and <a href="#line_y">y</a> accessors are replaced with <a href="#lineRadial_angle">angle</a> and <a href="#lineRadial_radius">radius</a> accessors. Radial lines are always positioned relative to ⟨0,0⟩; use a transform (see: <a href="http://www.w3.org/TR/SVG/coords.html#TransformAttribute">SVG</a>, <a href="http://www.w3.org/TR/2dcontext/#transformations">Canvas</a>) to change the origin.</p>
<p><a name="user-content-_lineRadial" href="#_lineRadial">#</a> <i>lineRadial</i>(<i>data</i>) <a href="https://github.com/d3/d3-shape/blob/master/src/lineRadial.js#L4" title="Source">&lt;&gt;</a></p>
<p>Equivalent to <a href="#_line"><em>line</em></a>.</p>
<p><a name="user-content-lineRadial_angle" href="#lineRadial_angle">#</a> <i>lineRadial</i>.<b>angle</b>([<i>angle</i>]) <a href="https://github.com/d3/d3-shape/blob/master/src/lineRadial.js#L7" title="Source">&lt;&gt;</a></p>
<p>Equivalent to <a href="#line_x"><em>line</em>.x</a>, except the accessor returns the angle in radians, with 0 at -<em>y</em> (12 o’clock).</p>
<p><a name="user-content-lineRadial_radius" href="#lineRadial_radius">#</a> <i>lineRadial</i>.<b>radius</b>([<i>radius</i>]) <a href="https://github.com/d3/d3-shape/blob/master/src/lineRadial.js#L8" title="Source">&lt;&gt;</a></p>
<p>Equivalent to <a href="#line_y"><em>line</em>.y</a>, except the accessor returns the radius: the distance from the origin ⟨0,0⟩.</p>
<p><a name="user-content-lineRadial_defined" href="#lineRadial_defined">#</a> <i>lineRadial</i>.<b>defined</b>([<i>defined</i>])</p>
<p>Equivalent to <a href="#line_defined"><em>line</em>.defined</a>.</p>
<p><a name="user-content-lineRadial_curve" href="#lineRadial_curve">#</a> <i>lineRadial</i>.<b>curve</b>([<i>curve</i>]) <a href="https://github.com/d3/d3-shape/blob/master/src/lineRadial.js#L10" title="Source">&lt;&gt;</a></p>
<p>Equivalent to <a href="#line_curve"><em>line</em>.curve</a>. Note that <a href="#curveMonotoneX">curveMonotoneX</a> or <a href="#curveMonotoneY">curveMonotoneY</a> are not recommended for radial lines because they assume that the data is monotonic in <em>x</em> or <em>y</em>, which is typically untrue of radial lines.</p>
<p><a name="user-content-lineRadial_context" href="#lineRadial_context">#</a> <i>lineRadial</i>.<b>context</b>([<i>context</i>])</p>
<p>Equivalent to <a href="#line_context"><em>line</em>.context</a>.</p>
<h3><a href="#areas" aria-hidden="true" class="anchor" id="user-content-areas"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Areas</h3>
<p><a href="http://bl.ocks.org/mbostock/3883195"><img alt="Area Chart" width="295" height="154" src="https://raw.githubusercontent.com/d3/d3-shape/master/img/area.png" style="max-width:100%;"></a><a href="http://bl.ocks.org/mbostock/3885211"><img alt="Stacked Area Chart" width="295" height="154" src="https://raw.githubusercontent.com/d3/d3-shape/master/img/area-stacked.png" style="max-width:100%;"></a><a href="http://bl.ocks.org/mbostock/3894205"><img alt="Difference Chart" width="295" height="154" src="https://raw.githubusercontent.com/d3/d3-shape/master/img/area-difference.png" style="max-width:100%;"></a></p>
<p>The area generator produces an area, as in an area chart. An area is defined by two bounding <a href="#lines">lines</a>, either splines or polylines. Typically, the two lines share the same <a href="#area_x"><em>x</em>-values</a> (<a href="#area_x0">x0</a> = <a href="#area_x1">x1</a>), differing only in <em>y</em>-value (<a href="#area_y0">y0</a> and <a href="#area_y1">y1</a>); most commonly, y0 is defined as a constant representing <a href="http://www.vox.com/2015/11/19/9758062/y-axis-zero-chart">zero</a>. The first line (the <i>topline</i>) is defined by x1 and y1 and is rendered first; the second line (the <i>baseline</i>) is defined by x0 and y0 and is rendered second, with the points in reverse order. With a <a href="#curveLinear">curveLinear</a> <a href="#area_curve">curve</a>, this produces a clockwise polygon.</p>
<p><a name="user-content-area" href="#area">#</a> d3.<b>area</b>() <a href="https://github.com/d3/d3-shape/blob/master/src/area.js" title="Source">&lt;&gt;</a></p>
<p>Constructs a new area generator with the default settings.</p>
<p><a name="user-content-_area" href="#_area">#</a> <i>area</i>(<i>data</i>) <a href="https://github.com/d3/d3-shape/blob/master/src/area.js#L17" title="Source">&lt;&gt;</a></p>
<p>Generates an area for the given array of <em>data</em>. Depending on this area generator’s associated <a href="#area_curve">curve</a>, the given input <em>data</em> may need to be sorted by <em>x</em>-value before being passed to the area generator. If the area generator has a <a href="#line_context">context</a>, then the area is rendered to this context as a sequence of <a href="http://www.w3.org/TR/2dcontext/#canvaspathmethods">path method</a> calls and this function returns void. Otherwise, a <a href="http://www.w3.org/TR/SVG/paths.html#PathData">path data</a> string is returned.</p>
<p><a name="user-content-area_x" href="#area_x">#</a> <i>area</i>.<b>x</b>([<i>x</i>]) <a href="https://github.com/d3/d3-shape/blob/master/src/area.js#L59" title="Source">&lt;&gt;</a></p>
<p>If <em>x</em> is specified, sets <a href="#area_x0">x0</a> to <em>x</em> and <a href="#area_x1">x1</a> to null and returns this area generator. If <em>x</em> is not specified, returns the current x0 accessor.</p>
<p><a name="user-content-area_x0" href="#area_x0">#</a> <i>area</i>.<b>x0</b>([<i>x</i>]) <a href="https://github.com/d3/d3-shape/blob/master/src/area.js#L63" title="Source">&lt;&gt;</a></p>
<p>If <em>x</em> is specified, sets the x0 accessor to the specified function or number and returns this area generator. If <em>x</em> is not specified, returns the current x0 accessor, which defaults to:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">function</span> <span class="pl-en">x</span>(<span class="pl-smi">d</span>) {
  <span class="pl-k">return</span> d[<span class="pl-c1">0</span>];
}</pre></div>
<p>When an area is <a href="#_area">generated</a>, the x0 accessor will be invoked for each <a href="#area_defined">defined</a> element in the input data array, being passed the element <code>d</code>, the index <code>i</code>, and the array <code>data</code> as three arguments. The default x0 accessor assumes that the input data are two-element arrays of numbers. If your data are in a different format, or if you wish to transform the data before rendering, then you should specify a custom accessor. For example, if <code>x</code> is a <a href="https://github.com/d3/d3-scale#time-scales">time scale</a> and <code>y</code> is a <a href="https://github.com/d3/d3-scale#linear-scales">linear scale</a>:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">var</span> data <span class="pl-k">=</span> [
  {date<span class="pl-k">:</span> <span class="pl-k">new</span> <span class="pl-en">Date</span>(<span class="pl-c1">2007</span>, <span class="pl-c1">3</span>, <span class="pl-c1">24</span>), value<span class="pl-k">:</span> <span class="pl-c1">93.24</span>},
  {date<span class="pl-k">:</span> <span class="pl-k">new</span> <span class="pl-en">Date</span>(<span class="pl-c1">2007</span>, <span class="pl-c1">3</span>, <span class="pl-c1">25</span>), value<span class="pl-k">:</span> <span class="pl-c1">95.35</span>},
  {date<span class="pl-k">:</span> <span class="pl-k">new</span> <span class="pl-en">Date</span>(<span class="pl-c1">2007</span>, <span class="pl-c1">3</span>, <span class="pl-c1">26</span>), value<span class="pl-k">:</span> <span class="pl-c1">98.84</span>},
  {date<span class="pl-k">:</span> <span class="pl-k">new</span> <span class="pl-en">Date</span>(<span class="pl-c1">2007</span>, <span class="pl-c1">3</span>, <span class="pl-c1">27</span>), value<span class="pl-k">:</span> <span class="pl-c1">99.92</span>},
  {date<span class="pl-k">:</span> <span class="pl-k">new</span> <span class="pl-en">Date</span>(<span class="pl-c1">2007</span>, <span class="pl-c1">3</span>, <span class="pl-c1">30</span>), value<span class="pl-k">:</span> <span class="pl-c1">99.80</span>},
  {date<span class="pl-k">:</span> <span class="pl-k">new</span> <span class="pl-en">Date</span>(<span class="pl-c1">2007</span>, <span class="pl-c1">4</span>,  <span class="pl-c1">1</span>), value<span class="pl-k">:</span> <span class="pl-c1">99.47</span>},
  …
];

<span class="pl-k">var</span> area <span class="pl-k">=</span> <span class="pl-smi">d3</span>.<span class="pl-en">area</span>()
    .<span class="pl-c1">x</span>(<span class="pl-k">function</span>(<span class="pl-smi">d</span>) { <span class="pl-k">return</span> <span class="pl-en">x</span>(<span class="pl-smi">d</span>.<span class="pl-smi">date</span>); })
    .<span class="pl-en">y1</span>(<span class="pl-k">function</span>(<span class="pl-smi">d</span>) { <span class="pl-k">return</span> <span class="pl-en">y</span>(<span class="pl-smi">d</span>.<span class="pl-c1">value</span>); })
    .<span class="pl-en">y0</span>(<span class="pl-en">y</span>(<span class="pl-c1">0</span>));</pre></div>
<p><a name="user-content-area_x1" href="#area_x1">#</a> <i>area</i>.<b>x1</b>([<i>x</i>]) <a href="https://github.com/d3/d3-shape/blob/master/src/area.js#L67" title="Source">&lt;&gt;</a></p>
<p>If <em>x</em> is specified, sets the x1 accessor to the specified function or number and returns this area generator. If <em>x</em> is not specified, returns the current x1 accessor, which defaults to null, indicating that the previously-computed <a href="#area_x0">x0</a> value should be reused for the x1 value.</p>
<p>When an area is <a href="#_area">generated</a>, the x1 accessor will be invoked for each <a href="#area_defined">defined</a> element in the input data array, being passed the element <code>d</code>, the index <code>i</code>, and the array <code>data</code> as three arguments. See <a href="#area_x0"><em>area</em>.x0</a> for more information.</p>
<p><a name="user-content-area_y" href="#area_y">#</a> <i>area</i>.<b>y</b>([<i>y</i>]) <a href="https://github.com/d3/d3-shape/blob/master/src/area.js#L71" title="Source">&lt;&gt;</a></p>
<p>If <em>y</em> is specified, sets <a href="#area_y0">y0</a> to <em>y</em> and <a href="#area_y1">y1</a> to null and returns this area generator. If <em>y</em> is not specified, returns the current y0 accessor.</p>
<p><a name="user-content-area_y0" href="#area_y0">#</a> <i>area</i>.<b>y0</b>([<i>y</i>]) <a href="https://github.com/d3/d3-shape/blob/master/src/area.js#L75" title="Source">&lt;&gt;</a></p>
<p>If <em>y</em> is specified, sets the y0 accessor to the specified function or number and returns this area generator. If <em>y</em> is not specified, returns the current y0 accessor, which defaults to:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">function</span> <span class="pl-en">y</span>() {
  <span class="pl-k">return</span> <span class="pl-c1">0</span>;
}</pre></div>
<p>When an area is <a href="#_area">generated</a>, the y0 accessor will be invoked for each <a href="#area_defined">defined</a> element in the input data array, being passed the element <code>d</code>, the index <code>i</code>, and the array <code>data</code> as three arguments. See <a href="#area_x0"><em>area</em>.x0</a> for more information.</p>
<p><a name="user-content-area_y1" href="#area_y1">#</a> <i>area</i>.<b>y1</b>([<i>y</i>]) <a href="https://github.com/d3/d3-shape/blob/master/src/area.js#L79" title="Source">&lt;&gt;</a></p>
<p>If <em>y</em> is specified, sets the y1 accessor to the specified function or number and returns this area generator. If <em>y</em> is not specified, returns the current y1 accessor, which defaults to:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">function</span> <span class="pl-en">y</span>(<span class="pl-smi">d</span>) {
  <span class="pl-k">return</span> d[<span class="pl-c1">1</span>];
}</pre></div>
<p>A null accessor is also allowed, indicating that the previously-computed <a href="#area_y0">y0</a> value should be reused for the y1 value. When an area is <a href="#_area">generated</a>, the y1 accessor will be invoked for each <a href="#area_defined">defined</a> element in the input data array, being passed the element <code>d</code>, the index <code>i</code>, and the array <code>data</code> as three arguments. See <a href="#area_x0"><em>area</em>.x0</a> for more information.</p>
<p><a name="user-content-area_defined" href="#area_defined">#</a> <i>area</i>.<b>defined</b>([<i>defined</i>]) <a href="https://github.com/d3/d3-shape/blob/master/src/area.js#L96" title="Source">&lt;&gt;</a></p>
<p>If <em>defined</em> is specified, sets the defined accessor to the specified function or boolean and returns this area generator. If <em>defined</em> is not specified, returns the current defined accessor, which defaults to:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">function</span> <span class="pl-en">defined</span>() {
  <span class="pl-k">return</span> <span class="pl-c1">true</span>;
}</pre></div>
<p>The default accessor thus assumes that the input data is always defined. When an area is <a href="#_area">generated</a>, the defined accessor will be invoked for each element in the input data array, being passed the element <code>d</code>, the index <code>i</code>, and the array <code>data</code> as three arguments. If the given element is defined (<em>i.e.</em>, if the defined accessor returns a truthy value for this element), the <a href="#area_x0">x0</a>, <a href="#area_x1">x1</a>, <a href="#area_y0">y0</a> and <a href="#area_y1">y1</a> accessors will subsequently be evaluated and the point will be added to the current area segment. Otherwise, the element will be skipped, the current area segment will be ended, and a new area segment will be generated for the next defined point. As a result, the generated area may have several discrete segments. For example:</p>
<p><a href="http://bl.ocks.org/mbostock/3035090"><img src="https://raw.githubusercontent.com/d3/d3-shape/master/img/area-defined.png" width="480" height="250" alt="Area with Missing Data" style="max-width:100%;"></a></p>
<p>Note that if an area segment consists of only a single point, it may appear invisible unless rendered with rounded or square <a href="https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-linecap">line caps</a>. In addition, some curves such as <a href="#curveCardinalOpen">curveCardinalOpen</a> only render a visible segment if it contains multiple points.</p>
<p><a name="user-content-area_curve" href="#area_curve">#</a> <i>area</i>.<b>curve</b>([<i>curve</i>]) <a href="https://github.com/d3/d3-shape/blob/master/src/area.js#L100" title="Source">&lt;&gt;</a></p>
<p>If <em>curve</em> is specified, sets the <a href="#curves">curve factory</a> and returns this area generator. If <em>curve</em> is not specified, returns the current curve factory, which defaults to <a href="#curveLinear">curveLinear</a>.</p>
<p><a name="user-content-area_context" href="#area_context">#</a> <i>area</i>.<b>context</b>([<i>context</i>]) <a href="https://github.com/d3/d3-shape/blob/master/src/area.js#L104" title="Source">&lt;&gt;</a></p>
<p>If <em>context</em> is specified, sets the context and returns this area generator. If <em>context</em> is not specified, returns the current context, which defaults to null. If the context is not null, then the <a href="#_area">generated area</a> is rendered to this context as a sequence of <a href="http://www.w3.org/TR/2dcontext/#canvaspathmethods">path method</a> calls. Otherwise, a <a href="http://www.w3.org/TR/SVG/paths.html#PathData">path data</a> string representing the generated area is returned.</p>
<p><a name="user-content-area_lineX0" href="#area_lineX0">#</a> <i>area</i>.<b>lineX0</b>() <a href="https://github.com/d3/d3-shape/blob/master/src/area.js#L83" title="Source">&lt;&gt;</a>
<br><a name="user-content-area_lineY0" href="#area_lineY0">#</a> <i>area</i>.<b>lineY0</b>() <a href="https://github.com/d3/d3-shape/blob/master/src/area.js#L84" title="Source">&lt;&gt;</a></p>
<p>Returns a new <a href="#lines">line generator</a> that has this area generator’s current <a href="#area_defined">defined accessor</a>, <a href="#area_curve">curve</a> and <a href="#area_context">context</a>. The line’s <a href="#line_x"><em>x</em>-accessor</a> is this area’s <a href="#area_x0"><em>x0</em>-accessor</a>, and the line’s <a href="#line_y"><em>y</em>-accessor</a> is this area’s <a href="#area_y0"><em>y0</em>-accessor</a>.</p>
<p><a name="user-content-area_lineX1" href="#area_lineX1">#</a> <i>area</i>.<b>lineX1</b>() <a href="https://github.com/d3/d3-shape/blob/master/src/area.js#L92" title="Source">&lt;&gt;</a></p>
<p>Returns a new <a href="#lines">line generator</a> that has this area generator’s current <a href="#area_defined">defined accessor</a>, <a href="#area_curve">curve</a> and <a href="#area_context">context</a>. The line’s <a href="#line_x"><em>x</em>-accessor</a> is this area’s <a href="#area_x1"><em>x1</em>-accessor</a>, and the line’s <a href="#line_y"><em>y</em>-accessor</a> is this area’s <a href="#area_y0"><em>y0</em>-accessor</a>.</p>
<p><a name="user-content-area_lineY1" href="#area_lineY1">#</a> <i>area</i>.<b>lineY1</b>() <a href="https://github.com/d3/d3-shape/blob/master/src/area.js#L88" title="Source">&lt;&gt;</a></p>
<p>Returns a new <a href="#lines">line generator</a> that has this area generator’s current <a href="#area_defined">defined accessor</a>, <a href="#area_curve">curve</a> and <a href="#area_context">context</a>. The line’s <a href="#line_x"><em>x</em>-accessor</a> is this area’s <a href="#area_x0"><em>x0</em>-accessor</a>, and the line’s <a href="#line_y"><em>y</em>-accessor</a> is this area’s <a href="#area_y1"><em>y1</em>-accessor</a>.</p>
<p><a name="user-content-areaRadial" href="#areaRadial">#</a> d3.<b>areaRadial</b>() <a href="https://github.com/d3/d3-shape/blob/master/src/areaRadial.js" title="Source">&lt;&gt;</a></p>
<p><a href="https://raw.githubusercontent.com/d3/d3-shape/master/img/area-radial.png" target="_blank"><img alt="Radial Area" width="250" height="250" src="https://raw.githubusercontent.com/d3/d3-shape/master/img/area-radial.png" style="max-width:100%;"></a></p>
<p>Constructs a new radial area generator with the default settings. A radial area generator is equivalent to the standard Cartesian <a href="#area">area generator</a>, except the <a href="#area_x">x</a> and <a href="#area_y">y</a> accessors are replaced with <a href="#areaRadial_angle">angle</a> and <a href="#areaRadial_radius">radius</a> accessors. Radial areas are always positioned relative to ⟨0,0⟩; use a transform (see: <a href="http://www.w3.org/TR/SVG/coords.html#TransformAttribute">SVG</a>, <a href="http://www.w3.org/TR/2dcontext/#transformations">Canvas</a>) to change the origin.</p>
<p><a name="user-content-_areaRadial" href="#_areaRadial">#</a> <i>areaRadial</i>(<i>data</i>)</p>
<p>Equivalent to <a href="#_area"><em>area</em></a>.</p>
<p><a name="user-content-areaRadial_angle" href="#areaRadial_angle">#</a> <i>areaRadial</i>.<b>angle</b>([<i>angle</i>]) <a href="https://github.com/d3/d3-shape/blob/master/src/areaRadial.js#L13" title="Source">&lt;&gt;</a></p>
<p>Equivalent to <a href="#area_x"><em>area</em>.x</a>, except the accessor returns the angle in radians, with 0 at -<em>y</em> (12 o’clock).</p>
<p><a name="user-content-areaRadial_startAngle" href="#areaRadial_startAngle">#</a> <i>areaRadial</i>.<b>startAngle</b>([<i>angle</i>]) <a href="https://github.com/d3/d3-shape/blob/master/src/areaRadial.js#L14" title="Source">&lt;&gt;</a></p>
<p>Equivalent to <a href="#area_x0"><em>area</em>.x0</a>, except the accessor returns the angle in radians, with 0 at -<em>y</em> (12 o’clock). Note: typically <a href="#areaRadial_angle">angle</a> is used instead of setting separate start and end angles.</p>
<p><a name="user-content-areaRadial_endAngle" href="#areaRadial_endAngle">#</a> <i>areaRadial</i>.<b>endAngle</b>([<i>angle</i>]) <a href="https://github.com/d3/d3-shape/blob/master/src/areaRadial.js#L15" title="Source">&lt;&gt;</a></p>
<p>Equivalent to <a href="#area_x1"><em>area</em>.x1</a>, except the accessor returns the angle in radians, with 0 at -<em>y</em> (12 o’clock). Note: typically <a href="#areaRadial_angle">angle</a> is used instead of setting separate start and end angles.</p>
<p><a name="user-content-areaRadial_radius" href="#areaRadial_radius">#</a> <i>areaRadial</i>.<b>radius</b>([<i>radius</i>]) <a href="https://github.com/d3/d3-shape/blob/master/src/areaRadial.js#L16" title="Source">&lt;&gt;</a></p>
<p>Equivalent to <a href="#area_y"><em>area</em>.y</a>, except the accessor returns the radius: the distance from the origin ⟨0,0⟩.</p>
<p><a name="user-content-areaRadial_innerRadius" href="#areaRadial_innerRadius">#</a> <i>areaRadial</i>.<b>innerRadius</b>([<i>radius</i>]) <a href="https://github.com/d3/d3-shape/blob/master/src/areaRadial.js#L17" title="Source">&lt;&gt;</a></p>
<p>Equivalent to <a href="#area_y0"><em>area</em>.y0</a>, except the accessor returns the radius: the distance from the origin ⟨0,0⟩.</p>
<p><a name="user-content-areaRadial_outerRadius" href="#areaRadial_outerRadius">#</a> <i>areaRadial</i>.<b>outerRadius</b>([<i>radius</i>]) <a href="https://github.com/d3/d3-shape/blob/master/src/areaRadial.js#L18" title="Source">&lt;&gt;</a></p>
<p>Equivalent to <a href="#area_y1"><em>area</em>.y1</a>, except the accessor returns the radius: the distance from the origin ⟨0,0⟩.</p>
<p><a name="user-content-areaRadial_defined" href="#areaRadial_defined">#</a> <i>areaRadial</i>.<b>defined</b>([<i>defined</i>])</p>
<p>Equivalent to <a href="#area_defined"><em>area</em>.defined</a>.</p>
<p><a name="user-content-areaRadial_curve" href="#areaRadial_curve">#</a> <i>areaRadial</i>.<b>curve</b>([<i>curve</i>]) <a href="https://github.com/d3/d3-shape/blob/master/src/areaRadial.js#L24" title="Source">&lt;&gt;</a></p>
<p>Equivalent to <a href="#area_curve"><em>area</em>.curve</a>. Note that <a href="#curveMonotoneX">curveMonotoneX</a> or <a href="#curveMonotoneY">curveMonotoneY</a> are not recommended for radial areas because they assume that the data is monotonic in <em>x</em> or <em>y</em>, which is typically untrue of radial areas.</p>
<p><a name="user-content-areaRadial_context" href="#areaRadial_context">#</a> <i>areaRadial</i>.<b>context</b>([<i>context</i>])</p>
<p>Equivalent to <a href="#line_context"><em>line</em>.context</a>.</p>
<p><a name="user-content-areaRadial_lineStartAngle" href="#areaRadial_lineStartAngle">#</a> <i>areaRadial</i>.<b>lineStartAngle</b>() <a href="https://github.com/d3/d3-shape/blob/master/src/areaRadial.js#L19" title="Source">&lt;&gt;</a>
<br><a name="user-content-areaRadial_lineInnerRadius" href="#areaRadial_lineInnerRadius">#</a> <i>areaRadial</i>.<b>lineInnerRadius</b>() <a href="https://github.com/d3/d3-shape/blob/master/src/areaRadial.js#L21" title="Source">&lt;&gt;</a></p>
<p>Returns a new <a href="#lineRadial">radial line generator</a> that has this radial area generator’s current <a href="#areaRadial_defined">defined accessor</a>, <a href="#areaRadial_curve">curve</a> and <a href="#areaRadial_context">context</a>. The line’s <a href="#lineRadial_angle">angle accessor</a> is this area’s <a href="#areaRadial_startAngle">start angle accessor</a>, and the line’s <a href="#lineRadial_radius">radius accessor</a> is this area’s <a href="#areaRadial_innerRadius">inner radius accessor</a>.</p>
<p><a name="user-content-areaRadial_lineEndAngle" href="#areaRadial_lineEndAngle">#</a> <i>areaRadial</i>.<b>lineEndAngle</b>() <a href="https://github.com/d3/d3-shape/blob/master/src/areaRadial.js#L20" title="Source">&lt;&gt;</a></p>
<p>Returns a new <a href="#lineRadial">radial line generator</a> that has this radial area generator’s current <a href="#areaRadial_defined">defined accessor</a>, <a href="#areaRadial_curve">curve</a> and <a href="#areaRadial_context">context</a>. The line’s <a href="#lineRadial_angle">angle accessor</a> is this area’s <a href="#areaRadial_endAngle">end angle accessor</a>, and the line’s <a href="#lineRadial_radius">radius accessor</a> is this area’s <a href="#areaRadial_innerRadius">inner radius accessor</a>.</p>
<p><a name="user-content-areaRadial_lineOuterRadius" href="#areaRadial_lineOuterRadius">#</a> <i>areaRadial</i>.<b>lineOuterRadius</b>() <a href="https://github.com/d3/d3-shape/blob/master/src/areaRadial.js#L22" title="Source">&lt;&gt;</a></p>
<p>Returns a new <a href="#lineRadial">radial line generator</a> that has this radial area generator’s current <a href="#areaRadial_defined">defined accessor</a>, <a href="#areaRadial_curve">curve</a> and <a href="#areaRadial_context">context</a>. The line’s <a href="#lineRadial_angle">angle accessor</a> is this area’s <a href="#areaRadial_startAngle">start angle accessor</a>, and the line’s <a href="#lineRadial_radius">radius accessor</a> is this area’s <a href="#areaRadial_outerRadius">outer radius accessor</a>.</p>
<h3><a href="#curves" aria-hidden="true" class="anchor" id="user-content-curves"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Curves</h3>
<p>While <a href="#lines">lines</a> are defined as a sequence of two-dimensional [<em>x</em>, <em>y</em>] points, and <a href="#areas">areas</a> are similarly defined by a topline and a baseline, there remains the task of transforming this discrete representation into a continuous shape: <em>i.e.</em>, how to interpolate between the points. A variety of curves are provided for this purpose.</p>
<p>Curves are typically not constructed or used directly, instead being passed to <a href="#line_curve"><em>line</em>.curve</a> and <a href="#area_curve"><em>area</em>.curve</a>. For example:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">var</span> line <span class="pl-k">=</span> <span class="pl-smi">d3</span>.<span class="pl-en">line</span>()
    .<span class="pl-c1">x</span>(<span class="pl-k">function</span>(<span class="pl-smi">d</span>) { <span class="pl-k">return</span> <span class="pl-en">x</span>(<span class="pl-smi">d</span>.<span class="pl-smi">date</span>); })
    .<span class="pl-c1">y</span>(<span class="pl-k">function</span>(<span class="pl-smi">d</span>) { <span class="pl-k">return</span> <span class="pl-en">y</span>(<span class="pl-smi">d</span>.<span class="pl-c1">value</span>); })
    .<span class="pl-en">curve</span>(<span class="pl-smi">d3</span>.<span class="pl-smi">curveCatmullRom</span>.<span class="pl-en">alpha</span>(<span class="pl-c1">0.5</span>));</pre></div>
<p><a name="user-content-curveBasis" href="#curveBasis">#</a> d3.<b>curveBasis</b>(<i>context</i>) <a href="https://github.com/d3/d3-shape/blob/master/src/curve/basis.js#L12" title="Source">&lt;&gt;</a></p>
<p><a href="https://raw.githubusercontent.com/d3/d3-shape/master/img/basis.png" target="_blank"><img src="https://raw.githubusercontent.com/d3/d3-shape/master/img/basis.png" width="888" height="240" alt="basis" style="max-width:100%;"></a></p>
<p>Produces a cubic <a href="https://en.wikipedia.org/wiki/B-spline">basis spline</a> using the specified control points. The first and last points are triplicated such that the spline starts at the first point and ends at the last point, and is tangent to the line between the first and second points, and to the line between the penultimate and last points.</p>
<p><a name="user-content-curveBasisClosed" href="#curveBasisClosed">#</a> d3.<b>curveBasisClosed</b>(<i>context</i>) <a href="https://github.com/d3/d3-shape/blob/master/src/curve/basisClosed.js" title="Source">&lt;&gt;</a></p>
<p><a href="https://raw.githubusercontent.com/d3/d3-shape/master/img/basisClosed.png" target="_blank"><img src="https://raw.githubusercontent.com/d3/d3-shape/master/img/basisClosed.png" width="888" height="240" alt="basisClosed" style="max-width:100%;"></a></p>
<p>Produces a closed cubic <a href="https://en.wikipedia.org/wiki/B-spline">basis spline</a> using the specified control points. When a line segment ends, the first three control points are repeated, producing a closed loop with C2 continuity.</p>
<p><a name="user-content-curveBasisOpen" href="#curveBasisOpen">#</a> d3.<b>curveBasisOpen</b>(<i>context</i>) <a href="https://github.com/d3/d3-shape/blob/master/src/curve/basisOpen.js" title="Source">&lt;&gt;</a></p>
<p><a href="https://raw.githubusercontent.com/d3/d3-shape/master/img/basisOpen.png" target="_blank"><img src="https://raw.githubusercontent.com/d3/d3-shape/master/img/basisOpen.png" width="888" height="240" alt="basisOpen" style="max-width:100%;"></a></p>
<p>Produces a cubic <a href="https://en.wikipedia.org/wiki/B-spline">basis spline</a> using the specified control points. Unlike <a href="#basis">basis</a>, the first and last points are not repeated, and thus the curve typically does not intersect these points.</p>
<p><a name="user-content-curveBundle" href="#curveBundle">#</a> d3.<b>curveBundle</b>(<i>context</i>) <a href="https://github.com/d3/d3-shape/blob/master/src/curve/bundle.js" title="Source">&lt;&gt;</a></p>
<p><a href="https://raw.githubusercontent.com/d3/d3-shape/master/img/bundle.png" target="_blank"><img src="https://raw.githubusercontent.com/d3/d3-shape/master/img/bundle.png" width="888" height="240" alt="bundle" style="max-width:100%;"></a></p>
<p>Produces a straightened cubic <a href="https://en.wikipedia.org/wiki/B-spline">basis spline</a> using the specified control points, with the spline straightened according to the curve’s <a href="#curveBundle_beta"><em>beta</em></a>, which defaults to 0.85. This curve is typically used in <a href="http://bl.ocks.org/mbostock/7607999">hierarchical edge bundling</a> to disambiguate connections, as proposed by <a href="https://www.win.tue.nl/vis1/home/dholten/">Danny Holten</a> in <a href="https://www.win.tue.nl/vis1/home/dholten/papers/bundles_infovis.pdf">Hierarchical Edge Bundles: Visualization of Adjacency Relations in Hierarchical Data</a>. This curve does not implement <a href="#curve_areaStart"><em>curve</em>.areaStart</a> and <a href="#curve_areaEnd"><em>curve</em>.areaEnd</a>; it is intended to work with <a href="#lines">d3.line</a>, not <a href="#areas">d3.area</a>.</p>
<p><a name="user-content-curveBundle_beta" href="#curveBundle_beta">#</a> <i>bundle</i>.<b>beta</b>(<i>beta</i>) <a href="https://github.com/d3/d3-shape/blob/master/src/curve/bundle.js#L51" title="Source">&lt;&gt;</a></p>
<p>Returns a bundle curve with the specified <em>beta</em> in the range [0, 1], representing the bundle strength. If <em>beta</em> equals zero, a straight line between the first and last point is produced; if <em>beta</em> equals one, a standard <a href="#basis">basis</a> spline is produced. For example:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">var</span> line <span class="pl-k">=</span> <span class="pl-smi">d3</span>.<span class="pl-en">line</span>().<span class="pl-en">curve</span>(<span class="pl-smi">d3</span>.<span class="pl-smi">curveBundle</span>.<span class="pl-en">beta</span>(<span class="pl-c1">0.5</span>));</pre></div>
<p><a name="user-content-curveCardinal" href="#curveCardinal">#</a> d3.<b>curveCardinal</b>(<i>context</i>) <a href="https://github.com/d3/d3-shape/blob/master/src/curve/cardinal.js" title="Source">&lt;&gt;</a></p>
<p><a href="https://raw.githubusercontent.com/d3/d3-shape/master/img/cardinal.png" target="_blank"><img src="https://raw.githubusercontent.com/d3/d3-shape/master/img/cardinal.png" width="888" height="240" alt="cardinal" style="max-width:100%;"></a></p>
<p>Produces a cubic <a href="https://en.wikipedia.org/wiki/Cubic_Hermite_spline#Cardinal_spline">cardinal spline</a> using the specified control points, with one-sided differences used for the first and last piece. The default <a href="#curveCardinal_tension">tension</a> is 0.</p>
<p><a name="user-content-curveCardinalClosed" href="#curveCardinalClosed">#</a> d3.<b>curveCardinalClosed</b>(<i>context</i>) <a href="https://github.com/d3/d3-shape/blob/master/src/curve/cardinalClosed.js" title="Source">&lt;&gt;</a></p>
<p><a href="https://raw.githubusercontent.com/d3/d3-shape/master/img/cardinalClosed.png" target="_blank"><img src="https://raw.githubusercontent.com/d3/d3-shape/master/img/cardinalClosed.png" width="888" height="240" alt="cardinalClosed" style="max-width:100%;"></a></p>
<p>Produces a closed cubic <a href="https://en.wikipedia.org/wiki/Cubic_Hermite_spline#Cardinal_spline">cardinal spline</a> using the specified control points. When a line segment ends, the first three control points are repeated, producing a closed loop. The default <a href="#curveCardinal_tension">tension</a> is 0.</p>
<p><a name="user-content-curveCardinalOpen" href="#curveCardinalOpen">#</a> d3.<b>curveCardinalOpen</b>(<i>context</i>) <a href="https://github.com/d3/d3-shape/blob/master/src/curve/cardinalOpen.js" title="Source">&lt;&gt;</a></p>
<p><a href="https://raw.githubusercontent.com/d3/d3-shape/master/img/cardinalOpen.png" target="_blank"><img src="https://raw.githubusercontent.com/d3/d3-shape/master/img/cardinalOpen.png" width="888" height="240" alt="cardinalOpen" style="max-width:100%;"></a></p>
<p>Produces a cubic <a href="https://en.wikipedia.org/wiki/Cubic_Hermite_spline#Cardinal_spline">cardinal spline</a> using the specified control points. Unlike <a href="#curveCardinal">curveCardinal</a>, one-sided differences are not used for the first and last piece, and thus the curve starts at the second point and ends at the penultimate point. The default <a href="#curveCardinal_tension">tension</a> is 0.</p>
<p><a name="user-content-curveCardinal_tension" href="#curveCardinal_tension">#</a> <i>cardinal</i>.<b>tension</b>(<i>tension</i>) <a href="https://github.com/d3/d3-shape/blob/master/src/curve/cardinalOpen.js#L44" title="Source">&lt;&gt;</a></p>
<p>Returns a cardinal curve with the specified <em>tension</em> in the range [0, 1]. The <em>tension</em> determines the length of the tangents: a <em>tension</em> of one yields all zero tangents, equivalent to <a href="#curveLinear">curveLinear</a>; a <em>tension</em> of zero produces a uniform <a href="#curveCatmullRom">Catmull–Rom</a> spline. For example:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">var</span> line <span class="pl-k">=</span> <span class="pl-smi">d3</span>.<span class="pl-en">line</span>().<span class="pl-en">curve</span>(<span class="pl-smi">d3</span>.<span class="pl-smi">curveCardinal</span>.<span class="pl-en">tension</span>(<span class="pl-c1">0.5</span>));</pre></div>
<p><a name="user-content-curveCatmullRom" href="#curveCatmullRom">#</a> d3.<b>curveCatmullRom</b>(<i>context</i>) <a href="https://github.com/d3/d3-shape/blob/master/src/curve/catmullRom.js" title="Source">&lt;&gt;</a></p>
<p><a href="https://raw.githubusercontent.com/d3/d3-shape/master/img/catmullRom.png" target="_blank"><img src="https://raw.githubusercontent.com/d3/d3-shape/master/img/catmullRom.png" width="888" height="240" alt="catmullRom" style="max-width:100%;"></a></p>
<p>Produces a cubic Catmull–Rom spline using the specified control points and the parameter <a href="#catmullRom_alpha"><em>alpha</em></a>, which defaults to 0.5, as proposed by Yuksel et al. in <a href="http://www.cemyuksel.com/research/catmullrom_param/">On the Parameterization of Catmull–Rom Curves</a>, with one-sided differences used for the first and last piece.</p>
<p><a name="user-content-curveCatmullRomClosed" href="#curveCatmullRomClosed">#</a> d3.<b>curveCatmullRomClosed</b>(<i>context</i>) <a href="https://github.com/d3/d3-shape/blob/master/src/curve/catmullRomClosed.js" title="Source">&lt;&gt;</a></p>
<p><a href="https://raw.githubusercontent.com/d3/d3-shape/master/img/catmullRomClosed.png" target="_blank"><img src="https://raw.githubusercontent.com/d3/d3-shape/master/img/catmullRomClosed.png" width="888" height="330" alt="catmullRomClosed" style="max-width:100%;"></a></p>
<p>Produces a closed cubic Catmull–Rom spline using the specified control points and the parameter <a href="#catmullRom_alpha"><em>alpha</em></a>, which defaults to 0.5, as proposed by Yuksel et al. When a line segment ends, the first three control points are repeated, producing a closed loop.</p>
<p><a name="user-content-curveCatmullRomOpen" href="#curveCatmullRomOpen">#</a> d3.<b>curveCatmullRomOpen</b>(<i>context</i>) <a href="https://github.com/d3/d3-shape/blob/master/src/curve/catmullRomOpen.js" title="Source">&lt;&gt;</a></p>
<p><a href="https://raw.githubusercontent.com/d3/d3-shape/master/img/catmullRomOpen.png" target="_blank"><img src="https://raw.githubusercontent.com/d3/d3-shape/master/img/catmullRomOpen.png" width="888" height="240" alt="catmullRomOpen" style="max-width:100%;"></a></p>
<p>Produces a cubic Catmull–Rom spline using the specified control points and the parameter <a href="#catmullRom_alpha"><em>alpha</em></a>, which defaults to 0.5, as proposed by Yuksel et al. Unlike <a href="#curveCatmullRom">curveCatmullRom</a>, one-sided differences are not used for the first and last piece, and thus the curve starts at the second point and ends at the penultimate point.</p>
<p><a name="user-content-curveCatmullRom_alpha" href="#curveCatmullRom_alpha">#</a> <i>catmullRom</i>.<b>alpha</b>(<i>alpha</i>) <a href="https://github.com/d3/d3-shape/blob/master/src/curve/catmullRom.js#L83" title="Source">&lt;&gt;</a></p>
<p>Returns a cubic Catmull–Rom curve with the specified <em>alpha</em> in the range [0, 1]. If <em>alpha</em> is zero, produces a uniform spline, equivalent to <a href="#curveCardinal">curveCardinal</a> with a tension of zero; if <em>alpha</em> is one, produces a chordal spline; if <em>alpha</em> is 0.5, produces a <a href="https://en.wikipedia.org/wiki/Centripetal_Catmull%E2%80%93Rom_spline">centripetal spline</a>. Centripetal splines are recommended to avoid self-intersections and overshoot. For example:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">var</span> line <span class="pl-k">=</span> <span class="pl-smi">d3</span>.<span class="pl-en">line</span>().<span class="pl-en">curve</span>(<span class="pl-smi">d3</span>.<span class="pl-smi">curveCatmullRom</span>.<span class="pl-en">alpha</span>(<span class="pl-c1">0.5</span>));</pre></div>
<p><a name="user-content-curveLinear" href="#curveLinear">#</a> d3.<b>curveLinear</b>(<i>context</i>) <a href="https://github.com/d3/d3-shape/blob/master/src/curve/linear.js" title="Source">&lt;&gt;</a></p>
<p><a href="https://raw.githubusercontent.com/d3/d3-shape/master/img/linear.png" target="_blank"><img src="https://raw.githubusercontent.com/d3/d3-shape/master/img/linear.png" width="888" height="240" alt="linear" style="max-width:100%;"></a></p>
<p>Produces a polyline through the specified points.</p>
<p><a name="user-content-curveLinearClosed" href="#curveLinearClosed">#</a> d3.<b>curveLinearClosed</b>(<i>context</i>) <a href="https://github.com/d3/d3-shape/blob/master/src/curve/linearClosed.js" title="Source">&lt;&gt;</a></p>
<p><a href="https://raw.githubusercontent.com/d3/d3-shape/master/img/linearClosed.png" target="_blank"><img src="https://raw.githubusercontent.com/d3/d3-shape/master/img/linearClosed.png" width="888" height="240" alt="linearClosed" style="max-width:100%;"></a></p>
<p>Produces a closed polyline through the specified points by repeating the first point when the line segment ends.</p>
<p><a name="user-content-curveMonotoneX" href="#curveMonotoneX">#</a> d3.<b>curveMonotoneX</b>(<i>context</i>) <a href="https://github.com/d3/d3-shape/blob/master/src/curve/monotone.js#L98" title="Source">&lt;&gt;</a></p>
<p><a href="https://raw.githubusercontent.com/d3/d3-shape/master/img/monotoneX.png" target="_blank"><img src="https://raw.githubusercontent.com/d3/d3-shape/master/img/monotoneX.png" width="888" height="240" alt="monotoneX" style="max-width:100%;"></a></p>
<p>Produces a cubic spline that <a href="https://en.wikipedia.org/wiki/Monotone_cubic_interpolation">preserves monotonicity</a> in <em>y</em>, assuming monotonicity in <em>x</em>, as proposed by Steffen in <a href="http://adsabs.harvard.edu/full/1990A%26A...239..443S">A simple method for monotonic interpolation in one dimension</a>: “a smooth curve with continuous first-order derivatives that passes through any given set of data points without spurious oscillations. Local extrema can occur only at grid points where they are given by the data, but not in between two adjacent grid points.”</p>
<p><a name="user-content-curveMonotoneY" href="#curveMonotoneY">#</a> d3.<b>curveMonotoneY</b>(<i>context</i>) <a href="https://github.com/d3/d3-shape/blob/master/src/curve/monotone.js#L102" title="Source">&lt;&gt;</a></p>
<p><a href="https://raw.githubusercontent.com/d3/d3-shape/master/img/monotoneY.png" target="_blank"><img src="https://raw.githubusercontent.com/d3/d3-shape/master/img/monotoneY.png" width="888" height="240" alt="monotoneY" style="max-width:100%;"></a></p>
<p>Produces a cubic spline that <a href="https://en.wikipedia.org/wiki/Monotone_cubic_interpolation">preserves monotonicity</a> in <em>x</em>, assuming monotonicity in <em>y</em>, as proposed by Steffen in <a href="http://adsabs.harvard.edu/full/1990A%26A...239..443S">A simple method for monotonic interpolation in one dimension</a>: “a smooth curve with continuous first-order derivatives that passes through any given set of data points without spurious oscillations. Local extrema can occur only at grid points where they are given by the data, but not in between two adjacent grid points.”</p>
<p><a name="user-content-curveNatural" href="#curveNatural">#</a> d3.<b>curveNatural</b>(<i>context</i>) <a href="https://github.com/d3/d3-shape/blob/master/src/curve/natural.js" title="Source">&lt;&gt;</a></p>
<p><a href="https://raw.githubusercontent.com/d3/d3-shape/master/img/natural.png" target="_blank"><img src="https://raw.githubusercontent.com/d3/d3-shape/master/img/natural.png" width="888" height="240" alt="natural" style="max-width:100%;"></a></p>
<p>Produces a <a href="https://en.wikipedia.org/wiki/Spline_interpolation">natural</a> <a href="http://mathworld.wolfram.com/CubicSpline.html">cubic spline</a> with the second derivative of the spline set to zero at the endpoints.</p>
<p><a name="user-content-curveStep" href="#curveStep">#</a> d3.<b>curveStep</b>(<i>context</i>) <a href="https://github.com/d3/d3-shape/blob/master/src/curve/step.js" title="Source">&lt;&gt;</a></p>
<p><a href="https://raw.githubusercontent.com/d3/d3-shape/master/img/step.png" target="_blank"><img src="https://raw.githubusercontent.com/d3/d3-shape/master/img/step.png" width="888" height="240" alt="step" style="max-width:100%;"></a></p>
<p>Produces a piecewise constant function (a <a href="https://en.wikipedia.org/wiki/Step_function">step function</a>) consisting of alternating horizontal and vertical lines. The <em>y</em>-value changes at the midpoint of each pair of adjacent <em>x</em>-values.</p>
<p><a name="user-content-curveStepAfter" href="#curveStepAfter">#</a> d3.<b>curveStepAfter</b>(<i>context</i>) <a href="https://github.com/d3/d3-shape/blob/master/src/curve/step.js#L51" title="Source">&lt;&gt;</a></p>
<p><a href="https://raw.githubusercontent.com/d3/d3-shape/master/img/stepAfter.png" target="_blank"><img src="https://raw.githubusercontent.com/d3/d3-shape/master/img/stepAfter.png" width="888" height="240" alt="stepAfter" style="max-width:100%;"></a></p>
<p>Produces a piecewise constant function (a <a href="https://en.wikipedia.org/wiki/Step_function">step function</a>) consisting of alternating horizontal and vertical lines. The <em>y</em>-value changes after the <em>x</em>-value.</p>
<p><a name="user-content-curveStepBefore" href="#curveStepBefore">#</a> d3.<b>curveStepBefore</b>(<i>context</i>) <a href="https://github.com/d3/d3-shape/blob/master/src/curve/step.js#L47" title="Source">&lt;&gt;</a></p>
<p><a href="https://raw.githubusercontent.com/d3/d3-shape/master/img/stepBefore.png" target="_blank"><img src="https://raw.githubusercontent.com/d3/d3-shape/master/img/stepBefore.png" width="888" height="240" alt="stepBefore" style="max-width:100%;"></a></p>
<p>Produces a piecewise constant function (a <a href="https://en.wikipedia.org/wiki/Step_function">step function</a>) consisting of alternating horizontal and vertical lines. The <em>y</em>-value changes before the <em>x</em>-value.</p>
<h3><a href="#custom-curves" aria-hidden="true" class="anchor" id="user-content-custom-curves"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Custom Curves</h3>
<p>Curves are typically not used directly, instead being passed to <a href="#line_curve"><em>line</em>.curve</a> and <a href="#area_curve"><em>area</em>.curve</a>. However, you can define your own curve implementation should none of the built-in curves satisfy your needs using the following interface. You can also use this low-level interface with a built-in curve type as an alternative to the line and area generators.</p>
<p><a name="user-content-curve_areaStart" href="#curve_areaStart">#</a> <i>curve</i>.<b>areaStart</b>() <a href="https://github.com/d3/d3-shape/blob/master/src/curve/step.js#L7" title="Source">&lt;&gt;</a></p>
<p>Indicates the start of a new area segment. Each area segment consists of exactly two <a href="#curve_lineStart">line segments</a>: the topline, followed by the baseline, with the baseline points in reverse order.</p>
<p><a name="user-content-curve_areaEnd" href="#curve_areaEnd">#</a> <i>curve</i>.<b>areaEnd</b>() <a href="https://github.com/d3/d3-shape/blob/master/src/curve/step.js#L10" title="Source">&lt;&gt;</a></p>
<p>Indicates the end of the current area segment.</p>
<p><a name="user-content-curve_lineStart" href="#curve_lineStart">#</a> <i>curve</i>.<b>lineStart</b>() <a href="https://github.com/d3/d3-shape/blob/master/src/curve/step.js#L13" title="Source">&lt;&gt;</a></p>
<p>Indicates the start of a new line segment. Zero or more <a href="#curve_point">points</a> will follow.</p>
<p><a name="user-content-curve_lineEnd" href="#curve_lineEnd">#</a> <i>curve</i>.<b>lineEnd</b>() <a href="https://github.com/d3/d3-shape/blob/master/src/curve/step.js#L17" title="Source">&lt;&gt;</a></p>
<p>Indicates the end of the current line segment.</p>
<p><a name="user-content-curve_point" href="#curve_point">#</a> <i>curve</i>.<b>point</b>(<i>x</i>, <i>y</i>) <a href="https://github.com/d3/d3-shape/blob/master/src/curve/step.js#L22" title="Source">&lt;&gt;</a></p>
<p>Indicates a new point in the current line segment with the given <em>x</em>- and <em>y</em>-values.</p>
<h3><a href="#links" aria-hidden="true" class="anchor" id="user-content-links"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Links</h3>
<p><a href="http://bl.ocks.org/mbostock/9d0899acb5d3b8d839d9d613a9e1fe04"><img alt="Tidy Tree" src="https://raw.githubusercontent.com/d3/d3-hierarchy/master/img/tree.png" style="max-width:100%;"></a></p>
<p>The <strong>link</strong> shape generates a smooth cubic Bézier curve from a source point to a target point. The tangents of the curve at the start and end are either <a href="#linkVertical">vertical</a>, <a href="#linkHorizontal">horizontal</a> or <a href="#linkRadial">radial</a>.</p>
<p><a name="user-content-linkVertical" href="#linkVertical">#</a> d3.<b>linkVertical</b>() <a href="https://github.com/d3/d3-shape/blob/master/src/link/index.js#L74" title="Source">&lt;&gt;</a></p>
<p>Returns a new <a href="#_link">link generator</a> with vertical tangents. For example, to visualize <a href="https://github.com/d3/d3-hierarchy/blob/master/README.md#node_links">links</a> in a <a href="https://github.com/d3/d3-hierarchy/blob/master/README.md#tree">tree diagram</a> rooted on the top edge of the display, you might say:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">var</span> link <span class="pl-k">=</span> <span class="pl-smi">d3</span>.<span class="pl-en">linkVertical</span>()
    .<span class="pl-c1">x</span>(<span class="pl-k">function</span>(<span class="pl-smi">d</span>) { <span class="pl-k">return</span> <span class="pl-smi">d</span>.<span class="pl-c1">x</span>; })
    .<span class="pl-c1">y</span>(<span class="pl-k">function</span>(<span class="pl-smi">d</span>) { <span class="pl-k">return</span> <span class="pl-smi">d</span>.<span class="pl-c1">y</span>; });</pre></div>
<p><a name="user-content-linkHorizontal" href="#linkHorizontal">#</a> d3.<b>linkHorizontal</b>() <a href="https://github.com/d3/d3-shape/blob/master/src/link/index.js#L70" title="Source">&lt;&gt;</a></p>
<p>Returns a new <a href="#_link">link generator</a> with horizontal tangents. For example, to visualize <a href="https://github.com/d3/d3-hierarchy/blob/master/README.md#node_links">links</a> in a <a href="https://github.com/d3/d3-hierarchy/blob/master/README.md#tree">tree diagram</a> rooted on the left edge of the display, you might say:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">var</span> link <span class="pl-k">=</span> <span class="pl-smi">d3</span>.<span class="pl-en">linkHorizontal</span>()
    .<span class="pl-c1">x</span>(<span class="pl-k">function</span>(<span class="pl-smi">d</span>) { <span class="pl-k">return</span> <span class="pl-smi">d</span>.<span class="pl-c1">y</span>; })
    .<span class="pl-c1">y</span>(<span class="pl-k">function</span>(<span class="pl-smi">d</span>) { <span class="pl-k">return</span> <span class="pl-smi">d</span>.<span class="pl-c1">x</span>; });</pre></div>
<p><a href="#_link" name="user-content-_link">#</a> <i>link</i>(<i>arguments…</i>) <a href="https://github.com/d3/d3-shape/blob/master/src/link/index.js#L21" title="Source">&lt;&gt;</a></p>
<p>Generates a link for the given <em>arguments</em>. The <em>arguments</em> are arbitrary; they are simply propagated to the link generator’s accessor functions along with the <code>this</code> object. For example, with the default settings, an object expected:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-en">link</span>({
  source<span class="pl-k">:</span> [<span class="pl-c1">100</span>, <span class="pl-c1">100</span>],
  target<span class="pl-k">:</span> [<span class="pl-c1">300</span>, <span class="pl-c1">300</span>]
});</pre></div>
<p><a name="user-content-link_source" href="#link_source">#</a> <i>link</i>.<b>source</b>([<i>source</i>]) <a href="https://github.com/d3/d3-shape/blob/master/src/link/index.js#L28" title="Source">&lt;&gt;</a></p>
<p>If <em>source</em> is specified, sets the source accessor to the specified function and returns this link generator. If <em>source</em> is not specified, returns the current source accessor, which defaults to:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">function</span> <span class="pl-en">source</span>(<span class="pl-smi">d</span>) {
  <span class="pl-k">return</span> <span class="pl-smi">d</span>.<span class="pl-c1">source</span>;
}</pre></div>
<p><a name="user-content-link_target" href="#link_target">#</a> <i>link</i>.<b>target</b>([<i>target</i>]) <a href="https://github.com/d3/d3-shape/blob/master/src/link/index.js#L32" title="Source">&lt;&gt;</a></p>
<p>If <em>target</em> is specified, sets the target accessor to the specified function and returns this link generator. If <em>target</em> is not specified, returns the current target accessor, which defaults to:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">function</span> <span class="pl-en">target</span>(<span class="pl-smi">d</span>) {
  <span class="pl-k">return</span> <span class="pl-smi">d</span>.<span class="pl-c1">target</span>;
}</pre></div>
<p><a name="user-content-link_x" href="#link_x">#</a> <i>link</i>.<b>x</b>([<i>x</i>]) <a href="https://github.com/d3/d3-shape/blob/master/src/link/index.js#L36" title="Source">&lt;&gt;</a></p>
<p>If <em>x</em> is specified, sets the <em>x</em>-accessor to the specified function or number and returns this link generator. If <em>x</em> is not specified, returns the current <em>x</em>-accessor, which defaults to:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">function</span> <span class="pl-en">x</span>(<span class="pl-smi">d</span>) {
  <span class="pl-k">return</span> d[<span class="pl-c1">0</span>];
}</pre></div>
<p><a name="user-content-link_y" href="#link_y">#</a> <i>link</i>.<b>y</b>([<i>y</i>]) <a href="https://github.com/d3/d3-shape/blob/master/src/link/index.js#L40" title="Source">&lt;&gt;</a></p>
<p>If <em>y</em> is specified, sets the <em>y</em>-accessor to the specified function or number and returns this link generator. If <em>y</em> is not specified, returns the current <em>y</em>-accessor, which defaults to:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">function</span> <span class="pl-en">y</span>(<span class="pl-smi">d</span>) {
  <span class="pl-k">return</span> d[<span class="pl-c1">1</span>];
}</pre></div>
<p><a name="user-content-link_context" href="#link_context">#</a> <i>link</i>.<b>context</b>([<i>context</i>]) <a href="https://github.com/d3/d3-shape/blob/master/src/link/index.js#L44" title="Source">&lt;&gt;</a></p>
<p>If <em>context</em> is specified, sets the context and returns this link generator. If <em>context</em> is not specified, returns the current context, which defaults to null. If the context is not null, then the <a href="#_link">generated link</a> is rendered to this context as a sequence of <a href="http://www.w3.org/TR/2dcontext/#canvaspathmethods">path method</a> calls. Otherwise, a <a href="http://www.w3.org/TR/SVG/paths.html#PathData">path data</a> string representing the generated link is returned. See also <a href="https://github.com/d3/d3-path">d3-path</a>.</p>
<p><a name="user-content-linkRadial" href="#linkRadial">#</a> d3.<b>linkRadial</b>() <a href="https://github.com/d3/d3-shape/blob/master/src/link/index.js#L78" title="Source">&lt;&gt;</a></p>
<p>Returns a new <a href="#_link">link generator</a> with radial tangents. For example, to visualize <a href="https://github.com/d3/d3-hierarchy/blob/master/README.md#node_links">links</a> in a <a href="https://github.com/d3/d3-hierarchy/blob/master/README.md#tree">tree diagram</a> rooted in the center of the display, you might say:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">var</span> link <span class="pl-k">=</span> <span class="pl-smi">d3</span>.<span class="pl-en">linkRadial</span>()
    .<span class="pl-en">angle</span>(<span class="pl-k">function</span>(<span class="pl-smi">d</span>) { <span class="pl-k">return</span> <span class="pl-smi">d</span>.<span class="pl-c1">x</span>; })
    .<span class="pl-en">radius</span>(<span class="pl-k">function</span>(<span class="pl-smi">d</span>) { <span class="pl-k">return</span> <span class="pl-smi">d</span>.<span class="pl-c1">y</span>; });</pre></div>
<p><a name="user-content-linkRadial_angle" href="#linkRadial_angle">#</a> <i>linkRadial</i>.<b>angle</b>([<i>angle</i>]) <a href="https://github.com/d3/d3-shape/blob/master/src/link/index.js#L80" title="Source">&lt;&gt;</a></p>
<p>Equivalent to <a href="#link_x"><em>link</em>.x</a>, except the accessor returns the angle in radians, with 0 at -<em>y</em> (12 o’clock).</p>
<p><a name="user-content-linkRadial_radius" href="#linkRadial_radius">#</a> <i>linkRadial</i>.<b>radius</b>([<i>radius</i>]) <a href="https://github.com/d3/d3-shape/blob/master/src/link/index.js#L81" title="Source">&lt;&gt;</a></p>
<p>Equivalent to <a href="#link_y"><em>link</em>.y</a>, except the accessor returns the radius: the distance from the origin ⟨0,0⟩.</p>
<h3><a href="#symbols" aria-hidden="true" class="anchor" id="user-content-symbols"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Symbols</h3>
<p><a href="#symbolCircle"><img src="https://raw.githubusercontent.com/d3/d3-shape/master/img/circle.png" width="100" height="100" style="max-width:100%;"></a><a href="#symbolCross"><img src="https://raw.githubusercontent.com/d3/d3-shape/master/img/cross.png" width="100" height="100" style="max-width:100%;"></a><a href="#symbolDiamond"><img src="https://raw.githubusercontent.com/d3/d3-shape/master/img/diamond.png" width="100" height="100" style="max-width:100%;"></a><a href="#symbolSquare"><img src="https://raw.githubusercontent.com/d3/d3-shape/master/img/square.png" width="100" height="100" style="max-width:100%;"></a><a href="#symbolStar"><img src="https://raw.githubusercontent.com/d3/d3-shape/master/img/star.png" width="100" height="100" style="max-width:100%;"></a><a href="#symbolTriangle"><img src="https://raw.githubusercontent.com/d3/d3-shape/master/img/triangle.png" width="100" height="100" style="max-width:100%;"></a><a href="#symbolWye"><img src="https://raw.githubusercontent.com/d3/d3-shape/master/img/wye.png" width="100" height="100" style="max-width:100%;"></a></p>
<p>Symbols provide a categorical shape encoding as is commonly used in scatterplots. Symbols are always centered at ⟨0,0⟩; use a transform (see: <a href="http://www.w3.org/TR/SVG/coords.html#TransformAttribute">SVG</a>, <a href="http://www.w3.org/TR/2dcontext/#transformations">Canvas</a>) to move the symbol to a different position.</p>
<p><a name="user-content-symbol" href="#symbol">#</a> d3.<b>symbol</b>() <a href="https://github.com/d3/d3-shape/blob/master/src/symbol.js" title="Source">&lt;&gt;</a></p>
<p>Constructs a new symbol generator with the default settings.</p>
<p><a name="user-content-_symbol" href="#_symbol">#</a> <i>symbol</i>(<i>arguments</i>…) <a href="https://github.com/d3/d3-shape/blob/master/src/symbol.js#L11" title="Source">&lt;&gt;</a></p>
<p>Generates a symbol for the given <em>arguments</em>. The <em>arguments</em> are arbitrary; they are simply propagated to the symbol generator’s accessor functions along with the <code>this</code> object. For example, with the default settings, no arguments are needed to produce a circle with area 64 square pixels. If the symbol generator has a <a href="#symbol_context">context</a>, then the symbol is rendered to this context as a sequence of <a href="http://www.w3.org/TR/2dcontext/#canvaspathmethods">path method</a> calls and this function returns void. Otherwise, a <a href="http://www.w3.org/TR/SVG/paths.html#PathData">path data</a> string is returned.</p>
<p><a name="user-content-symbol_type" href="#symbol_type">#</a> <i>symbol</i>.<b>type</b>([<i>type</i>]) <a href="https://github.com/d3/d3-shape/blob/master/src/symbol.js#L33" title="Source">&lt;&gt;</a></p>
<p>If <em>type</em> is specified, sets the symbol type to the specified function or symbol type and returns this line generator. If <em>type</em> is not specified, returns the current symbol type accessor, which defaults to:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">function</span> <span class="pl-en">type</span>() {
  <span class="pl-k">return</span> circle;
}</pre></div>
<p>See <a href="#symbols">symbols</a> for the set of built-in symbol types. To implement a custom symbol type, pass an object that implements <a href="#symbolType_draw"><em>symbolType</em>.draw</a>.</p>
<p><a name="user-content-symbol_size" href="#symbol_size">#</a> <i>symbol</i>.<b>size</b>([<i>size</i>]) <a href="https://github.com/d3/d3-shape/blob/master/src/symbol.js#L37" title="Source">&lt;&gt;</a></p>
<p>If <em>size</em> is specified, sets the size to the specified function or number and returns this symbol generator. If <em>size</em> is not specified, returns the current size accessor, which defaults to:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">function</span> <span class="pl-en">size</span>() {
  <span class="pl-k">return</span> <span class="pl-c1">64</span>;
}</pre></div>
<p>Specifying the size as a function is useful for constructing a scatterplot with a size encoding. If you wish to scale the symbol to fit a given bounding box, rather than by area, try <a href="http://bl.ocks.org/mbostock/3dd515e692504c92ab65">SVG’s getBBox</a>.</p>
<p><a name="user-content-symbol_context" href="#symbol_context">#</a> <i>symbol</i>.<b>context</b>([<i>context</i>]) <a href="https://github.com/d3/d3-shape/blob/master/src/symbol.js#L41" title="Source">&lt;&gt;</a></p>
<p>If <em>context</em> is specified, sets the context and returns this symbol generator. If <em>context</em> is not specified, returns the current context, which defaults to null. If the context is not null, then the <a href="#_symbol">generated symbol</a> is rendered to this context as a sequence of <a href="http://www.w3.org/TR/2dcontext/#canvaspathmethods">path method</a> calls. Otherwise, a <a href="http://www.w3.org/TR/SVG/paths.html#PathData">path data</a> string representing the generated symbol is returned.</p>
<p><a name="user-content-symbols" href="#symbols">#</a> d3.<b>symbols</b></p>
<p>An array containing the set of all built-in symbol types: <a href="#symbolCircle">circle</a>, <a href="#symbolCross">cross</a>, <a href="#symbolDiamond">diamond</a>, <a href="#symbolSquare">square</a>, <a href="#symbolStar">star</a>, <a href="#symbolTriangle">triangle</a>, and <a href="#symbolWye">wye</a>. Useful for constructing the range of an <a href="https://github.com/d3/d3-scale#ordinal-scales">ordinal scale</a> should you wish to use a shape encoding for categorical data.</p>
<p><a name="user-content-symbolCircle" href="#symbolCircle">#</a> d3.<b>symbolCircle</b> <a href="https://github.com/d3/d3-shape/blob/master/src/symbol/circle.js" title="Source">&lt;&gt;</a></p>
<p>The circle symbol type.</p>
<p><a name="user-content-symbolCross" href="#symbolCross">#</a> d3.<b>symbolCross</b> <a href="https://github.com/d3/d3-shape/blob/master/src/symbol/cross.js" title="Source">&lt;&gt;</a></p>
<p>The Greek cross symbol type, with arms of equal length.</p>
<p><a name="user-content-symbolDiamond" href="#symbolDiamond">#</a> d3.<b>symbolDiamond</b> <a href="https://github.com/d3/d3-shape/blob/master/src/symbol/diamond.js" title="Source">&lt;&gt;</a></p>
<p>The rhombus symbol type.</p>
<p><a name="user-content-symbolSquare" href="#symbolSquare">#</a> d3.<b>symbolSquare</b> <a href="https://github.com/d3/d3-shape/blob/master/src/symbol/square.js" title="Source">&lt;&gt;</a></p>
<p>The square symbol type.</p>
<p><a name="user-content-symbolStar" href="#symbolStar">#</a> d3.<b>symbolStar</b> <a href="https://github.com/d3/d3-shape/blob/master/src/symbol/star.js" title="Source">&lt;&gt;</a></p>
<p>The pentagonal star (pentagram) symbol type.</p>
<p><a name="user-content-symbolTriangle" href="#symbolTriangle">#</a> d3.<b>symbolTriangle</b> <a href="https://github.com/d3/d3-shape/blob/master/src/symbol/triangle.js" title="Source">&lt;&gt;</a></p>
<p>The up-pointing triangle symbol type.</p>
<p><a name="user-content-symbolWye" href="#symbolWye">#</a> d3.<b>symbolWye</b> <a href="https://github.com/d3/d3-shape/blob/master/src/symbol/wye.js" title="Source">&lt;&gt;</a></p>
<p>The Y-shape symbol type.</p>
<p><a name="user-content-pointRadial" href="#pointRadial">#</a> d3.<b>pointRadial</b>(<i>angle</i>, <i>radius</i>) <a href="https://github.com/d3/d3-shape/blob/master/src/pointRadial.js" title="Source">&lt;&gt;</a></p>
<p>Returns the point [<i>x</i>, <i>y</i>] for the given <em>angle</em> in radians, with 0 at -<em>y</em> (12 o’clock) and positive angles proceeding clockwise, and the given <em>radius</em>.</p>
<h3><a href="#custom-symbol-types" aria-hidden="true" class="anchor" id="user-content-custom-symbol-types"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Custom Symbol Types</h3>
<p>Symbol types are typically not used directly, instead being passed to <a href="#symbol_type"><em>symbol</em>.type</a>. However, you can define your own symbol type implementation should none of the built-in types satisfy your needs using the following interface. You can also use this low-level interface with a built-in symbol type as an alternative to the symbol generator.</p>
<p><a name="user-content-symbolType_draw" href="#symbolType_draw">#</a> <i>symbolType</i>.<b>draw</b>(<i>context</i>, <i>size</i>)</p>
<p>Renders this symbol type to the specified <em>context</em> with the specified <em>size</em> in square pixels. The <em>context</em> implements the <a href="http://www.w3.org/TR/2dcontext/#canvaspathmethods">CanvasPathMethods</a> interface. (Note that this is a subset of the CanvasRenderingContext2D interface!)</p>
<h3><a href="#stacks" aria-hidden="true" class="anchor" id="user-content-stacks"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Stacks</h3>
<p><a href="http://bl.ocks.org/mbostock/3886208"><img alt="Stacked Bar Chart" src="https://raw.githubusercontent.com/d3/d3-shape/master/img/stacked-bar.png" width="295" height="154" style="max-width:100%;"></a><a href="http://bl.ocks.org/mbostock/4060954"><img alt="Streamgraph" src="https://raw.githubusercontent.com/d3/d3-shape/master/img/stacked-stream.png" width="295" height="154" style="max-width:100%;"></a></p>
<p>Some shape types can be stacked, placing one shape adjacent to another. For example, a bar chart of monthly sales might be broken down into a multi-series bar chart by product category, stacking bars vertically. This is equivalent to subdividing a bar chart by an ordinal dimension (such as product category) and applying a color encoding.</p>
<p>Stacked charts can show overall value and per-category value simultaneously; however, it is typically harder to compare across categories, as only the bottom layer of the stack is aligned. So, chose the <a href="#stack_order">stack order</a> carefully, and consider a <a href="#stackOffsetWiggle">streamgraph</a>. (See also <a href="http://bl.ocks.org/mbostock/3887051">grouped charts</a>.)</p>
<p>Like the <a href="#pies">pie generator</a>, the stack generator does not produce a shape directly. Instead it computes positions which you can then pass to an <a href="#areas">area generator</a> or use directly, say to position bars.</p>
<p><a name="user-content-stack" href="#stack">#</a> d3.<b>stack</b>() <a href="https://github.com/d3/d3-shape/blob/master/src/stack.js" title="Source">&lt;&gt;</a></p>
<p>Constructs a new stack generator with the default settings.</p>
<p><a name="user-content-_stack" href="#_stack">#</a> <i>stack</i>(<i>data</i>[, <i>arguments…</i>]) <a href="https://github.com/d3/d3-shape/blob/master/src/stack.js#L16" title="Source">&lt;&gt;</a></p>
<p>Generates a stack for the given array of <em>data</em>, returning an array representing each series. Any additional <em>arguments</em> are arbitrary; they are simply propagated to accessors along with the <code>this</code> object.</p>
<p>The series are determined by the <a href="#stack_keys">keys accessor</a>; each series <em>i</em> in the returned array corresponds to the <em>i</em>th key. Each series is an array of points, where each point <em>j</em> corresponds to the <em>j</em>th element in the input <em>data</em>. Lastly, each point is represented as an array [<em>y0</em>, <em>y1</em>] where <em>y0</em> is the lower value (baseline) and <em>y1</em> is the upper value (topline); the difference between <em>y0</em> and <em>y1</em> corresponds to the computed <a href="#stack_value">value</a> for this point. The key for each series is available as <em>series</em>.key, and the <a href="#stack_order">index</a> as <em>series</em>.index. The input data element for each point is available as <em>point</em>.data.</p>
<p>For example, consider the following table representing monthly sales of fruits:</p>
<table>
<thead>
<tr>
<th>Month</th>
<th>Apples</th>
<th>Bananas</th>
<th>Cherries</th>
<th>Dates</th>
</tr>
</thead>
<tbody>
<tr>
<td>1/2015</td>
<td>3840</td>
<td>1920</td>
<td>960</td>
<td>400</td>
</tr>
<tr>
<td>2/2015</td>
<td>1600</td>
<td>1440</td>
<td>960</td>
<td>400</td>
</tr>
<tr>
<td>3/2015</td>
<td>640</td>
<td>960</td>
<td>640</td>
<td>400</td>
</tr>
<tr>
<td>4/2015</td>
<td>320</td>
<td>480</td>
<td>640</td>
<td>400</td>
</tr></tbody></table>
<p>This might be represented in JavaScript as an array of objects:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">var</span> data <span class="pl-k">=</span> [
  {month<span class="pl-k">:</span> <span class="pl-k">new</span> <span class="pl-en">Date</span>(<span class="pl-c1">2015</span>, <span class="pl-c1">0</span>, <span class="pl-c1">1</span>), apples<span class="pl-k">:</span> <span class="pl-c1">3840</span>, bananas<span class="pl-k">:</span> <span class="pl-c1">1920</span>, cherries<span class="pl-k">:</span> <span class="pl-c1">960</span>, dates<span class="pl-k">:</span> <span class="pl-c1">400</span>},
  {month<span class="pl-k">:</span> <span class="pl-k">new</span> <span class="pl-en">Date</span>(<span class="pl-c1">2015</span>, <span class="pl-c1">1</span>, <span class="pl-c1">1</span>), apples<span class="pl-k">:</span> <span class="pl-c1">1600</span>, bananas<span class="pl-k">:</span> <span class="pl-c1">1440</span>, cherries<span class="pl-k">:</span> <span class="pl-c1">960</span>, dates<span class="pl-k">:</span> <span class="pl-c1">400</span>},
  {month<span class="pl-k">:</span> <span class="pl-k">new</span> <span class="pl-en">Date</span>(<span class="pl-c1">2015</span>, <span class="pl-c1">2</span>, <span class="pl-c1">1</span>), apples<span class="pl-k">:</span>  <span class="pl-c1">640</span>, bananas<span class="pl-k">:</span>  <span class="pl-c1">960</span>, cherries<span class="pl-k">:</span> <span class="pl-c1">640</span>, dates<span class="pl-k">:</span> <span class="pl-c1">400</span>},
  {month<span class="pl-k">:</span> <span class="pl-k">new</span> <span class="pl-en">Date</span>(<span class="pl-c1">2015</span>, <span class="pl-c1">3</span>, <span class="pl-c1">1</span>), apples<span class="pl-k">:</span>  <span class="pl-c1">320</span>, bananas<span class="pl-k">:</span>  <span class="pl-c1">480</span>, cherries<span class="pl-k">:</span> <span class="pl-c1">640</span>, dates<span class="pl-k">:</span> <span class="pl-c1">400</span>}
];</pre></div>
<p>To produce a stack for this data:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">var</span> stack <span class="pl-k">=</span> <span class="pl-smi">d3</span>.<span class="pl-en">stack</span>()
    .<span class="pl-c1">keys</span>([<span class="pl-s"><span class="pl-pds">"</span>apples<span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>bananas<span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>cherries<span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>dates<span class="pl-pds">"</span></span>])
    .<span class="pl-en">order</span>(<span class="pl-smi">d3</span>.<span class="pl-smi">stackOrderNone</span>)
    .<span class="pl-en">offset</span>(<span class="pl-smi">d3</span>.<span class="pl-smi">stackOffsetNone</span>);

<span class="pl-k">var</span> series <span class="pl-k">=</span> <span class="pl-en">stack</span>(data);</pre></div>
<p>The resulting array has one element per <em>series</em>. Each series has one point per month, and each point has a lower and upper value defining the baseline and topline:</p>
<div class="highlight highlight-source-js"><pre>[
  [[   <span class="pl-c1">0</span>, <span class="pl-c1">3840</span>], [   <span class="pl-c1">0</span>, <span class="pl-c1">1600</span>], [   <span class="pl-c1">0</span>,  <span class="pl-c1">640</span>], [   <span class="pl-c1">0</span>,  <span class="pl-c1">320</span>]], <span class="pl-c"><span class="pl-c">//</span> apples</span>
  [[<span class="pl-c1">3840</span>, <span class="pl-c1">5760</span>], [<span class="pl-c1">1600</span>, <span class="pl-c1">3040</span>], [ <span class="pl-c1">640</span>, <span class="pl-c1">1600</span>], [ <span class="pl-c1">320</span>,  <span class="pl-c1">800</span>]], <span class="pl-c"><span class="pl-c">//</span> bananas</span>
  [[<span class="pl-c1">5760</span>, <span class="pl-c1">6720</span>], [<span class="pl-c1">3040</span>, <span class="pl-c1">4000</span>], [<span class="pl-c1">1600</span>, <span class="pl-c1">2240</span>], [ <span class="pl-c1">800</span>, <span class="pl-c1">1440</span>]], <span class="pl-c"><span class="pl-c">//</span> cherries</span>
  [[<span class="pl-c1">6720</span>, <span class="pl-c1">7120</span>], [<span class="pl-c1">4000</span>, <span class="pl-c1">4400</span>], [<span class="pl-c1">2240</span>, <span class="pl-c1">2640</span>], [<span class="pl-c1">1440</span>, <span class="pl-c1">1840</span>]], <span class="pl-c"><span class="pl-c">//</span> dates</span>
]</pre></div>
<p>Each series in then typically passed to an <a href="#areas">area generator</a> to render an area chart, or used to construct rectangles for a bar chart.</p>
<p><a name="user-content-stack_keys" href="#stack_keys">#</a> <i>stack</i>.<b>keys</b>([<i>keys</i>]) <a href="https://github.com/d3/d3-shape/blob/master/src/stack.js#L40" title="Source">&lt;&gt;</a></p>
<p>If <em>keys</em> is specified, sets the keys accessor to the specified function or array and returns this stack generator. If <em>keys</em> is not specified, returns the current keys accessor, which defaults to the empty array. A series (layer) is <a href="#_stack">generated</a> for each key. Keys are typically strings, but they may be arbitrary values. The series’ key is passed to the <a href="#stack_value">value accessor</a>, along with each data point, to compute the point’s value.</p>
<p><a name="user-content-stack_value" href="#stack_value">#</a> <i>stack</i>.<b>value</b>([<i>value</i>]) <a href="https://github.com/d3/d3-shape/blob/master/src/stack.js#L44" title="Source">&lt;&gt;</a></p>
<p>If <em>value</em> is specified, sets the value accessor to the specified function or number and returns this stack generator. If <em>value</em> is not specified, returns the current value accessor, which defaults to:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">function</span> <span class="pl-en">value</span>(<span class="pl-smi">d</span>, <span class="pl-smi">key</span>) {
  <span class="pl-k">return</span> d[key];
}</pre></div>
<p>Thus, by default the stack generator assumes that the input data is an array of objects, with each object exposing named properties with numeric values; see <a href="#_stack"><em>stack</em></a> for an example.</p>
<p><a name="user-content-stack_order" href="#stack_order">#</a> <i>stack</i>.<b>order</b>([<i>order</i>]) <a href="https://github.com/d3/d3-shape/blob/master/src/stack.js#L48" title="Source">&lt;&gt;</a></p>
<p>If <em>order</em> is specified, sets the order accessor to the specified function or array and returns this stack generator. If <em>order</em> is not specified, returns the current order acccesor, which defaults to <a href="#stackOrderNone">stackOrderNone</a>; this uses the order given by the <a href="#stack_key">key accessor</a>. See <a href="#stack-orders">stack orders</a> for the built-in orders.</p>
<p>If <em>order</em> is a function, it is passed the generated series array and must return an array of numeric indexes representing the stack order. For example, the default order is defined as:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">function</span> <span class="pl-en">orderNone</span>(<span class="pl-smi">series</span>) {
  <span class="pl-k">var</span> n <span class="pl-k">=</span> <span class="pl-smi">series</span>.<span class="pl-c1">length</span>, o <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Array</span>(n);
  <span class="pl-k">while</span> (<span class="pl-k">--</span>n <span class="pl-k">&gt;=</span> <span class="pl-c1">0</span>) o[n] <span class="pl-k">=</span> n;
  <span class="pl-k">return</span> o;
}</pre></div>
<p>The stack order is computed prior to the <a href="#stack_offset">offset</a>; thus, the lower value for all points is zero at the time the order is computed. The index attribute for each series is also not set until after the order is computed.</p>
<p><a name="user-content-stack_offset" href="#stack_offset">#</a> <i>stack</i>.<b>offset</b>([<i>offset</i>]) <a href="https://github.com/d3/d3-shape/blob/master/src/stack.js#L52" title="Source">&lt;&gt;</a></p>
<p>If <em>offset</em> is specified, sets the offset accessor to the specified function or array and returns this stack generator. If <em>offset</em> is not specified, returns the current offset acccesor, which defaults to <a href="#stackOffsetNone">stackOffsetNone</a>; this uses a zero baseline. See <a href="#stack-offsets">stack offsets</a> for the built-in offsets.</p>
<p>If <em>offset</em> is a function, it is passed the generated series array and the order index array. The offset function is then responsible for updating the lower and upper values in the series array to layout the stack. For example, the default offset is defined as:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">function</span> <span class="pl-en">offsetNone</span>(<span class="pl-smi">series</span>, <span class="pl-smi">order</span>) {
  <span class="pl-k">if</span> (<span class="pl-k">!</span>((n <span class="pl-k">=</span> <span class="pl-smi">series</span>.<span class="pl-c1">length</span>) <span class="pl-k">&gt;</span> <span class="pl-c1">1</span>)) <span class="pl-k">return</span>;
  <span class="pl-k">for</span> (<span class="pl-k">var</span> i <span class="pl-k">=</span> <span class="pl-c1">1</span>, s0, s1 <span class="pl-k">=</span> series[order[<span class="pl-c1">0</span>]], n, m <span class="pl-k">=</span> <span class="pl-smi">s1</span>.<span class="pl-c1">length</span>; i <span class="pl-k">&lt;</span> n; <span class="pl-k">++</span>i) {
    s0 <span class="pl-k">=</span> s1, s1 <span class="pl-k">=</span> series[order[i]];
    <span class="pl-k">for</span> (<span class="pl-k">var</span> j <span class="pl-k">=</span> <span class="pl-c1">0</span>; j <span class="pl-k">&lt;</span> m; <span class="pl-k">++</span>j) {
      s1[j][<span class="pl-c1">1</span>] <span class="pl-k">+=</span> s1[j][<span class="pl-c1">0</span>] <span class="pl-k">=</span> s0[j][<span class="pl-c1">1</span>];
    }
  }
}</pre></div>
<h3><a href="#stack-orders" aria-hidden="true" class="anchor" id="user-content-stack-orders"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Stack Orders</h3>
<p>Stack orders are typically not used directly, but are instead passed to <a href="#stack_order"><em>stack</em>.order</a>.</p>
<p><a name="user-content-stackOrderAscending" href="#stackOrderAscending">#</a> d3.<b>stackOrderAscending</b>(<i>series</i>) <a href="https://github.com/d3/d3-shape/blob/master/src/order/ascending.js" title="Source">&lt;&gt;</a></p>
<p>Returns a series order such that the smallest series (according to the sum of values) is at the bottom.</p>
<p><a name="user-content-stackOrderDescending" href="#stackOrderDescending">#</a> d3.<b>stackOrderDescending</b>(<i>series</i>) <a href="https://github.com/d3/d3-shape/blob/master/src/order/descending.js" title="Source">&lt;&gt;</a></p>
<p>Returns a series order such that the largest series (according to the sum of values) is at the bottom.</p>
<p><a name="user-content-stackOrderInsideOut" href="#stackOrderInsideOut">#</a> d3.<b>stackOrderInsideOut</b>(<i>series</i>) <a href="https://github.com/d3/d3-shape/blob/master/src/order/insideOut.js" title="Source">&lt;&gt;</a></p>
<p>Returns a series order such that the larger series (according to the sum of values) are on the inside and the smaller series are on the outside. This order is recommended for streamgraphs in conjunction with the <a href="#stackOffsetWiggle">wiggle offset</a>. See <a href="http://leebyron.com/streamgraph/">Stacked Graphs—Geometry &amp; Aesthetics</a> by Byron &amp; Wattenberg for more information.</p>
<p><a name="user-content-stackOrderNone" href="#stackOrderNone">#</a> d3.<b>stackOrderNone</b>(<i>series</i>) <a href="https://github.com/d3/d3-shape/blob/master/src/order/none.js" title="Source">&lt;&gt;</a></p>
<p>Returns the given series order [0, 1, … <em>n</em> - 1] where <em>n</em> is the number of elements in <em>series</em>. Thus, the stack order is given by the <a href="#stack_keys">key accessor</a>.</p>
<p><a name="user-content-stackOrderReverse" href="#stackOrderReverse">#</a> d3.<b>stackOrderReverse</b>(<i>series</i>) <a href="https://github.com/d3/d3-shape/blob/master/src/order/reverse.js" title="Source">&lt;&gt;</a></p>
<p>Returns the reverse of the given series order [<em>n</em> - 1, <em>n</em> - 2, … 0] where <em>n</em> is the number of elements in <em>series</em>. Thus, the stack order is given by the reverse of the <a href="#stack_keys">key accessor</a>.</p>
<h3><a href="#stack-offsets" aria-hidden="true" class="anchor" id="user-content-stack-offsets"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Stack Offsets</h3>
<p>Stack offsets are typically not used directly, but are instead passed to <a href="#stack_offset"><em>stack</em>.offset</a>.</p>
<p><a name="user-content-stackOffsetExpand" href="#stackOffsetExpand">#</a> d3.<b>stackOffsetExpand</b>(<i>series</i>, <i>order</i>) <a href="https://github.com/d3/d3-shape/blob/master/src/offset/expand.js" title="Source">&lt;&gt;</a></p>
<p>Applies a zero baseline and normalizes the values for each point such that the topline is always one.</p>
<p><a name="user-content-stackOffsetDiverging" href="#stackOffsetDiverging">#</a> d3.<b>stackOffsetDiverging</b>(<i>series</i>, <i>order</i>) <a href="https://github.com/d3/d3-shape/blob/master/src/offset/diverging.js" title="Source">&lt;&gt;</a></p>
<p>Positive values are stacked above zero, while negative values are <a href="https://bl.ocks.org/mbostock/b5935342c6d21928111928401e2c8608">stacked below zero</a>.</p>
<p><a name="user-content-stackOffsetNone" href="#stackOffsetNone">#</a> d3.<b>stackOffsetNone</b>(<i>series</i>, <i>order</i>) <a href="https://github.com/d3/d3-shape/blob/master/src/offset/none.js" title="Source">&lt;&gt;</a></p>
<p>Applies a zero baseline.</p>
<p><a name="user-content-stackOffsetSilhouette" href="#stackOffsetSilhouette">#</a> d3.<b>stackOffsetSilhouette</b>(<i>series</i>, <i>order</i>) <a href="https://github.com/d3/d3-shape/blob/master/src/offset/silhouette.js" title="Source">&lt;&gt;</a></p>
<p>Shifts the baseline down such that the center of the streamgraph is always at zero.</p>
<p><a name="user-content-stackOffsetWiggle" href="#stackOffsetWiggle">#</a> d3.<b>stackOffsetWiggle</b>(<i>series</i>, <i>order</i>) <a href="https://github.com/d3/d3-shape/blob/master/src/offset/wiggle.js" title="Source">&lt;&gt;</a></p>
<p>Shifts the baseline so as to minimize the weighted wiggle of layers. This offset is recommended for streamgraphs in conjunction with the <a href="#stackOrderInsideOut">inside-out order</a>. See <a href="http://leebyron.com/streamgraph/">Stacked Graphs—Geometry &amp; Aesthetics</a> by Bryon &amp; Wattenberg for more information.</p>
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
      <li class="mr-3">&copy; 2018 <span title="0.22427s from unicorn-910688904-96lvt">GitHub</span>, Inc.</li>
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


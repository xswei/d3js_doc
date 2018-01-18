





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
  
  <title>d3-hierarchy/README.md at master · d3/d3-hierarchy</title>
  <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
  <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
  <meta property="fb:app_id" content="1401488693436528">

    
    <meta content="https://avatars3.githubusercontent.com/u/1562726?s=400&amp;v=4" property="og:image" /><meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="d3/d3-hierarchy" property="og:title" /><meta content="https://github.com/d3/d3-hierarchy" property="og:url" /><meta content="d3-hierarchy - 2D layout algorithms for visualizing hierarchical data." property="og:description" />

  <link rel="assets" href="https://assets-cdn.github.com/">
  <link rel="web-socket" href="wss://live.github.com/_sockets/VjI6MjM0MjAxNjIzOjAyZjkyNTM4Y2ZkNTQ4YTdlYWVlYTU5ODI1OTlhYjkxN2QyZGZmYjc4ZjJhODM2ZDkyYmNjZjA3M2Y3ZjYyZTI=--022ec7b81ec89c5fb327db1e020675889dfd5a5a">
  <meta name="pjax-timeout" content="1000">
  <link rel="sudo-modal" href="/sessions/sudo_modal">
  <meta name="request-id" content="F902:1FA0E:119DDFF:1993265:5A603E3A" data-pjax-transient>
  

  <meta name="selected-link" value="repo_source" data-pjax-transient>

    <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
  <meta name="google-site-verification" content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA">
  <meta name="google-site-verification" content="GXs5KoUUkNCoaAZn7wPN-t01Pywp9M3sEjnt_3_ZWPc">
    <meta name="google-analytics" content="UA-3769691-2">

<meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="https://collector.githubapp.com/github-external/browser_event" name="octolytics-event-url" /><meta content="F902:1FA0E:119DDFF:1993265:5A603E3A" name="octolytics-dimension-request_id" /><meta content="sea" name="octolytics-dimension-region_edge" /><meta content="iad" name="octolytics-dimension-region_render" /><meta content="16659379" name="octolytics-actor-id" /><meta content="xswei" name="octolytics-actor-login" /><meta content="72a8b786cd27412ba348c71058cf2aed3e8f8772266e5c157980395250fb923d" name="octolytics-actor-hash" />
<meta content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-pjax-transient="true" name="analytics-location" />




  <meta class="js-ga-set" name="dimension1" content="Logged In">


  

      <meta name="hostname" content="github.com">
  <meta name="user-login" content="xswei">

      <meta name="expected-hostname" content="github.com">
    <meta name="js-proxy-site-detection-payload" content="NmUyOGFlZGE0ODJlYjFhNWEzNDVjMmQ4MTY2OTU3ZDE2NmQ4ZTY5OWQ1ZTRlZTA3NmJmZmUyYWY4NGI5NzA4ZHx7InJlbW90ZV9hZGRyZXNzIjoiMjIwLjE4MS4xNzEuMTI1IiwicmVxdWVzdF9pZCI6IkY5MDI6MUZBMEU6MTE5RERGRjoxOTkzMjY1OjVBNjAzRTNBIiwidGltZXN0YW1wIjoxNTE2MjU2ODI4LCJob3N0IjoiZ2l0aHViLmNvbSJ9">

    <meta name="enabled-features" content="UNIVERSE_BANNER,FREE_TRIALS">

  <meta name="html-safe-nonce" content="95ac36701972faaa3306c820d3f61fe703aeac54">

  <meta http-equiv="x-pjax-version" content="c0275ff3857f879afa7c0ef3fbc951b4">
  

      <link href="https://github.com/d3/d3-hierarchy/commits/master.atom" rel="alternate" title="Recent Commits to d3-hierarchy:master" type="application/atom+xml">

  <meta name="description" content="d3-hierarchy - 2D layout algorithms for visualizing hierarchical data.">
  <meta name="go-import" content="github.com/d3/d3-hierarchy git https://github.com/d3/d3-hierarchy.git">

  <meta content="1562726" name="octolytics-dimension-user_id" /><meta content="d3" name="octolytics-dimension-user_login" /><meta content="39152400" name="octolytics-dimension-repository_id" /><meta content="d3/d3-hierarchy" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="39152400" name="octolytics-dimension-repository_network_root_id" /><meta content="d3/d3-hierarchy" name="octolytics-dimension-repository_network_root_nwo" /><meta content="false" name="octolytics-dimension-repository_explore_github_marketplace_ci_cta_shown" />


    <link rel="canonical" href="https://github.com/d3/d3-hierarchy/blob/master/README.md" data-pjax-transient>


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
  <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/d3/d3-hierarchy/search" class="js-site-search-form" data-scoped-search-url="/d3/d3-hierarchy/search" data-unscoped-search-url="/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <label class="form-control header-search-wrapper js-chromeless-input-container">
        <a href="/d3/d3-hierarchy/blob/master/README.md" class="header-search-scope no-underline">This repository</a>
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
    <span title="d3/d3-hierarchy">This repository</span>
  </div>
    <a class="dropdown-item" href="/d3/d3-hierarchy/issues/new" data-ga-click="Header, create new issue">
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

        <li><!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/logout" class="logout-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="DZ1v6ZpyUSd1TkUhcaLTCybc9klti6VEuyr2Xesog0mT++uc0XXlqw4el6GGMau7ZZALHDVzU4wJXsn/qoCCNw==" /></div>
          <button type="submit" class="dropdown-item dropdown-signout" data-ga-click="Header, sign out, icon:logout">
            Sign out
          </button>
        </form></li>
      </ul>
    </details>
  </li>
</ul>


        <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/logout" class="sr-only right-0" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="l5hekBocxD43bWxP1qcMPT5pCWB+lI54okmeBUWMNHMJ/trlURtwskw9vs8hNHSNfSX0NSZseLAQPaGnBCQ1DQ==" /></div>
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
        <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="FBsDAHhOH8/4o8ZMK9Xxqq3v03fZPy4vzf3gf908T1158kAQn4+ticN8QMZx72fRL3T+UYfCEB3vBt4stmFDEg==" /></div>      <input class="form-control" id="repository_id" name="repository_id" type="hidden" value="39152400" />

        <div class="select-menu js-menu-container js-select-menu">
          <a href="/d3/d3-hierarchy/subscription"
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
            href="/d3/d3-hierarchy/watchers"
            aria-label="28 users are watching this repository">
            28
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
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/d3/d3-hierarchy/unstar" class="starred js-social-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="UIV9p0kN1IC2si37/GxENNa6YhafmTO2qS22s0LA+IEwQTNdzDnemhv2SAJpUYpWvsiOV6Ky92IGZ+decSt4iw==" /></div>
      <input type="hidden" name="context" value="repository"></input>
      <button
        type="submit"
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Unstar this repository" title="Unstar d3/d3-hierarchy"
        data-ga-click="Repository, click unstar button, action:blob#show; text:Unstar">
        <svg aria-hidden="true" class="octicon octicon-star" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"/></svg>
        Unstar
      </button>
        <a class="social-count js-social-count" href="/d3/d3-hierarchy/stargazers"
           aria-label="210 users starred this repository">
          210
        </a>
</form>
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/d3/d3-hierarchy/star" class="unstarred js-social-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="L0lbJ5n5IrR5AX5qKpgNGuq7UHDZXnMroICGgJSL26MfowXxW8HlVVtmcXhHnf1FnxY9fBex0uzMQ0GyF/30Lw==" /></div>
      <input type="hidden" name="context" value="repository"></input>
      <button
        type="submit"
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Star this repository" title="Star d3/d3-hierarchy"
        data-ga-click="Repository, click star button, action:blob#show; text:Star">
        <svg aria-hidden="true" class="octicon octicon-star" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"/></svg>
        Star
      </button>
        <a class="social-count js-social-count" href="/d3/d3-hierarchy/stargazers"
           aria-label="210 users starred this repository">
          210
        </a>
</form>  </div>

  </li>

  <li>
          <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/d3/d3-hierarchy/fork" class="btn-with-count" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="pMEgAV1XqP0m7UgkOqmlYepeUBOhaQ0E+gfzBxA3AuulPXs7tUADrgasxADLL1e4dTJ6HxWKAfkI4BRmeGC4LQ==" /></div>
            <button
                type="submit"
                class="btn btn-sm btn-with-count"
                data-ga-click="Repository, show fork modal, action:blob#show; text:Fork"
                title="Fork your own copy of d3/d3-hierarchy to your account"
                aria-label="Fork your own copy of d3/d3-hierarchy to your account">
              <svg aria-hidden="true" class="octicon octicon-repo-forked" height="16" version="1.1" viewBox="0 0 10 16" width="10"><path fill-rule="evenodd" d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
              Fork
            </button>
</form>
    <a href="/d3/d3-hierarchy/network" class="social-count"
       aria-label="91 users forked this repository">
      91
    </a>
  </li>
</ul>

      <h1 class="public ">
  <svg aria-hidden="true" class="octicon octicon-repo" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
  <span class="author" itemprop="author"><a href="/d3" class="url fn" rel="author">d3</a></span><!--
--><span class="path-divider">/</span><!--
--><strong itemprop="name"><a href="/d3/d3-hierarchy" data-pjax="#js-repo-pjax-container">d3-hierarchy</a></strong>

</h1>

    </div>
    
<nav class="reponav js-repo-nav js-sidenav-container-pjax container"
     itemscope
     itemtype="http://schema.org/BreadcrumbList"
     role="navigation"
     data-pjax="#js-repo-pjax-container">

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/d3/d3-hierarchy" class="js-selected-navigation-item selected reponav-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches repo_packages /d3/d3-hierarchy" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-code" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z"/></svg>
      <span itemprop="name">Code</span>
      <meta itemprop="position" content="1">
</a>  </span>

    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a href="/d3/d3-hierarchy/issues" class="js-selected-navigation-item reponav-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /d3/d3-hierarchy/issues" itemprop="url">
        <svg aria-hidden="true" class="octicon octicon-issue-opened" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"/></svg>
        <span itemprop="name">Issues</span>
        <span class="Counter">14</span>
        <meta itemprop="position" content="2">
</a>    </span>

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/d3/d3-hierarchy/pulls" class="js-selected-navigation-item reponav-item" data-hotkey="g p" data-selected-links="repo_pulls /d3/d3-hierarchy/pulls" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-git-pull-request" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M11 11.28V5c-.03-.78-.34-1.47-.94-2.06C9.46 2.35 8.78 2.03 8 2H7V0L4 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0 0 10 15a1.993 1.993 0 0 0 1-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zM4 3c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v6.56A1.993 1.993 0 0 0 2 15a1.993 1.993 0 0 0 1-3.72V4.72c.59-.34 1-.98 1-1.72zm-.8 10c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
      <span itemprop="name">Pull requests</span>
      <span class="Counter">2</span>
      <meta itemprop="position" content="3">
</a>  </span>




  <a href="/d3/d3-hierarchy/pulse" class="js-selected-navigation-item reponav-item" data-selected-links="repo_graphs repo_contributors dependency_graph pulse /d3/d3-hierarchy/pulse">
    <svg aria-hidden="true" class="octicon octicon-graph" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M16 14v1H0V0h1v14h15zM5 13H3V8h2v5zm4 0H7V3h2v10zm4 0h-2V6h2v7z"/></svg>
    Insights
</a>

</nav>


  </div>

<div class="container new-discussion-timeline experiment-repo-nav ">
  <div class="repository-content ">

    
  <a href="/d3/d3-hierarchy/blob/e51e68d8e61b5694ed53a98543f35329c075e31d/README.md" class="d-none js-permalink-shortcut" data-hotkey="y">Permalink</a>

  <!-- blob contrib key: blob_contributors:v21:4cf58c47375220125087b519732c1e57 -->

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
               href="/d3/d3-hierarchy/blob/fix-treemap-zero/README.md"
               data-name="fix-treemap-zero"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                fix-treemap-zero
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/d3/d3-hierarchy/blob/master/README.md"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                master
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/d3/d3-hierarchy/blob/resquarify/README.md"
               data-name="resquarify"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                resquarify
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/d3/d3-hierarchy/blob/tabular-input/README.md"
               data-name="tabular-input"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                tabular-input
              </span>
            </a>
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-hierarchy/tree/v1.1.5/README.md"
              data-name="v1.1.5"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.1.5">
                v1.1.5
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-hierarchy/tree/v1.1.4/README.md"
              data-name="v1.1.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.1.4">
                v1.1.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-hierarchy/tree/v1.1.3/README.md"
              data-name="v1.1.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.1.3">
                v1.1.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-hierarchy/tree/v1.1.2/README.md"
              data-name="v1.1.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.1.2">
                v1.1.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-hierarchy/tree/v1.1.1/README.md"
              data-name="v1.1.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.1.1">
                v1.1.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-hierarchy/tree/v1.1.0/README.md"
              data-name="v1.1.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.1.0">
                v1.1.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-hierarchy/tree/v1.0.3/README.md"
              data-name="v1.0.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.3">
                v1.0.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-hierarchy/tree/v1.0.2/README.md"
              data-name="v1.0.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.2">
                v1.0.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-hierarchy/tree/v1.0.1/README.md"
              data-name="v1.0.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.1">
                v1.0.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-hierarchy/tree/v1.0.0/README.md"
              data-name="v1.0.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.0">
                v1.0.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-hierarchy/tree/v0.3.0/README.md"
              data-name="v0.3.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.3.0">
                v0.3.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-hierarchy/tree/v0.2.4/README.md"
              data-name="v0.2.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.2.4">
                v0.2.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-hierarchy/tree/v0.2.3/README.md"
              data-name="v0.2.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.2.3">
                v0.2.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-hierarchy/tree/v0.2.2/README.md"
              data-name="v0.2.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.2.2">
                v0.2.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-hierarchy/tree/v0.2.1/README.md"
              data-name="v0.2.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.2.1">
                v0.2.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-hierarchy/tree/v0.2.0/README.md"
              data-name="v0.2.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.2.0">
                v0.2.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-hierarchy/tree/v0.1.0/README.md"
              data-name="v0.1.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.1.0">
                v0.1.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-hierarchy/tree/v0.0.2/README.md"
              data-name="v0.0.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.0.2">
                v0.0.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-hierarchy/tree/v0.0.1/README.md"
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
      <a href="/d3/d3-hierarchy/find/master"
            class="js-pjax-capture-input btn btn-sm BtnGroup-item"
            data-pjax
            data-hotkey="t">
        Find file
      </a>
      <button aria-label="Copy file path to clipboard" class="js-zeroclipboard btn btn-sm BtnGroup-item tooltipped tooltipped-s" data-copied-hint="Copied!" type="button">Copy path</button>
    </div>
    <div class="breadcrumb js-zeroclipboard-target">
      <span class="repo-root js-repo-root"><span class="js-path-segment"><a href="/d3/d3-hierarchy"><span>d3-hierarchy</span></a></span></span><span class="separator">/</span><strong class="final-path">README.md</strong>
    </div>
  </div>


  
  <div class="commit-tease">
      <span class="float-right">
        <a class="commit-tease-sha" href="/d3/d3-hierarchy/commit/7a3d2b8f2b558adc7b0b942c3ad31504288297d4" data-pjax>
          7a3d2b8
        </a>
        <relative-time datetime="2017-05-25T20:44:58Z">May 25, 2017</relative-time>
      </span>
      <div>
        <img alt="@mbostock" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/230541?s=40&amp;v=4" width="20" />
        <a href="/mbostock" class="user-mention" rel="contributor">mbostock</a>
          <a href="/d3/d3-hierarchy/commit/7a3d2b8f2b558adc7b0b942c3ad31504288297d4" class="message" data-pjax="true" title="Update README.">Update README.</a>
      </div>

    <div class="commit-tease-contributors">
      <button type="button" class="btn-link muted-link contributors-toggle" data-facebox="#blob_contributors_box">
        <strong>3</strong>
         contributors
      </button>
          <a class="avatar-link tooltipped tooltipped-s" aria-label="mbostock" href="/d3/d3-hierarchy/commits/master/README.md?author=mbostock"><img alt="@mbostock" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/230541?s=40&amp;v=4" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="dechov" href="/d3/d3-hierarchy/commits/master/README.md?author=dechov"><img alt="@dechov" class="avatar" height="20" src="https://avatars3.githubusercontent.com/u/1867547?s=40&amp;v=4" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="Devinsuit" href="/d3/d3-hierarchy/commits/master/README.md?author=Devinsuit"><img alt="@Devinsuit" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/11741306?s=40&amp;v=4" width="20" /> </a>


    </div>

    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header" data-facebox-id="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list" data-facebox-id="facebox-description">
          <li class="facebox-user-list-item">
            <img alt="@mbostock" height="24" src="https://avatars0.githubusercontent.com/u/230541?s=48&amp;v=4" width="24" />
            <a href="/mbostock">mbostock</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@dechov" height="24" src="https://avatars2.githubusercontent.com/u/1867547?s=48&amp;v=4" width="24" />
            <a href="/dechov">dechov</a>
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
      <a href="/d3/d3-hierarchy/raw/master/README.md" class="btn btn-sm BtnGroup-item" id="raw-url">Raw</a>
        <a href="/d3/d3-hierarchy/blame/master/README.md" class="btn btn-sm js-update-url-with-hash BtnGroup-item" data-hotkey="b">Blame</a>
      <a href="/d3/d3-hierarchy/commits/master/README.md" class="btn btn-sm BtnGroup-item" rel="nofollow">History</a>
    </div>

        <a class="btn-octicon tooltipped tooltipped-nw"
           href="github-windows://openRepo/https://github.com/d3/d3-hierarchy?branch=master&amp;filepath=README.md"
           aria-label="Open this file in GitHub Desktop"
           data-ga-click="Repository, open with desktop, type:windows">
            <svg aria-hidden="true" class="octicon octicon-device-desktop" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M15 2H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5.34c-.25.61-.86 1.39-2.34 2h8c-1.48-.61-2.09-1.39-2.34-2H15c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 9H1V3h14v8z"/></svg>
        </a>

          <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/d3/d3-hierarchy/edit/master/README.md" class="inline-form js-update-url-with-hash" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="pMmW1uXrZdoQH7i7YkTqWFXYQGRbpusHG9Ft4NWgk5BmIA2GKDqXe3eIN9KqziQkJKOrPdpNi6hdWEUTtJ3xrQ==" /></div>
            <button class="btn-octicon tooltipped tooltipped-nw" type="submit"
              aria-label="Fork this project and edit the file" data-hotkey="e" data-disable-with>
              <svg aria-hidden="true" class="octicon octicon-pencil" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z"/></svg>
            </button>
</form>
        <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/d3/d3-hierarchy/delete/master/README.md" class="inline-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="xlzohsD5XSa/m+opiXRsc36w4tCEfPmyDI5jItGs0/FLV+hknyL0iEYSJLxKrhaTOEFeOx1NDnK53hD0sHpbZw==" /></div>
          <button class="btn-octicon btn-octicon-danger tooltipped tooltipped-nw" type="submit"
            aria-label="Fork this project and delete the file" data-disable-with>
            <svg aria-hidden="true" class="octicon octicon-trashcan" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M11 2H9c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1H2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1v9c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V5c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 12H3V5h1v8h1V5h1v8h1V5h1v8h1V5h1v9zm1-10H2V3h9v1z"/></svg>
          </button>
</form>  </div>

  <div class="file-info">
      551 lines (347 sloc)
      <span class="file-info-divider"></span>
    41.3 KB
  </div>
</div>

    
  <div id="readme" class="readme blob instapaper_body">
    <article class="markdown-body entry-content" itemprop="text"><h1><a href="#d3-hierarchy" aria-hidden="true" class="anchor" id="user-content-d3-hierarchy"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>d3-hierarchy</h1>
<p>Many datasets are intrinsically hierarchical. Consider <a href="https://www.census.gov/geo/reference/hierarchy.html">geographic entities</a>, such as census blocks, census tracts, counties and states; the command structure of businesses and governments; file systems and software packages. And even non-hierarchical data may be arranged empirically into a hierarchy, as with <a href="https://en.wikipedia.org/wiki/K-means_clustering"><em>k</em>-means clustering</a> or <a href="https://bl.ocks.org/mbostock/c034d66572fd6bd6815a">phylogenetic trees</a>.</p>
<p>This module implements several popular techniques for visualizing hierarchical data:</p>
<p><strong>Node-link diagrams</strong> show topology using discrete marks for nodes and links, such as a circle for each node and a line connecting each parent and child. The <a href="#tree">“tidy” tree</a> is delightfully compact, while the <a href="#cluster">dendrogram</a> places leaves at the same level. (These have both polar and Cartesian forms.) <a href="https://bl.ocks.org/mbostock/1093025">Indented trees</a> are useful for interactive browsing.</p>
<p><strong>Adjacency diagrams</strong> show topology through the relative placement of nodes. They may also encode a quantitative dimension in the area of each node, for example to show revenue or file size. The <a href="#partition">“icicle” diagram</a> uses rectangles, while the “sunburst” uses annular segments.</p>
<p><strong>Enclosure diagrams</strong> also use an area encoding, but show topology through containment. A <a href="#treemap">treemap</a> recursively subdivides area into rectangles. <a href="#pack">Circle-packing</a> tightly nests circles; this is not as space-efficient as a treemap, but perhaps more readily shows topology.</p>
<p>A good hierarchical visualization facilitates rapid multiscale inference: micro-observations of individual elements and macro-observations of large groups.</p>
<h2><a href="#installing" aria-hidden="true" class="anchor" id="user-content-installing"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installing</h2>
<p>If you use NPM, <code>npm install d3-hierarchy</code>. Otherwise, download the <a href="https://github.com/d3/d3-hierarchy/releases/latest">latest release</a>. You can also load directly from <a href="https://d3js.org">d3js.org</a>, either as a <a href="https://d3js.org/d3-hierarchy.v1.min.js">standalone library</a> or as part of <a href="https://github.com/d3/d3">D3 4.0</a>. AMD, CommonJS, and vanilla environments are supported. In vanilla, a <code>d3</code> global is exported:</p>
<div class="highlight highlight-text-html-basic"><pre>&lt;<span class="pl-ent">script</span> <span class="pl-e">src</span>=<span class="pl-s"><span class="pl-pds">"</span>https://d3js.org/d3-hierarchy.v1.min.js<span class="pl-pds">"</span></span>&gt;&lt;/<span class="pl-ent">script</span>&gt;
&lt;<span class="pl-ent">script</span>&gt;<span class="pl-s1"></span>
<span class="pl-s1"></span>
<span class="pl-s1"><span class="pl-k">var</span> treemap <span class="pl-k">=</span> <span class="pl-smi">d3</span>.<span class="pl-en">treemap</span>();</span>
<span class="pl-s1"></span>
<span class="pl-s1"></span><span class="pl-s1">&lt;</span>/<span class="pl-ent">script</span>&gt;</pre></div>
<p><a href="https://tonicdev.com/npm/d3-hierarchy">Try d3-hierarchy in your browser.</a></p>
<h2><a href="#api-reference" aria-hidden="true" class="anchor" id="user-content-api-reference"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>API Reference</h2>
<ul>
<li><a href="#hierarchy">Hierarchy</a> (<a href="#stratify">Stratify</a>)</li>
<li><a href="#cluster">Cluster</a></li>
<li><a href="#tree">Tree</a></li>
<li><a href="#treemap">Treemap</a> (<a href="#treemap-tiling">Treemap Tiling</a>)</li>
<li><a href="#partition">Partition</a></li>
<li><a href="#pack">Pack</a></li>
</ul>
<h3><a href="#hierarchy" aria-hidden="true" class="anchor" id="user-content-hierarchy"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Hierarchy</h3>
<p>Before you can compute a hierarchical layout, you need a root node. If your data is already in a hierarchical format, such as JSON, you can pass it directly to <a href="#hierarchy">d3.hierarchy</a>; otherwise, you can rearrange tabular data, such as comma-separated values (CSV), into a hierarchy using <a href="#stratify">d3.stratify</a>.</p>
<p><a name="user-content-hierarchy" href="#hierarchy">#</a> d3.<b>hierarchy</b>(<i>data</i>[, <i>children</i>]) <a href="https://github.com/d3/d3-hierarchy/blob/master/src/hierarchy/index.js#L12" title="Source">&lt;&gt;</a></p>
<p>Constructs a root node from the specified hierarchical <em>data</em>. The specified <em>data</em> must be an object representing the root node. For example:</p>
<div class="highlight highlight-source-json"><pre>{
  <span class="pl-s"><span class="pl-pds">"</span>name<span class="pl-pds">"</span></span>: <span class="pl-s"><span class="pl-pds">"</span>Eve<span class="pl-pds">"</span></span>,
  <span class="pl-s"><span class="pl-pds">"</span>children<span class="pl-pds">"</span></span>: [
    {
      <span class="pl-s"><span class="pl-pds">"</span>name<span class="pl-pds">"</span></span>: <span class="pl-s"><span class="pl-pds">"</span>Cain<span class="pl-pds">"</span></span>
    },
    {
      <span class="pl-s"><span class="pl-pds">"</span>name<span class="pl-pds">"</span></span>: <span class="pl-s"><span class="pl-pds">"</span>Seth<span class="pl-pds">"</span></span>,
      <span class="pl-s"><span class="pl-pds">"</span>children<span class="pl-pds">"</span></span>: [
        {
          <span class="pl-s"><span class="pl-pds">"</span>name<span class="pl-pds">"</span></span>: <span class="pl-s"><span class="pl-pds">"</span>Enos<span class="pl-pds">"</span></span>
        },
        {
          <span class="pl-s"><span class="pl-pds">"</span>name<span class="pl-pds">"</span></span>: <span class="pl-s"><span class="pl-pds">"</span>Noam<span class="pl-pds">"</span></span>
        }
      ]
    },
    {
      <span class="pl-s"><span class="pl-pds">"</span>name<span class="pl-pds">"</span></span>: <span class="pl-s"><span class="pl-pds">"</span>Abel<span class="pl-pds">"</span></span>
    },
    {
      <span class="pl-s"><span class="pl-pds">"</span>name<span class="pl-pds">"</span></span>: <span class="pl-s"><span class="pl-pds">"</span>Awan<span class="pl-pds">"</span></span>,
      <span class="pl-s"><span class="pl-pds">"</span>children<span class="pl-pds">"</span></span>: [
        {
          <span class="pl-s"><span class="pl-pds">"</span>name<span class="pl-pds">"</span></span>: <span class="pl-s"><span class="pl-pds">"</span>Enoch<span class="pl-pds">"</span></span>
        }
      ]
    },
    {
      <span class="pl-s"><span class="pl-pds">"</span>name<span class="pl-pds">"</span></span>: <span class="pl-s"><span class="pl-pds">"</span>Azura<span class="pl-pds">"</span></span>
    }
  ]
}</pre></div>
<p>The specified <em>children</em> accessor function is invoked for each datum, starting with the root <em>data</em>, and must return an array of data representing the children, or null if the current datum has no children. If <em>children</em> is not specified, it defaults to:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">function</span> <span class="pl-en">children</span>(<span class="pl-smi">d</span>) {
  <span class="pl-k">return</span> <span class="pl-smi">d</span>.<span class="pl-smi">children</span>;
}</pre></div>
<p>The returned node and each descendant has the following properties:</p>
<ul>
<li><em>node</em>.data - the associated data, as specified to the <a href="#hierarchy">constructor</a>.</li>
<li><em>node</em>.depth - zero for the root node, and increasing by one for each descendant generation.</li>
<li><em>node</em>.height - zero for leaf nodes, and the greatest distance from any descendant leaf for internal nodes.</li>
<li><em>node</em>.parent - the parent node, or null for the root node.</li>
<li><em>node</em>.children - an array of child nodes, if any; undefined for leaf nodes.</li>
<li><em>node</em>.value - the summed value of the node and its <a href="#node_descendants">descendants</a>; optional, see <a href="#node_sum"><em>node</em>.sum</a> and <a href="#node_count"><em>node</em>.count</a>.</li>
</ul>
<p>This method can also be used to test if a node is an <code>instanceof d3.hierarchy</code> and to extend the node prototype.</p>
<p><a name="user-content-node_ancestors" href="#node_ancestors">#</a> <i>node</i>.<b>ancestors</b>() <a href="https://github.com/d3/d3-hierarchy/blob/master/src/hierarchy/ancestors.js" title="Source">&lt;&gt;</a></p>
<p>Returns the array of ancestors nodes, starting with this node, then followed by each parent up to the root.</p>
<p><a name="user-content-node_descendants" href="#node_descendants">#</a> <i>node</i>.<b>descendants</b>() <a href="https://github.com/d3/d3-hierarchy/blob/master/src/hierarchy/descendants.js" title="Source">&lt;&gt;</a></p>
<p>Returns the array of descendant nodes, starting with this node, then followed by each child in topological order.</p>
<p><a name="user-content-node_leaves" href="#node_leaves">#</a> <i>node</i>.<b>leaves</b>() <a href="https://github.com/d3/d3-hierarchy/blob/master/src/hierarchy/leaves.js" title="Source">&lt;&gt;</a></p>
<p>Returns the array of leaf nodes in traversal order; leaves are nodes with no children.</p>
<p><a name="user-content-node_path" href="#node_path">#</a> <i>node</i>.<b>path</b>(<i>target</i>) <a href="https://github.com/d3/d3-hierarchy/blob/master/src/hierarchy/path.js" title="Source">&lt;&gt;</a></p>
<p>Returns the shortest path through the hierarchy from this <em>node</em> to the specified <em>target</em> node. The path starts at this <em>node</em>, ascends to the least common ancestor of this <em>node</em> and the <em>target</em> node, and then descends to the <em>target</em> node. This is particularly useful for <a href="https://bl.ocks.org/mbostock/7607999">hierarchical edge bundling</a>.</p>
<p><a name="user-content-node_links" href="#node_links">#</a> <i>node</i>.<b>links</b>() <a href="https://github.com/d3/d3-hierarchy/blob/master/src/hierarchy/links.js" title="Source">&lt;&gt;</a></p>
<p>Returns an array of links for this <em>node</em>, where each <em>link</em> is an object that defines source and target properties. The source of each link is the parent node, and the target is a child node.</p>
<p><a name="user-content-node_sum" href="#node_sum">#</a> <i>node</i>.<b>sum</b>(<i>value</i>) <a href="https://github.com/d3/d3-hierarchy/blob/master/src/hierarchy/sum.js" title="Source">&lt;&gt;</a></p>
<p>Evaluates the specified <em>value</em> function for this <em>node</em> and each descendant in <a href="#node_eachAfter">post-order traversal</a>, and returns this <em>node</em>. The <em>node</em>.value property of each node is set to the numeric value returned by the specified function plus the combined value of all descendants. The function is passed the node’s data, and must return a non-negative number. The <em>value</em> accessor is evaluated for <em>node</em> and every descendant, including internal nodes; if you only want leaf nodes to have internal value, then return zero for any node with children. <a href="http://bl.ocks.org/mbostock/b4c0f143db88a9eb01a315a1063c1d77">For example</a>, as an alternative to <a href="#node_count"><em>node</em>.count</a>:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-smi">root</span>.<span class="pl-en">sum</span>(<span class="pl-k">function</span>(<span class="pl-smi">d</span>) { <span class="pl-k">return</span> <span class="pl-smi">d</span>.<span class="pl-c1">value</span> <span class="pl-k">?</span> <span class="pl-c1">1</span> <span class="pl-k">:</span> <span class="pl-c1">0</span>; });</pre></div>
<p>You must call <em>node</em>.sum or <a href="#node_count"><em>node</em>.count</a> before invoking a hierarchical layout that requires <em>node</em>.value, such as <a href="#treemap">d3.treemap</a>. Since the API supports <a href="https://en.wikipedia.org/wiki/Method_chaining">method chaining</a>, you can invoke <em>node</em>.sum and <a href="#node_sort"><em>node</em>.sort</a> before computing the layout, and then subsequently generate an array of all <a href="#node_descendants">descendant nodes</a> like so:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">var</span> treemap <span class="pl-k">=</span> <span class="pl-smi">d3</span>.<span class="pl-en">treemap</span>()
    .<span class="pl-c1">size</span>([width, height])
    .<span class="pl-en">padding</span>(<span class="pl-c1">2</span>);

<span class="pl-k">var</span> nodes <span class="pl-k">=</span> <span class="pl-en">treemap</span>(root
    .<span class="pl-en">sum</span>(<span class="pl-k">function</span>(<span class="pl-smi">d</span>) { <span class="pl-k">return</span> <span class="pl-smi">d</span>.<span class="pl-c1">value</span>; })
    .<span class="pl-c1">sort</span>(<span class="pl-k">function</span>(<span class="pl-smi">a</span>, <span class="pl-smi">b</span>) { <span class="pl-k">return</span> <span class="pl-smi">b</span>.<span class="pl-c1">height</span> <span class="pl-k">-</span> <span class="pl-smi">a</span>.<span class="pl-c1">height</span> <span class="pl-k">||</span> <span class="pl-smi">b</span>.<span class="pl-c1">value</span> <span class="pl-k">-</span> <span class="pl-smi">a</span>.<span class="pl-c1">value</span>; }))
  .<span class="pl-en">descendants</span>();</pre></div>
<p>This example assumes that the node data has a value field.</p>
<p><a name="user-content-node_count" href="#node_count">#</a> <i>node</i>.<b>count</b>() <a href="https://github.com/d3/d3-hierarchy/blob/master/src/hierarchy/count.js" title="Source">&lt;&gt;</a></p>
<p>Computes the number of leaves under this <em>node</em> and assigns it to <em>node</em>.value, and similarly for every descendant of <em>node</em>. If this <em>node</em> is a leaf, its count is one. Returns this <em>node</em>. See also <a href="#node_sum"><em>node</em>.sum</a>.</p>
<p><a name="user-content-node_sort" href="#node_sort">#</a> <i>node</i>.<b>sort</b>(<i>compare</i>) <a href="https://github.com/d3/d3-hierarchy/blob/master/src/hierarchy/sort.js" title="Source">&lt;&gt;</a></p>
<p>Sorts the children of this <em>node</em>, if any, and each of this <em>node</em>’s descendants’ children, in <a href="#node_eachBefore">pre-order traversal</a> using the specified <em>compare</em> function, and returns this <em>node</em>. The specified function is passed two nodes <em>a</em> and <em>b</em> to compare. If <em>a</em> should be before <em>b</em>, the function must return a value less than zero; if <em>b</em> should be before <em>a</em>, the function must return a value greater than zero; otherwise, the relative order of <em>a</em> and <em>b</em> are not specified. See <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort"><em>array</em>.sort</a> for more.</p>
<p>Unlike <a href="#node_sum"><em>node</em>.sum</a>, the <em>compare</em> function is passed two <a href="#hierarchy">nodes</a> rather than two nodes’ data. For example, if the data has a value property, this sorts nodes by the descending aggregate value of the node and all its descendants, as is recommended for <a href="#pack">circle-packing</a>:</p>
<div class="highlight highlight-source-js"><pre>root
    .<span class="pl-en">sum</span>(<span class="pl-k">function</span>(<span class="pl-smi">d</span>) { <span class="pl-k">return</span> <span class="pl-smi">d</span>.<span class="pl-c1">value</span>; })
    .<span class="pl-c1">sort</span>(<span class="pl-k">function</span>(<span class="pl-smi">a</span>, <span class="pl-smi">b</span>) { <span class="pl-k">return</span> <span class="pl-smi">b</span>.<span class="pl-c1">value</span> <span class="pl-k">-</span> <span class="pl-smi">a</span>.<span class="pl-c1">value</span>; });</pre></div>
<p>Similarly, to sort nodes by descending height (greatest distance from any descendant leaf) and then descending value, as is recommended for <a href="#treemap">treemaps</a> and <a href="#partition">icicles</a>:</p>
<div class="highlight highlight-source-js"><pre>root
    .<span class="pl-en">sum</span>(<span class="pl-k">function</span>(<span class="pl-smi">d</span>) { <span class="pl-k">return</span> <span class="pl-smi">d</span>.<span class="pl-c1">value</span>; })
    .<span class="pl-c1">sort</span>(<span class="pl-k">function</span>(<span class="pl-smi">a</span>, <span class="pl-smi">b</span>) { <span class="pl-k">return</span> <span class="pl-smi">b</span>.<span class="pl-c1">height</span> <span class="pl-k">-</span> <span class="pl-smi">a</span>.<span class="pl-c1">height</span> <span class="pl-k">||</span> <span class="pl-smi">b</span>.<span class="pl-c1">value</span> <span class="pl-k">-</span> <span class="pl-smi">a</span>.<span class="pl-c1">value</span>; });</pre></div>
<p>To sort nodes by descending height and then ascending id, as is recommended for <a href="#tree">trees</a> and <a href="#cluster">dendrograms</a>:</p>
<div class="highlight highlight-source-js"><pre>root
    .<span class="pl-en">sum</span>(<span class="pl-k">function</span>(<span class="pl-smi">d</span>) { <span class="pl-k">return</span> <span class="pl-smi">d</span>.<span class="pl-c1">value</span>; })
    .<span class="pl-c1">sort</span>(<span class="pl-k">function</span>(<span class="pl-smi">a</span>, <span class="pl-smi">b</span>) { <span class="pl-k">return</span> <span class="pl-smi">b</span>.<span class="pl-c1">height</span> <span class="pl-k">-</span> <span class="pl-smi">a</span>.<span class="pl-c1">height</span> <span class="pl-k">||</span> <span class="pl-smi">a</span>.<span class="pl-c1">id</span>.<span class="pl-en">localeCompare</span>(<span class="pl-smi">b</span>.<span class="pl-c1">id</span>); });</pre></div>
<p>You must call <em>node</em>.sort before invoking a hierarchical layout if you want the new sort order to affect the layout; see <a href="#node_sum"><em>node</em>.sum</a> for an example.</p>
<p><a name="user-content-node_each" href="#node_each">#</a> <i>node</i>.<b>each</b>(<i>function</i>) <a href="https://github.com/d3/d3-hierarchy/blob/master/src/hierarchy/each.js" title="Source">&lt;&gt;</a></p>
<p>Invokes the specified <em>function</em> for <em>node</em> and each descendant in <a href="https://en.wikipedia.org/wiki/Breadth-first_search">breadth-first order</a>, such that a given <em>node</em> is only visited if all nodes of lesser depth have already been visited, as well as all preceeding nodes of the same depth. The specified function is passed the current <em>node</em>.</p>
<p><a name="user-content-node_eachAfter" href="#node_eachAfter">#</a> <i>node</i>.<b>eachAfter</b>(<i>function</i>) <a href="https://github.com/d3/d3-hierarchy/blob/master/src/hierarchy/eachAfter.js" title="Source">&lt;&gt;</a></p>
<p>Invokes the specified <em>function</em> for <em>node</em> and each descendant in <a href="https://en.wikipedia.org/wiki/Tree_traversal#Post-order">post-order traversal</a>, such that a given <em>node</em> is only visited after all of its descendants have already been visited. The specified function is passed the current <em>node</em>.</p>
<p><a name="user-content-node_eachBefore" href="#node_eachBefore">#</a> <i>node</i>.<b>eachBefore</b>(<i>function</i>) <a href="https://github.com/d3/d3-hierarchy/blob/master/src/hierarchy/eachBefore.js" title="Source">&lt;&gt;</a></p>
<p>Invokes the specified <em>function</em> for <em>node</em> and each descendant in <a href="https://en.wikipedia.org/wiki/Tree_traversal#Pre-order">pre-order traversal</a>, such that a given <em>node</em> is only visited after all of its ancestors have already been visited. The specified function is passed the current <em>node</em>.</p>
<p><a name="user-content-node_copy" href="#node_copy">#</a> <i>node</i>.<b>copy</b>() <a href="https://github.com/d3/d3-hierarchy/blob/master/src/hierarchy/index.js#L39" title="Source">&lt;&gt;</a></p>
<p>Return a deep copy of the subtree starting at this <em>node</em>. (The returned deep copy shares the same data, however.) The returned node is the root of a new tree; the returned node’s parent is always null and its depth is always zero.</p>
<h4><a href="#stratify" aria-hidden="true" class="anchor" id="user-content-stratify"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Stratify</h4>
<p>Consider the following table of relationships:</p>
<table>
<thead>
<tr>
<th>Name</th>
<th>Parent</th>
</tr>
</thead>
<tbody>
<tr>
<td>Eve</td>
<td></td>
</tr>
<tr>
<td>Cain</td>
<td>Eve</td>
</tr>
<tr>
<td>Seth</td>
<td>Eve</td>
</tr>
<tr>
<td>Enos</td>
<td>Seth</td>
</tr>
<tr>
<td>Noam</td>
<td>Seth</td>
</tr>
<tr>
<td>Abel</td>
<td>Eve</td>
</tr>
<tr>
<td>Awan</td>
<td>Eve</td>
</tr>
<tr>
<td>Enoch</td>
<td>Awan</td>
</tr>
<tr>
<td>Azura</td>
<td>Eve</td>
</tr></tbody></table>
<p>These names are conveniently unique, so we can unambiguously represent the hierarchy as a CSV file:</p>
<pre><code>name,parent
Eve,
Cain,Eve
Seth,Eve
Enos,Seth
Noam,Seth
Abel,Eve
Awan,Eve
Enoch,Awan
Azura,Eve
</code></pre>
<p>To parse the CSV using <a href="https://github.com/d3/d3-dsv#csvParse">d3.csvParse</a>:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">var</span> table <span class="pl-k">=</span> <span class="pl-smi">d3</span>.<span class="pl-en">csvParse</span>(text);</pre></div>
<p>This returns:</p>
<div class="highlight highlight-source-json"><pre>[
  {<span class="pl-s"><span class="pl-pds">"</span>name<span class="pl-pds">"</span></span>: <span class="pl-s"><span class="pl-pds">"</span>Eve<span class="pl-pds">"</span></span>,   <span class="pl-s"><span class="pl-pds">"</span>parent<span class="pl-pds">"</span></span>: <span class="pl-s"><span class="pl-pds">"</span><span class="pl-pds">"</span></span>},
  {<span class="pl-s"><span class="pl-pds">"</span>name<span class="pl-pds">"</span></span>: <span class="pl-s"><span class="pl-pds">"</span>Cain<span class="pl-pds">"</span></span>,  <span class="pl-s"><span class="pl-pds">"</span>parent<span class="pl-pds">"</span></span>: <span class="pl-s"><span class="pl-pds">"</span>Eve<span class="pl-pds">"</span></span>},
  {<span class="pl-s"><span class="pl-pds">"</span>name<span class="pl-pds">"</span></span>: <span class="pl-s"><span class="pl-pds">"</span>Seth<span class="pl-pds">"</span></span>,  <span class="pl-s"><span class="pl-pds">"</span>parent<span class="pl-pds">"</span></span>: <span class="pl-s"><span class="pl-pds">"</span>Eve<span class="pl-pds">"</span></span>},
  {<span class="pl-s"><span class="pl-pds">"</span>name<span class="pl-pds">"</span></span>: <span class="pl-s"><span class="pl-pds">"</span>Enos<span class="pl-pds">"</span></span>,  <span class="pl-s"><span class="pl-pds">"</span>parent<span class="pl-pds">"</span></span>: <span class="pl-s"><span class="pl-pds">"</span>Seth<span class="pl-pds">"</span></span>},
  {<span class="pl-s"><span class="pl-pds">"</span>name<span class="pl-pds">"</span></span>: <span class="pl-s"><span class="pl-pds">"</span>Noam<span class="pl-pds">"</span></span>,  <span class="pl-s"><span class="pl-pds">"</span>parent<span class="pl-pds">"</span></span>: <span class="pl-s"><span class="pl-pds">"</span>Seth<span class="pl-pds">"</span></span>},
  {<span class="pl-s"><span class="pl-pds">"</span>name<span class="pl-pds">"</span></span>: <span class="pl-s"><span class="pl-pds">"</span>Abel<span class="pl-pds">"</span></span>,  <span class="pl-s"><span class="pl-pds">"</span>parent<span class="pl-pds">"</span></span>: <span class="pl-s"><span class="pl-pds">"</span>Eve<span class="pl-pds">"</span></span>},
  {<span class="pl-s"><span class="pl-pds">"</span>name<span class="pl-pds">"</span></span>: <span class="pl-s"><span class="pl-pds">"</span>Awan<span class="pl-pds">"</span></span>,  <span class="pl-s"><span class="pl-pds">"</span>parent<span class="pl-pds">"</span></span>: <span class="pl-s"><span class="pl-pds">"</span>Eve<span class="pl-pds">"</span></span>},
  {<span class="pl-s"><span class="pl-pds">"</span>name<span class="pl-pds">"</span></span>: <span class="pl-s"><span class="pl-pds">"</span>Enoch<span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>parent<span class="pl-pds">"</span></span>: <span class="pl-s"><span class="pl-pds">"</span>Awan<span class="pl-pds">"</span></span>},
  {<span class="pl-s"><span class="pl-pds">"</span>name<span class="pl-pds">"</span></span>: <span class="pl-s"><span class="pl-pds">"</span>Azura<span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>parent<span class="pl-pds">"</span></span>: <span class="pl-s"><span class="pl-pds">"</span>Eve<span class="pl-pds">"</span></span>}
]</pre></div>
<p>To convert to a hierarchy:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">var</span> root <span class="pl-k">=</span> <span class="pl-smi">d3</span>.<span class="pl-en">stratify</span>()
    .<span class="pl-c1">id</span>(<span class="pl-k">function</span>(<span class="pl-smi">d</span>) { <span class="pl-k">return</span> <span class="pl-smi">d</span>.<span class="pl-c1">name</span>; })
    .<span class="pl-en">parentId</span>(<span class="pl-k">function</span>(<span class="pl-smi">d</span>) { <span class="pl-k">return</span> <span class="pl-smi">d</span>.<span class="pl-c1">parent</span>; })
    (table);</pre></div>
<p>This returns:</p>
<p><a href="https://tonicdev.com/mbostock/56fed33d8630b01300f72daa"><img alt="Stratify" src="https://raw.githubusercontent.com/d3/d3-hierarchy/master/img/stratify.png" style="max-width:100%;"></a></p>
<p>This hierarchy can now be passed to a hierarchical layout, such as <a href="#_tree">d3.tree</a>, for visualization.</p>
<p><a name="user-content-stratify" href="#stratify">#</a> d3.<b>stratify</b>() <a href="https://github.com/d3/d3-hierarchy/blob/master/src/stratify.js" title="Source">&lt;&gt;</a></p>
<p>Constructs a new stratify operator with the default settings.</p>
<p><a name="user-content-_stratify" href="#_stratify">#</a> <i>stratify</i>(<i>data</i>) <a href="https://github.com/d3/d3-hierarchy/blob/master/src/stratify.js#L20" title="Source">&lt;&gt;</a></p>
<p>Generates a new hierarchy from the specified tabular <em>data</em>. Each node in the returned object has a shallow copy of the properties from the corresponding data object, excluding the following reserved properties: id, parentId, children.</p>
<p><a name="user-content-stratify_id" href="#stratify_id">#</a> <i>stratify</i>.<b>id</b>([<i>id</i>]) <a href="https://github.com/d3/d3-hierarchy/blob/master/src/stratify.js#L64" title="Source">&lt;&gt;</a></p>
<p>If <em>id</em> is specified, sets the id accessor to the given function and returns this stratify operator. Otherwise, returns the current id accessor, which defaults to:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">function</span> <span class="pl-en">id</span>(<span class="pl-smi">d</span>) {
  <span class="pl-k">return</span> <span class="pl-smi">d</span>.<span class="pl-c1">id</span>;
}</pre></div>
<p>The id accessor is invoked for each element in the input data passed to the <a href="#_stratify">stratify operator</a>, being passed the current datum (<em>d</em>) and the current index (<em>i</em>). The returned string is then used to identify the node’s relationships in conjunction with the <a href="#stratify_parentId">parent id</a>. For leaf nodes, the id may be undefined; otherwise, the id must be unique. (Null and the empty string are equivalent to undefined.)</p>
<p><a name="user-content-stratify_parentId" href="#stratify_parentId">#</a> <i>stratify</i>.<b>parentId</b>([<i>parentId</i>]) <a href="https://github.com/d3/d3-hierarchy/blob/master/src/stratify.js#L68" title="Source">&lt;&gt;</a></p>
<p>If <em>parentId</em> is specified, sets the parent id accessor to the given function and returns this stratify operator. Otherwise, returns the current parent id accessor, which defaults to:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">function</span> <span class="pl-en">parentId</span>(<span class="pl-smi">d</span>) {
  <span class="pl-k">return</span> <span class="pl-smi">d</span>.<span class="pl-smi">parentId</span>;
}</pre></div>
<p>The parent id accessor is invoked for each element in the input data passed to the <a href="#_stratify">stratify operator</a>, being passed the current datum (<em>d</em>) and the current index (<em>i</em>). The returned string is then used to identify the node’s relationships in conjunction with the <a href="#stratify_id">id</a>. For the root node, the parent id should be undefined. (Null and the empty string are equivalent to undefined.) There must be exactly one root node in the input data, and no circular relationships.</p>
<h3><a href="#cluster" aria-hidden="true" class="anchor" id="user-content-cluster"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Cluster</h3>
<p><a href="http://bl.ocks.org/mbostock/ff91c1558bc570b08539547ccc90050b"><img alt="Dendrogram" src="https://raw.githubusercontent.com/d3/d3-hierarchy/master/img/cluster.png" style="max-width:100%;"></a></p>
<p>The <strong>cluster layout</strong> produces <a href="http://en.wikipedia.org/wiki/Dendrogram">dendrograms</a>: node-link diagrams that place leaf nodes of the tree at the same depth. Dendograms are typically less compact than <a href="#tree">tidy trees</a>, but are useful when all the leaves should be at the same level, such as for hierarchical clustering or <a href="http://bl.ocks.org/mbostock/c034d66572fd6bd6815a">phylogenetic tree diagrams</a>.</p>
<p><a name="user-content-cluster" href="#cluster">#</a> d3.<b>cluster</b>() <a href="https://github.com/d3/d3-hierarchy/blob/master/src/cluster.js" title="Source">&lt;&gt;</a></p>
<p>Creates a new cluster layout with default settings.</p>
<p><a name="user-content-_cluster" href="#_cluster">#</a> <i>cluster</i>(<i>root</i>) <a href="https://github.com/d3/d3-hierarchy/blob/master/src/cluster.js#L39" title="Source">&lt;&gt;</a></p>
<p>Lays out the specified <em>root</em> <a href="#hierarchy">hierarchy</a>, assigning the following properties on <em>root</em> and its descendants:</p>
<ul>
<li><em>node</em>.x - the <em>x</em>-coordinate of the node</li>
<li><em>node</em>.y - the <em>y</em>-coordinate of the node</li>
</ul>
<p>The coordinates <em>x</em> and <em>y</em> represent an arbitrary coordinate system; for example, you can treat <em>x</em> as an angle and <em>y</em> as a radius to produce a <a href="http://bl.ocks.org/mbostock/4739610f6d96aaad2fb1e78a72b385ab">radial layout</a>. You may want to call <a href="#node_sort"><em>root</em>.sort</a> before passing the hierarchy to the cluster layout.</p>
<p><a name="user-content-cluster_size" href="#cluster_size">#</a> <i>cluster</i>.<b>size</b>([<i>size</i>]) <a href="https://github.com/d3/d3-hierarchy/blob/master/src/cluster.js#L75" title="Source">&lt;&gt;</a></p>
<p>If <em>size</em> is specified, sets this cluster layout’s size to the specified two-element array of numbers [<em>width</em>, <em>height</em>] and returns this cluster layout. If <em>size</em> is not specified, returns the current layout size, which defaults to [1, 1]. A layout size of null indicates that a <a href="#node_size">node size</a> will be used instead. The coordinates <em>x</em> and <em>y</em> represent an arbitrary coordinate system; for example, to produce a <a href="http://bl.ocks.org/mbostock/4739610f6d96aaad2fb1e78a72b385ab">radial layout</a>, a size of [360, <em>radius</em>] corresponds to a breadth of 360° and a depth of <em>radius</em>.</p>
<p><a name="user-content-cluster_nodeSize" href="#cluster_nodeSize">#</a> <i>cluster</i>.<b>nodeSize</b>([<i>size</i>]) <a href="https://github.com/d3/d3-hierarchy/blob/master/src/cluster.js#L79" title="Source">&lt;&gt;</a></p>
<p>If <em>size</em> is specified, sets this cluster layout’s node size to the specified two-element array of numbers [<em>width</em>, <em>height</em>] and returns this cluster layout. If <em>size</em> is not specified, returns the current node size, which defaults to null. A node size of null indicates that a <a href="#cluster_size">layout size</a> will be used instead. When a node size is specified, the root node is always positioned at ⟨0, 0⟩.</p>
<p><a name="user-content-cluster_separation" href="#cluster_separation">#</a> <i>cluster</i>.<b>separation</b>([<i>separation</i>]) <a href="https://github.com/d3/d3-hierarchy/blob/master/src/cluster.js#L71" title="Source">&lt;&gt;</a></p>
<p>If <em>separation</em> is specified, sets the separation accessor to the specified function and returns this cluster layout. If <em>separation</em> is not specified, returns the current separation accessor, which defaults to:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">function</span> <span class="pl-en">separation</span>(<span class="pl-smi">a</span>, <span class="pl-smi">b</span>) {
  <span class="pl-k">return</span> <span class="pl-smi">a</span>.<span class="pl-c1">parent</span> <span class="pl-k">==</span> <span class="pl-smi">b</span>.<span class="pl-c1">parent</span> <span class="pl-k">?</span> <span class="pl-c1">1</span> <span class="pl-k">:</span> <span class="pl-c1">2</span>;
}</pre></div>
<p>The separation accessor is used to separate neighboring leaves. The separation function is passed two leaves <em>a</em> and <em>b</em>, and must return the desired separation. The nodes are typically siblings, though the nodes may be more distantly related if the layout decides to place such nodes adjacent.</p>
<h3><a href="#tree" aria-hidden="true" class="anchor" id="user-content-tree"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Tree</h3>
<p><a href="http://bl.ocks.org/mbostock/9d0899acb5d3b8d839d9d613a9e1fe04"><img alt="Tidy Tree" src="https://raw.githubusercontent.com/d3/d3-hierarchy/master/img/tree.png" style="max-width:100%;"></a></p>
<p>The <strong>tree</strong> layout produces tidy node-link diagrams of trees using the <a href="http://emr.cs.iit.edu/%7Ereingold/tidier-drawings.pdf">Reingold–Tilford “tidy” algorithm</a>, improved to run in linear time by <a href="http://dirk.jivas.de/papers/buchheim02improving.pdf">Buchheim <em>et al.</em></a> Tidy trees are typically more compact than <a href="#cluster">dendograms</a>.</p>
<p><a name="user-content-tree" href="#tree">#</a> d3.<b>tree</b>() <a href="https://github.com/d3/d3-hierarchy/blob/master/src/tree.js" title="Source">&lt;&gt;</a></p>
<p>Creates a new tree layout with default settings.</p>
<p><a name="user-content-_tree" href="#_tree">#</a> <i>tree</i>(<i>root</i>) <a href="https://github.com/d3/d3-hierarchy/blob/master/src/tree.js#L106" title="Source">&lt;&gt;</a></p>
<p>Lays out the specified <em>root</em> <a href="#hierarchy">hierarchy</a>, assigning the following properties on <em>root</em> and its descendants:</p>
<ul>
<li><em>node</em>.x - the <em>x</em>-coordinate of the node</li>
<li><em>node</em>.y - the <em>y</em>-coordinate of the node</li>
</ul>
<p>The coordinates <em>x</em> and <em>y</em> represent an arbitrary coordinate system; for example, you can treat <em>x</em> as an angle and <em>y</em> as a radius to produce a <a href="http://bl.ocks.org/mbostock/2e12b0bd732e7fe4000e2d11ecab0268">radial layout</a>. You may want to call <a href="#node_sort"><em>root</em>.sort</a> before passing the hierarchy to the tree layout.</p>
<p><a name="user-content-tree_size" href="#tree_size">#</a> <i>tree</i>.<b>size</b>([<i>size</i>]) <a href="https://github.com/d3/d3-hierarchy/blob/master/src/tree.js#L228" title="Source">&lt;&gt;</a></p>
<p>If <em>size</em> is specified, sets this tree layout’s size to the specified two-element array of numbers [<em>width</em>, <em>height</em>] and returns this tree layout. If <em>size</em> is not specified, returns the current layout size, which defaults to [1, 1]. A layout size of null indicates that a <a href="#node_size">node size</a> will be used instead. The coordinates <em>x</em> and <em>y</em> represent an arbitrary coordinate system; for example, to produce a <a href="http://bl.ocks.org/mbostock/2e12b0bd732e7fe4000e2d11ecab0268">radial layout</a>, a size of [360, <em>radius</em>] corresponds to a breadth of 360° and a depth of <em>radius</em>.</p>
<p><a name="user-content-tree_nodeSize" href="#tree_nodeSize">#</a> <i>tree</i>.<b>nodeSize</b>([<i>size</i>]) <a href="https://github.com/d3/d3-hierarchy/blob/master/src/tree.js#L232" title="Source">&lt;&gt;</a></p>
<p>If <em>size</em> is specified, sets this tree layout’s node size to the specified two-element array of numbers [<em>width</em>, <em>height</em>] and returns this tree layout. If <em>size</em> is not specified, returns the current node size, which defaults to null. A node size of null indicates that a <a href="#tree_size">layout size</a> will be used instead. When a node size is specified, the root node is always positioned at ⟨0, 0⟩.</p>
<p><a name="user-content-tree_separation" href="#tree_separation">#</a> <i>tree</i>.<b>separation</b>([<i>separation</i>]) <a href="https://github.com/d3/d3-hierarchy/blob/master/src/tree.js#L224" title="Source">&lt;&gt;</a></p>
<p>If <em>separation</em> is specified, sets the separation accessor to the specified function and returns this tree layout. If <em>separation</em> is not specified, returns the current separation accessor, which defaults to:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">function</span> <span class="pl-en">separation</span>(<span class="pl-smi">a</span>, <span class="pl-smi">b</span>) {
  <span class="pl-k">return</span> <span class="pl-smi">a</span>.<span class="pl-c1">parent</span> <span class="pl-k">==</span> <span class="pl-smi">b</span>.<span class="pl-c1">parent</span> <span class="pl-k">?</span> <span class="pl-c1">1</span> <span class="pl-k">:</span> <span class="pl-c1">2</span>;
}</pre></div>
<p>A variation that is more appropriate for radial layouts reduces the separation gap proportionally to the radius:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">function</span> <span class="pl-en">separation</span>(<span class="pl-smi">a</span>, <span class="pl-smi">b</span>) {
  <span class="pl-k">return</span> (<span class="pl-smi">a</span>.<span class="pl-c1">parent</span> <span class="pl-k">==</span> <span class="pl-smi">b</span>.<span class="pl-c1">parent</span> <span class="pl-k">?</span> <span class="pl-c1">1</span> <span class="pl-k">:</span> <span class="pl-c1">2</span>) <span class="pl-k">/</span> <span class="pl-smi">a</span>.<span class="pl-smi">depth</span>;
}</pre></div>
<p>The separation accessor is used to separate neighboring nodes. The separation function is passed two nodes <em>a</em> and <em>b</em>, and must return the desired separation. The nodes are typically siblings, though the nodes may be more distantly related if the layout decides to place such nodes adjacent.</p>
<h3><a href="#treemap" aria-hidden="true" class="anchor" id="user-content-treemap"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Treemap</h3>
<p><a href="http://bl.ocks.org/mbostock/6bbb0a7ff7686b124d80"><img alt="Treemap" src="https://raw.githubusercontent.com/d3/d3-hierarchy/master/img/treemap.png" style="max-width:100%;"></a></p>
<p>Introduced by <a href="http://www.cs.umd.edu/hcil/treemap-history/">Ben Shneiderman</a> in 1991, a <strong>treemap</strong> recursively subdivides area into rectangles according to each node’s associated value. D3’s treemap implementation supports an extensible <a href="#treemap_tile">tiling method</a>: the default <a href="#treemapSquarify">squarified</a> method seeks to generate rectangles with a <a href="https://en.wikipedia.org/wiki/Golden_ratio">golden</a> aspect ratio; this offers better readability and size estimation than <a href="#treemapSliceDice">slice-and-dice</a>, which simply alternates between horizontal and vertical subdivision by depth.</p>
<p><a name="user-content-treemap" href="#treemap">#</a> d3.<b>treemap</b>()</p>
<p>Creates a new treemap layout with default settings.</p>
<p><a name="user-content-_treemap" href="#_treemap">#</a> <i>treemap</i>(<i>root</i>) <a href="https://github.com/d3/d3-hierarchy/blob/master/src/treemap/index.js#L18" title="Source">&lt;&gt;</a></p>
<p>Lays out the specified <em>root</em> <a href="#hierarchy">hierarchy</a>, assigning the following properties on <em>root</em> and its descendants:</p>
<ul>
<li><em>node</em>.x0 - the left edge of the rectangle</li>
<li><em>node</em>.y0 - the top edge of the rectangle</li>
<li><em>node</em>.x1 - the right edge of the rectangle</li>
<li><em>node</em>.y1 - the bottom edge of the rectangle</li>
</ul>
<p>You must call <a href="#node_sum"><em>root</em>.sum</a> before passing the hierarchy to the treemap layout. You probably also want to call <a href="#node_sort"><em>root</em>.sort</a> to order the hierarchy before computing the layout.</p>
<p><a name="user-content-treemap_tile" href="#treemap_tile">#</a> <i>treemap</i>.<b>tile</b>([<i>tile</i>]) <a href="https://github.com/d3/d3-hierarchy/blob/master/src/treemap/index.js#L61" title="Source">&lt;&gt;</a></p>
<p>If <em>tile</em> is specified, sets the <a href="#treemap-tiling">tiling method</a> to the specified function and returns this treemap layout. If <em>tile</em> is not specified, returns the current tiling method, which defaults to <a href="#treemapSquarify">d3.treemapSquarify</a> with the golden ratio.</p>
<p><a name="user-content-treemap_size" href="#treemap_size">#</a> <i>treemap</i>.<b>size</b>([<i>size</i>]) <a href="https://github.com/d3/d3-hierarchy/blob/master/src/treemap/index.js#L57" title="Source">&lt;&gt;</a></p>
<p>If <em>size</em> is specified, sets this treemap layout’s size to the specified two-element array of numbers [<em>width</em>, <em>height</em>] and returns this treemap layout. If <em>size</em> is not specified, returns the current size, which defaults to [1, 1].</p>
<p><a name="user-content-treemap_round" href="#treemap_round">#</a> <i>treemap</i>.<b>round</b>([<i>round</i>]) <a href="https://github.com/d3/d3-hierarchy/blob/master/src/treemap/index.js#L53" title="Source">&lt;&gt;</a></p>
<p>If <em>round</em> is specified, enables or disables rounding according to the given boolean and returns this treemap layout. If <em>round</em> is not specified, returns the current rounding state, which defaults to false.</p>
<p><a name="user-content-treemap_padding" href="#treemap_padding">#</a> <i>treemap</i>.<b>padding</b>([<i>padding</i>]) <a href="https://github.com/d3/d3-hierarchy/blob/master/src/treemap/index.js#L65" title="Source">&lt;&gt;</a></p>
<p>If <em>padding</em> is specified, sets the <a href="#treemap_paddingInner">inner</a> and <a href="#treemap_paddingOuter">outer</a> padding to the specified number or function and returns this treemap layout. If <em>padding</em> is not specified, returns the current inner padding function.</p>
<p><a name="user-content-treemap_paddingInner" href="#treemap_paddingInner">#</a> <i>treemap</i>.<b>paddingInner</b>([<i>padding</i>]) <a href="https://github.com/d3/d3-hierarchy/blob/master/src/treemap/index.js#L69" title="Source">&lt;&gt;</a></p>
<p>If <em>padding</em> is specified, sets the inner padding to the specified number or function and returns this treemap layout. If <em>padding</em> is not specified, returns the current inner padding function, which defaults to the constant zero. If <em>padding</em> is a function, it is invoked for each node with children, being passed the current node. The inner padding is used to separate a node’s adjacent children.</p>
<p><a name="user-content-treemap_paddingOuter" href="#treemap_paddingOuter">#</a> <i>treemap</i>.<b>paddingOuter</b>([<i>padding</i>]) <a href="https://github.com/d3/d3-hierarchy/blob/master/src/treemap/index.js#L73" title="Source">&lt;&gt;</a></p>
<p>If <em>padding</em> is specified, sets the <a href="#treemap_paddingTop">top</a>, <a href="#treemap_paddingRight">right</a>, <a href="#treemap_paddingBottom">bottom</a> and <a href="#treemap_paddingLeft">left</a> padding to the specified number or function and returns this treemap layout. If <em>padding</em> is not specified, returns the current top padding function.</p>
<p><a name="user-content-treemap_paddingTop" href="#treemap_paddingTop">#</a> <i>treemap</i>.<b>paddingTop</b>([<i>padding</i>]) <a href="https://github.com/d3/d3-hierarchy/blob/master/src/treemap/index.js#L77" title="Source">&lt;&gt;</a></p>
<p>If <em>padding</em> is specified, sets the top padding to the specified number or function and returns this treemap layout. If <em>padding</em> is not specified, returns the current top padding function, which defaults to the constant zero. If <em>padding</em> is a function, it is invoked for each node with children, being passed the current node. The top padding is used to separate the top edge of a node from its children.</p>
<p><a name="user-content-treemap_paddingRight" href="#treemap_paddingRight">#</a> <i>treemap</i>.<b>paddingRight</b>([<i>padding</i>]) <a href="https://github.com/d3/d3-hierarchy/blob/master/src/treemap/index.js#L81" title="Source">&lt;&gt;</a></p>
<p>If <em>padding</em> is specified, sets the right padding to the specified number or function and returns this treemap layout. If <em>padding</em> is not specified, returns the current right padding function, which defaults to the constant zero. If <em>padding</em> is a function, it is invoked for each node with children, being passed the current node. The right padding is used to separate the right edge of a node from its children.</p>
<p><a name="user-content-treemap_paddingBottom" href="#treemap_paddingBottom">#</a> <i>treemap</i>.<b>paddingBottom</b>([<i>padding</i>]) <a href="https://github.com/d3/d3-hierarchy/blob/master/src/treemap/index.js#L85" title="Source">&lt;&gt;</a></p>
<p>If <em>padding</em> is specified, sets the bottom padding to the specified number or function and returns this treemap layout. If <em>padding</em> is not specified, returns the current bottom padding function, which defaults to the constant zero. If <em>padding</em> is a function, it is invoked for each node with children, being passed the current node. The bottom padding is used to separate the bottom edge of a node from its children.</p>
<p><a name="user-content-treemap_paddingLeft" href="#treemap_paddingLeft">#</a> <i>treemap</i>.<b>paddingLeft</b>([<i>padding</i>]) <a href="https://github.com/d3/d3-hierarchy/blob/master/src/treemap/index.js#L89" title="Source">&lt;&gt;</a></p>
<p>If <em>padding</em> is specified, sets the left padding to the specified number or function and returns this treemap layout. If <em>padding</em> is not specified, returns the current left padding function, which defaults to the constant zero. If <em>padding</em> is a function, it is invoked for each node with children, being passed the current node. The left padding is used to separate the left edge of a node from its children.</p>
<h4><a href="#treemap-tiling" aria-hidden="true" class="anchor" id="user-content-treemap-tiling"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Treemap Tiling</h4>
<p>Several built-in tiling methods are provided for use with <a href="#treemap_tile"><em>treemap</em>.tile</a>.</p>
<p><a name="user-content-treemapBinary" href="#treemapBinary">#</a> d3.<b>treemapBinary</b>(<i>node</i>, <i>x0</i>, <i>y0</i>, <i>x1</i>, <i>y1</i>) <a href="https://github.com/d3/d3-hierarchy/blob/master/src/treemap/binary.js" title="Source">&lt;&gt;</a></p>
<p>Recursively partitions the specified <em>nodes</em> into an approximately-balanced binary tree, choosing horizontal partitioning for wide rectangles and vertical partitioning for tall rectangles.</p>
<p><a name="user-content-treemapDice" href="#treemapDice">#</a> d3.<b>treemapDice</b>(<i>node</i>, <i>x0</i>, <i>y0</i>, <i>x1</i>, <i>y1</i>) <a href="https://github.com/d3/d3-hierarchy/blob/master/src/treemap/dice.js" title="Source">&lt;&gt;</a></p>
<p>Divides the rectangular area specified by <em>x0</em>, <em>y0</em>, <em>x1</em>, <em>y1</em> horizontally according the value of each of the specified <em>node</em>’s children. The children are positioned in order, starting with the left edge (<em>x0</em>) of the given rectangle. If the sum of the children’s values is less than the specified <em>node</em>’s value (<em>i.e.</em>, if the specified <em>node</em> has a non-zero internal value), the remaining empty space will be positioned on the right edge (<em>x1</em>) of the given rectangle.</p>
<p><a name="user-content-treemapSlice" href="#treemapSlice">#</a> d3.<b>treemapSlice</b>(<i>node</i>, <i>x0</i>, <i>y0</i>, <i>x1</i>, <i>y1</i>) <a href="https://github.com/d3/d3-hierarchy/blob/master/src/treemap/slice.js" title="Source">&lt;&gt;</a></p>
<p>Divides the rectangular area specified by <em>x0</em>, <em>y0</em>, <em>x1</em>, <em>y1</em> vertically according the value of each of the specified <em>node</em>’s children. The children are positioned in order, starting with the top edge (<em>y0</em>) of the given rectangle. If the sum of the children’s values is less than the specified <em>node</em>’s value (<em>i.e.</em>, if the specified <em>node</em> has a non-zero internal value), the remaining empty space will be positioned on the bottom edge (<em>y1</em>) of the given rectangle.</p>
<p><a name="user-content-treemapSliceDice" href="#treemapSliceDice">#</a> d3.<b>treemapSliceDice</b>(<i>node</i>, <i>x0</i>, <i>y0</i>, <i>x1</i>, <i>y1</i>) <a href="https://github.com/d3/d3-hierarchy/blob/master/src/treemap/sliceDice.js" title="Source">&lt;&gt;</a></p>
<p>If the specified <em>node</em> has odd depth, delegates to <a href="#treemapSlice">treemapSlice</a>; otherwise delegates to <a href="#treemapDice">treemapDice</a>.</p>
<p><a name="user-content-treemapSquarify" href="#treemapSquarify">#</a> d3.<b>treemapSquarify</b>(<i>node</i>, <i>x0</i>, <i>y0</i>, <i>x1</i>, <i>y1</i>) <a href="https://github.com/d3/d3-hierarchy/blob/master/src/treemap/squarify.js" title="Source">&lt;&gt;</a></p>
<p>Implements the <a href="https://www.win.tue.nl/%7Evanwijk/stm.pdf">squarified treemap</a> algorithm by Bruls <em>et al.</em>, which seeks to produce rectangles of a given <a href="#squarify_ratio">aspect ratio</a>.</p>
<p><a name="user-content-treemapResquarify" href="#treemapResquarify">#</a> d3.<b>treemapResquarify</b>(<i>node</i>, <i>x0</i>, <i>y0</i>, <i>x1</i>, <i>y1</i>) <a href="https://github.com/d3/d3-hierarchy/blob/master/src/treemap/resquarify.js" title="Source">&lt;&gt;</a></p>
<p>Like <a href="#treemapSquarify">d3.treemapSquarify</a>, except preserves the topology (node adjacencies) of the previous layout computed by d3.treemapResquarify, if there is one and it used the same <a href="#resquarify_ratio">target aspect ratio</a>. This tiling method is good for animating changes to treemaps because it only changes node sizes and not their relative positions, thus avoiding distracting shuffling and occlusion. The downside of a stable update, however, is a suboptimal layout for subsequent updates: only the first layout uses the Bruls <em>et al.</em> squarified algorithm.</p>
<p><a name="user-content-squarify_ratio" href="#squarify_ratio">#</a> <i>squarify</i>.<b>ratio</b>(<i>ratio</i>) <a href="https://github.com/d3/d3-hierarchy/blob/master/src/treemap/squarify.js#L58" title="Source">&lt;&gt;</a></p>
<p>Specifies the desired aspect ratio of the generated rectangles. The <em>ratio</em> must be specified as a number greater than or equal to one. Note that the orientation of the generated rectangles (tall or wide) is not implied by the ratio; for example, a ratio of two will attempt to produce a mixture of rectangles whose <em>width</em>:<em>height</em> ratio is either 2:1 or 1:2. (However, you can approximately achieve this result by generating a square treemap at different dimensions, and then <a href="http://bl.ocks.org/mbostock/5c50a377e76a1974248bd628befdec95">stretching the treemap</a> to the desired aspect ratio.) Furthermore, the specified <em>ratio</em> is merely a hint to the tiling algorithm; the rectangles are not guaranteed to have the specified aspect ratio. If not specified, the aspect ratio defaults to the golden ratio, φ = (1 + sqrt(5)) / 2, per <a href="http://vis.stanford.edu/papers/perception-treemaps">Kong <em>et al.</em></a></p>
<h3><a href="#partition" aria-hidden="true" class="anchor" id="user-content-partition"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Partition</h3>
<p><a href="http://bl.ocks.org/mbostock/2e73ec84221cb9773f4c"><img alt="Partition" src="https://raw.githubusercontent.com/d3/d3-hierarchy/master/img/partition.png" style="max-width:100%;"></a></p>
<p>The <strong>partition layout</strong> produces adjacency diagrams: a space-filling variant of a node-link tree diagram. Rather than drawing a link between parent and child in the hierarchy, nodes are drawn as solid areas (either arcs or rectangles), and their placement relative to other nodes reveals their position in the hierarchy. The size of the nodes encodes a quantitative dimension that would be difficult to show in a node-link diagram.</p>
<p><a name="user-content-partition" href="#partition">#</a> d3.<b>partition</b>()</p>
<p>Creates a new partition layout with the default settings.</p>
<p><a name="user-content-_partition" href="#_partition">#</a> <i>partition</i>(<i>root</i>) <a href="https://github.com/d3/d3-hierarchy/blob/master/src/partition.js#L10" title="Source">&lt;&gt;</a></p>
<p>Lays out the specified <em>root</em> <a href="#hierarchy">hierarchy</a>, assigning the following properties on <em>root</em> and its descendants:</p>
<ul>
<li><em>node</em>.x0 - the left edge of the rectangle</li>
<li><em>node</em>.y0 - the top edge of the rectangle</li>
<li><em>node</em>.x1 - the right edge of the rectangle</li>
<li><em>node</em>.y1 - the bottom edge of the rectangle</li>
</ul>
<p>You must call <a href="#node_sum"><em>root</em>.sum</a> before passing the hierarchy to the partition layout. You probably also want to call <a href="#node_sort"><em>root</em>.sort</a> to order the hierarchy before computing the layout.</p>
<p><a name="user-content-partition_size" href="#partition_size">#</a> <i>partition</i>.<b>size</b>([<i>size</i>]) <a href="https://github.com/d3/d3-hierarchy/blob/master/src/partition.js#L43" title="Source">&lt;&gt;</a></p>
<p>If <em>size</em> is specified, sets this partition layout’s size to the specified two-element array of numbers [<em>width</em>, <em>height</em>] and returns this partition layout. If <em>size</em> is not specified, returns the current size, which defaults to [1, 1].</p>
<p><a name="user-content-partition_round" href="#partition_round">#</a> <i>partition</i>.<b>round</b>([<i>round</i>]) <a href="https://github.com/d3/d3-hierarchy/blob/master/src/partition.js#L39" title="Source">&lt;&gt;</a></p>
<p>If <em>round</em> is specified, enables or disables rounding according to the given boolean and returns this partition layout. If <em>round</em> is not specified, returns the current rounding state, which defaults to false.</p>
<p><a name="user-content-partition_padding" href="#partition_padding">#</a> <i>partition</i>.<b>padding</b>([<i>padding</i>]) <a href="https://github.com/d3/d3-hierarchy/blob/master/src/partition.js#L47" title="Source">&lt;&gt;</a></p>
<p>If <em>padding</em> is specified, sets the padding to the specified number and returns this partition layout. If <em>padding</em> is not specified, returns the current padding, which defaults to zero. The padding is used to separate a node’s adjacent children.</p>
<h3><a href="#pack" aria-hidden="true" class="anchor" id="user-content-pack"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Pack</h3>
<p><a href="http://bl.ocks.org/mbostock/ca5b03a33affa4160321"><img alt="Circle-Packing" src="https://raw.githubusercontent.com/d3/d3-hierarchy/master/img/pack.png" style="max-width:100%;"></a></p>
<p>Enclosure diagrams use containment (nesting) to represent a hierarchy. The size of the leaf circles encodes a quantitative dimension of the data. The enclosing circles show the approximate cumulative size of each subtree, but due to wasted space there is some distortion; only the leaf nodes can be compared accurately. Although <a href="http://en.wikipedia.org/wiki/Circle_packing">circle packing</a> does not use space as efficiently as a <a href="#treemap">treemap</a>, the “wasted” space more prominently reveals the hierarchical structure.</p>
<p><a name="user-content-pack" href="#pack">#</a> d3.<b>pack</b>()</p>
<p>Creates a new pack layout with the default settings.</p>
<p><a name="user-content-_pack" href="#_pack">#</a> <i>pack</i>(<i>root</i>) <a href="https://github.com/d3/d3-hierarchy/blob/master/src/pack/index.js#L15" title="Source">&lt;&gt;</a></p>
<p>Lays out the specified <em>root</em> <a href="#hierarchy">hierarchy</a>, assigning the following properties on <em>root</em> and its descendants:</p>
<ul>
<li><em>node</em>.x - the <em>x</em>-coordinate of the circle’s center</li>
<li><em>node</em>.y - the <em>y</em>-coordinate of the circle’s center</li>
<li><em>node</em>.r - the radius of the circle</li>
</ul>
<p>You must call <a href="#node_sum"><em>root</em>.sum</a> before passing the hierarchy to the pack layout. You probably also want to call <a href="#node_sort"><em>root</em>.sort</a> to order the hierarchy before computing the layout.</p>
<p><a name="user-content-pack_radius" href="#pack_radius">#</a> <i>pack</i>.<b>radius</b>([<i>radius</i>]) <a href="https://github.com/d3/d3-hierarchy/blob/master/src/pack/index.js#L30" title="Source">&lt;&gt;</a></p>
<p>If <em>radius</em> is specified, sets the pack layout’s radius accessor to the specified function and returns this pack layout. If <em>radius</em> is not specified, returns the current radius accessor, which defaults to null. If the radius accessor is null, the radius of each leaf circle is derived from the leaf <em>node</em>.value (computed by <a href="#node_sum"><em>node</em>.sum</a>); the radii are then scaled proportionally to fit the <a href="#pack_size">layout size</a>. If the radius accessor is not null, the radius of each leaf circle is specified exactly by the function.</p>
<p><a name="user-content-pack_size" href="#pack_size">#</a> <i>pack</i>.<b>size</b>([<i>size</i>]) <a href="https://github.com/d3/d3-hierarchy/blob/master/src/pack/index.js#L34" title="Source">&lt;&gt;</a></p>
<p>If <em>size</em> is specified, sets this pack layout’s size to the specified two-element array of numbers [<em>width</em>, <em>height</em>] and returns this pack layout. If <em>size</em> is not specified, returns the current size, which defaults to [1, 1].</p>
<p><a name="user-content-pack_padding" href="#pack_padding">#</a> <i>pack</i>.<b>padding</b>([<i>padding</i>]) <a href="https://github.com/d3/d3-hierarchy/blob/master/src/pack/index.js#L38" title="Source">&lt;&gt;</a></p>
<p>If <em>padding</em> is specified, sets this pack layout’s padding accessor to the specified number or function or returns this pack layout. If <em>padding</em> is not specified, returns the current padding accessor, which defaults to the constant zero. When siblings are packed, tangent siblings will be separated by approximately the specified padding; the enclosing parent circle will also be separated from its children by approximately the specified padding. If an <a href="#pack_radius">explicit radius</a> is not specified, the padding is approximate because a two-pass algorithm is needed to fit within the <a href="#pack_size">layout size</a>: the circles are first packed without padding; a scaling factor is computed and applied to the specified padding; and lastly the circles are re-packed with padding.</p>
<p><a name="user-content-packSiblings" href="#packSiblings">#</a> d3.<b>packSiblings</b>(<i>circles</i>) <a href="https://github.com/d3/d3-hierarchy/blob/master/src/pack/siblings.js" title="Source">&lt;&gt;</a></p>
<p>Packs the specified array of <em>circles</em>, each of which must have a <em>circle</em>.r property specifying the circle’s radius. Assigns the following properties to each circle:</p>
<ul>
<li><em>circle</em>.x - the <em>x</em>-coordinate of the circle’s center</li>
<li><em>circle</em>.y - the <em>y</em>-coordinate of the circle’s center</li>
</ul>
<p>The circles are positioned according to the front-chain packing algorithm by <a href="https://dl.acm.org/citation.cfm?id=1124851">Wang <em>et al.</em></a></p>
<p><a name="user-content-packEnclose" href="#packEnclose">#</a> d3.<b>packEnclose</b>(<i>circles</i>) <a href="https://github.com/d3/d3-hierarchy/blob/master/src/pack/enclose.js" title="Source">&lt;&gt;</a></p>
<p>Computes the <a href="https://en.wikipedia.org/wiki/Smallest-circle_problem">smallest circle</a> that encloses the specified array of <em>circles</em>, each of which must have a <em>circle</em>.r property specifying the circle’s radius, and <em>circle</em>.x and <em>circle</em>.y properties specifying the circle’s center. The enclosing circle is computed using the <a href="http://www.inf.ethz.ch/personal/emo/PublFiles/SubexLinProg_ALG16_96.pdf">Matoušek-Sharir-Welzl algorithm</a>. (See also <a href="https://bl.ocks.org/mbostock/751fdd637f4bc2e3f08b">Apollonius’ Problem</a>.)</p>
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
      <li class="mr-3">&copy; 2018 <span title="0.15816s from unicorn-3000369800-h7cmq">GitHub</span>, Inc.</li>
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


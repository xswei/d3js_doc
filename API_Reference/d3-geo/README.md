





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
  
  <title>d3-geo/README.md at master · d3/d3-geo</title>
  <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
  <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
  <meta property="fb:app_id" content="1401488693436528">

    
    <meta content="https://avatars3.githubusercontent.com/u/1562726?s=400&amp;v=4" property="og:image" /><meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="d3/d3-geo" property="og:title" /><meta content="https://github.com/d3/d3-geo" property="og:url" /><meta content="d3-geo - Geographic projections, spherical shapes and spherical trigonometry." property="og:description" />

  <link rel="assets" href="https://assets-cdn.github.com/">
  <link rel="web-socket" href="wss://live.github.com/_sockets/VjI6MjM0MjAxNjIzOjc1MjhmNDY3OWY4MjIzZTNiMjM5NTAyYWE1OWNiY2RlNDNlYzk2ZDZiNmFmZjYwNTU3YmJkZWUxNGI5NTg0ZmM=--9ad136cdf97ce7b69e38334e1b68b7481cb527ce">
  <meta name="pjax-timeout" content="1000">
  <link rel="sudo-modal" href="/sessions/sudo_modal">
  <meta name="request-id" content="F902:1FA0E:119C861:19913EE:5A603E1E" data-pjax-transient>
  

  <meta name="selected-link" value="repo_source" data-pjax-transient>

    <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
  <meta name="google-site-verification" content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA">
  <meta name="google-site-verification" content="GXs5KoUUkNCoaAZn7wPN-t01Pywp9M3sEjnt_3_ZWPc">
    <meta name="google-analytics" content="UA-3769691-2">

<meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="https://collector.githubapp.com/github-external/browser_event" name="octolytics-event-url" /><meta content="F902:1FA0E:119C861:19913EE:5A603E1E" name="octolytics-dimension-request_id" /><meta content="sea" name="octolytics-dimension-region_edge" /><meta content="iad" name="octolytics-dimension-region_render" /><meta content="16659379" name="octolytics-actor-id" /><meta content="xswei" name="octolytics-actor-login" /><meta content="72a8b786cd27412ba348c71058cf2aed3e8f8772266e5c157980395250fb923d" name="octolytics-actor-hash" />
<meta content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-pjax-transient="true" name="analytics-location" />




  <meta class="js-ga-set" name="dimension1" content="Logged In">


  

      <meta name="hostname" content="github.com">
  <meta name="user-login" content="xswei">

      <meta name="expected-hostname" content="github.com">
    <meta name="js-proxy-site-detection-payload" content="MTdjMzlhNjY2ZDExZTlhYWY4MmM3NGIxYTJjYTE4YjQ4YWQ5YWUxNGJhNTViZTA5MDViYzcyNjM2N2NjZDI5ZHx7InJlbW90ZV9hZGRyZXNzIjoiMjIwLjE4MS4xNzEuMTI1IiwicmVxdWVzdF9pZCI6IkY5MDI6MUZBMEU6MTE5Qzg2MToxOTkxM0VFOjVBNjAzRTFFIiwidGltZXN0YW1wIjoxNTE2MjU2Nzk5LCJob3N0IjoiZ2l0aHViLmNvbSJ9">

    <meta name="enabled-features" content="UNIVERSE_BANNER,FREE_TRIALS">

  <meta name="html-safe-nonce" content="95ac36701972faaa3306c820d3f61fe703aeac54">

  <meta http-equiv="x-pjax-version" content="c0275ff3857f879afa7c0ef3fbc951b4">
  

      <link href="https://github.com/d3/d3-geo/commits/master.atom" rel="alternate" title="Recent Commits to d3-geo:master" type="application/atom+xml">

  <meta name="description" content="d3-geo - Geographic projections, spherical shapes and spherical trigonometry.">
  <meta name="go-import" content="github.com/d3/d3-geo git https://github.com/d3/d3-geo.git">

  <meta content="1562726" name="octolytics-dimension-user_id" /><meta content="d3" name="octolytics-dimension-user_login" /><meta content="53070901" name="octolytics-dimension-repository_id" /><meta content="d3/d3-geo" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="53070901" name="octolytics-dimension-repository_network_root_id" /><meta content="d3/d3-geo" name="octolytics-dimension-repository_network_root_nwo" /><meta content="false" name="octolytics-dimension-repository_explore_github_marketplace_ci_cta_shown" />


    <link rel="canonical" href="https://github.com/d3/d3-geo/blob/master/README.md" data-pjax-transient>


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
  <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/d3/d3-geo/search" class="js-site-search-form" data-scoped-search-url="/d3/d3-geo/search" data-unscoped-search-url="/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <label class="form-control header-search-wrapper js-chromeless-input-container">
        <a href="/d3/d3-geo/blob/master/README.md" class="header-search-scope no-underline">This repository</a>
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
    <span title="d3/d3-geo">This repository</span>
  </div>
    <a class="dropdown-item" href="/d3/d3-geo/issues/new" data-ga-click="Header, create new issue">
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

        <li><!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/logout" class="logout-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="ilbvcR+rAPR4g9bOo9WUujhSfYhbFTHsmmEZ+LTaaCgUMGsEVKy0eAPTBE5URuwKex6A3QPtxyQoFSZa9XJpVg==" /></div>
          <button type="submit" class="dropdown-item dropdown-signout" data-ga-click="Header, sign out, icon:logout">
            Sign out
          </button>
        </form></li>
      </ul>
    </details>
  </li>
</ul>


        <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/logout" class="sr-only right-0" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="f1AyuK7ox2g5+GYafQ7pss+SjpE3/83t8nLQCjfzLaHhNrbN5e9z5EKotJqKnZECjN5zxG8HOyVABu+odlss3w==" /></div>
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
        <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="CqlUu54bh7P2QzwjRYZuu9nMy5cRJV7P3GQAQ1v4EaZnQBeredo19c2cuqkfvPjAW1fmsU/YYP3+nz4QMKUd6Q==" /></div>      <input class="form-control" id="repository_id" name="repository_id" type="hidden" value="53070901" />

        <div class="select-menu js-menu-container js-select-menu">
          <a href="/d3/d3-geo/subscription"
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
            href="/d3/d3-geo/watchers"
            aria-label="32 users are watching this repository">
            32
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
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/d3/d3-geo/unstar" class="starred js-social-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="n5eMNsZIGGpFIZpLOYtGSGID2jo6zh5VAay77Ajwa+KjFOAaME4lv3oi/UYby4h/eTfaV8Z3mfmeeTUZvuqHhw==" /></div>
      <input type="hidden" name="context" value="repository"></input>
      <button
        type="submit"
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Unstar this repository" title="Unstar d3/d3-geo"
        data-ga-click="Repository, click unstar button, action:blob#show; text:Unstar">
        <svg aria-hidden="true" class="octicon octicon-star" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"/></svg>
        Unstar
      </button>
        <a class="social-count js-social-count" href="/d3/d3-geo/stargazers"
           aria-label="253 users starred this repository">
          253
        </a>
</form>
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/d3/d3-geo/star" class="unstarred js-social-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="i7z3lWWB9pkaW/8EbdbpuYxU+tWXO7cQNY3D3PKAIqfLORp03Y5Yc4IhMTzy19KkQzZuHw4ESiVDYHmfP9GDrw==" /></div>
      <input type="hidden" name="context" value="repository"></input>
      <button
        type="submit"
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Star this repository" title="Star d3/d3-geo"
        data-ga-click="Repository, click star button, action:blob#show; text:Star">
        <svg aria-hidden="true" class="octicon octicon-star" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"/></svg>
        Star
      </button>
        <a class="social-count js-social-count" href="/d3/d3-geo/stargazers"
           aria-label="253 users starred this repository">
          253
        </a>
</form>  </div>

  </li>

  <li>
          <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/d3/d3-geo/fork" class="btn-with-count" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="6vRIy0srwR3nSZh5x6LRkj80d5hnGkeS2k28lEmm1IxThoMPDvyGEixwY02k9BpDMnxKyArnmQoL0sgPKaPIAA==" /></div>
            <button
                type="submit"
                class="btn btn-sm btn-with-count"
                data-ga-click="Repository, show fork modal, action:blob#show; text:Fork"
                title="Fork your own copy of d3/d3-geo to your account"
                aria-label="Fork your own copy of d3/d3-geo to your account">
              <svg aria-hidden="true" class="octicon octicon-repo-forked" height="16" version="1.1" viewBox="0 0 10 16" width="10"><path fill-rule="evenodd" d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
              Fork
            </button>
</form>
    <a href="/d3/d3-geo/network" class="social-count"
       aria-label="79 users forked this repository">
      79
    </a>
  </li>
</ul>

      <h1 class="public ">
  <svg aria-hidden="true" class="octicon octicon-repo" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
  <span class="author" itemprop="author"><a href="/d3" class="url fn" rel="author">d3</a></span><!--
--><span class="path-divider">/</span><!--
--><strong itemprop="name"><a href="/d3/d3-geo" data-pjax="#js-repo-pjax-container">d3-geo</a></strong>

</h1>

    </div>
    
<nav class="reponav js-repo-nav js-sidenav-container-pjax container"
     itemscope
     itemtype="http://schema.org/BreadcrumbList"
     role="navigation"
     data-pjax="#js-repo-pjax-container">

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/d3/d3-geo" class="js-selected-navigation-item selected reponav-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches repo_packages /d3/d3-geo" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-code" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z"/></svg>
      <span itemprop="name">Code</span>
      <meta itemprop="position" content="1">
</a>  </span>

    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a href="/d3/d3-geo/issues" class="js-selected-navigation-item reponav-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /d3/d3-geo/issues" itemprop="url">
        <svg aria-hidden="true" class="octicon octicon-issue-opened" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"/></svg>
        <span itemprop="name">Issues</span>
        <span class="Counter">9</span>
        <meta itemprop="position" content="2">
</a>    </span>

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/d3/d3-geo/pulls" class="js-selected-navigation-item reponav-item" data-hotkey="g p" data-selected-links="repo_pulls /d3/d3-geo/pulls" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-git-pull-request" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M11 11.28V5c-.03-.78-.34-1.47-.94-2.06C9.46 2.35 8.78 2.03 8 2H7V0L4 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0 0 10 15a1.993 1.993 0 0 0 1-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zM4 3c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v6.56A1.993 1.993 0 0 0 2 15a1.993 1.993 0 0 0 1-3.72V4.72c.59-.34 1-.98 1-1.72zm-.8 10c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
      <span itemprop="name">Pull requests</span>
      <span class="Counter">0</span>
      <meta itemprop="position" content="3">
</a>  </span>




  <a href="/d3/d3-geo/pulse" class="js-selected-navigation-item reponav-item" data-selected-links="repo_graphs repo_contributors dependency_graph pulse /d3/d3-geo/pulse">
    <svg aria-hidden="true" class="octicon octicon-graph" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M16 14v1H0V0h1v14h15zM5 13H3V8h2v5zm4 0H7V3h2v10zm4 0h-2V6h2v7z"/></svg>
    Insights
</a>

</nav>


  </div>

<div class="container new-discussion-timeline experiment-repo-nav ">
  <div class="repository-content ">

    
  <a href="/d3/d3-geo/blob/453f9b24e2b5fa8e644ee2bfa3fb03b33e5fd3ab/README.md" class="d-none js-permalink-shortcut" data-hotkey="y">Permalink</a>

  <!-- blob contrib key: blob_contributors:v21:d88b0db4b7a490c9d7fdf4165e46ffce -->

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
               href="/d3/d3-geo/blob/master/README.md"
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
              href="/d3/d3-geo/tree/v1.9.1/README.md"
              data-name="v1.9.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.9.1">
                v1.9.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-geo/tree/v1.9.0/README.md"
              data-name="v1.9.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.9.0">
                v1.9.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-geo/tree/v1.8.1/README.md"
              data-name="v1.8.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.8.1">
                v1.8.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-geo/tree/v1.7.1/README.md"
              data-name="v1.7.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.7.1">
                v1.7.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-geo/tree/v1.7.0/README.md"
              data-name="v1.7.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.7.0">
                v1.7.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-geo/tree/v1.6.4/README.md"
              data-name="v1.6.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.6.4">
                v1.6.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-geo/tree/v1.6.3/README.md"
              data-name="v1.6.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.6.3">
                v1.6.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-geo/tree/v1.6.2/README.md"
              data-name="v1.6.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.6.2">
                v1.6.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-geo/tree/v1.6.1/README.md"
              data-name="v1.6.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.6.1">
                v1.6.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-geo/tree/v1.6.0/README.md"
              data-name="v1.6.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.6.0">
                v1.6.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-geo/tree/v1.5.0/README.md"
              data-name="v1.5.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.5.0">
                v1.5.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-geo/tree/v1.4.0/README.md"
              data-name="v1.4.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.4.0">
                v1.4.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-geo/tree/v1.3.1/README.md"
              data-name="v1.3.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.3.1">
                v1.3.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-geo/tree/v1.3.0/README.md"
              data-name="v1.3.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.3.0">
                v1.3.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-geo/tree/v1.2.6/README.md"
              data-name="v1.2.6"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.2.6">
                v1.2.6
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-geo/tree/v1.2.5/README.md"
              data-name="v1.2.5"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.2.5">
                v1.2.5
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-geo/tree/v1.2.4/README.md"
              data-name="v1.2.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.2.4">
                v1.2.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-geo/tree/v1.2.3/README.md"
              data-name="v1.2.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.2.3">
                v1.2.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-geo/tree/v1.2.2/README.md"
              data-name="v1.2.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.2.2">
                v1.2.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-geo/tree/v1.2.1/README.md"
              data-name="v1.2.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.2.1">
                v1.2.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-geo/tree/v1.2.0/README.md"
              data-name="v1.2.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.2.0">
                v1.2.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-geo/tree/v1.1.1/README.md"
              data-name="v1.1.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.1.1">
                v1.1.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-geo/tree/v1.1.0/README.md"
              data-name="v1.1.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.1.0">
                v1.1.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-geo/tree/v1.0.0/README.md"
              data-name="v1.0.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.0">
                v1.0.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-geo/tree/v0.1.0/README.md"
              data-name="v0.1.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.1.0">
                v0.1.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-geo/tree/v0.0.4/README.md"
              data-name="v0.0.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.0.4">
                v0.0.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-geo/tree/v0.0.3/README.md"
              data-name="v0.0.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.0.3">
                v0.0.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-geo/tree/v0.0.2/README.md"
              data-name="v0.0.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.0.2">
                v0.0.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-geo/tree/v0.0.1/README.md"
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
      <a href="/d3/d3-geo/find/master"
            class="js-pjax-capture-input btn btn-sm BtnGroup-item"
            data-pjax
            data-hotkey="t">
        Find file
      </a>
      <button aria-label="Copy file path to clipboard" class="js-zeroclipboard btn btn-sm BtnGroup-item tooltipped tooltipped-s" data-copied-hint="Copied!" type="button">Copy path</button>
    </div>
    <div class="breadcrumb js-zeroclipboard-target">
      <span class="repo-root js-repo-root"><span class="js-path-segment"><a href="/d3/d3-geo"><span>d3-geo</span></a></span></span><span class="separator">/</span><strong class="final-path">README.md</strong>
    </div>
  </div>


  
  <div class="commit-tease">
      <span class="float-right">
        <a class="commit-tease-sha" href="/d3/d3-geo/commit/2c9fe02d9362c133c2b9bbcfd9472421430451d8" data-pjax>
          2c9fe02
        </a>
        <relative-time datetime="2017-10-05T16:23:34Z">Oct 6, 2017</relative-time>
      </span>
      <div>
        <img alt="@Fil" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/7001?s=40&amp;v=4" width="20" />
        <a href="/Fil" class="user-mention" rel="contributor">Fil</a>
          <a href="/d3/d3-geo/commit/2c9fe02d9362c133c2b9bbcfd9472421430451d8" class="message" data-pjax="true" title="Merge pull request #122 from tomwanzek/patch-1

Clarify Wording for Clipping Function API (Thanks @tomwanzek!)">Merge pull request</a> <a href="https://github.com/d3/d3-geo/pull/122" class="issue-link js-issue-link" data-error-text="Failed to load issue title" data-id="263156276" data-permission-text="Issue title is private" data-url="https://github.com/d3/d3-geo/issues/122">#122</a> <a href="/d3/d3-geo/commit/2c9fe02d9362c133c2b9bbcfd9472421430451d8" class="message" data-pjax="true" title="Merge pull request #122 from tomwanzek/patch-1

Clarify Wording for Clipping Function API (Thanks @tomwanzek!)">from tomwanzek/patch-1</a>
      </div>

    <div class="commit-tease-contributors">
      <button type="button" class="btn-link muted-link contributors-toggle" data-facebox="#blob_contributors_box">
        <strong>15</strong>
         contributors
      </button>
          <a class="avatar-link tooltipped tooltipped-s" aria-label="mbostock" href="/d3/d3-geo/commits/master/README.md?author=mbostock"><img alt="@mbostock" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/230541?s=40&amp;v=4" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="chrisuehlinger" href="/d3/d3-geo/commits/master/README.md?author=chrisuehlinger"><img alt="@chrisuehlinger" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/2203523?s=40&amp;v=4" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="Fil" href="/d3/d3-geo/commits/master/README.md?author=Fil"><img alt="@Fil" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/7001?s=40&amp;v=4" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="veltman" href="/d3/d3-geo/commits/master/README.md?author=veltman"><img alt="@veltman" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/2120446?s=40&amp;v=4" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="tyrasd" href="/d3/d3-geo/commits/master/README.md?author=tyrasd"><img alt="@tyrasd" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/1927298?s=40&amp;v=4" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="tpreusse" href="/d3/d3-geo/commits/master/README.md?author=tpreusse"><img alt="@tpreusse" class="avatar" height="20" src="https://avatars3.githubusercontent.com/u/410211?s=40&amp;v=4" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="tomwanzek" href="/d3/d3-geo/commits/master/README.md?author=tomwanzek"><img alt="@tomwanzek" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/16323903?s=40&amp;v=4" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="5tefan" href="/d3/d3-geo/commits/master/README.md?author=5tefan"><img alt="@5tefan" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/5855806?s=40&amp;v=4" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="snie2012" href="/d3/d3-geo/commits/master/README.md?author=snie2012"><img alt="@snie2012" class="avatar" height="20" src="https://avatars3.githubusercontent.com/u/10590504?s=40&amp;v=4" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="alignedleft" href="/d3/d3-geo/commits/master/README.md?author=alignedleft"><img alt="@alignedleft" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/1034002?s=40&amp;v=4" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="Devinsuit" href="/d3/d3-geo/commits/master/README.md?author=Devinsuit"><img alt="@Devinsuit" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/11741306?s=40&amp;v=4" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="mfogel" href="/d3/d3-geo/commits/master/README.md?author=mfogel"><img alt="@mfogel" class="avatar" height="20" src="https://avatars3.githubusercontent.com/u/69902?s=40&amp;v=4" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="lgrkvst" href="/d3/d3-geo/commits/master/README.md?author=lgrkvst"><img alt="@lgrkvst" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/4451499?s=40&amp;v=4" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="dechov" href="/d3/d3-geo/commits/master/README.md?author=dechov"><img alt="@dechov" class="avatar" height="20" src="https://avatars3.githubusercontent.com/u/1867547?s=40&amp;v=4" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="curran" href="/d3/d3-geo/commits/master/README.md?author=curran"><img alt="@curran" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/68416?s=40&amp;v=4" width="20" /> </a>


    </div>

    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header" data-facebox-id="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list" data-facebox-id="facebox-description">
          <li class="facebox-user-list-item">
            <img alt="@mbostock" height="24" src="https://avatars0.githubusercontent.com/u/230541?s=48&amp;v=4" width="24" />
            <a href="/mbostock">mbostock</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@chrisuehlinger" height="24" src="https://avatars3.githubusercontent.com/u/2203523?s=48&amp;v=4" width="24" />
            <a href="/chrisuehlinger">chrisuehlinger</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@Fil" height="24" src="https://avatars3.githubusercontent.com/u/7001?s=48&amp;v=4" width="24" />
            <a href="/Fil">Fil</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@veltman" height="24" src="https://avatars1.githubusercontent.com/u/2120446?s=48&amp;v=4" width="24" />
            <a href="/veltman">veltman</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@tyrasd" height="24" src="https://avatars0.githubusercontent.com/u/1927298?s=48&amp;v=4" width="24" />
            <a href="/tyrasd">tyrasd</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@tpreusse" height="24" src="https://avatars2.githubusercontent.com/u/410211?s=48&amp;v=4" width="24" />
            <a href="/tpreusse">tpreusse</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@tomwanzek" height="24" src="https://avatars3.githubusercontent.com/u/16323903?s=48&amp;v=4" width="24" />
            <a href="/tomwanzek">tomwanzek</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@5tefan" height="24" src="https://avatars3.githubusercontent.com/u/5855806?s=48&amp;v=4" width="24" />
            <a href="/5tefan">5tefan</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@snie2012" height="24" src="https://avatars2.githubusercontent.com/u/10590504?s=48&amp;v=4" width="24" />
            <a href="/snie2012">snie2012</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@alignedleft" height="24" src="https://avatars0.githubusercontent.com/u/1034002?s=48&amp;v=4" width="24" />
            <a href="/alignedleft">alignedleft</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@Devinsuit" height="24" src="https://avatars1.githubusercontent.com/u/11741306?s=48&amp;v=4" width="24" />
            <a href="/Devinsuit">Devinsuit</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@mfogel" height="24" src="https://avatars2.githubusercontent.com/u/69902?s=48&amp;v=4" width="24" />
            <a href="/mfogel">mfogel</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@lgrkvst" height="24" src="https://avatars1.githubusercontent.com/u/4451499?s=48&amp;v=4" width="24" />
            <a href="/lgrkvst">lgrkvst</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@dechov" height="24" src="https://avatars2.githubusercontent.com/u/1867547?s=48&amp;v=4" width="24" />
            <a href="/dechov">dechov</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@curran" height="24" src="https://avatars3.githubusercontent.com/u/68416?s=48&amp;v=4" width="24" />
            <a href="/curran">curran</a>
          </li>
      </ul>
    </div>
  </div>


  <div class="file">
    <div class="file-header">
  <div class="file-actions">

    <div class="BtnGroup">
      <a href="/d3/d3-geo/raw/master/README.md" class="btn btn-sm BtnGroup-item" id="raw-url">Raw</a>
        <a href="/d3/d3-geo/blame/master/README.md" class="btn btn-sm js-update-url-with-hash BtnGroup-item" data-hotkey="b">Blame</a>
      <a href="/d3/d3-geo/commits/master/README.md" class="btn btn-sm BtnGroup-item" rel="nofollow">History</a>
    </div>

        <a class="btn-octicon tooltipped tooltipped-nw"
           href="github-windows://openRepo/https://github.com/d3/d3-geo?branch=master&amp;filepath=README.md"
           aria-label="Open this file in GitHub Desktop"
           data-ga-click="Repository, open with desktop, type:windows">
            <svg aria-hidden="true" class="octicon octicon-device-desktop" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M15 2H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5.34c-.25.61-.86 1.39-2.34 2h8c-1.48-.61-2.09-1.39-2.34-2H15c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 9H1V3h14v8z"/></svg>
        </a>

          <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/d3/d3-geo/edit/master/README.md" class="inline-form js-update-url-with-hash" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="5qD7kTnaCQ2ibLz+mdOD1s4y0sZNVPmPQY6nG/JnlQq6BOSIw35c1xY5JDEzDHGdLrza0o7I3Z/rb0On+Rc13g==" /></div>
            <button class="btn-octicon tooltipped tooltipped-nw" type="submit"
              aria-label="Fork this project and edit the file" data-hotkey="e" data-disable-with>
              <svg aria-hidden="true" class="octicon octicon-pencil" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z"/></svg>
            </button>
</form>
        <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/d3/d3-geo/delete/master/README.md" class="inline-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="6EDoE4dXDslvXWTTvH4aLsPlkAWviepZ/PEAeaeM6WYwFwenE6PZZltk/6R9Msqgh9r/jG2p2Tp6TpL16ZNAUA==" /></div>
          <button class="btn-octicon btn-octicon-danger tooltipped tooltipped-nw" type="submit"
            aria-label="Fork this project and delete the file" data-disable-with>
            <svg aria-hidden="true" class="octicon octicon-trashcan" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M11 2H9c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1H2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1v9c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V5c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 12H3V5h1v8h1V5h1v8h1V5h1v8h1V5h1v9zm1-10H2V3h9v1z"/></svg>
          </button>
</form>  </div>

  <div class="file-info">
      671 lines (398 sloc)
      <span class="file-info-divider"></span>
    55.1 KB
  </div>
</div>

    
  <div id="readme" class="readme blob instapaper_body">
    <article class="markdown-body entry-content" itemprop="text"><h1><a href="#d3-geo" aria-hidden="true" class="anchor" id="user-content-d3-geo"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>d3-geo</h1>
<p>Map projections are sometimes implemented as point transformations. For instance, spherical Mercator:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">function</span> <span class="pl-en">mercator</span>(<span class="pl-smi">x</span>, <span class="pl-smi">y</span>) {
  <span class="pl-k">return</span> [x, <span class="pl-c1">Math</span>.<span class="pl-c1">log</span>(<span class="pl-c1">Math</span>.<span class="pl-c1">tan</span>(<span class="pl-c1">Math</span>.<span class="pl-c1">PI</span> <span class="pl-k">/</span> <span class="pl-c1">4</span> <span class="pl-k">+</span> y <span class="pl-k">/</span> <span class="pl-c1">2</span>))];
}</pre></div>
<p>This is a reasonable <em>mathematical</em> approach if your geometry consists of continuous, infinite point sets. Yet computers do not have infinite memory, so we must instead work with discrete geometry such as polygons and polylines!</p>
<p>Discrete geometry makes the challenge of projecting from the sphere to the plane much harder. The edges of a spherical polygon are <a href="https://en.wikipedia.org/wiki/Geodesic">geodesics</a> (segments of great circles), not straight lines. Projected to the plane, geodesics are curves in all map projections except <a href="#geoGnomonic">gnomonic</a>, and thus accurate projection requires interpolation along each arc. D3 uses <a href="https://bl.ocks.org/mbostock/3795544">adaptive sampling</a> inspired by a popular <a href="https://bost.ocks.org/mike/simplify/">line simplification method</a> to balance accuracy and performance.</p>
<p>The projection of polygons and polylines must also deal with the topological differences between the sphere and the plane. Some projections require cutting geometry that <a href="https://bl.ocks.org/mbostock/3788999">crosses the antimeridian</a>, while others require <a href="https://bl.ocks.org/mbostock/3021474">clipping geometry to a great circle</a>.</p>
<p>Spherical polygons also require a <a href="https://bl.ocks.org/mbostock/a7bdfeb041e850799a8d3dce4d8c50c8">winding order convention</a> to determine which side of the polygon is the inside: the exterior ring for polygons smaller than a hemisphere must be clockwise, while the exterior ring for polygons <a href="https://bl.ocks.org/mbostock/6713736">larger than a hemisphere</a> must be anticlockwise. Interior rings representing holes must use the opposite winding order of their exterior ring. This winding order convention is also used by <a href="https://github.com/topojson">TopoJSON</a> and <a href="https://github.com/mbostock/shapefile">ESRI shapefiles</a>; however, it is the <strong>opposite</strong> convention of GeoJSON’s <a href="https://tools.ietf.org/html/rfc7946#section-3.1.6">RFC 7946</a>. (Also note that standard GeoJSON WGS84 uses planar equirectangular coordinates, not spherical coordinates, and thus may require <a href="https://github.com/d3/d3-geo-projection/blob/master/README.md#geostitch">stitching</a> to remove antimeridian cuts.)</p>
<p>D3’s approach affords great expressiveness: you can choose the right projection, and the right aspect, for your data. D3 supports a wide variety of common and <a href="https://github.com/d3/d3-geo-projection">unusual map projections</a>. For more, see Part 2 of <a href="https://vimeo.com/106198518#t=20m0s">The Toolmaker’s Guide</a>.</p>
<p>D3 uses <a href="http://geojson.org/geojson-spec.html">GeoJSON</a> to represent geographic features in JavaScript. (See also <a href="https://github.com/mbostock/topojson">TopoJSON</a>, an extension of GeoJSON that is significantly more compact and encodes topology.) To convert shapefiles to GeoJSON, use <a href="https://github.com/mbostock/shapefile/blob/master/README.md#shp2geo">shp2geo</a>, part of the <a href="https://github.com/mbostock/shapefile">shapefile package</a>. See <a href="https://medium.com/@mbostock/command-line-cartography-part-1-897aa8f8ca2c">Command-Line Cartography</a> for an introduction to d3-geo and related tools.</p>
<h2><a href="#installing" aria-hidden="true" class="anchor" id="user-content-installing"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installing</h2>
<p>If you use NPM, <code>npm install d3-geo</code>. Otherwise, download the <a href="https://github.com/d3/d3-geo/releases/latest">latest release</a>. You can also load directly from <a href="https://d3js.org">d3js.org</a>, either as a <a href="https://d3js.org/d3-geo.v1.min.js">standalone library</a> or as part of <a href="https://github.com/d3/d3">D3 4.0</a>. AMD, CommonJS, and vanilla environments are supported. In vanilla, a <code>d3</code> global is exported:</p>
<div class="highlight highlight-text-html-basic"><pre>&lt;<span class="pl-ent">script</span> <span class="pl-e">src</span>=<span class="pl-s"><span class="pl-pds">"</span>https://d3js.org/d3-array.v1.min.js<span class="pl-pds">"</span></span>&gt;&lt;/<span class="pl-ent">script</span>&gt;
&lt;<span class="pl-ent">script</span> <span class="pl-e">src</span>=<span class="pl-s"><span class="pl-pds">"</span>https://d3js.org/d3-geo.v1.min.js<span class="pl-pds">"</span></span>&gt;&lt;/<span class="pl-ent">script</span>&gt;
&lt;<span class="pl-ent">script</span>&gt;<span class="pl-s1"></span>
<span class="pl-s1"></span>
<span class="pl-s1"><span class="pl-k">var</span> projection <span class="pl-k">=</span> <span class="pl-smi">d3</span>.<span class="pl-en">geoNaturalEarth1</span>(),</span>
<span class="pl-s1">    path <span class="pl-k">=</span> <span class="pl-smi">d3</span>.<span class="pl-en">geoPath</span>(projection);</span>
<span class="pl-s1"></span>
<span class="pl-s1"></span><span class="pl-s1">&lt;</span>/<span class="pl-ent">script</span>&gt;</pre></div>
<p><a href="https://tonicdev.com/npm/d3-geo">Try d3-geo in your browser.</a></p>
<h2><a href="#api-reference" aria-hidden="true" class="anchor" id="user-content-api-reference"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>API Reference</h2>
<ul>
<li><a href="#paths">Paths</a></li>
<li><a href="#projections">Projections</a> (<a href="#azimuthal-projections">Azimuthal</a>, <a href="#composite-projections">Composite</a>, <a href="#conic-projections">Conic</a>, <a href="#cylindrical-projections">Cylindrical</a>)</li>
<li><a href="#raw-projections">Raw Projections</a></li>
<li><a href="#spherical-math">Spherical Math</a></li>
<li><a href="#spherical-shapes">Spherical Shapes</a></li>
<li><a href="#streams">Streams</a></li>
<li><a href="#transforms">Transforms</a></li>
<li><a href="#clipping">Clipping</a></li>
</ul>
<h3><a href="#paths" aria-hidden="true" class="anchor" id="user-content-paths"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Paths</h3>
<p>The geographic path generator, <a href="#geoPath">d3.geoPath</a>, is similar to the shape generators in <a href="https://github.com/d3/d3-shape">d3-shape</a>: given a GeoJSON geometry or feature object, it generates an SVG path data string or <a href="https://bl.ocks.org/mbostock/3783604">renders the path to a Canvas</a>. Canvas is recommended for dynamic or interactive projections to improve performance. Paths can be used with <a href="#projections">projections</a> or <a href="#transforms">transforms</a>, or they can be used to render planar geometry directly to Canvas or SVG.</p>
<p><a href="#geoPath" name="user-content-geoPath">#</a> d3.<b>geoPath</b>([<i>projection</i>[, <i>context</i>]]) <a href="https://github.com/d3/d3-geo/blob/master/src/path/index.js" title="Source">&lt;&gt;</a></p>
<p>Creates a new geographic path generator with the default settings. If <em>projection</em> is specified, sets the <a href="#path_projection">current projection</a>. If <em>context</em> is specified, sets the <a href="#path_context">current context</a>.</p>
<p><a href="#_path" name="user-content-_path">#</a> <i>path</i>(<i>object</i>[, <i>arguments…</i>]) <a href="https://github.com/d3/d3-geo/blob/master/src/path/index.js#L15" title="Source">&lt;&gt;</a></p>
<p>Renders the given <em>object</em>, which may be any GeoJSON feature or geometry object:</p>
<ul>
<li>Point - a single position.</li>
<li>MultiPoint - an array of positions.</li>
<li>LineString - an array of positions forming a continuous line.</li>
<li>MultiLineString - an array of arrays of positions forming several lines.</li>
<li>Polygon - an array of arrays of positions forming a polygon (possibly with holes).</li>
<li>MultiPolygon - a multidimensional array of positions forming multiple polygons.</li>
<li>GeometryCollection - an array of geometry objects.</li>
<li>Feature - a feature containing one of the above geometry objects.</li>
<li>FeatureCollection - an array of feature objects.</li>
</ul>
<p>The type <em>Sphere</em> is also supported, which is useful for rendering the outline of the globe; a sphere has no coordinates. Any additional <em>arguments</em> are passed along to the <a href="#path_pointRadius">pointRadius</a> accessor.</p>
<p>To display multiple features, combine them into a feature collection:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-smi">svg</span>.<span class="pl-c1">append</span>(<span class="pl-s"><span class="pl-pds">"</span>path<span class="pl-pds">"</span></span>)
    .<span class="pl-en">datum</span>({type<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>FeatureCollection<span class="pl-pds">"</span></span>, features<span class="pl-k">:</span> features})
    .<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">"</span>d<span class="pl-pds">"</span></span>, <span class="pl-smi">d3</span>.<span class="pl-en">geoPath</span>());</pre></div>
<p>Or use multiple path elements:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-smi">svg</span>.<span class="pl-en">selectAll</span>(<span class="pl-s"><span class="pl-pds">"</span>path<span class="pl-pds">"</span></span>)
  .<span class="pl-c1">data</span>(features)
  .<span class="pl-en">enter</span>().<span class="pl-c1">append</span>(<span class="pl-s"><span class="pl-pds">"</span>path<span class="pl-pds">"</span></span>)
    .<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">"</span>d<span class="pl-pds">"</span></span>, <span class="pl-smi">d3</span>.<span class="pl-en">geoPath</span>());</pre></div>
<p>Separate path elements are typically slower than a single path element. However, distinct path elements are useful for styling and interaction (e.g., click or mouseover). Canvas rendering (see <a href="#path_context"><em>path</em>.context</a>) is typically faster than SVG, but requires more effort to implement styling and interaction.</p>
<p><a href="#path_area" name="user-content-path_area">#</a> <i>path</i>.<b>area</b>(<i>object</i>) <a href="https://github.com/d3/d3-geo/blob/master/src/path/area.js" title="Source">&lt;&gt;</a></p>
<p>Returns the projected planar area (typically in square pixels) for the specified GeoJSON <em>object</em>. Point, MultiPoint, LineString and MultiLineString geometries have zero area. For Polygon and MultiPolygon geometries, this method first computes the area of the exterior ring, and then subtracts the area of any interior holes. This method observes any clipping performed by the <a href="#path_projection">projection</a>; see <a href="#projection_clipAngle"><em>projection</em>.clipAngle</a> and <a href="#projection_clipExtent"><em>projection</em>.clipExtent</a>. This is the planar equivalent of <a href="#geoArea">d3.geoArea</a>.</p>
<p><a href="#path_bounds" name="user-content-path_bounds">#</a> <i>path</i>.<b>bounds</b>(<i>object</i>) <a href="https://github.com/d3/d3-geo/blob/master/src/path/bounds.js" title="Source">&lt;&gt;</a></p>
<p>Returns the projected planar bounding box (typically in pixels) for the specified GeoJSON <em>object</em>. The bounding box is represented by a two-dimensional array: [[<em>x₀</em>, <em>y₀</em>], [<em>x₁</em>, <em>y₁</em>]], where <em>x₀</em> is the minimum <em>x</em>-coordinate, <em>y₀</em> is the minimum <em>y</em>-coordinate, <em>x₁</em> is maximum <em>x</em>-coordinate, and <em>y₁</em> is the maximum <em>y</em>-coordinate. This is handy for, say, zooming in to a particular feature. (Note that in projected planar coordinates, the minimum latitude is typically the maximum <em>y</em>-value, and the maximum latitude is typically the minimum <em>y</em>-value.) This method observes any clipping performed by the <a href="#path_projection">projection</a>; see <a href="#projection_clipAngle"><em>projection</em>.clipAngle</a> and <a href="#projection_clipExtent"><em>projection</em>.clipExtent</a>. This is the planar equivalent of <a href="#geoBounds">d3.geoBounds</a>.</p>
<p><a href="#path_centroid" name="user-content-path_centroid">#</a> <i>path</i>.<b>centroid</b>(<i>object</i>) <a href="https://github.com/d3/d3-geo/blob/master/src/path/centroid.js" title="Source">&lt;&gt;</a></p>
<p>Returns the projected planar centroid (typically in pixels) for the specified GeoJSON <em>object</em>. This is handy for, say, labeling state or county boundaries, or displaying a symbol map. For example, a <a href="https://bl.ocks.org/mbostock/4055908">noncontiguous cartogram</a> might scale each state around its centroid. This method observes any clipping performed by the <a href="#path_projection">projection</a>; see <a href="#projection_clipAngle"><em>projection</em>.clipAngle</a> and <a href="#projection_clipExtent"><em>projection</em>.clipExtent</a>. This is the planar equivalent of <a href="#geoCentroid">d3.geoCentroid</a>.</p>
<p><a href="#path_measure" name="user-content-path_measure">#</a> <i>path</i>.<b>measure</b>(<i>object</i>) <a href="https://github.com/d3/d3-geo/blob/master/src/path/measure.js" title="Source">&lt;&gt;</a></p>
<p>Returns the projected planar length (typically in pixels) for the specified GeoJSON <em>object</em>. Point and MultiPoint geometries have zero length. For Polygon and MultiPolygon geometries, this method computes the summed length of all rings. This method observes any clipping performed by the <a href="#path_projection">projection</a>; see <a href="#projection_clipAngle"><em>projection</em>.clipAngle</a> and <a href="#projection_clipExtent"><em>projection</em>.clipExtent</a>. This is the planar equivalent of <a href="#geoLength">d3.geoLength</a>.</p>
<p><a href="#path_projection" name="user-content-path_projection">#</a> <i>path</i>.<b>projection</b>([<i>projection</i>]) <a href="https://github.com/d3/d3-geo/blob/master/src/path/index.js#L48" title="Source">&lt;&gt;</a></p>
<p>If a <em>projection</em> is specified, sets the current projection to the specified projection. If <em>projection</em> is not specified, returns the current projection, which defaults to null. The null projection represents the identity transformation: the input geometry is not projected and is instead rendered directly in raw coordinates. This can be useful for fast rendering of <a href="https://bl.ocks.org/mbostock/5557726">pre-projected geometry</a>, or for fast rendering of the equirectangular projection.</p>
<p>The given <em>projection</em> is typically one of D3’s built-in <a href="#projections">geographic projections</a>; however, any object that exposes a <a href="#projection_stream"><em>projection</em>.stream</a> function can be used, enabling the use of <a href="https://bl.ocks.org/mbostock/5663666">custom projections</a>. See D3’s <a href="#transforms">transforms</a> for more examples of arbitrary geometric transformations.</p>
<p><a href="#path_context" name="user-content-path_context">#</a> <i>path</i>.<b>context</b>([<i>context</i>]) <a href="https://github.com/d3/d3-geo/blob/master/src/path/index.js#L52" title="Source">&lt;&gt;</a></p>
<p>If <em>context</em> is specified, sets the current render context and returns the path generator. If the <em>context</em> is null, then the <a href="#_path">path generator</a> will return an SVG path string; if the context is non-null, the path generator will instead call methods on the specified context to render geometry. The context must implement the following subset of the <a href="https://www.w3.org/TR/2dcontext/#canvasrenderingcontext2d">CanvasRenderingContext2D API</a>:</p>
<ul>
<li><em>context</em>.beginPath()</li>
<li><em>context</em>.moveTo(<em>x</em>, <em>y</em>)</li>
<li><em>context</em>.lineTo(<em>x</em>, <em>y</em>)</li>
<li><em>context</em>.arc(<em>x</em>, <em>y</em>, <em>radius</em>, <em>startAngle</em>, <em>endAngle</em>)</li>
<li><em>context</em>.closePath()</li>
</ul>
<p>If a <em>context</em> is not specified, returns the current render context which defaults to null.</p>
<p><a href="#path_pointRadius" name="user-content-path_pointRadius">#</a> <i>path</i>.<b>pointRadius</b>([<i>radius</i>]) <a href="https://github.com/d3/d3-geo/blob/master/src/path/index.js#L59" title="Source">&lt;&gt;</a></p>
<p>If <em>radius</em> is specified, sets the radius used to display Point and MultiPoint geometries to the specified number. If <em>radius</em> is not specified, returns the current radius accessor, which defaults to 4.5. While the radius is commonly specified as a number constant, it may also be specified as a function which is computed per feature, being passed the any arguments passed to the <a href="#_path">path generator</a>. For example, if your GeoJSON data has additional properties, you might access those properties inside the radius function to vary the point size; alternatively, you could <a href="https://github.com/d3/d3-shape#symbols">d3.symbol</a> and a <a href="#geoProjection">projection</a> for greater flexibility.</p>
<h3><a href="#projections" aria-hidden="true" class="anchor" id="user-content-projections"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Projections</h3>
<p>Projections transform spherical polygonal geometry to planar polygonal geometry. D3 provides implementations of several classes of standard projections:</p>
<ul>
<li><a href="#azimuthal-projections">Azimuthal</a></li>
<li><a href="#composite-projections">Composite</a></li>
<li><a href="#conic-projections">Conic</a></li>
<li><a href="#cylindrical-projections">Cylindrical</a></li>
</ul>
<p>For many more projections, see <a href="https://github.com/d3/d3-geo-projection">d3-geo-projection</a>. You can implement <a href="#raw-projections">custom projections</a> using <a href="#geoProjection">d3.geoProjection</a> or <a href="#geoProjectionMutator">d3.geoProjectionMutator</a>.</p>
<p><a href="#_projection" name="user-content-_projection">#</a> <i>projection</i>(<i>point</i>) <a href="https://github.com/d3/d3-geo/blob/master/src/projection/index.js#L34" title="Source">&lt;&gt;</a></p>
<p>Returns a new array [<em>x</em>, <em>y</em>] (typically in pixels) representing the projected point of the given <em>point</em>. The point must be specified as a two-element array [<em>longitude</em>, <em>latitude</em>] in degrees. May return null if the specified <em>point</em> has no defined projected position, such as when the point is outside the clipping bounds of the projection.</p>
<p><a href="#projection_invert" name="user-content-projection_invert">#</a> <i>projection</i>.<b>invert</b>(<i>point</i>) <a href="https://github.com/d3/d3-geo/blob/master/src/projection/index.js#L39" title="Source">&lt;&gt;</a></p>
<p>Returns a new array [<em>longitude</em>, <em>latitude</em>] in degrees representing the unprojected point of the given projected <em>point</em>. The point must be specified as a two-element array [<em>x</em>, <em>y</em>] (typically in pixels). May return null if the specified <em>point</em> has no defined projected position, such as when the point is outside the clipping bounds of the projection.</p>
<p>This method is only defined on invertible projections.</p>
<p><a href="#projection_stream" name="user-content-projection_stream">#</a> <i>projection</i>.<b>stream</b>(<i>stream</i>) <a href="https://github.com/d3/d3-geo/blob/master/src/projection/index.js#L48" title="Source">&lt;&gt;</a></p>
<p>Returns a <a href="#streams">projection stream</a> for the specified output <em>stream</em>. Any input geometry is projected before being streamed to the output stream. A typical projection involves several geometry transformations: the input geometry is first converted to radians, rotated on three axes, clipped to the small circle or cut along the antimeridian, and lastly projected to the plane with adaptive resampling, scale and translation.</p>
<p><a href="#projection_preclip" name="user-content-projection_preclip">#</a> <i>projection</i>.<b>preclip</b>([<i>preclip</i>])</p>
<p>If <em>preclip</em> is specified, sets the projection’s spherical clipping to the specified function and returns the projection. If <em>preclip</em> is not specified, returns the current spherical clipping function (see <a href="#preclip">preclip</a>).</p>
<p><a href="#projection_postclip" name="user-content-projection_postclip">#</a> <i>projection</i>.<b>postclip</b>([<i>postclip</i>])</p>
<p>If <em>postclip</em> is specified, sets the projection’s cartesian clipping to the specified function and returns the projection. If <em>postclip</em> is not specified, returns the current cartesian clipping function (see <a href="#postclip">postclip</a>).</p>
<p><a href="#projection_clipAngle" name="user-content-projection_clipAngle">#</a> <i>projection</i>.<b>clipAngle</b>([<i>angle</i>]) <a href="https://github.com/d3/d3-geo/blob/master/src/projection/index.js#L52" title="Source">&lt;&gt;</a></p>
<p>If <em>angle</em> is specified, sets the projection’s clipping circle radius to the specified angle in degrees and returns the projection. If <em>angle</em> is null, switches to <a href="https://bl.ocks.org/mbostock/3788999">antimeridian cutting</a> rather than small-circle clipping. If <em>angle</em> is not specified, returns the current clip angle which defaults to null. Small-circle clipping is independent of viewport clipping via <a href="#projection_clipExtent"><em>projection</em>.clipExtent</a>.</p>
<p>See also <a href="#projection_preclip"><em>projection</em>.preclip</a>, <a href="#geoClipAntimeridian">d3.geoClipAntimeridian</a>, <a href="#geoClipCircle">d3.geoClipCircle</a>.</p>
<p><a href="#projection_clipExtent" name="user-content-projection_clipExtent">#</a> <i>projection</i>.<b>clipExtent</b>([<i>extent</i>]) <a href="https://github.com/d3/d3-geo/blob/master/src/projection/index.js#L56" title="Source">&lt;&gt;</a></p>
<p>If <em>extent</em> is specified, sets the projection’s viewport clip extent to the specified bounds in pixels and returns the projection. The <em>extent</em> bounds are specified as an array [[<i>x₀</i>, <i>y₀</i>], [<i>x₁</i>, <i>y₁</i>]], where <i>x₀</i> is the left-side of the viewport, <i>y₀</i> is the top, <i>x₁</i> is the right and <i>y₁</i> is the bottom. If <em>extent</em> is null, no viewport clipping is performed. If <em>extent</em> is not specified, returns the current viewport clip extent which defaults to null. Viewport clipping is independent of small-circle clipping via <a href="#projection_clipAngle"><em>projection</em>.clipAngle</a>.</p>
<p>See also <a href="#projection_postclip"><em>projection</em>.postclip</a>, <a href="#geoClipRectangle">d3.geoClipRectangle</a>.</p>
<p><a href="#projection_scale" name="user-content-projection_scale">#</a> <i>projection</i>.<b>scale</b>([<i>scale</i>]) <a href="https://github.com/d3/d3-geo/blob/master/src/projection/index.js#L60" title="Source">&lt;&gt;</a></p>
<p>If <em>scale</em> is specified, sets the projection’s scale factor to the specified value and returns the projection. If <em>scale</em> is not specified, returns the current scale factor; the default scale is projection-specific. The scale factor corresponds linearly to the distance between projected points; however, absolute scale factors are not equivalent across projections.</p>
<p><a href="#projection_translate" name="user-content-projection_translate">#</a> <i>projection</i>.<b>translate</b>([<i>translate</i>]) <a href="https://github.com/d3/d3-geo/blob/master/src/projection/index.js#L64v" title="Source">&lt;&gt;</a></p>
<p>If <em>translate</em> is specified, sets the projection’s translation offset to the specified two-element array [<i>t<sub>x</sub></i>, <i>t<sub>y</sub></i>] and returns the projection. If <em>translate</em> is not specified, returns the current translation offset which defaults to [480, 250]. The translation offset determines the pixel coordinates of the projection’s <a href="#projection_center">center</a>. The default translation offset places ⟨0°,0°⟩ at the center of a 960×500 area.</p>
<p><a href="#projection_center" name="user-content-projection_center">#</a> <i>projection</i>.<b>center</b>([<i>center</i>]) <a href="https://github.com/d3/d3-geo/blob/master/src/projection/index.js#L68" title="Source">&lt;&gt;</a></p>
<p>If <em>center</em> is specified, sets the projection’s center to the specified <em>center</em>, a two-element array of longitude and latitude in degrees and returns the projection. If <em>center</em> is not specified, returns the current center, which defaults to ⟨0°,0°⟩.</p>
<p><a href="#projection_rotate" name="user-content-projection_rotate">#</a> <i>projection</i>.<b>rotate</b>([<i>angles</i>]) <a href="https://github.com/d3/d3-geo/blob/master/src/projection/index.js#L72" title="Source">&lt;&gt;</a></p>
<p>If <em>rotation</em> is specified, sets the projection’s <a href="https://bl.ocks.org/mbostock/4282586">three-axis rotation</a> to the specified <em>angles</em>, which must be a two- or three-element array of numbers [<em>lambda</em>, <em>phi</em>, <em>gamma</em>] specifying the rotation angles in degrees about <a href="https://bl.ocks.org/mbostock/4282586">each spherical axis</a>. (These correspond to <a href="http://en.wikipedia.org/wiki/Aircraft_principal_axes">yaw, pitch and roll</a>.) If the rotation angle <em>gamma</em> is omitted, it defaults to 0. See also <a href="#geoRotation">d3.geoRotation</a>. If <em>rotation</em> is not specified, returns the current rotation which defaults [0, 0, 0].</p>
<p><a href="#projection_precision" name="user-content-projection_precision">#</a> <i>projection</i>.<b>precision</b>([<i>precision</i>]) <a href="https://github.com/d3/d3-geo/blob/master/src/projection/index.js#L76" title="Source">&lt;&gt;</a></p>
<p>If <em>precision</em> is specified, sets the threshold for the projection’s <a href="https://bl.ocks.org/mbostock/3795544">adaptive resampling</a> to the specified value in pixels and returns the projection. This value corresponds to the <a href="http://en.wikipedia.org/wiki/Ramer%E2%80%93Douglas%E2%80%93Peucker_algorithm">Douglas–Peucker</a> distance. If <em>precision</em> is not specified, returns the projection’s current resampling precision which defaults to √0.5 ≅ 0.70710…</p>
<p><a href="#projection_fitExtent" name="user-content-projection_fitExtent">#</a> <i>projection</i>.<b>fitExtent</b>(<i>extent</i>, <i>object</i>) <a href="https://github.com/d3/d3-geo/blob/master/src/projection/index.js#L80" title="Source">&lt;&gt;</a></p>
<p>Sets the projection’s <a href="#projection_scale">scale</a> and <a href="#projection_translate">translate</a> to fit the specified GeoJSON <em>object</em> in the center of the given <em>extent</em>. The extent is specified as an array [[x₀, y₀], [x₁, y₁]], where x₀ is the left side of the bounding box, y₀ is the top, x₁ is the right and y₁ is the bottom. Returns the projection.</p>
<p>For example, to scale and translate the <a href="https://bl.ocks.org/mbostock/5126418">New Jersey State Plane projection</a> to fit a GeoJSON object <em>nj</em> in the center of a 960×500 bounding box with 20 pixels of padding on each side:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">var</span> projection <span class="pl-k">=</span> <span class="pl-smi">d3</span>.<span class="pl-en">geoTransverseMercator</span>()
    .<span class="pl-en">rotate</span>([<span class="pl-c1">74</span> <span class="pl-k">+</span> <span class="pl-c1">30</span> <span class="pl-k">/</span> <span class="pl-c1">60</span>, <span class="pl-k">-</span><span class="pl-c1">38</span> <span class="pl-k">-</span> <span class="pl-c1">50</span> <span class="pl-k">/</span> <span class="pl-c1">60</span>])
    .<span class="pl-en">fitExtent</span>([[<span class="pl-c1">20</span>, <span class="pl-c1">20</span>], [<span class="pl-c1">940</span>, <span class="pl-c1">480</span>]], nj);</pre></div>
<p>Any <a href="#projection_clipExtent">clip extent</a> is ignored when determining the new scale and translate. The <a href="#projection_precision">precision</a> used to compute the bounding box of the given <em>object</em> is computed at an effective scale of 150.</p>
<p><a href="#projection_fitSize" name="user-content-projection_fitSize">#</a> <i>projection</i>.<b>fitSize</b>(<i>size</i>, <i>object</i>) <a href="https://github.com/d3/d3-geo/blob/master/src/projection/index.js#L82" title="Source">&lt;&gt;</a></p>
<p>A convenience method for <a href="#projection_fitExtent"><em>projection</em>.fitExtent</a> where the top-left corner of the extent is [0, 0]. The following two statements are equivalent:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-smi">projection</span>.<span class="pl-en">fitExtent</span>([[<span class="pl-c1">0</span>, <span class="pl-c1">0</span>], [width, height]], object);
<span class="pl-smi">projection</span>.<span class="pl-en">fitSize</span>([width, height], object);</pre></div>
<p><a href="#projection_fitWidth" name="user-content-projection_fitWidth">#</a> <i>projection</i>.<b>fitWidth</b>(<i>width</i>, <i>object</i>) <a href="https://github.com/d3/d3-geo/blob/master/src/projection/index.js#L105" title="Source">&lt;&gt;</a></p>
<p>A convenience method for <a href="#projection_fitSize"><em>projection</em>.fitSize</a> where the height is automatically chosen from the aspect ratio of <em>object</em> and the given constraint on <em>width</em>.</p>
<p><a href="#projection_fitHeight" name="user-content-projection_fitHeight">#</a> <i>projection</i>.<b>fitHeight</b>(<i>height</i>, <i>object</i>) <a href="https://github.com/d3/d3-geo/blob/master/src/projection/index.js#L109" title="Source">&lt;&gt;</a></p>
<p>A convenience method for <a href="#projection_fitSize"><em>projection</em>.fitSize</a> where the width is automatically chosen from the aspect ratio of <em>object</em> and the given contraint on <em>height</em>.</p>
<h4><a href="#azimuthal-projections" aria-hidden="true" class="anchor" id="user-content-azimuthal-projections"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Azimuthal Projections</h4>
<p>Azimuthal projections project the sphere directly onto a plane.</p>
<p><a href="#geoAzimuthalEqualArea" name="user-content-geoAzimuthalEqualArea">#</a> d3.<b>geoAzimuthalEqualArea</b>() <a href="https://github.com/d3/d3-geo/blob/master/src/projection/azimuthalEqualArea.js" title="Source">&lt;&gt;</a>
<br><a href="#geoAzimuthalEqualAreaRaw" name="user-content-geoAzimuthalEqualAreaRaw">#</a> d3.<b>geoAzimuthalEqualAreaRaw</b></p>
<p><a href="https://bl.ocks.org/mbostock/3757101"><img src="https://raw.githubusercontent.com/d3/d3-geo/master/img/azimuthalEqualArea.png" width="480" height="250" style="max-width:100%;"></a></p>
<p>The azimuthal equal-area projection.</p>
<p><a href="#geoAzimuthalEquidistant" name="user-content-geoAzimuthalEquidistant">#</a> d3.<b>geoAzimuthalEquidistant</b>() <a href="https://github.com/d3/d3-geo/blob/master/src/projection/azimuthalEquidistant.js" title="Source">&lt;&gt;</a>
<br><a href="#geoAzimuthalEquidistantRaw" name="user-content-geoAzimuthalEquidistantRaw">#</a> d3.<b>geoAzimuthalEquidistantRaw</b></p>
<p><a href="https://bl.ocks.org/mbostock/3757110"><img src="https://raw.githubusercontent.com/d3/d3-geo/master/img/azimuthalEquidistant.png" width="480" height="250" style="max-width:100%;"></a></p>
<p>The azimuthal equidistant projection.</p>
<p><a href="#geoGnomonic" name="user-content-geoGnomonic">#</a> d3.<b>geoGnomonic</b>() <a href="https://github.com/d3/d3-geo/blob/master/src/projection/gnomonic.js" title="Source">&lt;&gt;</a>
<br><a href="#geoGnomonicRaw" name="user-content-geoGnomonicRaw">#</a> d3.<b>geoGnomonicRaw</b></p>
<p><a href="https://bl.ocks.org/mbostock/3757349"><img src="https://raw.githubusercontent.com/d3/d3-geo/master/img/gnomonic.png" width="480" height="250" style="max-width:100%;"></a></p>
<p>The gnomonic projection.</p>
<p><a href="#geoOrthographic" name="user-content-geoOrthographic">#</a> d3.<b>geoOrthographic</b>() <a href="https://github.com/d3/d3-geo/blob/master/src/projection/orthographic.js" title="Source">&lt;&gt;</a>
<br><a href="#geoOrthographicRaw" name="user-content-geoOrthographicRaw">#</a> d3.<b>geoOrthographicRaw</b></p>
<p><a href="https://bl.ocks.org/mbostock/3757125"><img src="https://raw.githubusercontent.com/d3/d3-geo/master/img/orthographic.png" width="480" height="250" style="max-width:100%;"></a></p>
<p>The orthographic projection.</p>
<p><a href="#geoStereographic" name="user-content-geoStereographic">#</a> d3.<b>geoStereographic</b>() <a href="https://github.com/d3/d3-geo/blob/master/src/projection/stereographic.js" title="Source">&lt;&gt;</a>
<br><a href="#geoStereographicRaw" name="user-content-geoStereographicRaw">#</a> d3.<b>geoStereographicRaw</b></p>
<p><a href="https://bl.ocks.org/mbostock/3757137"><img src="https://raw.githubusercontent.com/d3/d3-geo/master/img/stereographic.png" width="480" height="250" style="max-width:100%;"></a></p>
<p>The stereographic projection.</p>
<h4><a href="#composite-projections" aria-hidden="true" class="anchor" id="user-content-composite-projections"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Composite Projections</h4>
<p>Composite consist of several projections that are composed into a single display. The constituent projections have fixed clip, center and rotation, and thus composite projections do not support <a href="#projection_center"><em>projection</em>.center</a>, <a href="#projection_rotate"><em>projection</em>.rotate</a>, <a href="#projection_clipAngle"><em>projection</em>.clipAngle</a>, or <a href="#projection_clipExtent"><em>projection</em>.clipExtent</a>.</p>
<p><a href="#geoAlbersUsa" name="user-content-geoAlbersUsa">#</a> d3.<b>geoAlbersUsa</b>() <a href="https://github.com/d3/d3-geo/blob/master/src/projection/albersUsa.js" title="Source">&lt;&gt;</a></p>
<p><a href="https://bl.ocks.org/mbostock/4090848"><img src="https://raw.githubusercontent.com/d3/d3-geo/master/img/albersUsa.png" width="480" height="250" style="max-width:100%;"></a></p>
<p>This is a U.S.-centric composite projection of three <a href="#geoConicEqualArea">d3.geoConicEqualArea</a> projections: <a href="#geoAlbers">d3.geoAlbers</a> is used for the lower forty-eight states, and separate conic equal-area projections are used for Alaska and Hawaii. Note that the scale for Alaska is diminished: it is projected at 0.35× its true relative area. This diagram by Philippe Rivière illustrates how this projection uses two rectangular insets for Alaska and Hawaii:</p>
<p><a href="https://bl.ocks.org/Fil/7723167596af40d9159be34ffbf8d36b"><img src="https://raw.githubusercontent.com/d3/d3-geo/master/img/albersUsa-parameters.png" width="480" height="250" style="max-width:100%;"></a></p>
<p>See <a href="http://geoexamples.com/d3-composite-projections/">d3-composite-projections</a> for more examples.</p>
<h4><a href="#conic-projections" aria-hidden="true" class="anchor" id="user-content-conic-projections"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Conic Projections</h4>
<p>Conic projections project the sphere onto a cone, and then unroll the cone onto the plane. Conic projections have <a href="#conic_parallels">two standard parallels</a>.</p>
<p><a href="#conic_parallels" name="user-content-conic_parallels">#</a> <i>conic</i>.<b>parallels</b>([<i>parallels</i>]) <a href="https://github.com/d3/d3-geo/blob/master/src/projection/conic.js#L10" title="Source">&lt;&gt;</a></p>
<p>The <a href="https://en.wikipedia.org/wiki/Map_projection#Conic">two standard parallels</a> that define the map layout in conic projections.</p>
<p><a href="#geoAlbers" name="user-content-geoAlbers">#</a> d3.<b>geoAlbers</b>() <a href="https://github.com/d3/d3-geo/blob/master/src/projection/albers.js" title="Source">&lt;&gt;</a></p>
<p><a href="https://bl.ocks.org/mbostock/3734308"><img src="https://raw.githubusercontent.com/d3/d3-geo/master/img/albers.png" width="480" height="250" style="max-width:100%;"></a></p>
<p>The Albers’ equal area-conic projection. This is a U.S.-centric configuration of <a href="#geoConicEqualArea">d3.geoConicEqualArea</a>.</p>
<p><a href="#geoConicConformal" name="user-content-geoConicConformal">#</a> d3.<b>geoConicConformal</b>() <a href="https://github.com/d3/d3-geo/blob/master/src/projection/conicConformal.js" title="Source">&lt;&gt;</a>
<br><a href="#geoConicConformalRaw" name="user-content-geoConicConformalRaw">#</a> d3.<b>geoConicConformalRaw</b>(<i>phi0</i>, <i>phi1</i>) <a href="https://github.com/d3/d3-geo/blob/master/src/projection/conicConformal.js" title="Source">&lt;&gt;</a></p>
<p><a href="https://bl.ocks.org/mbostock/3734321"><img src="https://raw.githubusercontent.com/d3/d3-geo/master/img/conicConformal.png" width="480" height="250" style="max-width:100%;"></a></p>
<p>The conic conformal projection. The parallels default to [30°, 30°] resulting in flat top. See also <a href="#conic_parallels"><em>conic</em>.parallels</a>.</p>
<p><a href="#geoConicEqualArea" name="user-content-geoConicEqualArea">#</a> d3.<b>geoConicEqualArea</b>() <a href="https://github.com/d3/d3-geo/blob/master/src/projection/conicEqualArea.js" title="Source">&lt;&gt;</a>
<br><a href="#geoConicEqualAreaRaw" name="user-content-geoConicEqualAreaRaw">#</a> d3.<b>geoConicEqualAreaRaw</b>(<i>phi0</i>, <i>phi1</i>) <a href="https://github.com/d3/d3-geo/blob/master/src/projection/conicEqualArea.js" title="Source">&lt;&gt;</a></p>
<p><a href="https://bl.ocks.org/mbostock/3734308"><img src="https://raw.githubusercontent.com/d3/d3-geo/master/img/conicEqualArea.png" width="480" height="250" style="max-width:100%;"></a></p>
<p>The Albers’ equal-area conic projection. See also <a href="#conic_parallels"><em>conic</em>.parallels</a>.</p>
<p><a href="#geoConicEquidistant" name="user-content-geoConicEquidistant">#</a> d3.<b>geoConicEquidistant</b>() <a href="https://github.com/d3/d3-geo/blob/master/src/projection/conicEquidistant.js" title="Source">&lt;&gt;</a>
<br><a href="#geoConicEquidistantRaw" name="user-content-geoConicEquidistantRaw">#</a> d3.<b>geoConicEquidistantRaw</b>(<i>phi0</i>, <i>phi1</i>) <a href="https://github.com/d3/d3-geo/blob/master/src/projection/conicEquidistant.js" title="Source">&lt;&gt;</a></p>
<p><a href="https://bl.ocks.org/mbostock/3734317"><img src="https://raw.githubusercontent.com/d3/d3-geo/master/img/conicEquidistant.png" width="480" height="250" style="max-width:100%;"></a></p>
<p>The conic equidistant projection. See also <a href="#conic_parallels"><em>conic</em>.parallels</a>.</p>
<h4><a href="#cylindrical-projections" aria-hidden="true" class="anchor" id="user-content-cylindrical-projections"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Cylindrical Projections</h4>
<p>Cylindrical projections project the sphere onto a containing cylinder, and then unroll the cylinder onto the plane. <a href="http://www.progonos.com/furuti/MapProj/Normal/ProjPCyl/projPCyl.html">Pseudocylindrical projections</a> are a generalization of cylindrical projections.</p>
<p><a href="#geoEquirectangular" name="user-content-geoEquirectangular">#</a> d3.<b>geoEquirectangular</b>() <a href="https://github.com/d3/d3-geo/blob/master/src/projection/equirectangular.js" title="Source">&lt;&gt;</a>
<br><a href="#geoEquirectangularRaw" name="user-content-geoEquirectangularRaw">#</a> d3.<b>geoEquirectangularRaw</b></p>
<p><a href="https://bl.ocks.org/mbostock/3757119"><img src="https://raw.githubusercontent.com/d3/d3-geo/master/img/equirectangular.png" width="480" height="250" style="max-width:100%;"></a></p>
<p>The equirectangular (plate carrée) projection.</p>
<p><a href="#geoMercator" name="user-content-geoMercator">#</a> d3.<b>geoMercator</b>() <a href="https://github.com/d3/d3-geo/blob/master/src/projection/mercator.js" title="Source">&lt;&gt;</a>
<br><a href="#geoMercatorRaw" name="user-content-geoMercatorRaw">#</a> d3.<b>geoMercatorRaw</b></p>
<p><a href="https://bl.ocks.org/mbostock/3757132"><img src="https://raw.githubusercontent.com/d3/d3-geo/master/img/mercator.png" width="480" height="250" style="max-width:100%;"></a></p>
<p>The spherical Mercator projection. Defines a default <a href="#projection_clipExtent"><em>projection</em>.clipExtent</a> such that the world is projected to a square, clipped to approximately ±85° latitude.</p>
<p><a href="#geoTransverseMercator" name="user-content-geoTransverseMercator">#</a> d3.<b>geoTransverseMercator</b>() <a href="https://github.com/d3/d3-geo/blob/master/src/projection/transverseMercator.js" title="Source">&lt;&gt;</a>
<br><a href="#geoTransverseMercatorRaw" name="user-content-geoTransverseMercatorRaw">#</a> d3.<b>geoTransverseMercatorRaw</b></p>
<p><a href="https://bl.ocks.org/mbostock/4695821"><img src="https://raw.githubusercontent.com/d3/d3-geo/master/img/transverseMercator.png" width="480" height="250" style="max-width:100%;"></a></p>
<p>The transverse spherical Mercator projection. Defines a default <a href="#projection_clipExtent"><em>projection</em>.clipExtent</a> such that the world is projected to a square, clipped to approximately ±85° latitude.</p>
<p><a href="#geoNaturalEarth1" name="user-content-geoNaturalEarth1">#</a> d3.<b>geoNaturalEarth1</b>() <a href="https://github.com/d3/d3-geo/blob/master/src/projection/naturalEarth1.js" title="Source">&lt;&gt;</a>
<br><a href="#geoNaturalEarth1Raw" name="user-content-geoNaturalEarth1Raw">#</a> d3.<b>geoNaturalEarth1Raw</b></p>
<p><a href="https://bl.ocks.org/mbostock/4479477"><img src="https://raw.githubusercontent.com/d3/d3-geo/master/img/naturalEarth1.png" width="480" height="250" style="max-width:100%;"></a></p>
<p>The <a href="http://www.shadedrelief.com/NE_proj/">Natural Earth projection</a> is a pseudocylindrical projection designed by Tom Patterson. It is neither conformal nor equal-area, but appealing to the eye for small-scale maps of the whole world.</p>
<h3><a href="#raw-projections" aria-hidden="true" class="anchor" id="user-content-raw-projections"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Raw Projections</h3>
<p>Raw projections are point transformation functions that are used to implement custom projections; they typically passed to <a href="#geoProjection">d3.geoProjection</a> or <a href="#geoProjectionMutator">d3.geoProjectionMutator</a>. They are exposed here to facilitate the derivation of related projections. Raw projections take spherical coordinates [<em>lambda</em>, <em>phi</em>] in radians (not degrees!) and return a point [<em>x</em>, <em>y</em>], typically in the unit square centered around the origin.</p>
<p><a href="#_project" name="user-content-_project">#</a> <i>project</i>(<i>lambda</i>, <i>phi</i>)</p>
<p>Projects the specified point [<i>lambda</i>, <i>phi</i>] in radians, returning a new point [<em>x</em>, <em>y</em>] in unitless coordinates.</p>
<p><a href="#project_invert" name="user-content-project_invert">#</a> <i>project</i>.<b>invert</b>(<i>x</i>, <i>y</i>)</p>
<p>The inverse of <a href="#_project"><em>project</em></a>.</p>
<p><a href="#geoProjection" name="user-content-geoProjection">#</a> d3.<b>geoProjection</b>(<i>project</i>) <a href="https://github.com/d3/d3-geo/blob/master/src/projection/index.js#L18" title="Source">&lt;&gt;</a></p>
<p>Constructs a new projection from the specified <a href="#_project">raw projection</a>, <em>project</em>. The <em>project</em> function takes the <em>longitude</em> and <em>latitude</em> of a given point in <a href="http://mathworld.wolfram.com/Radian.html">radians</a>, often referred to as <em>lambda</em> (λ) and <em>phi</em> (φ), and returns a two-element array [<em>x</em>, <em>y</em>] representing its unit projection. The <em>project</em> function does not need to scale or translate the point, as these are applied automatically by <a href="#projection_scale"><em>projection</em>.scale</a>, <a href="#projection_translate"><em>projection</em>.translate</a>, and <a href="#projection_center"><em>projection</em>.center</a>. Likewise, the <em>project</em> function does not need to perform any spherical rotation, as <a href="#projection_rotate"><em>projection</em>.rotate</a> is applied prior to projection.</p>
<p>For example, a spherical Mercator projection can be implemented as:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">var</span> mercator <span class="pl-k">=</span> <span class="pl-smi">d3</span>.<span class="pl-en">geoProjection</span>(<span class="pl-k">function</span>(<span class="pl-smi">x</span>, <span class="pl-smi">y</span>) {
  <span class="pl-k">return</span> [x, <span class="pl-c1">Math</span>.<span class="pl-c1">log</span>(<span class="pl-c1">Math</span>.<span class="pl-c1">tan</span>(<span class="pl-c1">Math</span>.<span class="pl-c1">PI</span> <span class="pl-k">/</span> <span class="pl-c1">4</span> <span class="pl-k">+</span> y <span class="pl-k">/</span> <span class="pl-c1">2</span>))];
});</pre></div>
<p>If the <em>project</em> function exposes an <em>invert</em> method, the returned projection will also expose <a href="#projection_invert"><em>projection</em>.invert</a>.</p>
<p><a href="#geoProjectionMutator" name="user-content-geoProjectionMutator">#</a> d3.<b>geoProjectionMutator</b>(<i>factory</i>) <a href="https://github.com/d3/d3-geo/blob/master/src/projection/index.js#L22" title="Source">&lt;&gt;</a></p>
<p>Constructs a new projection from the specified <a href="#_project">raw projection</a> <em>factory</em> and returns a <em>mutate</em> function to call whenever the raw projection changes. The <em>factory</em> must return a raw projection. The returned <em>mutate</em> function returns the wrapped projection. For example, a conic projection typically has two configurable parallels. A suitable <em>factory</em> function, such as <a href="#geoConicEqualAreaRaw">d3.geoConicEqualAreaRaw</a>, would have the form:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-c"><span class="pl-c">//</span> y0 and y1 represent two parallels</span>
<span class="pl-k">function</span> <span class="pl-en">conicFactory</span>(<span class="pl-smi">phi0</span>, <span class="pl-smi">phi1</span>) {
  <span class="pl-k">return</span> <span class="pl-k">function</span> <span class="pl-en">conicRaw</span>(<span class="pl-smi">lambda</span>, <span class="pl-smi">phi</span>) {
    <span class="pl-k">return</span> […, …];
  };
}</pre></div>
<p>Using d3.geoProjectionMutator, you can implement a standard projection that allows the parallels to be changed, reassigning the raw projection used internally by <a href="#geoProjection">d3.geoProjection</a>:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">function</span> <span class="pl-en">conicCustom</span>() {
  <span class="pl-k">var</span> phi0 <span class="pl-k">=</span> <span class="pl-c1">29.5</span>,
      phi1 <span class="pl-k">=</span> <span class="pl-c1">45.5</span>,
      mutate <span class="pl-k">=</span> <span class="pl-smi">d3</span>.<span class="pl-en">geoProjectionMutator</span>(conicFactory),
      projection <span class="pl-k">=</span> <span class="pl-en">mutate</span>(phi0, phi1);

  <span class="pl-smi">projection</span>.<span class="pl-en">parallels</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">_</span>) {
    <span class="pl-k">return</span> <span class="pl-c1">arguments</span>.<span class="pl-c1">length</span> <span class="pl-k">?</span> <span class="pl-en">mutate</span>(phi0 <span class="pl-k">=</span> <span class="pl-k">+</span>_[<span class="pl-c1">0</span>], phi1 <span class="pl-k">=</span> <span class="pl-k">+</span>_[<span class="pl-c1">1</span>]) <span class="pl-k">:</span> [phi0, phi1];
  };

  <span class="pl-k">return</span> projection;
}</pre></div>
<p>When creating a mutable projection, the <em>mutate</em> function is typically not exposed.</p>
<h3><a href="#spherical-math" aria-hidden="true" class="anchor" id="user-content-spherical-math"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Spherical Math</h3>
<p><a name="user-content-geoArea" href="#geoArea">#</a> d3.<b>geoArea</b>(<i>object</i>) <a href="https://github.com/d3/d3-geo/blob/master/src/area.js" title="Source">&lt;&gt;</a></p>
<p>Returns the spherical area of the specified GeoJSON <em>object</em> in <a href="http://mathworld.wolfram.com/Steradian.html">steradians</a>. This is the spherical equivalent of <a href="#path_area"><em>path</em>.area</a>.</p>
<p><a name="user-content-geoBounds" href="#geoBounds">#</a> d3.<b>geoBounds</b>(<i>object</i>) <a href="https://github.com/d3/d3-geo/blob/master/src/bounds.js" title="Source">&lt;&gt;</a></p>
<p>Returns the <a href="https://www.jasondavies.com/maps/bounds/">spherical bounding box</a> for the specified GeoJSON <em>object</em>. The bounding box is represented by a two-dimensional array: [[<em>left</em>, <em>bottom</em>], [<em>right</em>, <em>top</em>]], where <em>left</em> is the minimum longitude, <em>bottom</em> is the minimum latitude, <em>right</em> is maximum longitude, and <em>top</em> is the maximum latitude. All coordinates are given in degrees. (Note that in projected planar coordinates, the minimum latitude is typically the maximum <em>y</em>-value, and the maximum latitude is typically the minimum <em>y</em>-value.) This is the spherical equivalent of <a href="#path_bounds"><em>path</em>.bounds</a>.</p>
<p><a name="user-content-geoCentroid" href="#geoCentroid">#</a> d3.<b>geoCentroid</b>(<i>object</i>) <a href="https://github.com/d3/d3-geo/blob/master/src/centroid.js" title="Source">&lt;&gt;</a></p>
<p>Returns the spherical centroid of the specified GeoJSON <em>object</em>. This is the spherical equivalent of <a href="#path_centroid"><em>path</em>.centroid</a>.</p>
<p><a name="user-content-geoDistance" href="#geoDistance">#</a> d3.<b>geoDistance</b>(<i>a</i>, <i>b</i>) <a href="https://github.com/d3/d3-geo/blob/master/src/distance.js" title="Source">&lt;&gt;</a></p>
<p>Returns the great-arc distance in <a href="http://mathworld.wolfram.com/Radian.html">radians</a> between the two points <em>a</em> and <em>b</em>. Each point must be specified as a two-element array [<em>longitude</em>, <em>latitude</em>] in degrees. This is the spherical equivalent of <a href="#path_measure"><em>path</em>.measure</a> given a LineString of two points.</p>
<p><a name="user-content-geoLength" href="#geoLength">#</a> d3.<b>geoLength</b>(<i>object</i>) <a href="https://github.com/d3/d3-geo/blob/master/src/length.js" title="Source">&lt;&gt;</a></p>
<p>Returns the great-arc length of the specified GeoJSON <em>object</em> in <a href="http://mathworld.wolfram.com/Radian.html">radians</a>. For polygons, returns the perimeter of the exterior ring plus that of any interior rings. This is the spherical equivalent of <a href="#path_measure"><em>path</em>.measure</a>.</p>
<p><a name="user-content-geoInterpolate" href="#geoInterpolate">#</a> d3.<b>geoInterpolate</b>(<i>a</i>, <i>b</i>) <a href="https://github.com/d3/d3-geo/blob/master/src/interpolate.js" title="Source">&lt;&gt;</a></p>
<p>Returns an interpolator function given two points <em>a</em> and <em>b</em>. Each point must be specified as a two-element array [<em>longitude</em>, <em>latitude</em>] in degrees. The returned interpolator function takes a single argument <em>t</em>, where <em>t</em> is a number ranging from 0 to 1; a value of 0 returns the point <em>a</em>, while a value of 1 returns the point <em>b</em>. Intermediate values interpolate from <em>a</em> to <em>b</em> along the great arc that passes through both <em>a</em> and <em>b</em>. If <em>a</em> and <em>b</em> are antipodes, an arbitrary great arc is chosen.</p>
<p><a name="user-content-geoContains" href="#geoContains">#</a> d3.<b>geoContains</b>(<i>object</i>, <i>point</i>) <a href="https://github.com/d3/d3-geo/blob/master/src/contains.js" title="Source">&lt;&gt;</a></p>
<p>Returns true if and only if the specified GeoJSON <em>object</em> contains the specified <em>point</em>, or false if the <em>object</em> does not contain the <em>point</em>. The point must be specified as a two-element array [<em>longitude</em>, <em>latitude</em>] in degrees. For Point and MultiPoint geometries, an exact test is used; for a Sphere, true is always returned; for other geometries, an epsilon threshold is applied.</p>
<p><a name="user-content-geoRotation" href="#geoRotation">#</a> d3.<b>geoRotation</b>(<i>angles</i>) <a href="https://github.com/d3/d3-geo/blob/master/src/rotation.js" title="Source">&lt;&gt;</a></p>
<p>Returns a <a href="#_rotation">rotation function</a> for the given <em>angles</em>, which must be a two- or three-element array of numbers [<em>lambda</em>, <em>phi</em>, <em>gamma</em>] specifying the rotation angles in degrees about <a href="https://bl.ocks.org/mbostock/4282586">each spherical axis</a>. (These correspond to <a href="http://en.wikipedia.org/wiki/Aircraft_principal_axes">yaw, pitch and roll</a>.) If the rotation angle <em>gamma</em> is omitted, it defaults to 0. See also <a href="#projection_rotate"><em>projection</em>.rotate</a>.</p>
<p><a name="user-content-_rotation" href="#_rotation">#</a> <i>rotation</i>(<i>point</i>) <a href="https://github.com/d3/d3-geo/blob/master/src/rotation.js#L35" title="Source">&lt;&gt;</a></p>
<p>Returns a new array [<em>longitude</em>, <em>latitude</em>] in degrees representing the rotated point of the given <em>point</em>. The point must be specified as a two-element array [<em>longitude</em>, <em>latitude</em>] in degrees.</p>
<p><a name="user-content-rotation_invert" href="#rotation_invert">#</a> <i>rotation</i>.<b>invert</b>(<i>point</i>) <a href="https://github.com/d3/d3-geo/blob/master/src/rotation.js#L47" title="Source">&lt;&gt;</a></p>
<p>Returns a new array [<em>longitude</em>, <em>latitude</em>] in degrees representing the point of the given rotated <em>point</em>; the inverse of <a href="#_rotation"><em>rotation</em></a>. The point must be specified as a two-element array [<em>longitude</em>, <em>latitude</em>] in degrees.</p>
<h3><a href="#spherical-shapes" aria-hidden="true" class="anchor" id="user-content-spherical-shapes"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Spherical Shapes</h3>
<p>To generate a <a href="https://en.wikipedia.org/wiki/Great-circle_distance">great arc</a> (a segment of a great circle), simply pass a GeoJSON LineString geometry object to a <a href="#geoPath">d3.geoPath</a>. D3’s projections use great-arc interpolation for intermediate points, so there’s no need for a great arc shape generator.</p>
<p><a name="user-content-geoCircle" href="#geoCircle">#</a> d3.<b>geoCircle</b>() <a href="https://github.com/d3/d3-geo/blob/master/src/circle.js" title="Source">&lt;&gt;</a></p>
<p>Returns a new circle generator.</p>
<p><a name="user-content-_circle" href="#_circle">#</a> <i>circle</i>(<i>arguments…</i>) <a href="https://github.com/d3/d3-geo/blob/master/src/circle.js#L47" title="Source">&lt;&gt;</a></p>
<p>Returns a new GeoJSON geometry object of type “Polygon” approximating a circle on the surface of a sphere, with the current <a href="#circle_center">center</a>, <a href="#circle_radius">radius</a> and <a href="#circle_precision">precision</a>. Any <em>arguments</em> are passed to the accessors.</p>
<p><a name="user-content-circle_center" href="#circle_center">#</a> <i>circle</i>.<b>center</b>([<i>center</i>]) <a href="https://github.com/d3/d3-geo/blob/master/src/circle.js#L59" title="Source">&lt;&gt;</a></p>
<p>If <em>center</em> is specified, sets the circle center to the specified point [<em>longitude</em>, <em>latitude</em>] in degrees, and returns this circle generator. The center may also be specified as a function; this function will be invoked whenever a circle is <a href="#_circle">generated</a>, being passed any arguments passed to the circle generator. If <em>center</em> is not specified, returns the current center accessor, which defaults to:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">function</span> <span class="pl-en">center</span>() {
  <span class="pl-k">return</span> [<span class="pl-c1">0</span>, <span class="pl-c1">0</span>];
}</pre></div>
<p><a name="user-content-circle_radius" href="#circle_radius">#</a> <i>circle</i>.<b>radius</b>([<i>radius</i>]) <a href="https://github.com/d3/d3-geo/blob/master/src/circle.js#L63" title="Source">&lt;&gt;</a></p>
<p>If <em>radius</em> is specified, sets the circle radius to the specified angle in degrees, and returns this circle generator. The radius may also be specified as a function; this function will be invoked whenever a circle is <a href="#_circle">generated</a>, being passed any arguments passed to the circle generator. If <em>radius</em> is not specified, returns the current radius accessor, which defaults to:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">function</span> <span class="pl-en">radius</span>() {
  <span class="pl-k">return</span> <span class="pl-c1">90</span>;
}</pre></div>
<p><a name="user-content-circle_precision" href="#circle_precision">#</a> <i>circle</i>.<b>precision</b>([<i>angle</i>]) <a href="https://github.com/d3/d3-geo/blob/master/src/circle.js#L67" title="Source">&lt;&gt;</a></p>
<p>If <em>precision</em> is specified, sets the circle precision to the specified angle in degrees, and returns this circle generator. The precision may also be specified as a function; this function will be invoked whenever a circle is <a href="#_circle">generated</a>, being passed any arguments passed to the circle generator. If <em>precision</em> is not specified, returns the current precision accessor, which defaults to:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">function</span> <span class="pl-en">precision</span>() {
  <span class="pl-k">return</span> <span class="pl-c1">6</span>;
}</pre></div>
<p>Small circles do not follow great arcs and thus the generated polygon is only an approximation. Specifying a smaller precision angle improves the accuracy of the approximate polygon, but also increase the cost to generate and render it.</p>
<p><a name="user-content-geoGraticule" href="#geoGraticule">#</a> d3.<b>geoGraticule</b>() <a href="https://github.com/d3/d3-geo/blob/master/src/graticule.js" title="Source">&lt;&gt;</a></p>
<p>Constructs a geometry generator for creating graticules: a uniform grid of <a href="https://en.wikipedia.org/wiki/Meridian_(geography)">meridians</a> and <a href="https://en.wikipedia.org/wiki/Circle_of_latitude">parallels</a> for showing projection distortion. The default graticule has meridians and parallels every 10° between ±80° latitude; for the polar regions, there are meridians every 90°.</p>
<p><a href="https://raw.githubusercontent.com/d3/d3-geo/master/img/graticule.png" target="_blank"><img src="https://raw.githubusercontent.com/d3/d3-geo/master/img/graticule.png" width="480" height="360" style="max-width:100%;"></a></p>
<p><a name="user-content-_graticule" href="#_graticule">#</a> <i>graticule</i>() <a href="https://github.com/d3/d3-geo/blob/master/src/graticule.js#L21" title="Source">&lt;&gt;</a></p>
<p>Returns a GeoJSON MultiLineString geometry object representing all meridians and parallels for this graticule.</p>
<p><a name="user-content-graticule_lines" href="#graticule_lines">#</a> <i>graticule</i>.<b>lines</b>() <a href="https://github.com/d3/d3-geo/blob/master/src/graticule.js#L32" title="Source">&lt;&gt;</a></p>
<p>Returns an array of GeoJSON LineString geometry objects, one for each meridian or parallel for this graticule.</p>
<p><a name="user-content-graticule_outline" href="#graticule_outline">#</a> <i>graticule</i>.<b>outline</b>() <a href="https://github.com/d3/d3-geo/blob/master/src/graticule.js#L36" title="Source">&lt;&gt;</a></p>
<p>Returns a GeoJSON Polygon geometry object representing the outline of this graticule, i.e. along the meridians and parallels defining its extent.</p>
<p><a name="user-content-graticule_extent" href="#graticule_extent">#</a> <i>graticule</i>.<b>extent</b>([<i>extent</i>]) <a href="https://github.com/d3/d3-geo/blob/master/src/graticule.js#L48" title="Source">&lt;&gt;</a></p>
<p>If <em>extent</em> is specified, sets the major and minor extents of this graticule. If <em>extent</em> is not specified, returns the current minor extent, which defaults to ⟨⟨-180°, -80° - ε⟩, ⟨180°, 80° + ε⟩⟩.</p>
<p><a name="user-content-graticule_extentMajor" href="#graticule_extentMajor">#</a> <i>graticule</i>.<b>extentMajor</b>([<i>extent</i>]) <a href="https://github.com/d3/d3-geo/blob/master/src/graticule.js#L53" title="Source">&lt;&gt;</a></p>
<p>If <em>extent</em> is specified, sets the major extent of this graticule. If <em>extent</em> is not specified, returns the current major extent, which defaults to ⟨⟨-180°, -90° + ε⟩, ⟨180°, 90° - ε⟩⟩.</p>
<p><a name="user-content-graticule_extentMinor" href="#graticule_extentMinor">#</a> <i>graticule</i>.<b>extentMinor</b>([<i>extent</i>]) <a href="https://github.com/d3/d3-geo/blob/master/src/graticule.js#L62" title="Source">&lt;&gt;</a></p>
<p>If <em>extent</em> is specified, sets the minor extent of this graticule. If <em>extent</em> is not specified, returns the current minor extent, which defaults to ⟨⟨-180°, -80° - ε⟩, ⟨180°, 80° + ε⟩⟩.</p>
<p><a name="user-content-graticule_step" href="#graticule_step">#</a> <i>graticule</i>.<b>step</b>([<i>step</i>]) <a href="https://github.com/d3/d3-geo/blob/master/src/graticule.js#L71" title="Source">&lt;&gt;</a></p>
<p>If <em>step</em> is specified, sets the major and minor step for this graticule. If <em>step</em> is not specified, returns the current minor step, which defaults to ⟨10°, 10°⟩.</p>
<p><a name="user-content-graticule_stepMajor" href="#graticule_stepMajor">#</a> <i>graticule</i>.<b>stepMajor</b>([<i>step</i>]) <a href="https://github.com/d3/d3-geo/blob/master/src/graticule.js#L76" title="Source">&lt;&gt;</a></p>
<p>If <em>step</em> is specified, sets the major step for this graticule. If <em>step</em> is not specified, returns the current major step, which defaults to ⟨90°, 360°⟩.</p>
<p><a name="user-content-graticule_stepMinor" href="#graticule_stepMinor">#</a> <i>graticule</i>.<b>stepMinor</b>([<i>step</i>]) <a href="https://github.com/d3/d3-geo/blob/master/src/graticule.js#L82" title="Source">&lt;&gt;</a></p>
<p>If <em>step</em> is specified, sets the minor step for this graticule. If <em>step</em> is not specified, returns the current minor step, which defaults to ⟨10°, 10°⟩.</p>
<p><a name="user-content-graticule_precision" href="#graticule_precision">#</a> <i>graticule</i>.<b>precision</b>([<i>angle</i>]) <a href="https://github.com/d3/d3-geo/blob/master/src/graticule.js#L88" title="Source">&lt;&gt;</a></p>
<p>If <em>precision</em> is specified, sets the precision for this graticule, in degrees. If <em>precision</em> is not specified, returns the current precision, which defaults to 2.5°.</p>
<p><a name="user-content-geoGraticule10" href="#geoGraticule10">#</a> d3.<b>geoGraticule10</b>() <a href="https://github.com/d3/d3-geo/blob/master/src/graticule.js#L103" title="Source">&lt;&gt;</a></p>
<p>A convenience method for directly generating the default 10° global graticule as a GeoJSON MultiLineString geometry object. Equivalent to:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">function</span> <span class="pl-en">geoGraticule10</span>() {
  <span class="pl-k">return</span> <span class="pl-smi">d3</span>.<span class="pl-en">geoGraticule</span>()();
}</pre></div>
<h3><a href="#streams" aria-hidden="true" class="anchor" id="user-content-streams"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Streams</h3>
<p>D3 transforms geometry using a sequence of function calls, rather than materializing intermediate representations, to minimize overhead. Streams must implement several methods to receive input geometry. Streams are inherently stateful; the meaning of a <a href="#point">point</a> depends on whether the point is inside of a <a href="#lineStart">line</a>, and likewise a line is distinguished from a ring by a <a href="#polygonStart">polygon</a>. Despite the name “stream”, these method calls are currently synchronous.</p>
<p><a href="#geoStream" name="user-content-geoStream">#</a> d3.<b>geoStream</b>(<i>object</i>, <i>stream</i>) <a href="https://github.com/d3/d3-geo/blob/master/src/stream.js" title="Source">&lt;&gt;</a></p>
<p>Streams the specified <a href="http://geojson.org">GeoJSON</a> <em>object</em> to the specified <a href="#projection-streams">projection <em>stream</em></a>. While both features and geometry objects are supported as input, the stream interface only describes the geometry, and thus additional feature properties are not visible to streams.</p>
<p><a name="user-content-stream_point" href="#stream_point">#</a> <i>stream</i>.<b>point</b>(<i>x</i>, <i>y</i>[, <i>z</i>])</p>
<p>Indicates a point with the specified coordinates <em>x</em> and <em>y</em> (and optionally <em>z</em>). The coordinate system is unspecified and implementation-dependent; for example, <a href="https://github.com/d3/d3-geo-projection">projection streams</a> require spherical coordinates in degrees as input. Outside the context of a polygon or line, a point indicates a point geometry object (<a href="http://www.geojson.org/geojson-spec.html#point">Point</a> or <a href="http://www.geojson.org/geojson-spec.html#multipoint">MultiPoint</a>). Within a line or polygon ring, the point indicates a control point.</p>
<p><a name="user-content-stream_lineStart" href="#stream_lineStart">#</a> <i>stream</i>.<b>lineStart</b>()</p>
<p>Indicates the start of a line or ring. Within a polygon, indicates the start of a ring. The first ring of a polygon is the exterior ring, and is typically clockwise. Any subsequent rings indicate holes in the polygon, and are typically counterclockwise.</p>
<p><a name="user-content-stream_lineEnd" href="#stream_lineEnd">#</a> <i>stream</i>.<b>lineEnd</b>()</p>
<p>Indicates the end of a line or ring. Within a polygon, indicates the end of a ring. Unlike GeoJSON, the redundant closing coordinate of a ring is <em>not</em> indicated via <a href="#point">point</a>, and instead is implied via lineEnd within a polygon. Thus, the given polygon input:</p>
<div class="highlight highlight-source-json"><pre>{
  <span class="pl-s"><span class="pl-pds">"</span>type<span class="pl-pds">"</span></span>: <span class="pl-s"><span class="pl-pds">"</span>Polygon<span class="pl-pds">"</span></span>,
  <span class="pl-s"><span class="pl-pds">"</span>coordinates<span class="pl-pds">"</span></span>: [
    [[<span class="pl-c1">0</span>, <span class="pl-c1">0</span>], [<span class="pl-c1">0</span>, <span class="pl-c1">1</span>], [<span class="pl-c1">1</span>, <span class="pl-c1">1</span>], [<span class="pl-c1">1</span>, <span class="pl-c1">0</span>], [<span class="pl-c1">0</span>, <span class="pl-c1">0</span>]]
  ]
}</pre></div>
<p>Will produce the following series of method calls on the stream:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-smi">stream</span>.<span class="pl-en">polygonStart</span>();
<span class="pl-smi">stream</span>.<span class="pl-en">lineStart</span>();
<span class="pl-smi">stream</span>.<span class="pl-en">point</span>(<span class="pl-c1">0</span>, <span class="pl-c1">0</span>);
<span class="pl-smi">stream</span>.<span class="pl-en">point</span>(<span class="pl-c1">0</span>, <span class="pl-c1">1</span>);
<span class="pl-smi">stream</span>.<span class="pl-en">point</span>(<span class="pl-c1">1</span>, <span class="pl-c1">1</span>);
<span class="pl-smi">stream</span>.<span class="pl-en">point</span>(<span class="pl-c1">1</span>, <span class="pl-c1">0</span>);
<span class="pl-smi">stream</span>.<span class="pl-en">lineEnd</span>();
<span class="pl-smi">stream</span>.<span class="pl-en">polygonEnd</span>();</pre></div>
<p><a name="user-content-stream_polygonStart" href="#stream_polygonStart">#</a> <i>stream</i>.<b>polygonStart</b>()</p>
<p>Indicates the start of a polygon. The first line of a polygon indicates the exterior ring, and any subsequent lines indicate interior holes.</p>
<p><a name="user-content-stream_polygonEnd" href="#stream_polygonEnd">#</a> <i>stream</i>.<b>polygonEnd</b>()</p>
<p>Indicates the end of a polygon.</p>
<p><a name="user-content-stream_sphere" href="#stream_sphere">#</a> <i>stream</i>.<b>sphere</b>()</p>
<p>Indicates the sphere (the globe; the unit sphere centered at ⟨0,0,0⟩).</p>
<h3><a href="#transforms" aria-hidden="true" class="anchor" id="user-content-transforms"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Transforms</h3>
<p>Transforms are a generalization of projections. Transform implement <a href="#projection_stream"><em>projection</em>.stream</a> and can be passed to <a href="#path_projection"><em>path</em>.projection</a>. However, they only implement a subset of the other projection methods, and represent arbitrary geometric transformations rather than projections from spherical to planar coordinates.</p>
<p><a href="#geoTransform" name="user-content-geoTransform">#</a> d3.<b>geoTransform</b>(<i>methods</i>) <a href="https://github.com/d3/d3-geo/blob/master/src/transform.js#L7" title="Source">&lt;&gt;</a></p>
<p>Defines an arbitrary transform using the methods defined on the specified <em>methods</em> object. Any undefined methods will use pass-through methods that propagate inputs to the output stream. For example, to reflect the <em>y</em>-dimension (see also <a href="#identity_reflectY"><em>identity</em>.reflectY</a>):</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">var</span> reflectY <span class="pl-k">=</span> <span class="pl-smi">d3</span>.<span class="pl-en">geoTransform</span>({
  <span class="pl-en">point</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">x</span>, <span class="pl-smi">y</span>) {
    <span class="pl-c1">this</span>.<span class="pl-smi">stream</span>.<span class="pl-en">point</span>(x, <span class="pl-k">-</span>y);
  }
});</pre></div>
<p>Or to define an affine matrix transformation:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">function</span> <span class="pl-en">matrix</span>(<span class="pl-smi">a</span>, <span class="pl-smi">b</span>, <span class="pl-smi">c</span>, <span class="pl-smi">d</span>, <span class="pl-smi">tx</span>, <span class="pl-smi">ty</span>) {
  <span class="pl-k">return</span> <span class="pl-smi">d3</span>.<span class="pl-en">geoTransform</span>({
    <span class="pl-en">point</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">x</span>, <span class="pl-smi">y</span>) {
      <span class="pl-c1">this</span>.<span class="pl-smi">stream</span>.<span class="pl-en">point</span>(a <span class="pl-k">*</span> x <span class="pl-k">+</span> b <span class="pl-k">*</span> y <span class="pl-k">+</span> tx, c <span class="pl-k">*</span> x <span class="pl-k">+</span> d <span class="pl-k">*</span> y <span class="pl-k">+</span> ty);
    }
  });
}</pre></div>
<p><a href="#geoIdentity" name="user-content-geoIdentity">#</a> d3.<b>geoIdentity</b>() <a href="https://github.com/d3/d3-geo/blob/master/src/projection/identity.js" title="Source">&lt;&gt;</a></p>
<p>The identity transform can be used to scale, translate and clip planar geometry. It implements <a href="#projection_scale"><em>projection</em>.scale</a>, <a href="#projection_translate"><em>projection</em>.translate</a>, <a href="#projection_fitExtent"><em>projection</em>.fitExtent</a>, <a href="#projection_fitSize"><em>projection</em>.fitSize</a>, <a href="#projection_fitWidth"><em>projection</em>.fitWidth</a>, <a href="#projection_fitHeight"><em>projection</em>.fitHeight</a> and <a href="#projection_clipExtent"><em>projection</em>.clipExtent</a>.</p>
<p><a href="#identity_reflectX" name="user-content-identity_reflectX">#</a> <i>identity</i>.<b>reflectX</b>([<i>reflect</i>])</p>
<p>If <em>reflect</em> is specified, sets whether or not the <em>x</em>-dimension is reflected (negated) in the output. If <em>reflect</em> is not specified, returns true if <em>x</em>-reflection is enabled, which defaults to false.</p>
<p><a href="#identity_reflectY" name="user-content-identity_reflectY">#</a> <i>identity</i>.<b>reflectY</b>([<i>reflect</i>])</p>
<p>If <em>reflect</em> is specified, sets whether or not the <em>y</em>-dimension is reflected (negated) in the output. If <em>reflect</em> is not specified, returns true if <em>y</em>-reflection is enabled, which defaults to false. This is especially useful for transforming from standard <a href="https://en.wikipedia.org/wiki/Spatial_reference_system">spatial reference systems</a>, which treat positive <em>y</em> as pointing up, to display coordinate systems such as Canvas and SVG, which treat positive <em>y</em> as pointing down.</p>
<h3><a href="#clipping" aria-hidden="true" class="anchor" id="user-content-clipping"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Clipping</h3>
<p>Projections perform cutting or clipping of geometries in two stages.</p>
<p><a name="user-content-preclip" href="#preclip">#</a> <i>preclip</i>(<i>stream</i>)</p>
<p>Pre-clipping occurs in geographic coordinates. Cutting along the antimeridian line, or clipping along a small circle are the most common strategies.</p>
<p>See <a href="#projection_preclip"><em>projection</em>.preclip</a>.</p>
<p><a name="user-content-postclip" href="#postclip">#</a> <i>postclip</i>(<i>stream</i>)</p>
<p>Post-clipping occurs on the plane, when a projection is bounded to a certain extent such as a rectangle.</p>
<p>See <a href="#projection_postclip"><em>projection</em>.postclip</a>.</p>
<p>Clipping functions are implemented as transformations of a <a href="#streams">projection stream</a>. Pre-clipping operates on spherical coordinates, in radians. Post-clipping operates on planar coordinates, in pixels.</p>
<p><a name="user-content-geoClipAntimeridian" href="#geoClipAntimeridian">#</a> d3.<b>geoClipAntimeridian</b></p>
<p>A clipping function which transforms a stream such that geometries (lines or polygons) that cross the antimeridian line are cut in two, one on each side. Typically used for pre-clipping.</p>
<p><a name="user-content-geoClipCircle" href="#geoClipCircle">#</a> d3.<b>geoClipCircle</b>(<i>angle</i>)</p>
<p>Generates a clipping function which transforms a stream such that geometries are bounded by a small circle of radius <em>angle</em> around the projection’s <a href="#projection_center">center</a>. Typically used for pre-clipping.</p>
<p><a name="user-content-geoClipRectangle" href="#geoClipRectangle">#</a> d3.<b>geoClipRectangle</b>(<i>x0</i>, <i>y0</i>, <i>x1</i>, <i>y1</i>)</p>
<p>Generates a clipping function which transforms a stream such that geometries are bounded by a rectangle of coordinates [[<i>x0</i>, <i>y0</i>], [<i>x1</i>, <i>y1</i>]]. Typically used for post-clipping.</p>
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
      <li class="mr-3">&copy; 2018 <span title="0.19693s from unicorn-3000369800-nj5hx">GitHub</span>, Inc.</li>
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


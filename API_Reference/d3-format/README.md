





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
  
  <title>d3-format/README.md at master · d3/d3-format</title>
  <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
  <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
  <meta property="fb:app_id" content="1401488693436528">

    
    <meta content="https://avatars3.githubusercontent.com/u/1562726?s=400&amp;v=4" property="og:image" /><meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="d3/d3-format" property="og:title" /><meta content="https://github.com/d3/d3-format" property="og:url" /><meta content="d3-format - Format numbers for human consumption." property="og:description" />

  <link rel="assets" href="https://assets-cdn.github.com/">
  <link rel="web-socket" href="wss://live.github.com/_sockets/VjI6MjM0MjAxNjIzOmEwYWRlZWNiMWVhYzM0OTY3YmUzNDA5ODYwNDUxYmExMTcyYjFjMTE5OWEwMjRlNWZkZDY4Mzc3ODMxYTIyMzA=--35a676318c221c134f3d86b24f9ae46ba5d1142a">
  <meta name="pjax-timeout" content="1000">
  <link rel="sudo-modal" href="/sessions/sudo_modal">
  <meta name="request-id" content="F902:1FA0E:119BEF1:19905FF:5A603E0F" data-pjax-transient>
  

  <meta name="selected-link" value="repo_source" data-pjax-transient>

    <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
  <meta name="google-site-verification" content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA">
  <meta name="google-site-verification" content="GXs5KoUUkNCoaAZn7wPN-t01Pywp9M3sEjnt_3_ZWPc">
    <meta name="google-analytics" content="UA-3769691-2">

<meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="https://collector.githubapp.com/github-external/browser_event" name="octolytics-event-url" /><meta content="F902:1FA0E:119BEF1:19905FF:5A603E0F" name="octolytics-dimension-request_id" /><meta content="sea" name="octolytics-dimension-region_edge" /><meta content="iad" name="octolytics-dimension-region_render" /><meta content="16659379" name="octolytics-actor-id" /><meta content="xswei" name="octolytics-actor-login" /><meta content="72a8b786cd27412ba348c71058cf2aed3e8f8772266e5c157980395250fb923d" name="octolytics-actor-hash" />
<meta content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-pjax-transient="true" name="analytics-location" />




  <meta class="js-ga-set" name="dimension1" content="Logged In">


  

      <meta name="hostname" content="github.com">
  <meta name="user-login" content="xswei">

      <meta name="expected-hostname" content="github.com">
    <meta name="js-proxy-site-detection-payload" content="YzQ0OTA2NTNhN2Y2ODRhNzlhODBlY2RiOTg5Y2JlNjcxY2Q3OWQ2OGJhMTZkNzhlZTFkNjc0N2VkMjlkMmFkMXx7InJlbW90ZV9hZGRyZXNzIjoiMjIwLjE4MS4xNzEuMTI1IiwicmVxdWVzdF9pZCI6IkY5MDI6MUZBMEU6MTE5QkVGMToxOTkwNUZGOjVBNjAzRTBGIiwidGltZXN0YW1wIjoxNTE2MjU2Nzg1LCJob3N0IjoiZ2l0aHViLmNvbSJ9">

    <meta name="enabled-features" content="UNIVERSE_BANNER,FREE_TRIALS">

  <meta name="html-safe-nonce" content="95ac36701972faaa3306c820d3f61fe703aeac54">

  <meta http-equiv="x-pjax-version" content="c0275ff3857f879afa7c0ef3fbc951b4">
  

      <link href="https://github.com/d3/d3-format/commits/master.atom" rel="alternate" title="Recent Commits to d3-format:master" type="application/atom+xml">

  <meta name="description" content="d3-format - Format numbers for human consumption.">
  <meta name="go-import" content="github.com/d3/d3-format git https://github.com/d3/d3-format.git">

  <meta content="1562726" name="octolytics-dimension-user_id" /><meta content="d3" name="octolytics-dimension-user_login" /><meta content="37301843" name="octolytics-dimension-repository_id" /><meta content="d3/d3-format" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="37301843" name="octolytics-dimension-repository_network_root_id" /><meta content="d3/d3-format" name="octolytics-dimension-repository_network_root_nwo" /><meta content="false" name="octolytics-dimension-repository_explore_github_marketplace_ci_cta_shown" />


    <link rel="canonical" href="https://github.com/d3/d3-format/blob/master/README.md" data-pjax-transient>


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
  <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/d3/d3-format/search" class="js-site-search-form" data-scoped-search-url="/d3/d3-format/search" data-unscoped-search-url="/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <label class="form-control header-search-wrapper js-chromeless-input-container">
        <a href="/d3/d3-format/blob/master/README.md" class="header-search-scope no-underline">This repository</a>
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
    <span title="d3/d3-format">This repository</span>
  </div>
    <a class="dropdown-item" href="/d3/d3-format/issues/new" data-ga-click="Header, create new issue">
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

        <li><!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/logout" class="logout-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="p9aIf7WuLK5Cz/cdmj5CwmIcvPBf7WeyUaLJ3Xuuaio5sAwK/qmYIjmfJZ1trTpyIVBBpQcVkXrj1vZ/OgZrVA==" /></div>
          <button type="submit" class="dropdown-item dropdown-signout" data-ga-click="Header, sign out, icon:logout">
            Sign out
          </button>
        </form></li>
      </ul>
    </details>
  </li>
</ul>


        <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/logout" class="sr-only right-0" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="seVl0hRa4Owzl2oGYoflsu5zmSbMgn/wY6YUbHOd+GEvg+GnX11UYEjHuIaVFJ0CrT9kc5R6iTjR0ivOMjX5Hw==" /></div>
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
        <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="Iw3OYx/Dy8QVTH6kPSRAfQdczVrOzbUqVS964eO4h49O5I1z+AJ5gi6T+C5nHtYGhcfgfJAwixh31ESyiOWLwA==" /></div>      <input class="form-control" id="repository_id" name="repository_id" type="hidden" value="37301843" />

        <div class="select-menu js-menu-container js-select-menu">
          <a href="/d3/d3-format/subscription"
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
            href="/d3/d3-format/watchers"
            aria-label="12 users are watching this repository">
            12
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
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/d3/d3-format/unstar" class="starred js-social-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="Ver7fXOtI1W8V2MTRiV2pGAPf17rhrBb54Sr+qRsUuxxe8AkFkycpHARicn6qlNfSLVGR//jLqPs0WNs6kloCw==" /></div>
      <input type="hidden" name="context" value="repository"></input>
      <button
        type="submit"
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Unstar this repository" title="Unstar d3/d3-format"
        data-ga-click="Repository, click unstar button, action:blob#show; text:Unstar">
        <svg aria-hidden="true" class="octicon octicon-star" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"/></svg>
        Unstar
      </button>
        <a class="social-count js-social-count" href="/d3/d3-format/stargazers"
           aria-label="205 users starred this repository">
          205
        </a>
</form>
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/d3/d3-format/star" class="unstarred js-social-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="/FxYsu8Ri+abRa/Jxr/IS1Vtmi5nDqIX6XgT0HYnWF5v2vOUYjCvoaPX+w4FaSNataaM9epe25ll6JwsvgXC5w==" /></div>
      <input type="hidden" name="context" value="repository"></input>
      <button
        type="submit"
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Star this repository" title="Star d3/d3-format"
        data-ga-click="Repository, click star button, action:blob#show; text:Star">
        <svg aria-hidden="true" class="octicon octicon-star" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"/></svg>
        Star
      </button>
        <a class="social-count js-social-count" href="/d3/d3-format/stargazers"
           aria-label="205 users starred this repository">
          205
        </a>
</form>  </div>

  </li>

  <li>
          <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/d3/d3-format/fork" class="btn-with-count" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="Z+c0Hbb+CrnT6/9wpwPDEs5bOb0BM+VDlThLMcmlCg1lLLCz7DTp+WQJOSsjCZkjLkgCCQOA5YgGwpuw/J5N0w==" /></div>
            <button
                type="submit"
                class="btn btn-sm btn-with-count"
                data-ga-click="Repository, show fork modal, action:blob#show; text:Fork"
                title="Fork your own copy of d3/d3-format to your account"
                aria-label="Fork your own copy of d3/d3-format to your account">
              <svg aria-hidden="true" class="octicon octicon-repo-forked" height="16" version="1.1" viewBox="0 0 10 16" width="10"><path fill-rule="evenodd" d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
              Fork
            </button>
</form>
    <a href="/d3/d3-format/network" class="social-count"
       aria-label="35 users forked this repository">
      35
    </a>
  </li>
</ul>

      <h1 class="public ">
  <svg aria-hidden="true" class="octicon octicon-repo" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
  <span class="author" itemprop="author"><a href="/d3" class="url fn" rel="author">d3</a></span><!--
--><span class="path-divider">/</span><!--
--><strong itemprop="name"><a href="/d3/d3-format" data-pjax="#js-repo-pjax-container">d3-format</a></strong>

</h1>

    </div>
    
<nav class="reponav js-repo-nav js-sidenav-container-pjax container"
     itemscope
     itemtype="http://schema.org/BreadcrumbList"
     role="navigation"
     data-pjax="#js-repo-pjax-container">

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/d3/d3-format" class="js-selected-navigation-item selected reponav-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches repo_packages /d3/d3-format" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-code" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z"/></svg>
      <span itemprop="name">Code</span>
      <meta itemprop="position" content="1">
</a>  </span>

    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a href="/d3/d3-format/issues" class="js-selected-navigation-item reponav-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /d3/d3-format/issues" itemprop="url">
        <svg aria-hidden="true" class="octicon octicon-issue-opened" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"/></svg>
        <span itemprop="name">Issues</span>
        <span class="Counter">6</span>
        <meta itemprop="position" content="2">
</a>    </span>

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/d3/d3-format/pulls" class="js-selected-navigation-item reponav-item" data-hotkey="g p" data-selected-links="repo_pulls /d3/d3-format/pulls" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-git-pull-request" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M11 11.28V5c-.03-.78-.34-1.47-.94-2.06C9.46 2.35 8.78 2.03 8 2H7V0L4 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0 0 10 15a1.993 1.993 0 0 0 1-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zM4 3c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v6.56A1.993 1.993 0 0 0 2 15a1.993 1.993 0 0 0 1-3.72V4.72c.59-.34 1-.98 1-1.72zm-.8 10c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
      <span itemprop="name">Pull requests</span>
      <span class="Counter">1</span>
      <meta itemprop="position" content="3">
</a>  </span>




  <a href="/d3/d3-format/pulse" class="js-selected-navigation-item reponav-item" data-selected-links="repo_graphs repo_contributors dependency_graph pulse /d3/d3-format/pulse">
    <svg aria-hidden="true" class="octicon octicon-graph" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M16 14v1H0V0h1v14h15zM5 13H3V8h2v5zm4 0H7V3h2v10zm4 0h-2V6h2v7z"/></svg>
    Insights
</a>

</nav>


  </div>

<div class="container new-discussion-timeline experiment-repo-nav ">
  <div class="repository-content ">

    
  <a href="/d3/d3-format/blob/6fd6d74ac8a0da24ea1149c58fb57e7551bdbf1c/README.md" class="d-none js-permalink-shortcut" data-hotkey="y">Permalink</a>

  <!-- blob contrib key: blob_contributors:v21:df465a0b4ecdae885c44e16b34cde1d7 -->

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
               href="/d3/d3-format/blob/format-type/README.md"
               data-name="format-type"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                format-type
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/d3/d3-format/blob/master/README.md"
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
              href="/d3/d3-format/tree/v1.2.2/README.md"
              data-name="v1.2.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.2.2">
                v1.2.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-format/tree/v1.2.1/README.md"
              data-name="v1.2.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.2.1">
                v1.2.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-format/tree/v1.2.0/README.md"
              data-name="v1.2.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.2.0">
                v1.2.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-format/tree/v1.1.1/README.md"
              data-name="v1.1.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.1.1">
                v1.1.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-format/tree/v1.1.0/README.md"
              data-name="v1.1.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.1.0">
                v1.1.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-format/tree/v1.0.2/README.md"
              data-name="v1.0.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.2">
                v1.0.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-format/tree/v1.0.1/README.md"
              data-name="v1.0.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.1">
                v1.0.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-format/tree/v1.0.0/README.md"
              data-name="v1.0.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.0">
                v1.0.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-format/tree/v0.6.0/README.md"
              data-name="v0.6.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.6.0">
                v0.6.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-format/tree/v0.5.1/README.md"
              data-name="v0.5.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.5.1">
                v0.5.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-format/tree/v0.5.0/README.md"
              data-name="v0.5.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.5.0">
                v0.5.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-format/tree/v0.4.2/README.md"
              data-name="v0.4.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.4.2">
                v0.4.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-format/tree/v0.4.1/README.md"
              data-name="v0.4.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.4.1">
                v0.4.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-format/tree/v0.4.0/README.md"
              data-name="v0.4.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.4.0">
                v0.4.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-format/tree/v0.3.6/README.md"
              data-name="v0.3.6"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.3.6">
                v0.3.6
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-format/tree/v0.3.5/README.md"
              data-name="v0.3.5"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.3.5">
                v0.3.5
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-format/tree/v0.3.4/README.md"
              data-name="v0.3.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.3.4">
                v0.3.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-format/tree/v0.3.3/README.md"
              data-name="v0.3.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.3.3">
                v0.3.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-format/tree/v0.3.2/README.md"
              data-name="v0.3.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.3.2">
                v0.3.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-format/tree/v0.3.1/README.md"
              data-name="v0.3.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.3.1">
                v0.3.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-format/tree/v0.3.0/README.md"
              data-name="v0.3.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.3.0">
                v0.3.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-format/tree/v0.2.3/README.md"
              data-name="v0.2.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.2.3">
                v0.2.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-format/tree/v0.2.2/README.md"
              data-name="v0.2.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.2.2">
                v0.2.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-format/tree/v0.2.1/README.md"
              data-name="v0.2.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.2.1">
                v0.2.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-format/tree/v0.2.0/README.md"
              data-name="v0.2.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.2.0">
                v0.2.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-format/tree/v0.1.0/README.md"
              data-name="v0.1.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.1.0">
                v0.1.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-format/tree/v0.0.1/README.md"
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
      <a href="/d3/d3-format/find/master"
            class="js-pjax-capture-input btn btn-sm BtnGroup-item"
            data-pjax
            data-hotkey="t">
        Find file
      </a>
      <button aria-label="Copy file path to clipboard" class="js-zeroclipboard btn btn-sm BtnGroup-item tooltipped tooltipped-s" data-copied-hint="Copied!" type="button">Copy path</button>
    </div>
    <div class="breadcrumb js-zeroclipboard-target">
      <span class="repo-root js-repo-root"><span class="js-path-segment"><a href="/d3/d3-format"><span>d3-format</span></a></span></span><span class="separator">/</span><strong class="final-path">README.md</strong>
    </div>
  </div>


  
  <div class="commit-tease">
      <span class="float-right">
        <a class="commit-tease-sha" href="/d3/d3-format/commit/f9fbdeb81180753eb8e360cdfd64e12506b632e8" data-pjax>
          f9fbdeb
        </a>
        <relative-time datetime="2017-04-10T20:12:07Z">Apr 10, 2017</relative-time>
      </span>
      <div>
        <img alt="@mbostock" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/230541?s=40&amp;v=4" width="20" />
        <a href="/mbostock" class="user-mention" rel="contributor">mbostock</a>
          <a href="/d3/d3-format/commit/f9fbdeb81180753eb8e360cdfd64e12506b632e8" class="message" data-pjax="true" title="Zero is considered positive. Related #46.">Zero is considered positive. Related</a> <a href="https://github.com/d3/d3-format/issues/46" class="issue-link js-issue-link" data-url="https://github.com/d3/d3-format/issues/46" data-id="220545604" data-error-text="Failed to load issue title" data-permission-text="Issue title is private">#46</a><a href="/d3/d3-format/commit/f9fbdeb81180753eb8e360cdfd64e12506b632e8" class="message" data-pjax="true" title="Zero is considered positive. Related #46.">.</a>
      </div>

    <div class="commit-tease-contributors">
      <button type="button" class="btn-link muted-link contributors-toggle" data-facebox="#blob_contributors_box">
        <strong>5</strong>
         contributors
      </button>
          <a class="avatar-link tooltipped tooltipped-s" aria-label="mbostock" href="/d3/d3-format/commits/master/README.md?author=mbostock"><img alt="@mbostock" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/230541?s=40&amp;v=4" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="n1n9-jp" href="/d3/d3-format/commits/master/README.md?author=n1n9-jp"><img alt="@n1n9-jp" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/974276?s=40&amp;v=4" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="Devinsuit" href="/d3/d3-format/commits/master/README.md?author=Devinsuit"><img alt="@Devinsuit" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/11741306?s=40&amp;v=4" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="hernaneche" href="/d3/d3-format/commits/master/README.md?author=hernaneche"><img alt="@hernaneche" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/361375?s=40&amp;v=4" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="davinov" href="/d3/d3-format/commits/master/README.md?author=davinov"><img alt="@davinov" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/932583?s=40&amp;v=4" width="20" /> </a>


    </div>

    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header" data-facebox-id="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list" data-facebox-id="facebox-description">
          <li class="facebox-user-list-item">
            <img alt="@mbostock" height="24" src="https://avatars0.githubusercontent.com/u/230541?s=48&amp;v=4" width="24" />
            <a href="/mbostock">mbostock</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@n1n9-jp" height="24" src="https://avatars0.githubusercontent.com/u/974276?s=48&amp;v=4" width="24" />
            <a href="/n1n9-jp">n1n9-jp</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@Devinsuit" height="24" src="https://avatars1.githubusercontent.com/u/11741306?s=48&amp;v=4" width="24" />
            <a href="/Devinsuit">Devinsuit</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@hernaneche" height="24" src="https://avatars3.githubusercontent.com/u/361375?s=48&amp;v=4" width="24" />
            <a href="/hernaneche">hernaneche</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@davinov" height="24" src="https://avatars3.githubusercontent.com/u/932583?s=48&amp;v=4" width="24" />
            <a href="/davinov">davinov</a>
          </li>
      </ul>
    </div>
  </div>


  <div class="file">
    <div class="file-header">
  <div class="file-actions">

    <div class="BtnGroup">
      <a href="/d3/d3-format/raw/master/README.md" class="btn btn-sm BtnGroup-item" id="raw-url">Raw</a>
        <a href="/d3/d3-format/blame/master/README.md" class="btn btn-sm js-update-url-with-hash BtnGroup-item" data-hotkey="b">Blame</a>
      <a href="/d3/d3-format/commits/master/README.md" class="btn btn-sm BtnGroup-item" rel="nofollow">History</a>
    </div>

        <a class="btn-octicon tooltipped tooltipped-nw"
           href="github-windows://openRepo/https://github.com/d3/d3-format?branch=master&amp;filepath=README.md"
           aria-label="Open this file in GitHub Desktop"
           data-ga-click="Repository, open with desktop, type:windows">
            <svg aria-hidden="true" class="octicon octicon-device-desktop" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M15 2H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5.34c-.25.61-.86 1.39-2.34 2h8c-1.48-.61-2.09-1.39-2.34-2H15c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 9H1V3h14v8z"/></svg>
        </a>

          <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/d3/d3-format/edit/master/README.md" class="inline-form js-update-url-with-hash" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="z1foF290M8Hdk4qSiQjL165wFpp9f3tj81SYAlGD/jvZdvEpXYhGQeH1yuJT3QVnlkUJzypBzlIGwp2FH9KpjQ==" /></div>
            <button class="btn-octicon tooltipped tooltipped-nw" type="submit"
              aria-label="Fork this project and edit the file" data-hotkey="e" data-disable-with>
              <svg aria-hidden="true" class="octicon octicon-pencil" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z"/></svg>
            </button>
</form>
        <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/d3/d3-format/delete/master/README.md" class="inline-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="Z6OqLyjYdeBbDyy5CdJEsg3Lgv4fGnAfBGbQ34kAmOo/8cFy2bYK8DNs+ResMDSHoz+7Ihd3FEcVz95RAecG+g==" /></div>
          <button class="btn-octicon btn-octicon-danger tooltipped tooltipped-nw" type="submit"
            aria-label="Fork this project and delete the file" data-disable-with>
            <svg aria-hidden="true" class="octicon octicon-trashcan" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M11 2H9c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1H2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1v9c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V5c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 12H3V5h1v8h1V5h1v8h1V5h1v8h1V5h1v9zm1-10H2V3h9v1z"/></svg>
          </button>
</form>  </div>

  <div class="file-info">
      316 lines (236 sloc)
      <span class="file-info-divider"></span>
    14.6 KB
  </div>
</div>

    
  <div id="readme" class="readme blob instapaper_body">
    <article class="markdown-body entry-content" itemprop="text"><h1><a href="#d3-format" aria-hidden="true" class="anchor" id="user-content-d3-format"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>d3-format</h1>
<p>Ever noticed how sometimes JavaScript doesn’t display numbers the way you expect? Like, you tried to print tenths with a simple loop:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">for</span> (<span class="pl-k">var</span> i <span class="pl-k">=</span> <span class="pl-c1">0</span>; i <span class="pl-k">&lt;</span> <span class="pl-c1">10</span>; i<span class="pl-k">++</span>) {
  <span class="pl-en">console</span>.<span class="pl-c1">log</span>(<span class="pl-c1">0.1</span> <span class="pl-k">*</span> i);
}</pre></div>
<p>And you got this:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-c1">0</span>
<span class="pl-c1">0.1</span>
<span class="pl-c1">0.2</span>
<span class="pl-c1">0.30000000000000004</span>
<span class="pl-c1">0.4</span>
<span class="pl-c1">0.5</span>
<span class="pl-c1">0.6000000000000001</span>
<span class="pl-c1">0.7000000000000001</span>
<span class="pl-c1">0.8</span>
<span class="pl-c1">0.9</span></pre></div>
<p>Welcome to <a href="https://en.wikipedia.org/wiki/Double-precision_floating-point_format">binary floating point</a>! ಠ_ಠ</p>
<p>Yet rounding error is not the only reason to customize number formatting. A table of numbers should be formatted consistently for comparison; above, 0.0 would be better than 0. Large numbers should have grouped digits (e.g., 42,000) or be in scientific or metric notation (4.2e+4, 42k). Currencies should have fixed precision ($3.50). Reported numerical results should be rounded to significant digits (4021 becomes 4000). Number formats should appropriate to the reader’s locale (42.000,00 or 42,000.00). The list goes on.</p>
<p>Formatting numbers for human consumption is the purpose of d3-format, which is modeled after Python 3’s <a href="https://docs.python.org/3/library/string.html#format-specification-mini-language">format specification mini-language</a> (<a href="https://www.python.org/dev/peps/pep-3101/">PEP 3101</a>). Revisiting the example above:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">var</span> f <span class="pl-k">=</span> <span class="pl-smi">d3</span>.<span class="pl-en">format</span>(<span class="pl-s"><span class="pl-pds">"</span>.1f<span class="pl-pds">"</span></span>);
<span class="pl-k">for</span> (<span class="pl-k">var</span> i <span class="pl-k">=</span> <span class="pl-c1">0</span>; i <span class="pl-k">&lt;</span> <span class="pl-c1">10</span>; i<span class="pl-k">++</span>) {
  <span class="pl-en">console</span>.<span class="pl-c1">log</span>(<span class="pl-en">f</span>(<span class="pl-c1">0.1</span> <span class="pl-k">*</span> i));
}</pre></div>
<p>Now you get this:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-c1">0.0</span>
<span class="pl-c1">0.1</span>
<span class="pl-c1">0.2</span>
<span class="pl-c1">0.3</span>
<span class="pl-c1">0.4</span>
<span class="pl-c1">0.5</span>
<span class="pl-c1">0.6</span>
<span class="pl-c1">0.7</span>
<span class="pl-c1">0.8</span>
<span class="pl-c1">0.9</span></pre></div>
<p>But d3-format is much more than an alias for <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed">number.toFixed</a>! A few more examples:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-smi">d3</span>.<span class="pl-en">format</span>(<span class="pl-s"><span class="pl-pds">"</span>.0%<span class="pl-pds">"</span></span>)(<span class="pl-c1">0.123</span>);  <span class="pl-c"><span class="pl-c">//</span> rounded percentage, "12%"</span>
<span class="pl-smi">d3</span>.<span class="pl-en">format</span>(<span class="pl-s"><span class="pl-pds">"</span>($.2f<span class="pl-pds">"</span></span>)(<span class="pl-k">-</span><span class="pl-c1">3.5</span>); <span class="pl-c"><span class="pl-c">//</span> localized fixed-point currency, "(£3.50)"</span>
<span class="pl-smi">d3</span>.<span class="pl-en">format</span>(<span class="pl-s"><span class="pl-pds">"</span>+20<span class="pl-pds">"</span></span>)(<span class="pl-c1">42</span>);     <span class="pl-c"><span class="pl-c">//</span> space-filled and signed, "                 +42"</span>
<span class="pl-smi">d3</span>.<span class="pl-en">format</span>(<span class="pl-s"><span class="pl-pds">"</span>.^20<span class="pl-pds">"</span></span>)(<span class="pl-c1">42</span>);    <span class="pl-c"><span class="pl-c">//</span> dot-filled and centered, ".........42........."</span>
<span class="pl-smi">d3</span>.<span class="pl-en">format</span>(<span class="pl-s"><span class="pl-pds">"</span>.2s<span class="pl-pds">"</span></span>)(<span class="pl-c1">42e6</span>);   <span class="pl-c"><span class="pl-c">//</span> SI-prefix with two significant digits, "42M"</span>
<span class="pl-smi">d3</span>.<span class="pl-en">format</span>(<span class="pl-s"><span class="pl-pds">"</span>#x<span class="pl-pds">"</span></span>)(<span class="pl-c1">48879</span>);   <span class="pl-c"><span class="pl-c">//</span> prefixed lowercase hexadecimal, "0xbeef"</span>
<span class="pl-smi">d3</span>.<span class="pl-en">format</span>(<span class="pl-s"><span class="pl-pds">"</span>,.2r<span class="pl-pds">"</span></span>)(<span class="pl-c1">4223</span>);  <span class="pl-c"><span class="pl-c">//</span> grouped thousands with two significant digits, "4,200"</span></pre></div>
<p>See <a href="#locale_format"><em>locale</em>.format</a> for a detailed specification, and try running <a href="#formatSpecifier">d3.formatSpecifier</a> on the above formats to decode their meaning.</p>
<h2><a href="#installing" aria-hidden="true" class="anchor" id="user-content-installing"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installing</h2>
<p>If you use NPM, <code>npm install d3-format</code>. Otherwise, download the <a href="https://github.com/d3/d3-format/releases/latest">latest release</a>. You can also load directly from <a href="https://d3js.org">d3js.org</a>, either as a <a href="https://d3js.org/d3-format.v1.min.js">standalone library</a> or as part of <a href="https://github.com/d3/d3">D3 4.0</a>. AMD, CommonJS, and vanilla environments are supported. In vanilla, a <code>d3</code> global is exported:</p>
<div class="highlight highlight-text-html-basic"><pre>&lt;<span class="pl-ent">script</span> <span class="pl-e">src</span>=<span class="pl-s"><span class="pl-pds">"</span>https://d3js.org/d3-format.v1.min.js<span class="pl-pds">"</span></span>&gt;&lt;/<span class="pl-ent">script</span>&gt;
&lt;<span class="pl-ent">script</span>&gt;<span class="pl-s1"></span>
<span class="pl-s1"></span>
<span class="pl-s1"><span class="pl-k">var</span> format <span class="pl-k">=</span> <span class="pl-smi">d3</span>.<span class="pl-en">format</span>(<span class="pl-s"><span class="pl-pds">"</span>.2s<span class="pl-pds">"</span></span>);</span>
<span class="pl-s1"></span>
<span class="pl-s1"></span><span class="pl-s1">&lt;</span>/<span class="pl-ent">script</span>&gt;</pre></div>
<p>Locale files are hosted on <a href="https://unpkg.com/">unpkg</a> and can be loaded using <a href="https://github.com/d3/d3-request/blob/master/README.md#json">d3.json</a>. For example, to set Russian as the default locale:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-smi">d3</span>.<span class="pl-en">json</span>(<span class="pl-s"><span class="pl-pds">"</span>https://unpkg.com/d3-format@1/locale/ru-RU.json<span class="pl-pds">"</span></span>, <span class="pl-k">function</span>(<span class="pl-smi">error</span>, <span class="pl-smi">locale</span>) {
  <span class="pl-k">if</span> (error) <span class="pl-k">throw</span> error;

  <span class="pl-smi">d3</span>.<span class="pl-en">formatDefaultLocale</span>(locale);

  <span class="pl-k">var</span> format <span class="pl-k">=</span> <span class="pl-smi">d3</span>.<span class="pl-en">format</span>(<span class="pl-s"><span class="pl-pds">"</span>$,<span class="pl-pds">"</span></span>);

  <span class="pl-en">console</span>.<span class="pl-c1">log</span>(<span class="pl-en">format</span>(<span class="pl-c1">1234.56</span>)); <span class="pl-c"><span class="pl-c">//</span> 1 234,56 руб.</span>
});</pre></div>
<p><a href="https://tonicdev.com/npm/d3-format">Try d3-format in your browser.</a></p>
<h2><a href="#api-reference" aria-hidden="true" class="anchor" id="user-content-api-reference"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>API Reference</h2>
<p><a name="user-content-format" href="#format">#</a> d3.<b>format</b>(<i>specifier</i>) <a href="https://github.com/d3/d3-format/blob/master/src/defaultLocale.js#L4" title="Source">&lt;&gt;</a></p>
<p>An alias for <a href="#locale_format"><em>locale</em>.format</a> on the <a href="#formatDefaultLocale">default locale</a>.</p>
<p><a name="user-content-formatPrefix" href="#formatPrefix">#</a> d3.<b>formatPrefix</b>(<i>specifier</i>, <i>value</i>) <a href="https://github.com/d3/d3-format/blob/master/src/defaultLocale.js#L5" title="Source">&lt;&gt;</a></p>
<p>An alias for <a href="#locale_formatPrefix"><em>locale</em>.formatPrefix</a> on the <a href="#formatDefaultLocale">default locale</a>.</p>
<p><a name="user-content-locale_format" href="#locale_format">#</a> <i>locale</i>.<b>format</b>(<i>specifier</i>) <a href="https://github.com/d3/d3-format/blob/master/src/locale.js#L18" title="Source">&lt;&gt;</a></p>
<p>Returns a new format function for the given string <em>specifier</em>. The returned function takes a number as the only argument, and returns a string representing the formatted number. The general form of a specifier is:</p>
<pre><code>[​[fill]align][sign][symbol][0][width][,][.precision][type]
</code></pre>
<p>The <em>fill</em> can be any character. The presence of a fill character is signaled by the <em>align</em> character following it, which must be one of the following:</p>
<ul>
<li><code>&gt;</code> - Forces the field to be right-aligned within the available space. (Default behavior).</li>
<li><code>&lt;</code> - Forces the field to be left-aligned within the available space.</li>
<li><code>^</code> - Forces the field to be centered within the available space.</li>
<li><code>=</code> - like <code>&gt;</code>, but with any sign and symbol to the left of any padding.</li>
</ul>
<p>The <em>sign</em> can be:</p>
<ul>
<li><code>-</code> - nothing for zero or positive and a minus sign for negative. (Default behavior.)</li>
<li><code>+</code> - a plus sign for zero or positive and a minus sign for negative.</li>
<li><code>(</code> - nothing for zero or positive and parentheses for negative.</li>
<li><code> </code> (space) - a space for zero or positive and a minus sign for negative.</li>
</ul>
<p>The <em>symbol</em> can be:</p>
<ul>
<li><code>$</code> - apply currency symbols per the locale definition.</li>
<li><code>#</code> - for binary, octal, or hexadecimal notation, prefix by <code>0b</code>, <code>0o</code>, or <code>0x</code>, respectively.</li>
</ul>
<p>The <em>zero</em> (<code>0</code>) option enables zero-padding; this implicitly sets <em>fill</em> to <code>0</code> and <em>align</em> to <code>=</code>. The <em>width</em> defines the minimum field width; if not specified, then the width will be determined by the content. The <em>comma</em> (<code>,</code>) option enables the use of a group separator, such as a comma for thousands.</p>
<p>Depending on the <em>type</em>, the <em>precision</em> either indicates the number of digits that follow the decimal point (types <code>f</code> and <code>%</code>), or the number of significant digits (types <code>​</code>, <code>e</code>, <code>g</code>, <code>r</code>, <code>s</code> and <code>p</code>). If the precision is not specified, it defaults to 6 for all types except <code>​</code> (none), which defaults to 12. Precision is ignored for integer formats (types <code>b</code>, <code>o</code>, <code>d</code>, <code>x</code>, <code>X</code> and <code>c</code>). See <a href="#precisionFixed">precisionFixed</a> and <a href="#precisionRound">precisionRound</a> for help picking an appropriate precision.</p>
<p>The available <em>type</em> values are:</p>
<ul>
<li><code>e</code> - exponent notation.</li>
<li><code>f</code> - fixed point notation.</li>
<li><code>g</code> - either decimal or exponent notation, rounded to significant digits.</li>
<li><code>r</code> - decimal notation, rounded to significant digits.</li>
<li><code>s</code> - decimal notation with an <a href="#locale_formatPrefix">SI prefix</a>, rounded to significant digits.</li>
<li><code>%</code> - multiply by 100, and then decimal notation with a percent sign.</li>
<li><code>p</code> - multiply by 100, round to significant digits, and then decimal notation with a percent sign.</li>
<li><code>b</code> - binary notation, rounded to integer.</li>
<li><code>o</code> - octal notation, rounded to integer.</li>
<li><code>d</code> - decimal notation, rounded to integer.</li>
<li><code>x</code> - hexadecimal notation, using lower-case letters, rounded to integer.</li>
<li><code>X</code> - hexadecimal notation, using upper-case letters, rounded to integer.</li>
<li><code>c</code> - converts the integer to the corresponding unicode character before printing.</li>
<li><code>​</code> (none) - like <code>g</code>, but trim insignificant trailing zeros.</li>
</ul>
<p>The type <code>n</code> is also supported as shorthand for <code>,g</code>. For the <code>g</code>, <code>n</code> and <code>​</code> (none) types, decimal notation is used if the resulting string would have <em>precision</em> or fewer digits; otherwise, exponent notation is used. For example:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-smi">d3</span>.<span class="pl-en">format</span>(<span class="pl-s"><span class="pl-pds">"</span>.2<span class="pl-pds">"</span></span>)(<span class="pl-c1">42</span>);  <span class="pl-c"><span class="pl-c">//</span> "42"</span>
<span class="pl-smi">d3</span>.<span class="pl-en">format</span>(<span class="pl-s"><span class="pl-pds">"</span>.2<span class="pl-pds">"</span></span>)(<span class="pl-c1">4.2</span>); <span class="pl-c"><span class="pl-c">//</span> "4.2"</span>
<span class="pl-smi">d3</span>.<span class="pl-en">format</span>(<span class="pl-s"><span class="pl-pds">"</span>.1<span class="pl-pds">"</span></span>)(<span class="pl-c1">42</span>);  <span class="pl-c"><span class="pl-c">//</span> "4e+1"</span>
<span class="pl-smi">d3</span>.<span class="pl-en">format</span>(<span class="pl-s"><span class="pl-pds">"</span>.1<span class="pl-pds">"</span></span>)(<span class="pl-c1">4.2</span>); <span class="pl-c"><span class="pl-c">//</span> "4"</span></pre></div>
<p><a name="user-content-locale_formatPrefix" href="#locale_formatPrefix">#</a> <i>locale</i>.<b>formatPrefix</b>(<i>specifier</i>, <i>value</i>) <a href="https://github.com/d3/d3-format/blob/master/src/locale.js#L127" title="Source">&lt;&gt;</a></p>
<p>Equivalent to <a href="#locale_format"><em>locale</em>.format</a>, except the returned function will convert values to the units of the appropriate <a href="https://en.wikipedia.org/wiki/Metric_prefix#List_of_SI_prefixes">SI prefix</a> for the specified numeric reference <em>value</em> before formatting in fixed point notation. The following prefixes are supported:</p>
<ul>
<li><code>y</code> - yocto, 10⁻²⁴</li>
<li><code>z</code> - zepto, 10⁻²¹</li>
<li><code>a</code> - atto, 10⁻¹⁸</li>
<li><code>f</code> - femto, 10⁻¹⁵</li>
<li><code>p</code> - pico, 10⁻¹²</li>
<li><code>n</code> - nano, 10⁻⁹</li>
<li><code>µ</code> - micro, 10⁻⁶</li>
<li><code>m</code> - milli, 10⁻³</li>
<li><code>​</code> (none) - 10⁰</li>
<li><code>k</code> - kilo, 10³</li>
<li><code>M</code> - mega, 10⁶</li>
<li><code>G</code> - giga, 10⁹</li>
<li><code>T</code> - tera, 10¹²</li>
<li><code>P</code> - peta, 10¹⁵</li>
<li><code>E</code> - exa, 10¹⁸</li>
<li><code>Z</code> - zetta, 10²¹</li>
<li><code>Y</code> - yotta, 10²⁴</li>
</ul>
<p>Unlike <a href="#locale_format"><em>locale</em>.format</a> with the <code>s</code> format type, this method returns a formatter with a consistent SI prefix, rather than computing the prefix dynamically for each number. In addition, the <em>precision</em> for the given <em>specifier</em> represents the number of digits past the decimal point (as with <code>f</code> fixed point notation), not the number of significant digits. For example:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">var</span> f <span class="pl-k">=</span> <span class="pl-smi">d3</span>.<span class="pl-en">formatPrefix</span>(<span class="pl-s"><span class="pl-pds">"</span>,.0<span class="pl-pds">"</span></span>, <span class="pl-c1">1e-6</span>);
<span class="pl-en">f</span>(<span class="pl-c1">0.00042</span>); <span class="pl-c"><span class="pl-c">//</span> "420µ"</span>
<span class="pl-en">f</span>(<span class="pl-c1">0.0042</span>); <span class="pl-c"><span class="pl-c">//</span> "4,200µ"</span></pre></div>
<p>This method is useful when formatting multiple numbers in the same units for easy comparison. See <a href="#precisionPrefix">precisionPrefix</a> for help picking an appropriate precision, and <a href="http://bl.ocks.org/mbostock/9764126">bl.ocks.org/9764126</a> for an example.</p>
<p><a name="user-content-formatSpecifier" href="#formatSpecifier">#</a> d3.<b>formatSpecifier</b>(<i>specifier</i>) <a href="https://github.com/d3/d3-format/blob/master/src/formatSpecifier.js" title="Source">&lt;&gt;</a></p>
<p>Parses the specified <em>specifier</em>, returning an object with exposed fields that correspond to the <a href="#locale_format">format specification mini-language</a> and a toString method that reconstructs the specifier. For example, <code>formatSpecifier("s")</code> returns:</p>
<div class="highlight highlight-source-js"><pre>{
  <span class="pl-s"><span class="pl-pds">"</span>fill<span class="pl-pds">"</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span> <span class="pl-pds">"</span></span>,
  <span class="pl-s"><span class="pl-pds">"</span>align<span class="pl-pds">"</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>&gt;<span class="pl-pds">"</span></span>,
  <span class="pl-s"><span class="pl-pds">"</span>sign<span class="pl-pds">"</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>-<span class="pl-pds">"</span></span>,
  <span class="pl-s"><span class="pl-pds">"</span>symbol<span class="pl-pds">"</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span><span class="pl-pds">"</span></span>,
  <span class="pl-s"><span class="pl-pds">"</span>zero<span class="pl-pds">"</span></span><span class="pl-k">:</span> <span class="pl-c1">false</span>,
  <span class="pl-s"><span class="pl-pds">"</span>width<span class="pl-pds">"</span></span><span class="pl-k">:</span> <span class="pl-c1">undefined</span>,
  <span class="pl-s"><span class="pl-pds">"</span>comma<span class="pl-pds">"</span></span><span class="pl-k">:</span> <span class="pl-c1">false</span>,
  <span class="pl-s"><span class="pl-pds">"</span>precision<span class="pl-pds">"</span></span><span class="pl-k">:</span> <span class="pl-c1">6</span>,
  <span class="pl-s"><span class="pl-pds">"</span>type<span class="pl-pds">"</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>s<span class="pl-pds">"</span></span>
}</pre></div>
<p>This method is useful for understanding how format specifiers are parsed and for deriving new specifiers. For example, you might compute an appropriate precision based on the numbers you want to format using <a href="#precisionFixed">precisionFixed</a> and then create a new format:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">var</span> s <span class="pl-k">=</span> <span class="pl-smi">d3</span>.<span class="pl-en">formatSpecifier</span>(<span class="pl-s"><span class="pl-pds">"</span>f<span class="pl-pds">"</span></span>);
<span class="pl-smi">s</span>.<span class="pl-smi">precision</span> <span class="pl-k">=</span> <span class="pl-en">precisionFixed</span>(<span class="pl-c1">0.01</span>);
<span class="pl-k">var</span> f <span class="pl-k">=</span> <span class="pl-smi">d3</span>.<span class="pl-en">format</span>(s);
<span class="pl-en">f</span>(<span class="pl-c1">42</span>); <span class="pl-c"><span class="pl-c">//</span> "42.00";</span></pre></div>
<p><a name="user-content-precisionFixed" href="#precisionFixed">#</a> d3.<b>precisionFixed</b>(<i>step</i>) <a href="https://github.com/d3/d3-format/blob/master/src/precisionFixed.js" title="Source">&lt;&gt;</a></p>
<p>Returns a suggested decimal precision for fixed point notation given the specified numeric <em>step</em> value. The <em>step</em> represents the minimum absolute difference between values that will be formatted. (This assumes that the values to be formatted are also multiples of <em>step</em>.) For example, given the numbers 1, 1.5, and 2, the <em>step</em> should be 0.5 and the suggested precision is 1:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">var</span> p <span class="pl-k">=</span> <span class="pl-smi">d3</span>.<span class="pl-en">precisionFixed</span>(<span class="pl-c1">0.5</span>),
    f <span class="pl-k">=</span> <span class="pl-smi">d3</span>.<span class="pl-en">format</span>(<span class="pl-s"><span class="pl-pds">"</span>.<span class="pl-pds">"</span></span> <span class="pl-k">+</span> p <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">"</span>f<span class="pl-pds">"</span></span>);
<span class="pl-en">f</span>(<span class="pl-c1">1</span>);   <span class="pl-c"><span class="pl-c">//</span> "1.0"</span>
<span class="pl-en">f</span>(<span class="pl-c1">1.5</span>); <span class="pl-c"><span class="pl-c">//</span> "1.5"</span>
<span class="pl-en">f</span>(<span class="pl-c1">2</span>);   <span class="pl-c"><span class="pl-c">//</span> "2.0"</span></pre></div>
<p>Whereas for the numbers 1, 2 and 3, the <em>step</em> should be 1 and the suggested precision is 0:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">var</span> p <span class="pl-k">=</span> <span class="pl-smi">d3</span>.<span class="pl-en">precisionFixed</span>(<span class="pl-c1">1</span>),
    f <span class="pl-k">=</span> <span class="pl-smi">d3</span>.<span class="pl-en">format</span>(<span class="pl-s"><span class="pl-pds">"</span>.<span class="pl-pds">"</span></span> <span class="pl-k">+</span> p <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">"</span>f<span class="pl-pds">"</span></span>);
<span class="pl-en">f</span>(<span class="pl-c1">1</span>); <span class="pl-c"><span class="pl-c">//</span> "1"</span>
<span class="pl-en">f</span>(<span class="pl-c1">2</span>); <span class="pl-c"><span class="pl-c">//</span> "2"</span>
<span class="pl-en">f</span>(<span class="pl-c1">3</span>); <span class="pl-c"><span class="pl-c">//</span> "3"</span></pre></div>
<p>Note: for the <code>%</code> format type, subtract two:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">var</span> p <span class="pl-k">=</span> <span class="pl-c1">Math</span>.<span class="pl-c1">max</span>(<span class="pl-c1">0</span>, <span class="pl-smi">d3</span>.<span class="pl-en">precisionFixed</span>(<span class="pl-c1">0.05</span>) <span class="pl-k">-</span> <span class="pl-c1">2</span>),
    f <span class="pl-k">=</span> <span class="pl-smi">d3</span>.<span class="pl-en">format</span>(<span class="pl-s"><span class="pl-pds">"</span>.<span class="pl-pds">"</span></span> <span class="pl-k">+</span> p <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">"</span>%<span class="pl-pds">"</span></span>);
<span class="pl-en">f</span>(<span class="pl-c1">0.45</span>); <span class="pl-c"><span class="pl-c">//</span> "45%"</span>
<span class="pl-en">f</span>(<span class="pl-c1">0.50</span>); <span class="pl-c"><span class="pl-c">//</span> "50%"</span>
<span class="pl-en">f</span>(<span class="pl-c1">0.55</span>); <span class="pl-c"><span class="pl-c">//</span> "55%"</span></pre></div>
<p><a name="user-content-precisionPrefix" href="#precisionPrefix">#</a> d3.<b>precisionPrefix</b>(<i>step</i>, <i>value</i>) <a href="https://github.com/d3/d3-format/blob/master/src/precisionPrefix.js" title="Source">&lt;&gt;</a></p>
<p>Returns a suggested decimal precision for use with <a href="#locale_formatPrefix"><em>locale</em>.formatPrefix</a> given the specified numeric <em>step</em> and reference <em>value</em>. The <em>step</em> represents the minimum absolute difference between values that will be formatted, and <em>value</em> determines which SI prefix will be used. (This assumes that the values to be formatted are also multiples of <em>step</em>.) For example, given the numbers 1.1e6, 1.2e6, and 1.3e6, the <em>step</em> should be 1e5, the <em>value</em> could be 1.3e6, and the suggested precision is 1:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">var</span> p <span class="pl-k">=</span> <span class="pl-smi">d3</span>.<span class="pl-en">precisionPrefix</span>(<span class="pl-c1">1e5</span>, <span class="pl-c1">1.3e6</span>),
    f <span class="pl-k">=</span> <span class="pl-smi">d3</span>.<span class="pl-en">formatPrefix</span>(<span class="pl-s"><span class="pl-pds">"</span>.<span class="pl-pds">"</span></span> <span class="pl-k">+</span> p, <span class="pl-c1">1.3e6</span>);
<span class="pl-en">f</span>(<span class="pl-c1">1.1e6</span>); <span class="pl-c"><span class="pl-c">//</span> "1.1M"</span>
<span class="pl-en">f</span>(<span class="pl-c1">1.2e6</span>); <span class="pl-c"><span class="pl-c">//</span> "1.2M"</span>
<span class="pl-en">f</span>(<span class="pl-c1">1.3e6</span>); <span class="pl-c"><span class="pl-c">//</span> "1.3M"</span></pre></div>
<p><a name="user-content-precisionRound" href="#precisionRound">#</a> d3.<b>precisionRound</b>(<i>step</i>, <i>max</i>) <a href="https://github.com/d3/d3-format/blob/master/src/precisionRound.js" title="Source">&lt;&gt;</a></p>
<p>Returns a suggested decimal precision for format types that round to significant digits given the specified numeric <em>step</em> and <em>max</em> values. The <em>step</em> represents the minimum absolute difference between values that will be formatted, and the <em>max</em> represents the largest absolute value that will be formatted. (This assumes that the values to be formatted are also multiples of <em>step</em>.) For example, given the numbers 0.99, 1.0, and 1.01, the <em>step</em> should be 0.01, the <em>max</em> should be 1.01, and the suggested precision is 3:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">var</span> p <span class="pl-k">=</span> <span class="pl-smi">d3</span>.<span class="pl-en">precisionRound</span>(<span class="pl-c1">0.01</span>, <span class="pl-c1">1.01</span>),
    f <span class="pl-k">=</span> <span class="pl-smi">d3</span>.<span class="pl-en">format</span>(<span class="pl-s"><span class="pl-pds">"</span>.<span class="pl-pds">"</span></span> <span class="pl-k">+</span> p <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">"</span>r<span class="pl-pds">"</span></span>);
<span class="pl-en">f</span>(<span class="pl-c1">0.99</span>); <span class="pl-c"><span class="pl-c">//</span> "0.990"</span>
<span class="pl-en">f</span>(<span class="pl-c1">1.0</span>);  <span class="pl-c"><span class="pl-c">//</span> "1.00"</span>
<span class="pl-en">f</span>(<span class="pl-c1">1.01</span>); <span class="pl-c"><span class="pl-c">//</span> "1.01"</span></pre></div>
<p>Whereas for the numbers 0.9, 1.0, and 1.1, the <em>step</em> should be 0.1, the <em>max</em> should be 1.1, and the suggested precision is 2:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">var</span> p <span class="pl-k">=</span> <span class="pl-smi">d3</span>.<span class="pl-en">precisionRound</span>(<span class="pl-c1">0.1</span>, <span class="pl-c1">1.1</span>),
    f <span class="pl-k">=</span> <span class="pl-smi">d3</span>.<span class="pl-en">format</span>(<span class="pl-s"><span class="pl-pds">"</span>.<span class="pl-pds">"</span></span> <span class="pl-k">+</span> p <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">"</span>r<span class="pl-pds">"</span></span>);
<span class="pl-en">f</span>(<span class="pl-c1">0.9</span>); <span class="pl-c"><span class="pl-c">//</span> "0.90"</span>
<span class="pl-en">f</span>(<span class="pl-c1">1.0</span>); <span class="pl-c"><span class="pl-c">//</span> "1.0"</span>
<span class="pl-en">f</span>(<span class="pl-c1">1.1</span>); <span class="pl-c"><span class="pl-c">//</span> "1.1"</span></pre></div>
<p>Note: for the <code>e</code> format type, subtract one:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">var</span> p <span class="pl-k">=</span> <span class="pl-c1">Math</span>.<span class="pl-c1">max</span>(<span class="pl-c1">0</span>, <span class="pl-smi">d3</span>.<span class="pl-en">precisionRound</span>(<span class="pl-c1">0.01</span>, <span class="pl-c1">1.01</span>) <span class="pl-k">-</span> <span class="pl-c1">1</span>),
    f <span class="pl-k">=</span> <span class="pl-smi">d3</span>.<span class="pl-en">format</span>(<span class="pl-s"><span class="pl-pds">"</span>.<span class="pl-pds">"</span></span> <span class="pl-k">+</span> p <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">"</span>e<span class="pl-pds">"</span></span>);
<span class="pl-en">f</span>(<span class="pl-c1">0.01</span>); <span class="pl-c"><span class="pl-c">//</span> "1.00e-2"</span>
<span class="pl-en">f</span>(<span class="pl-c1">1.01</span>); <span class="pl-c"><span class="pl-c">//</span> "1.01e+0"</span></pre></div>
<h3><a href="#locales" aria-hidden="true" class="anchor" id="user-content-locales"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Locales</h3>
<p><a name="user-content-formatLocale" href="#formatLocale">#</a> d3.<b>formatLocale</b>(<i>definition</i>) <a href="https://github.com/d3/d3-format/blob/master/src/locale.js" title="Source">&lt;&gt;</a></p>
<p>Returns a <em>locale</em> object for the specified <em>definition</em> with <a href="#locale_format"><em>locale</em>.format</a> and <a href="#locale_formatPrefix"><em>locale</em>.formatPrefix</a> methods. The <em>definition</em> must include the following properties:</p>
<ul>
<li><code>decimal</code> - the decimal point (e.g., <code>"."</code>).</li>
<li><code>thousands</code> - the group separator (e.g., <code>","</code>).</li>
<li><code>grouping</code> - the array of group sizes (e.g., <code>[3]</code>), cycled as needed.</li>
<li><code>currency</code> - the currency prefix and suffix (e.g., <code>["$", ""]</code>).</li>
<li><code>numerals</code> - optional; an array of ten strings to replace the numerals 0-9.</li>
<li><code>percent</code> - optional; the percent suffix (defaults to <code>"%"</code>).</li>
</ul>
<p>Note that the <em>thousands</em> property is a misnomer, as the grouping definition allows groups other than thousands.</p>
<p><a name="user-content-formatDefaultLocale" href="#formatDefaultLocale">#</a> d3.<b>formatDefaultLocale</b>(<i>definition</i>) <a href="https://github.com/d3/d3-format/blob/master/src/defaultLocale.js" title="Source">&lt;&gt;</a></p>
<p>Equivalent to <a href="#formatLocale">d3.formatLocale</a>, except it also redefines <a href="#format">d3.format</a> and <a href="#formatPrefix">d3.formatPrefix</a> to the new locale’s <a href="#locale_format"><em>locale</em>.format</a> and <a href="#locale_formatPrefix"><em>locale</em>.formatPrefix</a>. If you do not set a default locale, it defaults to <a href="https://github.com/d3/d3-format/blob/master/locale/en-US.json">U.S. English</a>.</p>
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
      <li class="mr-3">&copy; 2018 <span title="0.19639s from unicorn-2657157768-vdw35">GitHub</span>, Inc.</li>
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


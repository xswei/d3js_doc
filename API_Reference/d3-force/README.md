





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
  
  <title>d3-force/README.md at master · d3/d3-force</title>
  <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
  <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
  <meta property="fb:app_id" content="1401488693436528">

    
    <meta content="https://avatars3.githubusercontent.com/u/1562726?s=400&amp;v=4" property="og:image" /><meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="d3/d3-force" property="og:title" /><meta content="https://github.com/d3/d3-force" property="og:url" /><meta content="d3-force - Force-directed graph layout using velocity Verlet integration." property="og:description" />

  <link rel="assets" href="https://assets-cdn.github.com/">
  <link rel="web-socket" href="wss://live.github.com/_sockets/VjI6MjM0MjAxNjIzOmFmNWMzZjZhOWFmNTg1ZTMxYTM1MjA4OGFhYjgyY2M2YmIyMzgxMmQyYTUzMTg0ZDczZDhjYzcwZTdhMDBlODM=--8ee8c10395cdadf39d34c4daae9e6f805431d004">
  <meta name="pjax-timeout" content="1000">
  <link rel="sudo-modal" href="/sessions/sudo_modal">
  <meta name="request-id" content="F902:1FA0E:119B3FD:198F6CF:5A603E00" data-pjax-transient>
  

  <meta name="selected-link" value="repo_source" data-pjax-transient>

    <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
  <meta name="google-site-verification" content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA">
  <meta name="google-site-verification" content="GXs5KoUUkNCoaAZn7wPN-t01Pywp9M3sEjnt_3_ZWPc">
    <meta name="google-analytics" content="UA-3769691-2">

<meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="https://collector.githubapp.com/github-external/browser_event" name="octolytics-event-url" /><meta content="F902:1FA0E:119B3FD:198F6CF:5A603E00" name="octolytics-dimension-request_id" /><meta content="sea" name="octolytics-dimension-region_edge" /><meta content="iad" name="octolytics-dimension-region_render" /><meta content="16659379" name="octolytics-actor-id" /><meta content="xswei" name="octolytics-actor-login" /><meta content="72a8b786cd27412ba348c71058cf2aed3e8f8772266e5c157980395250fb923d" name="octolytics-actor-hash" />
<meta content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-pjax-transient="true" name="analytics-location" />




  <meta class="js-ga-set" name="dimension1" content="Logged In">


  

      <meta name="hostname" content="github.com">
  <meta name="user-login" content="xswei">

      <meta name="expected-hostname" content="github.com">
    <meta name="js-proxy-site-detection-payload" content="ODk4NTgwNzFjY2NkMWQwZWJmMzRkNWI1NzYzM2UzODA2NjIwNGE5NTFkYzQxZTQ2OWNmMzBhNWYzZDRhNTI4NXx7InJlbW90ZV9hZGRyZXNzIjoiMjIwLjE4MS4xNzEuMTI1IiwicmVxdWVzdF9pZCI6IkY5MDI6MUZBMEU6MTE5QjNGRDoxOThGNkNGOjVBNjAzRTAwIiwidGltZXN0YW1wIjoxNTE2MjU2NzcwLCJob3N0IjoiZ2l0aHViLmNvbSJ9">

    <meta name="enabled-features" content="UNIVERSE_BANNER,FREE_TRIALS">

  <meta name="html-safe-nonce" content="95ac36701972faaa3306c820d3f61fe703aeac54">

  <meta http-equiv="x-pjax-version" content="c0275ff3857f879afa7c0ef3fbc951b4">
  

      <link href="https://github.com/d3/d3-force/commits/master.atom" rel="alternate" title="Recent Commits to d3-force:master" type="application/atom+xml">

  <meta name="description" content="d3-force - Force-directed graph layout using velocity Verlet integration.">
  <meta name="go-import" content="github.com/d3/d3-force git https://github.com/d3/d3-force.git">

  <meta content="1562726" name="octolytics-dimension-user_id" /><meta content="d3" name="octolytics-dimension-user_login" /><meta content="45493905" name="octolytics-dimension-repository_id" /><meta content="d3/d3-force" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="45493905" name="octolytics-dimension-repository_network_root_id" /><meta content="d3/d3-force" name="octolytics-dimension-repository_network_root_nwo" /><meta content="false" name="octolytics-dimension-repository_explore_github_marketplace_ci_cta_shown" />


    <link rel="canonical" href="https://github.com/d3/d3-force/blob/master/README.md" data-pjax-transient>


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
  <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/d3/d3-force/search" class="js-site-search-form" data-scoped-search-url="/d3/d3-force/search" data-unscoped-search-url="/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <label class="form-control header-search-wrapper js-chromeless-input-container">
        <a href="/d3/d3-force/blob/master/README.md" class="header-search-scope no-underline">This repository</a>
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
    <span title="d3/d3-force">This repository</span>
  </div>
    <a class="dropdown-item" href="/d3/d3-force/issues/new" data-ga-click="Header, create new issue">
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

        <li><!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/logout" class="logout-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="bQXamsiTD9oQjZVaQRRLGAf+zOjbB1IqTF/I/g2DbyHzY17vg5S7VmvdR9q2hzOoRLIxvYP/pOL+K/dcTCtuXw==" /></div>
          <button type="submit" class="dropdown-item dropdown-signout" data-ga-click="Header, sign out, icon:logout">
            Sign out
          </button>
        </form></li>
      </ul>
    </details>
  </li>
</ul>


        <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/logout" class="sr-only right-0" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="mqovKO/XJV1qYF+bJ2CtvkWY4EgZXm809a+mpfuqdk4EzKtdpNCR0REwjRvQ89UOBtQdHUGmmfxH25kHugJ3MA==" /></div>
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
        <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="gCfMfHJlFAMnNZguLxk1R0ZrbGApQqu+aPCiWsV0JIntzo9slaSmRRzqHqR1I6M8xPBBRne/lYxKC5wJrikoxg==" /></div>      <input class="form-control" id="repository_id" name="repository_id" type="hidden" value="45493905" />

        <div class="select-menu js-menu-container js-select-menu">
          <a href="/d3/d3-force/subscription"
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
            href="/d3/d3-force/watchers"
            aria-label="29 users are watching this repository">
            29
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
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/d3/d3-force/unstar" class="starred js-social-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="z/c3TwtwvfT3AtEdFeced15/xJiPumjtidB5wi5qK3gsT2EfLmM8P0lYHGWccuN/Yec39MfGuRuNL6WysW9QDw==" /></div>
      <input type="hidden" name="context" value="repository"></input>
      <button
        type="submit"
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Unstar this repository" title="Unstar d3/d3-force"
        data-ga-click="Repository, click unstar button, action:blob#show; text:Unstar">
        <svg aria-hidden="true" class="octicon octicon-star" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"/></svg>
        Unstar
      </button>
        <a class="social-count js-social-count" href="/d3/d3-force/stargazers"
           aria-label="326 users starred this repository">
          326
        </a>
</form>
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/d3/d3-force/star" class="unstarred js-social-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="dM+2U/2qGXG+I4pGdbDOfqkmpWWP4w6beVCB9O8MkqC585vID68qJcGr9sDK04c6E8zJP2OA+KWTuVv3OxcL3g==" /></div>
      <input type="hidden" name="context" value="repository"></input>
      <button
        type="submit"
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Star this repository" title="Star d3/d3-force"
        data-ga-click="Repository, click star button, action:blob#show; text:Star">
        <svg aria-hidden="true" class="octicon octicon-star" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"/></svg>
        Star
      </button>
        <a class="social-count js-social-count" href="/d3/d3-force/stargazers"
           aria-label="326 users starred this repository">
          326
        </a>
</form>  </div>

  </li>

  <li>
          <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/d3/d3-force/fork" class="btn-with-count" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="YHvdlw1gZSuxceApj0TQRRYtKUA1aAq5dSDyNBNIVrUYHWsMi6IiEmGh/hwWNhPn76tAr9Uu7PKw7tqi6MMlBA==" /></div>
            <button
                type="submit"
                class="btn btn-sm btn-with-count"
                data-ga-click="Repository, show fork modal, action:blob#show; text:Fork"
                title="Fork your own copy of d3/d3-force to your account"
                aria-label="Fork your own copy of d3/d3-force to your account">
              <svg aria-hidden="true" class="octicon octicon-repo-forked" height="16" version="1.1" viewBox="0 0 10 16" width="10"><path fill-rule="evenodd" d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
              Fork
            </button>
</form>
    <a href="/d3/d3-force/network" class="social-count"
       aria-label="126 users forked this repository">
      126
    </a>
  </li>
</ul>

      <h1 class="public ">
  <svg aria-hidden="true" class="octicon octicon-repo" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
  <span class="author" itemprop="author"><a href="/d3" class="url fn" rel="author">d3</a></span><!--
--><span class="path-divider">/</span><!--
--><strong itemprop="name"><a href="/d3/d3-force" data-pjax="#js-repo-pjax-container">d3-force</a></strong>

</h1>

    </div>
    
<nav class="reponav js-repo-nav js-sidenav-container-pjax container"
     itemscope
     itemtype="http://schema.org/BreadcrumbList"
     role="navigation"
     data-pjax="#js-repo-pjax-container">

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/d3/d3-force" class="js-selected-navigation-item selected reponav-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches repo_packages /d3/d3-force" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-code" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z"/></svg>
      <span itemprop="name">Code</span>
      <meta itemprop="position" content="1">
</a>  </span>

    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a href="/d3/d3-force/issues" class="js-selected-navigation-item reponav-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /d3/d3-force/issues" itemprop="url">
        <svg aria-hidden="true" class="octicon octicon-issue-opened" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"/></svg>
        <span itemprop="name">Issues</span>
        <span class="Counter">13</span>
        <meta itemprop="position" content="2">
</a>    </span>

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/d3/d3-force/pulls" class="js-selected-navigation-item reponav-item" data-hotkey="g p" data-selected-links="repo_pulls /d3/d3-force/pulls" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-git-pull-request" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M11 11.28V5c-.03-.78-.34-1.47-.94-2.06C9.46 2.35 8.78 2.03 8 2H7V0L4 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0 0 10 15a1.993 1.993 0 0 0 1-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zM4 3c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v6.56A1.993 1.993 0 0 0 2 15a1.993 1.993 0 0 0 1-3.72V4.72c.59-.34 1-.98 1-1.72zm-.8 10c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
      <span itemprop="name">Pull requests</span>
      <span class="Counter">1</span>
      <meta itemprop="position" content="3">
</a>  </span>




  <a href="/d3/d3-force/pulse" class="js-selected-navigation-item reponav-item" data-selected-links="repo_graphs repo_contributors dependency_graph pulse /d3/d3-force/pulse">
    <svg aria-hidden="true" class="octicon octicon-graph" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M16 14v1H0V0h1v14h15zM5 13H3V8h2v5zm4 0H7V3h2v10zm4 0h-2V6h2v7z"/></svg>
    Insights
</a>

</nav>


  </div>

<div class="container new-discussion-timeline experiment-repo-nav ">
  <div class="repository-content ">

    
  <a href="/d3/d3-force/blob/84d033544347dc2aa3c9e9152c0e91c2eb5e0303/README.md" class="d-none js-permalink-shortcut" data-hotkey="y">Permalink</a>

  <!-- blob contrib key: blob_contributors:v21:373eb9613d8a1809754984fa0001553b -->

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
               href="/d3/d3-force/blob/better-error-for-missing-node/README.md"
               data-name="better-error-for-missing-node"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                better-error-for-missing-node
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/d3/d3-force/blob/master/README.md"
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
              href="/d3/d3-force/tree/v1.1.0/README.md"
              data-name="v1.1.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.1.0">
                v1.1.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-force/tree/v1.0.6/README.md"
              data-name="v1.0.6"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.6">
                v1.0.6
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-force/tree/v1.0.5/README.md"
              data-name="v1.0.5"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.5">
                v1.0.5
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-force/tree/v1.0.4/README.md"
              data-name="v1.0.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.4">
                v1.0.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-force/tree/v1.0.3/README.md"
              data-name="v1.0.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.3">
                v1.0.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-force/tree/v1.0.2/README.md"
              data-name="v1.0.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.2">
                v1.0.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-force/tree/v1.0.1/README.md"
              data-name="v1.0.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.1">
                v1.0.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-force/tree/v1.0.0/README.md"
              data-name="v1.0.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.0">
                v1.0.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-force/tree/v0.7.1/README.md"
              data-name="v0.7.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.7.1">
                v0.7.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-force/tree/v0.7.0/README.md"
              data-name="v0.7.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.7.0">
                v0.7.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-force/tree/v0.6.3/README.md"
              data-name="v0.6.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.6.3">
                v0.6.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-force/tree/v0.6.2/README.md"
              data-name="v0.6.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.6.2">
                v0.6.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-force/tree/v0.6.1/README.md"
              data-name="v0.6.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.6.1">
                v0.6.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-force/tree/v0.6.0/README.md"
              data-name="v0.6.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.6.0">
                v0.6.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-force/tree/v0.5.0/README.md"
              data-name="v0.5.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.5.0">
                v0.5.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-force/tree/v0.4.1/README.md"
              data-name="v0.4.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.4.1">
                v0.4.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-force/tree/v0.4.0/README.md"
              data-name="v0.4.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.4.0">
                v0.4.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-force/tree/v0.3.0/README.md"
              data-name="v0.3.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.3.0">
                v0.3.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-force/tree/v0.2.2/README.md"
              data-name="v0.2.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.2.2">
                v0.2.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-force/tree/v0.2.1/README.md"
              data-name="v0.2.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.2.1">
                v0.2.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-force/tree/v0.2.0/README.md"
              data-name="v0.2.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.2.0">
                v0.2.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-force/tree/v0.1.0/README.md"
              data-name="v0.1.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.1.0">
                v0.1.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-force/tree/v0.0.4/README.md"
              data-name="v0.0.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.0.4">
                v0.0.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-force/tree/v0.0.3/README.md"
              data-name="v0.0.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.0.3">
                v0.0.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-force/tree/v0.0.2/README.md"
              data-name="v0.0.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.0.2">
                v0.0.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-force/tree/v0.0.1/README.md"
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
      <a href="/d3/d3-force/find/master"
            class="js-pjax-capture-input btn btn-sm BtnGroup-item"
            data-pjax
            data-hotkey="t">
        Find file
      </a>
      <button aria-label="Copy file path to clipboard" class="js-zeroclipboard btn btn-sm BtnGroup-item tooltipped tooltipped-s" data-copied-hint="Copied!" type="button">Copy path</button>
    </div>
    <div class="breadcrumb js-zeroclipboard-target">
      <span class="repo-root js-repo-root"><span class="js-path-segment"><a href="/d3/d3-force"><span>d3-force</span></a></span></span><span class="separator">/</span><strong class="final-path">README.md</strong>
    </div>
  </div>


  
  <div class="commit-tease">
      <span class="float-right">
        <a class="commit-tease-sha" href="/d3/d3-force/commit/84d033544347dc2aa3c9e9152c0e91c2eb5e0303" data-pjax>
          84d0335
        </a>
        <relative-time datetime="2017-09-30T15:42:09Z">Sep 30, 2017</relative-time>
      </span>
      <div>
        <img alt="@mbostock" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/230541?s=40&amp;v=4" width="20" />
        <a href="/mbostock" class="user-mention" rel="contributor">mbostock</a>
          <a href="/d3/d3-force/commit/84d033544347dc2aa3c9e9152c0e91c2eb5e0303" class="message" data-pjax="true" title="Add forceRadial example.">Add forceRadial example.</a>
      </div>

    <div class="commit-tease-contributors">
      <button type="button" class="btn-link muted-link contributors-toggle" data-facebox="#blob_contributors_box">
        <strong>5</strong>
         contributors
      </button>
          <a class="avatar-link tooltipped tooltipped-s" aria-label="mbostock" href="/d3/d3-force/commits/master/README.md?author=mbostock"><img alt="@mbostock" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/230541?s=40&amp;v=4" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="Devinsuit" href="/d3/d3-force/commits/master/README.md?author=Devinsuit"><img alt="@Devinsuit" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/11741306?s=40&amp;v=4" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="nathanielw" href="/d3/d3-force/commits/master/README.md?author=nathanielw"><img alt="@nathanielw" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/4693844?s=40&amp;v=4" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="jheer" href="/d3/d3-force/commits/master/README.md?author=jheer"><img alt="@jheer" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/202799?s=40&amp;v=4" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="jonyrock" href="/d3/d3-force/commits/master/README.md?author=jonyrock"><img alt="@jonyrock" class="avatar" height="20" src="https://avatars3.githubusercontent.com/u/1022757?s=40&amp;v=4" width="20" /> </a>


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
            <img alt="@nathanielw" height="24" src="https://avatars0.githubusercontent.com/u/4693844?s=48&amp;v=4" width="24" />
            <a href="/nathanielw">nathanielw</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@jheer" height="24" src="https://avatars0.githubusercontent.com/u/202799?s=48&amp;v=4" width="24" />
            <a href="/jheer">jheer</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@jonyrock" height="24" src="https://avatars2.githubusercontent.com/u/1022757?s=48&amp;v=4" width="24" />
            <a href="/jonyrock">jonyrock</a>
          </li>
      </ul>
    </div>
  </div>


  <div class="file">
    <div class="file-header">
  <div class="file-actions">

    <div class="BtnGroup">
      <a href="/d3/d3-force/raw/master/README.md" class="btn btn-sm BtnGroup-item" id="raw-url">Raw</a>
        <a href="/d3/d3-force/blame/master/README.md" class="btn btn-sm js-update-url-with-hash BtnGroup-item" data-hotkey="b">Blame</a>
      <a href="/d3/d3-force/commits/master/README.md" class="btn btn-sm BtnGroup-item" rel="nofollow">History</a>
    </div>

        <a class="btn-octicon tooltipped tooltipped-nw"
           href="github-windows://openRepo/https://github.com/d3/d3-force?branch=master&amp;filepath=README.md"
           aria-label="Open this file in GitHub Desktop"
           data-ga-click="Repository, open with desktop, type:windows">
            <svg aria-hidden="true" class="octicon octicon-device-desktop" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M15 2H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5.34c-.25.61-.86 1.39-2.34 2h8c-1.48-.61-2.09-1.39-2.34-2H15c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 9H1V3h14v8z"/></svg>
        </a>

          <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/d3/d3-force/edit/master/README.md" class="inline-form js-update-url-with-hash" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="x5/AzqJjcVS0KkZc69JU5DUhpdu0H58iGppGsAFqfa5wfQQkwGF/4USmxEaBXziHudEKcH6CDrw1+b8Ranz0nQ==" /></div>
            <button class="btn-octicon tooltipped tooltipped-nw" type="submit"
              aria-label="Fork this project and edit the file" data-hotkey="e" data-disable-with>
              <svg aria-hidden="true" class="octicon octicon-pencil" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z"/></svg>
            </button>
</form>
        <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/d3/d3-force/delete/master/README.md" class="inline-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="NNPNWKNAPZJlI5DcAkkX6RLIl2K4lx2lwwgrhb0NN2E9jNrnm7ZE8gqlVEr44YjCsZbhVaJwJUgm0kV/6TKVMw==" /></div>
          <button class="btn-octicon btn-octicon-danger tooltipped tooltipped-nw" type="submit"
            aria-label="Fork this project and delete the file" data-disable-with>
            <svg aria-hidden="true" class="octicon octicon-trashcan" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M11 2H9c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1H2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1v9c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V5c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 12H3V5h1v8h1V5h1v8h1V5h1v8h1V5h1v9zm1-10H2V3h9v1z"/></svg>
          </button>
</form>  </div>

  <div class="file-info">
      458 lines (277 sloc)
      <span class="file-info-divider"></span>
    40.3 KB
  </div>
</div>

    
  <div id="readme" class="readme blob instapaper_body">
    <article class="markdown-body entry-content" itemprop="text"><h1><a href="#d3-force" aria-hidden="true" class="anchor" id="user-content-d3-force"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>d3-force</h1>
<p>This module implements a <a href="https://en.wikipedia.org/wiki/Verlet_integration">velocity Verlet</a> numerical integrator for simulating physical forces on particles. The simulation is simplified: it assumes a constant unit time step Δ<em>t</em> = 1 for each step, and a constant unit mass <em>m</em> = 1 for all particles. As a result, a force <em>F</em> acting on a particle is equivalent to a constant acceleration <em>a</em> over the time interval Δ<em>t</em>, and can be simulated simply by adding to the particle’s velocity, which is then added to the particle’s position.</p>
<p>In the domain of information visualization, physical simulations are useful for studying <a href="http://bl.ocks.org/mbostock/ad70335eeef6d167bc36fd3c04378048">networks</a> and <a href="http://bl.ocks.org/mbostock/95aa92e2f4e8345aaa55a4a94d41ce37">hierarchies</a>!</p>
<p><a href="http://bl.ocks.org/mbostock/ad70335eeef6d167bc36fd3c04378048"><img alt="Force Dragging III" src="https://raw.githubusercontent.com/d3/d3-force/master/img/graph.png" width="420" height="219" style="max-width:100%;"></a><a href="http://bl.ocks.org/mbostock/95aa92e2f4e8345aaa55a4a94d41ce37"><img alt="Force-Directed Tree" src="https://raw.githubusercontent.com/d3/d3-force/master/img/tree.png" width="420" height="219" style="max-width:100%;"></a></p>
<p>You can also simulate circles (disks) with collision, such as for <a href="http://www.nytimes.com/interactive/2012/09/06/us/politics/convention-word-counts.html">bubble charts</a> or <a href="http://bl.ocks.org/mbostock/6526445e2b44303eebf21da3b6627320">beeswarm plots</a>:</p>
<p><a href="http://bl.ocks.org/mbostock/31ce330646fa8bcb7289ff3b97aab3f5"><img alt="Collision Detection" src="https://raw.githubusercontent.com/d3/d3-force/master/img/collide.png" width="420" height="219" style="max-width:100%;"></a><a href="http://bl.ocks.org/mbostock/6526445e2b44303eebf21da3b6627320"><img alt="Beeswarm" src="https://raw.githubusercontent.com/d3/d3-force/master/img/beeswarm.png" width="420" height="219" style="max-width:100%;"></a></p>
<p>You can even use it as a rudimentary physics engine, say to simulate cloth:</p>
<p><a href="http://bl.ocks.org/mbostock/1b64ec067fcfc51e7471d944f51f1611"><img alt="Force-Directed Lattice" src="https://raw.githubusercontent.com/d3/d3-force/master/img/lattice.png" width="480" height="250" style="max-width:100%;"></a></p>
<p>To use this module, create a <a href="#simulation">simulation</a> for an array of <a href="#simulation_nodes">nodes</a>, and compose the desired <a href="#simulation_force">forces</a>. Then <a href="#simulation_on">listen</a> for tick events to render the nodes as they update in your preferred graphics system, such as Canvas or SVG.</p>
<h2><a href="#installing" aria-hidden="true" class="anchor" id="user-content-installing"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installing</h2>
<p>If you use NPM, <code>npm install d3-force</code>. Otherwise, download the <a href="https://github.com/d3/d3-force/releases/latest">latest release</a>. You can also load directly from <a href="https://d3js.org">d3js.org</a>, either as a <a href="https://d3js.org/d3-force.v1.min.js">standalone library</a> or as part of <a href="https://github.com/d3/d3">D3 4.0</a>. AMD, CommonJS, and vanilla environments are supported. In vanilla, a <code>d3_force</code> global is exported:</p>
<div class="highlight highlight-text-html-basic"><pre>&lt;<span class="pl-ent">script</span> <span class="pl-e">src</span>=<span class="pl-s"><span class="pl-pds">"</span>https://d3js.org/d3-collection.v1.min.js<span class="pl-pds">"</span></span>&gt;&lt;/<span class="pl-ent">script</span>&gt;
&lt;<span class="pl-ent">script</span> <span class="pl-e">src</span>=<span class="pl-s"><span class="pl-pds">"</span>https://d3js.org/d3-dispatch.v1.min.js<span class="pl-pds">"</span></span>&gt;&lt;/<span class="pl-ent">script</span>&gt;
&lt;<span class="pl-ent">script</span> <span class="pl-e">src</span>=<span class="pl-s"><span class="pl-pds">"</span>https://d3js.org/d3-quadtree.v1.min.js<span class="pl-pds">"</span></span>&gt;&lt;/<span class="pl-ent">script</span>&gt;
&lt;<span class="pl-ent">script</span> <span class="pl-e">src</span>=<span class="pl-s"><span class="pl-pds">"</span>https://d3js.org/d3-timer.v1.min.js<span class="pl-pds">"</span></span>&gt;&lt;/<span class="pl-ent">script</span>&gt;
&lt;<span class="pl-ent">script</span> <span class="pl-e">src</span>=<span class="pl-s"><span class="pl-pds">"</span>https://d3js.org/d3-force.v1.min.js<span class="pl-pds">"</span></span>&gt;&lt;/<span class="pl-ent">script</span>&gt;
&lt;<span class="pl-ent">script</span>&gt;<span class="pl-s1"></span>
<span class="pl-s1"></span>
<span class="pl-s1"><span class="pl-k">var</span> simulation <span class="pl-k">=</span> <span class="pl-smi">d3</span>.<span class="pl-en">forceSimulation</span>(nodes);</span>
<span class="pl-s1"></span>
<span class="pl-s1"></span><span class="pl-s1">&lt;</span>/<span class="pl-ent">script</span>&gt;</pre></div>
<p><a href="https://tonicdev.com/npm/d3-force">Try d3-force in your browser.</a></p>
<h2><a href="#api-reference" aria-hidden="true" class="anchor" id="user-content-api-reference"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>API Reference</h2>
<h3><a href="#simulation" aria-hidden="true" class="anchor" id="user-content-simulation"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Simulation</h3>
<p><a name="user-content-forceSimulation" href="#forceSimulation">#</a> d3.<b>forceSimulation</b>([<i>nodes</i>]) <a href="https://github.com/d3/d3-force/blob/master/src/simulation.js" title="Source">&lt;&gt;</a></p>
<p>Creates a new simulation with the specified array of <a href="#simulation_nodes"><em>nodes</em></a> and no <a href="#simulation_force">forces</a>. If <em>nodes</em> is not specified, it defaults to the empty array. The simulator <a href="#simulation_restart">starts</a> automatically; use <a href="#simulation_on"><em>simulation</em>.on</a> to listen for tick events as the simulation runs. If you wish to run the simulation manually instead, call <a href="#simulation_stop"><em>simulation</em>.stop</a>, and then call <a href="#simulation_tick"><em>simulation</em>.tick</a> as desired.</p>
<p><a name="user-content-simulation_restart" href="#simulation_restart">#</a> <i>simulation</i>.<b>restart</b>() <a href="https://github.com/d3/d3-force/blob/master/src/simulation.js#L80" title="Source">&lt;&gt;</a></p>
<p>Restarts the simulation’s internal timer and returns the simulation. In conjunction with <a href="#simulation_alphaTarget"><em>simulation</em>.alphaTarget</a> or <a href="#simulation_alpha"><em>simulation</em>.alpha</a>, this method can be used to “reheat” the simulation during interaction, such as when dragging a node, or to resume the simulation after temporarily pausing it with <a href="#simulation_stop"><em>simulation</em>.stop</a>.</p>
<p><a name="user-content-simulation_stop" href="#simulation_stop">#</a> <i>simulation</i>.<b>stop</b>() <a href="https://github.com/d3/d3-force/blob/master/src/simulation.js#L84" title="Source">&lt;&gt;</a></p>
<p>Stops the simulation’s internal timer, if it is running, and returns the simulation. If the timer is already stopped, this method does nothing. This method is useful for running the simulation manually; see <a href="#simulation_tick"><em>simulation</em>.tick</a>.</p>
<p><a name="user-content-simulation_tick" href="#simulation_tick">#</a> <i>simulation</i>.<b>tick</b>() <a href="https://github.com/d3/d3-force/blob/master/src/simulation.js#L38" title="Source">&lt;&gt;</a></p>
<p>Increments the current <a href="#simulation_alpha"><em>alpha</em></a> by (<a href="#simulation_alphaTarget"><em>alphaTarget</em></a> - <em>alpha</em>) × <a href="#simulation_alphaDecay"><em>alphaDecay</em></a>; then invokes each registered <a href="#simulation_force">force</a>, passing the new <em>alpha</em>; then decrements each <a href="#simulation_nodes">node</a>’s velocity by <em>velocity</em> × <a href="#simulation_velocityDecay"><em>velocityDecay</em></a>; lastly increments each node’s position by <em>velocity</em>.</p>
<p>This method does not dispatch <a href="#simulation_on">events</a>; events are only dispatched by the internal timer when the simulation is started automatically upon <a href="#forceSimulation">creation</a> or by calling <a href="#simulation_restart"><em>simulation</em>.restart</a>. The natural number of ticks when the simulation is started is ⌈<em>log</em>(<a href="#simulation_alphaMin"><em>alphaMin</em></a>) / <em>log</em>(1 - <a href="#simulation_alphaDecay"><em>alphaDecay</em></a>)⌉; by default, this is 300.</p>
<p>This method can be used in conjunction with <a href="#simulation_stop"><em>simulation</em>.stop</a> to compute a <a href="https://bl.ocks.org/mbostock/1667139">static force layout</a>. For large graphs, static layouts should be computed <a href="https://bl.ocks.org/mbostock/01ab2e85e8727d6529d20391c0fd9a16">in a web worker</a> to avoid freezing the user interface.</p>
<p><a name="user-content-simulation_nodes" href="#simulation_nodes">#</a> <i>simulation</i>.<b>nodes</b>([<i>nodes</i>]) <a href="https://github.com/d3/d3-force/blob/master/src/simulation.js#L88" title="Source">&lt;&gt;</a></p>
<p>If <em>nodes</em> is specified, sets the simulation’s nodes to the specified array of objects, initializing their positions and velocities if necessary, and then <a href="#force_initialize">re-initializes</a> any bound <a href="#simulation_force">forces</a>; returns the simulation. If <em>nodes</em> is not specified, returns the simulation’s array of nodes as specified to the <a href="#forceSimulation">constructor</a>.</p>
<p>Each <em>node</em> must be an object. The following properties are assigned by the simulation:</p>
<ul>
<li><code>index</code> - the node’s zero-based index into <em>nodes</em></li>
<li><code>x</code> - the node’s current <em>x</em>-position</li>
<li><code>y</code> - the node’s current <em>y</em>-position</li>
<li><code>vx</code> - the node’s current <em>x</em>-velocity</li>
<li><code>vy</code> - the node’s current <em>y</em>-velocity</li>
</ul>
<p>The position ⟨<em>x</em>,<em>y</em>⟩ and velocity ⟨<em>vx</em>,<em>vy</em>⟩ may be subsequently modified by <a href="#forces">forces</a> and by the simulation. If either <em>vx</em> or <em>vy</em> is NaN, the velocity is initialized to ⟨0,0⟩. If either <em>x</em> or <em>y</em> is NaN, the position is initialized in a <a href="http://bl.ocks.org/mbostock/11478058">phyllotaxis arrangement</a>, so chosen to ensure a deterministic, uniform distribution around the origin.</p>
<p>To fix a node in a given position, you may specify two additional properties:</p>
<ul>
<li><code>fx</code> - the node’s fixed <em>x</em>-position</li>
<li><code>fy</code> - the node’s fixed <em>y</em>-position</li>
</ul>
<p>At the end of each <a href="#simulation_tick">tick</a>, after the application of any forces, a node with a defined <em>node</em>.fx has <em>node</em>.x reset to this value and <em>node</em>.vx set to zero; likewise, a node with a defined <em>node</em>.fy has <em>node</em>.y reset to this value and <em>node</em>.vy set to zero. To unfix a node that was previously fixed, set <em>node</em>.fx and <em>node</em>.fy to null, or delete these properties.</p>
<p>If the specified array of <em>nodes</em> is modified, such as when nodes are added to or removed from the simulation, this method must be called again with the new (or changed) array to notify the simulation and bound forces of the change; the simulation does not make a defensive copy of the specified array.</p>
<p><a name="user-content-simulation_alpha" href="#simulation_alpha">#</a> <i>simulation</i>.<b>alpha</b>([<i>alpha</i>]) <a href="https://github.com/d3/d3-force/blob/master/src/simulation.js#L92" title="Source">&lt;&gt;</a></p>
<p>If <em>alpha</em> is specified, sets the current alpha to the specified number in the range [0,1] and returns this simulation. If <em>alpha</em> is not specified, returns the current alpha value, which defaults to 1.</p>
<p><a name="user-content-simulation_alphaMin" href="#simulation_alphaMin">#</a> <i>simulation</i>.<b>alphaMin</b>([<i>min</i>]) <a href="https://github.com/d3/d3-force/blob/master/src/simulation.js#L96" title="Source">&lt;&gt;</a></p>
<p>If <em>min</em> is specified, sets the minimum <em>alpha</em> to the specified number in the range [0,1] and returns this simulation. If <em>min</em> is not specified, returns the current minimum <em>alpha</em> value, which defaults to 0.001. The simulation’s internal timer stops when the current <a href="#simulation_alpha"><em>alpha</em></a> is less than the minimum <em>alpha</em>. The default <a href="#simulation_alphaDecay">alpha decay rate</a> of ~0.0228 corresponds to 300 iterations.</p>
<p><a name="user-content-simulation_alphaDecay" href="#simulation_alphaDecay">#</a> <i>simulation</i>.<b>alphaDecay</b>([<i>decay</i>]) <a href="https://github.com/d3/d3-force/blob/master/src/simulation.js#L100" title="Source">&lt;&gt;</a></p>
<p>If <em>decay</em> is specified, sets the <a href="#simulation_alpha"><em>alpha</em></a> decay rate to the specified number in the range [0,1] and returns this simulation. If <em>decay</em> is not specified, returns the current <em>alpha</em> decay rate, which defaults to 0.0228… = 1 - <em>pow</em>(0.001, 1 / 300) where 0.001 is the default <a href="#simulation_alphaMin">minimum <em>alpha</em></a>.</p>
<p>The alpha decay rate determines how quickly the current alpha interpolates towards the desired <a href="#simulation_alphaTarget">target <em>alpha</em></a>; since the default target <em>alpha</em> is zero, by default this controls how quickly the simulation cools. Higher decay rates cause the simulation to stabilize more quickly, but risk getting stuck in a local minimum; lower values cause the simulation to take longer to run, but typically converge on a better layout. To have the simulation run forever at the current <em>alpha</em>, set the <em>decay</em> rate to zero; alternatively, set a <a href="#simulation_alphaTarget">target <em>alpha</em></a> greater than the <a href="#simulation_alphaMin">minimum <em>alpha</em></a>.</p>
<p><a name="user-content-simulation_alphaTarget" href="#simulation_alphaTarget">#</a> <i>simulation</i>.<b>alphaTarget</b>([<i>target</i>]) <a href="https://github.com/d3/d3-force/blob/master/src/simulation.js#L104" title="Source">&lt;&gt;</a></p>
<p>If <em>target</em> is specified, sets the current target <a href="#simulation_alpha"><em>alpha</em></a> to the specified number in the range [0,1] and returns this simulation. If <em>target</em> is not specified, returns the current target alpha value, which defaults to 0.</p>
<p><a name="user-content-simulation_velocityDecay" href="#simulation_velocityDecay">#</a> <i>simulation</i>.<b>velocityDecay</b>([<i>decay</i>]) <a href="https://github.com/d3/d3-force/blob/master/src/simulation.js#L108" title="Source">&lt;&gt;</a></p>
<p>If <em>decay</em> is specified, sets the velocity decay factor to the specified number in the range [0,1] and returns this simulation. If <em>decay</em> is not specified, returns the current velocity decay factor, which defaults to 0.4. The decay factor is akin to atmospheric friction; after the application of any forces during a <a href="#simulation_tick">tick</a>, each node’s velocity is multiplied by 1 - <em>decay</em>. As with lowering the <a href="#simulation_alphaDecay">alpha decay rate</a>, less velocity decay may converge on a better solution, but risks numerical instabilities and oscillation.</p>
<p><a name="user-content-simulation_force" href="#simulation_force">#</a> <i>simulation</i>.<b>force</b>(<i>name</i>[, <i>force</i>]) <a href="https://github.com/d3/d3-force/blob/master/src/simulation.js#L112" title="Source">&lt;&gt;</a></p>
<p>If <em>force</em> is specified, assigns the <a href="#forces">force</a> for the specified <em>name</em> and returns this simulation. If <em>force</em> is not specified, returns the force with the specified name, or undefined if there is no such force. (By default, new simulations have no forces.) For example, to create a new simulation to layout a graph, you might say:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">var</span> simulation <span class="pl-k">=</span> <span class="pl-smi">d3</span>.<span class="pl-en">forceSimulation</span>(nodes)
    .<span class="pl-en">force</span>(<span class="pl-s"><span class="pl-pds">"</span>charge<span class="pl-pds">"</span></span>, <span class="pl-smi">d3</span>.<span class="pl-en">forceManyBody</span>())
    .<span class="pl-en">force</span>(<span class="pl-s"><span class="pl-pds">"</span>link<span class="pl-pds">"</span></span>, <span class="pl-smi">d3</span>.<span class="pl-en">forceLink</span>(links))
    .<span class="pl-en">force</span>(<span class="pl-s"><span class="pl-pds">"</span>center<span class="pl-pds">"</span></span>, <span class="pl-smi">d3</span>.<span class="pl-en">forceCenter</span>());</pre></div>
<p>To remove the force with the given <em>name</em>, pass null as the <em>force</em>. For example, to remove the charge force:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-smi">simulation</span>.<span class="pl-en">force</span>(<span class="pl-s"><span class="pl-pds">"</span>charge<span class="pl-pds">"</span></span>, <span class="pl-c1">null</span>);</pre></div>
<p><a name="user-content-simulation_find" href="#simulation_find">#</a> <i>simulation</i>.<b>find</b>(<i>x</i>, <i>y</i>[, <i>radius</i>]) <a href="https://github.com/d3/d3-force/blob/master/src/simulation.js#L116" title="Source">&lt;&gt;</a></p>
<p>Returns the node closest to the position ⟨<em>x</em>,<em>y</em>⟩ with the given search <em>radius</em>. If <em>radius</em> is not specified, it defaults to infinity. If there is no node within the search area, returns undefined.</p>
<p><a name="user-content-simulation_on" href="#simulation_on">#</a> <i>simulation</i>.<b>on</b>(<i>typenames</i>, [<i>listener</i>]) <a href="https://github.com/d3/d3-force/blob/master/src/simulation.js#L139" title="Source">&lt;&gt;</a></p>
<p>If <em>listener</em> is specified, sets the event <em>listener</em> for the specified <em>typenames</em> and returns this simulation. If an event listener was already registered for the same type and name, the existing listener is removed before the new listener is added. If <em>listener</em> is null, removes the current event listeners for the specified <em>typenames</em>, if any. If <em>listener</em> is not specified, returns the first currently-assigned listener matching the specified <em>typenames</em>, if any. When a specified event is dispatched, each <em>listener</em> will be invoked with the <code>this</code> context as the simulation.</p>
<p>The <em>typenames</em> is a string containing one or more <em>typename</em> separated by whitespace. Each <em>typename</em> is a <em>type</em>, optionally followed by a period (<code>.</code>) and a <em>name</em>, such as <code>tick.foo</code> and <code>tick.bar</code>; the name allows multiple listeners to be registered for the same <em>type</em>. The <em>type</em> must be one of the following:</p>
<ul>
<li><code>tick</code> - after each tick of the simulation’s internal timer.</li>
<li><code>end</code> - after the simulation’s timer stops when <em>alpha</em> &lt; <a href="#simulation_alphaMin"><em>alphaMin</em></a>.</li>
</ul>
<p>Note that <em>tick</em> events are not dispatched when <a href="#simulation_tick"><em>simulation</em>.tick</a> is called manually; events are only dispatched by the internal timer and are intended for interactive rendering of the simulation. To affect the simulation, register <a href="#simulation_force">forces</a> instead of modifying nodes’ positions or velocities inside a tick event listener.</p>
<p>See <a href="https://github.com/d3/d3-dispatch#dispatch_on"><em>dispatch</em>.on</a> for details.</p>
<h3><a href="#forces" aria-hidden="true" class="anchor" id="user-content-forces"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Forces</h3>
<p>A <em>force</em> is simply a function that modifies nodes’ positions or velocities; in this context, a <em>force</em> can apply a classical physical force such as electrical charge or gravity, or it can resolve a geometric constraint, such as keeping nodes within a bounding box or keeping linked nodes a fixed distance apart. For example, a simple positioning force that moves nodes towards the origin ⟨0,0⟩ might be implemented as:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">function</span> <span class="pl-en">force</span>(<span class="pl-smi">alpha</span>) {
  <span class="pl-k">for</span> (<span class="pl-k">var</span> i <span class="pl-k">=</span> <span class="pl-c1">0</span>, n <span class="pl-k">=</span> <span class="pl-smi">nodes</span>.<span class="pl-c1">length</span>, node, k <span class="pl-k">=</span> alpha <span class="pl-k">*</span> <span class="pl-c1">0.1</span>; i <span class="pl-k">&lt;</span> n; <span class="pl-k">++</span>i) {
    node <span class="pl-k">=</span> nodes[i];
    <span class="pl-smi">node</span>.<span class="pl-smi">vx</span> <span class="pl-k">-=</span> <span class="pl-smi">node</span>.<span class="pl-c1">x</span> <span class="pl-k">*</span> k;
    <span class="pl-smi">node</span>.<span class="pl-smi">vy</span> <span class="pl-k">-=</span> <span class="pl-smi">node</span>.<span class="pl-c1">y</span> <span class="pl-k">*</span> k;
  }
}</pre></div>
<p>Forces typically read the node’s current position ⟨<em>x</em>,<em>y</em>⟩ and then add to (or subtract from) the node’s velocity ⟨<em>vx</em>,<em>vy</em>⟩. However, forces may also “peek ahead” to the anticipated next position of the node, ⟨<em>x</em> + <em>vx</em>,<em>y</em> + <em>vy</em>⟩; this is necessary for resolving geometric constraints through <a href="https://en.wikipedia.org/wiki/Relaxation_(iterative_method)">iterative relaxation</a>. Forces may also modify the position directly, which is sometimes useful to avoid adding energy to the simulation, such as when recentering the simulation in the viewport.</p>
<p>Simulations typically compose multiple forces as desired. This module provides several for your enjoyment:</p>
<ul>
<li><a href="#centering">Centering</a></li>
<li><a href="#collision">Collision</a></li>
<li><a href="#links">Links</a></li>
<li><a href="#many-body">Many-Body</a></li>
<li><a href="#positioning">Positioning</a></li>
</ul>
<p>Forces may optionally implement <a href="#force_initialize"><em>force</em>.initialize</a> to receive the simulation’s array of nodes.</p>
<p><a name="user-content-_force" href="#_force">#</a> <i>force</i>(<i>alpha</i>) <a href="https://github.com/d3/d3-force/blob/master/src/simulation.js#L44" title="Source">&lt;&gt;</a></p>
<p>Applies this force, optionally observing the specified <em>alpha</em>. Typically, the force is applied to the array of nodes previously passed to <a href="#force_initialize"><em>force</em>.initialize</a>, however, some forces may apply to a subset of nodes, or behave differently. For example, <a href="#links">d3.forceLink</a> applies to the source and target of each link.</p>
<p><a name="user-content-force_initialize" href="#force_initialize">#</a> <i>force</i>.<b>initialize</b>(<i>nodes</i>) <a href="https://github.com/d3/d3-force/blob/master/src/simulation.js#L71" title="Source">&lt;&gt;</a></p>
<p>Assigns the array of <em>nodes</em> to this force. This method is called when a force is bound to a simulation via <a href="#simulation_force"><em>simulation</em>.force</a> and when the simulation’s nodes change via <a href="#simulation_nodes"><em>simulation</em>.nodes</a>. A force may perform necessary work during initialization, such as evaluating per-node parameters, to avoid repeatedly performing work during each application of the force.</p>
<h4><a href="#centering" aria-hidden="true" class="anchor" id="user-content-centering"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Centering</h4>
<p>The centering force translates nodes uniformly so that the mean position of all nodes (the center of mass if all nodes have equal weight) is at the given position ⟨<a href="#center_x"><em>x</em></a>,<a href="#center_y"><em>y</em></a>⟩. This force modifies the positions of nodes on each application; it does not modify velocities, as doing so would typically cause the nodes to overshoot and oscillate around the desired center. This force helps keeps nodes in the center of the viewport, and unlike the <a href="#positioning">positioning force</a>, it does not distort their relative positions.</p>
<p><a name="user-content-forceCenter" href="#forceCenter">#</a> d3.<b>forceCenter</b>([<i>x</i>, <i>y</i>]) <a href="https://github.com/d3/d3-force/blob/master/src/center.js#L1" title="Source">&lt;&gt;</a></p>
<p>Creates a new centering force with the specified <a href="#center_x"><em>x</em>-</a> and <a href="#center_y"><em>y</em>-</a> coordinates. If <em>x</em> and <em>y</em> are not specified, they default to ⟨0,0⟩.</p>
<p><a name="user-content-center_x" href="#center_x">#</a> <i>center</i>.<b>x</b>([<i>x</i>]) <a href="https://github.com/d3/d3-force/blob/master/src/center.js#L27" title="Source">&lt;&gt;</a></p>
<p>If <em>x</em> is specified, sets the <em>x</em>-coordinate of the centering position to the specified number and returns this force. If <em>x</em> is not specified, returns the current <em>x</em>-coordinate, which defaults to zero.</p>
<p><a name="user-content-center_y" href="#center_y">#</a> <i>center</i>.<b>y</b>([<i>y</i>]) <a href="https://github.com/d3/d3-force/blob/master/src/center.js#L31" title="Source">&lt;&gt;</a></p>
<p>If <em>y</em> is specified, sets the <em>y</em>-coordinate of the centering position to the specified number and returns this force. If <em>y</em> is not specified, returns the current <em>y</em>-coordinate, which defaults to zero.</p>
<h4><a href="#collision" aria-hidden="true" class="anchor" id="user-content-collision"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Collision</h4>
<p>The collision force treats nodes as circles with a given <a href="#collide_radius">radius</a>, rather than points, and prevents nodes from overlapping. More formally, two nodes <em>a</em> and <em>b</em> are separated so that the distance between <em>a</em> and <em>b</em> is at least <em>radius</em>(<em>a</em>) + <em>radius</em>(<em>b</em>). To reduce jitter, this is by default a “soft” constraint with a configurable <a href="#collide_strength">strength</a> and <a href="#collide_iterations">iteration count</a>.</p>
<p><a name="user-content-forceCollide" href="#forceCollide">#</a> d3.<b>forceCollide</b>([<i>radius</i>]) <a href="https://github.com/d3/d3-force/blob/master/src/collide.js" title="Source">&lt;&gt;</a></p>
<p>Creates a new circle collision force with the specified <a href="#collide_radius"><em>radius</em></a>. If <em>radius</em> is not specified, it defaults to the constant one for all nodes.</p>
<p><a name="user-content-collide_radius" href="#collide_radius">#</a> <i>collide</i>.<b>radius</b>([<i>radius</i>]) <a href="https://github.com/d3/d3-force/blob/master/src/collide.js#L86" title="Source">&lt;&gt;</a></p>
<p>If <em>radius</em> is specified, sets the radius accessor to the specified number or function, re-evaluates the radius accessor for each node, and returns this force. If <em>radius</em> is not specified, returns the current radius accessor, which defaults to:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">function</span> <span class="pl-en">radius</span>() {
  <span class="pl-k">return</span> <span class="pl-c1">1</span>;
}</pre></div>
<p>The radius accessor is invoked for each <a href="#simulation_nodes">node</a> in the simulation, being passed the <em>node</em> and its zero-based <em>index</em>. The resulting number is then stored internally, such that the radius of each node is only recomputed when the force is initialized or when this method is called with a new <em>radius</em>, and not on every application of the force.</p>
<p><a name="user-content-collide_strength" href="#collide_strength">#</a> <i>collide</i>.<b>strength</b>([<i>strength</i>]) <a href="https://github.com/d3/d3-force/blob/master/src/collide.js#L82" title="Source">&lt;&gt;</a></p>
<p>If <em>strength</em> is specified, sets the force strength to the specified number in the range [0,1] and returns this force. If <em>strength</em> is not specified, returns the current strength which defaults to 0.7.</p>
<p>Overlapping nodes are resolved through iterative relaxation. For each node, the other nodes that are anticipated to overlap at the next tick (using the anticipated positions ⟨<em>x</em> + <em>vx</em>,<em>y</em> + <em>vy</em>⟩) are determined; the node’s velocity is then modified to push the node out of each overlapping node. The change in velocity is dampened by the force’s strength such that the resolution of simultaneous overlaps can be blended together to find a stable solution.</p>
<p><a name="user-content-collide_iterations" href="#collide_iterations">#</a> <i>collide</i>.<b>iterations</b>([<i>iterations</i>]) <a href="https://github.com/d3/d3-force/blob/master/src/collide.js#L78" title="Source">&lt;&gt;</a></p>
<p>If <em>iterations</em> is specified, sets the number of iterations per application to the specified number and returns this force. If <em>iterations</em> is not specified, returns the current iteration count which defaults to 1. Increasing the number of iterations greatly increases the rigidity of the constraint and avoids partial overlap of nodes, but also increases the runtime cost to evaluate the force.</p>
<h4><a href="#links" aria-hidden="true" class="anchor" id="user-content-links"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Links</h4>
<p>The link force pushes linked nodes together or apart according to the desired <a href="#link_distance">link distance</a>. The strength of the force is proportional to the difference between the linked nodes’ distance and the target distance, similar to a spring force.</p>
<p><a name="user-content-forceLink" href="#forceLink">#</a> d3.<b>forceLink</b>([<i>links</i>]) <a href="https://github.com/d3/d3-force/blob/master/src/link.js" title="Source">&lt;&gt;</a></p>
<p>Creates a new link force with the specified <em>links</em> and default parameters. If <em>links</em> is not specified, it defaults to the empty array.</p>
<p><a name="user-content-link_links" href="#link_links">#</a> <i>link</i>.<b>links</b>([<i>links</i>]) <a href="https://github.com/d3/d3-force/blob/master/src/link.js#L92" title="Source">&lt;&gt;</a></p>
<p>If <em>links</em> is specified, sets the array of links associated with this force, recomputes the <a href="#link_distance">distance</a> and <a href="#link_strength">strength</a> parameters for each link, and returns this force. If <em>links</em> is not specified, returns the current array of links, which defaults to the empty array.</p>
<p>Each link is an object with the following properties:</p>
<ul>
<li><code>source</code> - the link’s source node; see <a href="#simulation_nodes"><em>simulation</em>.nodes</a></li>
<li><code>target</code> - the link’s target node; see <a href="#simulation_nodes"><em>simulation</em>.nodes</a></li>
<li><code>index</code> - the zero-based index into <em>links</em>, assigned by this method</li>
</ul>
<p>For convenience, a link’s source and target properties may be initialized using numeric or string identifiers rather than object references; see <a href="#link_id"><em>link</em>.id</a>. When the link force is <a href="#force_initialize">initialized</a> (or re-initialized, as when the nodes or links change), any <em>link</em>.source or <em>link</em>.target property which is <em>not</em> an object is replaced by an object reference to the corresponding <em>node</em> with the given identifier.</p>
<p>If the specified array of <em>links</em> is modified, such as when links are added to or removed from the simulation, this method must be called again with the new (or changed) array to notify the force of the change; the force does not make a defensive copy of the specified array.</p>
<p><a name="user-content-link_id" href="#link_id">#</a> <i>link</i>.<b>id</b>([<i>id</i>]) <a href="https://github.com/d3/d3-force/blob/master/src/link.js#L96" title="Source">&lt;&gt;</a></p>
<p>If <em>id</em> is specified, sets the node id accessor to the specified function and returns this force. If <em>id</em> is not specified, returns the current node id accessor, which defaults to the numeric <em>node</em>.index:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">function</span> <span class="pl-en">id</span>(<span class="pl-smi">d</span>) {
  <span class="pl-k">return</span> <span class="pl-smi">d</span>.<span class="pl-c1">index</span>;
}</pre></div>
<p>The default id accessor allows each link’s source and target to be specified as a zero-based index into the <a href="#simulation_nodes">nodes</a> array. For example:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">var</span> nodes <span class="pl-k">=</span> [
  {<span class="pl-s"><span class="pl-pds">"</span>id<span class="pl-pds">"</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>Alice<span class="pl-pds">"</span></span>},
  {<span class="pl-s"><span class="pl-pds">"</span>id<span class="pl-pds">"</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>Bob<span class="pl-pds">"</span></span>},
  {<span class="pl-s"><span class="pl-pds">"</span>id<span class="pl-pds">"</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>Carol<span class="pl-pds">"</span></span>}
];

<span class="pl-k">var</span> links <span class="pl-k">=</span> [
  {<span class="pl-s"><span class="pl-pds">"</span>source<span class="pl-pds">"</span></span><span class="pl-k">:</span> <span class="pl-c1">0</span>, <span class="pl-s"><span class="pl-pds">"</span>target<span class="pl-pds">"</span></span><span class="pl-k">:</span> <span class="pl-c1">1</span>}, <span class="pl-c"><span class="pl-c">//</span> Alice → Bob</span>
  {<span class="pl-s"><span class="pl-pds">"</span>source<span class="pl-pds">"</span></span><span class="pl-k">:</span> <span class="pl-c1">1</span>, <span class="pl-s"><span class="pl-pds">"</span>target<span class="pl-pds">"</span></span><span class="pl-k">:</span> <span class="pl-c1">2</span>} <span class="pl-c"><span class="pl-c">//</span> Bob → Carol</span>
];</pre></div>
<p>Now consider a different id accessor that returns a string:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">function</span> <span class="pl-en">id</span>(<span class="pl-smi">d</span>) {
  <span class="pl-k">return</span> <span class="pl-smi">d</span>.<span class="pl-c1">id</span>;
}</pre></div>
<p>With this accessor, you can use named sources and targets:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">var</span> nodes <span class="pl-k">=</span> [
  {<span class="pl-s"><span class="pl-pds">"</span>id<span class="pl-pds">"</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>Alice<span class="pl-pds">"</span></span>},
  {<span class="pl-s"><span class="pl-pds">"</span>id<span class="pl-pds">"</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>Bob<span class="pl-pds">"</span></span>},
  {<span class="pl-s"><span class="pl-pds">"</span>id<span class="pl-pds">"</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>Carol<span class="pl-pds">"</span></span>}
];

<span class="pl-k">var</span> links <span class="pl-k">=</span> [
  {<span class="pl-s"><span class="pl-pds">"</span>source<span class="pl-pds">"</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>Alice<span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>target<span class="pl-pds">"</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>Bob<span class="pl-pds">"</span></span>},
  {<span class="pl-s"><span class="pl-pds">"</span>source<span class="pl-pds">"</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>Bob<span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>target<span class="pl-pds">"</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>Carol<span class="pl-pds">"</span></span>}
];</pre></div>
<p>This is particularly useful when representing graphs in JSON, as JSON does not allow references. See <a href="http://bl.ocks.org/mbostock/f584aa36df54c451c94a9d0798caed35">this example</a>.</p>
<p>The id accessor is invoked for each node whenever the force is initialized, as when the <a href="#simulation_nodes">nodes</a> or <a href="#link_links">links</a> change, being passed the node and its zero-based index.</p>
<p><a name="user-content-link_distance" href="#link_distance">#</a> <i>link</i>.<b>distance</b>([<i>distance</i>]) <a href="https://github.com/d3/d3-force/blob/master/src/link.js#L108" title="Source">&lt;&gt;</a></p>
<p>If <em>distance</em> is specified, sets the distance accessor to the specified number or function, re-evaluates the distance accessor for each link, and returns this force. If <em>distance</em> is not specified, returns the current distance accessor, which defaults to:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">function</span> <span class="pl-en">distance</span>() {
  <span class="pl-k">return</span> <span class="pl-c1">30</span>;
}</pre></div>
<p>The distance accessor is invoked for each <a href="#link_links">link</a>, being passed the <em>link</em> and its zero-based <em>index</em>. The resulting number is then stored internally, such that the distance of each link is only recomputed when the force is initialized or when this method is called with a new <em>distance</em>, and not on every application of the force.</p>
<p><a name="user-content-link_strength" href="#link_strength">#</a> <i>link</i>.<b>strength</b>([<i>strength</i>]) <a href="https://github.com/d3/d3-force/blob/master/src/link.js#L104" title="Source">&lt;&gt;</a></p>
<p>If <em>strength</em> is specified, sets the strength accessor to the specified number or function, re-evaluates the strength accessor for each link, and returns this force. If <em>strength</em> is not specified, returns the current strength accessor, which defaults to:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">function</span> <span class="pl-en">strength</span>(<span class="pl-smi">link</span>) {
  <span class="pl-k">return</span> <span class="pl-c1">1</span> <span class="pl-k">/</span> <span class="pl-c1">Math</span>.<span class="pl-c1">min</span>(<span class="pl-en">count</span>(<span class="pl-smi">link</span>.<span class="pl-c1">source</span>), <span class="pl-en">count</span>(<span class="pl-smi">link</span>.<span class="pl-c1">target</span>));
}</pre></div>
<p>Where <em>count</em>(<em>node</em>) is a function that returns the number of links with the given node as a source or target. This default was chosen because it automatically reduces the strength of links connected to heavily-connected nodes, improving stability.</p>
<p>The strength accessor is invoked for each <a href="#link_links">link</a>, being passed the <em>link</em> and its zero-based <em>index</em>. The resulting number is then stored internally, such that the strength of each link is only recomputed when the force is initialized or when this method is called with a new <em>strength</em>, and not on every application of the force.</p>
<p><a name="user-content-link_iterations" href="#link_iterations">#</a> <i>link</i>.<b>iterations</b>([<i>iterations</i>]) <a href="https://github.com/d3/d3-force/blob/master/src/link.js#L100" title="Source">&lt;&gt;</a></p>
<p>If <em>iterations</em> is specified, sets the number of iterations per application to the specified number and returns this force. If <em>iterations</em> is not specified, returns the current iteration count which defaults to 1. Increasing the number of iterations greatly increases the rigidity of the constraint and is useful for <a href="http://bl.ocks.org/mbostock/1b64ec067fcfc51e7471d944f51f1611">complex structures such as lattices</a>, but also increases the runtime cost to evaluate the force.</p>
<h4><a href="#many-body" aria-hidden="true" class="anchor" id="user-content-many-body"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Many-Body</h4>
<p>The many-body (or <em>n</em>-body) force applies mutually amongst all <a href="#simulation_nodes">nodes</a>. It can be used to simulate gravity (attraction) if the <a href="#manyBody_strength">strength</a> is positive, or electrostatic charge (repulsion) if the strength is negative. This implementation uses quadtrees and the <a href="https://en.wikipedia.org/wiki/Barnes%E2%80%93Hut_simulation">Barnes–Hut approximation</a> to greatly improve performance; the accuracy can be customized using the <a href="#manyBody_theta">theta</a> parameter.</p>
<p>Unlike links, which only affect two linked nodes, the charge force is global: every node affects every other node, even if they are on disconnected subgraphs.</p>
<p><a name="user-content-forceManyBody" href="#forceManyBody">#</a> d3.<b>forceManyBody</b>() <a href="https://github.com/d3/d3-force/blob/master/src/manyBody.js" title="Source">&lt;&gt;</a></p>
<p>Creates a new many-body force with the default parameters.</p>
<p><a name="user-content-manyBody_strength" href="#manyBody_strength">#</a> <i>manyBody</i>.<b>strength</b>([<i>strength</i>]) <a href="https://github.com/d3/d3-force/blob/master/src/manyBody.js#L97" title="Source">&lt;&gt;</a></p>
<p>If <em>strength</em> is specified, sets the strength accessor to the specified number or function, re-evaluates the strength accessor for each node, and returns this force. A positive value causes nodes to attract each other, similar to gravity, while a negative value causes nodes to repel each other, similar to electrostatic charge. If <em>strength</em> is not specified, returns the current strength accessor, which defaults to:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">function</span> <span class="pl-en">strength</span>() {
  <span class="pl-k">return</span> <span class="pl-k">-</span><span class="pl-c1">30</span>;
}</pre></div>
<p>The strength accessor is invoked for each <a href="#simulation_nodes">node</a> in the simulation, being passed the <em>node</em> and its zero-based <em>index</em>. The resulting number is then stored internally, such that the strength of each node is only recomputed when the force is initialized or when this method is called with a new <em>strength</em>, and not on every application of the force.</p>
<p><a name="user-content-manyBody_theta" href="#manyBody_theta">#</a> <i>manyBody</i>.<b>theta</b>([<i>theta</i>]) <a href="https://github.com/d3/d3-force/blob/master/src/manyBody.js#L109" title="Source">&lt;&gt;</a></p>
<p>If <em>theta</em> is specified, sets the Barnes–Hut approximation criterion to the specified number and returns this force. If <em>theta</em> is not specified, returns the current value, which defaults to 0.9.</p>
<p>To accelerate computation, this force implements the <a href="http://en.wikipedia.org/wiki/Barnes%E2%80%93Hut_simulation">Barnes–Hut approximation</a> which takes O(<em>n</em> log <em>n</em>) per application where <em>n</em> is the number of <a href="#simulation_nodes">nodes</a>. For each application, a <a href="https://github.com/d3/d3-quadtree">quadtree</a> stores the current node positions; then for each node, the combined force of all other nodes on the given node is computed. For a cluster of nodes that is far away, the charge force can be approximated by treating the cluster as a single, larger node. The <em>theta</em> parameter determines the accuracy of the approximation: if the ratio <em>w</em> / <em>l</em> of the width <em>w</em> of the quadtree cell to the distance <em>l</em> from the node to the cell’s center of mass is less than <em>theta</em>, all nodes in the given cell are treated as a single node rather than individually.</p>
<p><a name="user-content-manyBody_distanceMin" href="#manyBody_distanceMin">#</a> <i>manyBody</i>.<b>distanceMin</b>([<i>distance</i>]) <a href="https://github.com/d3/d3-force/blob/master/src/manyBody.js#L101" title="Source">&lt;&gt;</a></p>
<p>If <em>distance</em> is specified, sets the minimum distance between nodes over which this force is considered. If <em>distance</em> is not specified, returns the current minimum distance, which defaults to 1. A minimum distance establishes an upper bound on the strength of the force between two nearby nodes, avoiding instability. In particular, it avoids an infinitely-strong force if two nodes are exactly coincident; in this case, the direction of the force is random.</p>
<p><a name="user-content-manyBody_distanceMax" href="#manyBody_distanceMax">#</a> <i>manyBody</i>.<b>distanceMax</b>([<i>distance</i>]) <a href="https://github.com/d3/d3-force/blob/master/src/manyBody.js#L105" title="Source">&lt;&gt;</a></p>
<p>If <em>distance</em> is specified, sets the maximum distance between nodes over which this force is considered. If <em>distance</em> is not specified, returns the current maximum distance, which defaults to infinity. Specifying a finite maximum distance improves performance and produces a more localized layout.</p>
<h4><a href="#positioning" aria-hidden="true" class="anchor" id="user-content-positioning"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Positioning</h4>
<p>The <a href="#forceX"><em>x</em></a>- and <a href="#forceY"><em>y</em></a>-positioning forces push nodes towards a desired position along the given dimension with a configurable strength. The <a href="#forceRadial"><em>radial</em></a> force is similar, except it pushes nodes towards the closest point on a given circle. The strength of the force is proportional to the one-dimensional distance between the node’s position and the target position. While these forces can be used to position individual nodes, they are intended primarily for global forces that apply to all (or most) nodes.</p>
<p><a name="user-content-forceX" href="#forceX">#</a> d3.<b>forceX</b>([<i>x</i>]) <a href="https://github.com/d3/d3-force/blob/master/src/x.js" title="Source">&lt;&gt;</a></p>
<p>Creates a new positioning force along the <em>x</em>-axis towards the given position <a href="#x_x"><em>x</em></a>. If <em>x</em> is not specified, it defaults to 0.</p>
<p><a name="user-content-x_strength" href="#x_strength">#</a> <i>x</i>.<b>strength</b>([<i>strength</i>]) <a href="https://github.com/d3/d3-force/blob/master/src/x.js#L32" title="Source">&lt;&gt;</a></p>
<p>If <em>strength</em> is specified, sets the strength accessor to the specified number or function, re-evaluates the strength accessor for each node, and returns this force. The <em>strength</em> determines how much to increment the node’s <em>x</em>-velocity: (<a href="#x_x"><em>x</em></a> - <em>node</em>.x) × <em>strength</em>. For example, a value of 0.1 indicates that the node should move a tenth of the way from its current <em>x</em>-position to the target <em>x</em>-position with each application. Higher values moves nodes more quickly to the target position, often at the expense of other forces or constraints. A value outside the range [0,1] is not recommended.</p>
<p>If <em>strength</em> is not specified, returns the current strength accessor, which defaults to:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">function</span> <span class="pl-en">strength</span>() {
  <span class="pl-k">return</span> <span class="pl-c1">0.1</span>;
}</pre></div>
<p>The strength accessor is invoked for each <a href="#simulation_nodes">node</a> in the simulation, being passed the <em>node</em> and its zero-based <em>index</em>. The resulting number is then stored internally, such that the strength of each node is only recomputed when the force is initialized or when this method is called with a new <em>strength</em>, and not on every application of the force.</p>
<p><a name="user-content-x_x" href="#x_x">#</a> <i>x</i>.<b>x</b>([<i>x</i>]) <a href="https://github.com/d3/d3-force/blob/master/src/x.js#L36" title="Source">&lt;&gt;</a></p>
<p>If <em>x</em> is specified, sets the <em>x</em>-coordinate accessor to the specified number or function, re-evaluates the <em>x</em>-accessor for each node, and returns this force. If <em>x</em> is not specified, returns the current <em>x</em>-accessor, which defaults to:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">function</span> <span class="pl-en">x</span>() {
  <span class="pl-k">return</span> <span class="pl-c1">0</span>;
}</pre></div>
<p>The <em>x</em>-accessor is invoked for each <a href="#simulation_nodes">node</a> in the simulation, being passed the <em>node</em> and its zero-based <em>index</em>. The resulting number is then stored internally, such that the target <em>x</em>-coordinate of each node is only recomputed when the force is initialized or when this method is called with a new <em>x</em>, and not on every application of the force.</p>
<p><a name="user-content-forceY" href="#forceY">#</a> d3.<b>forceY</b>([<i>y</i>]) <a href="https://github.com/d3/d3-force/blob/master/src/y.js" title="Source">&lt;&gt;</a></p>
<p>Creates a new positioning force along the <em>y</em>-axis towards the given position <a href="#y_y"><em>y</em></a>. If <em>y</em> is not specified, it defaults to 0.</p>
<p><a name="user-content-y_strength" href="#y_strength">#</a> <i>y</i>.<b>strength</b>([<i>strength</i>]) <a href="https://github.com/d3/d3-force/blob/master/src/y.js#L32" title="Source">&lt;&gt;</a></p>
<p>If <em>strength</em> is specified, sets the strength accessor to the specified number or function, re-evaluates the strength accessor for each node, and returns this force. The <em>strength</em> determines how much to increment the node’s <em>y</em>-velocity: (<a href="#y_y"><em>y</em></a> - <em>node</em>.y) × <em>strength</em>. For example, a value of 0.1 indicates that the node should move a tenth of the way from its current <em>y</em>-position to the target <em>y</em>-position with each application. Higher values moves nodes more quickly to the target position, often at the expense of other forces or constraints. A value outside the range [0,1] is not recommended.</p>
<p>If <em>strength</em> is not specified, returns the current strength accessor, which defaults to:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">function</span> <span class="pl-en">strength</span>() {
  <span class="pl-k">return</span> <span class="pl-c1">0.1</span>;
}</pre></div>
<p>The strength accessor is invoked for each <a href="#simulation_nodes">node</a> in the simulation, being passed the <em>node</em> and its zero-based <em>index</em>. The resulting number is then stored internally, such that the strength of each node is only recomputed when the force is initialized or when this method is called with a new <em>strength</em>, and not on every application of the force.</p>
<p><a name="user-content-y_y" href="#y_y">#</a> <i>y</i>.<b>y</b>([<i>y</i>]) <a href="https://github.com/d3/d3-force/blob/master/src/y.js#L36" title="Source">&lt;&gt;</a></p>
<p>If <em>y</em> is specified, sets the <em>y</em>-coordinate accessor to the specified number or function, re-evaluates the <em>y</em>-accessor for each node, and returns this force. If <em>y</em> is not specified, returns the current <em>y</em>-accessor, which defaults to:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">function</span> <span class="pl-en">y</span>() {
  <span class="pl-k">return</span> <span class="pl-c1">0</span>;
}</pre></div>
<p>The <em>y</em>-accessor is invoked for each <a href="#simulation_nodes">node</a> in the simulation, being passed the <em>node</em> and its zero-based <em>index</em>. The resulting number is then stored internally, such that the target <em>y</em>-coordinate of each node is only recomputed when the force is initialized or when this method is called with a new <em>y</em>, and not on every application of the force.</p>
<p><a name="user-content-forceRadial" href="#forceRadial">#</a> d3.<b>forceRadial</b>(<i>radius</i>[, <i>x</i>][, <i>y</i>]) <a href="https://github.com/d3/d3-force/blob/master/src/radial.js" title="Source">&lt;&gt;</a></p>
<p><a href="https://bl.ocks.org/mbostock/cd98bf52e9067e26945edd95e8cf6ef9"><img alt="Radial Force" src="https://raw.githubusercontent.com/d3/d3-force/master/img/radial.png" width="420" height="219" style="max-width:100%;"></a></p>
<p>Creates a new positioning force towards a circle of the specified <a href="#radial_radius"><em>radius</em></a> centered at ⟨<a href="#radial_x"><em>x</em></a>,<a href="#radial_y"><em>y</em></a>⟩. If <em>x</em> and <em>y</em> are not specified, they default to ⟨0,0⟩.</p>
<p><a name="user-content-radial_strength" href="#radial_strength">#</a> <i>radial</i>.<b>strength</b>([<i>strength</i>]) <a href="https://github.com/d3/d3-force/blob/master/src/radial.js" title="Source">&lt;&gt;</a></p>
<p>If <em>strength</em> is specified, sets the strength accessor to the specified number or function, re-evaluates the strength accessor for each node, and returns this force. The <em>strength</em> determines how much to increment the node’s <em>x</em>- and <em>y</em>-velocity. For example, a value of 0.1 indicates that the node should move a tenth of the way from its current position to the closest point on the circle with each application. Higher values moves nodes more quickly to the target position, often at the expense of other forces or constraints. A value outside the range [0,1] is not recommended.</p>
<p>If <em>strength</em> is not specified, returns the current strength accessor, which defaults to:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">function</span> <span class="pl-en">strength</span>() {
  <span class="pl-k">return</span> <span class="pl-c1">0.1</span>;
}</pre></div>
<p>The strength accessor is invoked for each <a href="#simulation_nodes">node</a> in the simulation, being passed the <em>node</em> and its zero-based <em>index</em>. The resulting number is then stored internally, such that the strength of each node is only recomputed when the force is initialized or when this method is called with a new <em>strength</em>, and not on every application of the force.</p>
<p><a name="user-content-radial_radius" href="#radial_radius">#</a> <i>radial</i>.<b>radius</b>([<i>radius</i>]) <a href="https://github.com/d3/d3-force/blob/master/src/radial.js" title="Source">&lt;&gt;</a></p>
<p>If <em>radius</em> is specified, sets the circle <em>radius</em> to the specified number or function, re-evaluates the <em>radius</em> accessor for each node, and returns this force. If <em>radius</em> is not specified, returns the current <em>radius</em> accessor.</p>
<p>The <em>radius</em> accessor is invoked for each <a href="#simulation_nodes">node</a> in the simulation, being passed the <em>node</em> and its zero-based <em>index</em>. The resulting number is then stored internally, such that the target radius of each node is only recomputed when the force is initialized or when this method is called with a new <em>radius</em>, and not on every application of the force.</p>
<p><a name="user-content-radial_x" href="#radial_x">#</a> <i>radial</i>.<b>x</b>([<i>x</i>]) <a href="https://github.com/d3/d3-force/blob/master/src/radial.js" title="Source">&lt;&gt;</a></p>
<p>If <em>x</em> is specified, sets the <em>x</em>-coordinate of the circle center to the specified number and returns this force. If <em>x</em> is not specified, returns the current <em>x</em>-coordinate of the center, which defaults to zero.</p>
<p><a name="user-content-radial_y" href="#radial_y">#</a> <i>radial</i>.<b>y</b>([<i>y</i>]) <a href="https://github.com/d3/d3-force/blob/master/src/radial.js" title="Source">&lt;&gt;</a></p>
<p>If <em>y</em> is specified, sets the <em>y</em>-coordinate of the circle center to the specified number and returns this force. If <em>y</em> is not specified, returns the current <em>y</em>-coordinate of the center, which defaults to zero.</p>
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
      <li class="mr-3">&copy; 2018 <span title="0.33510s from unicorn-2657157768-w0cg5">GitHub</span>, Inc.</li>
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


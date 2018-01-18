





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
  
  <title>d3-selection/README.md at master · d3/d3-selection</title>
  <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
  <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
  <meta property="fb:app_id" content="1401488693436528">

    
    <meta content="https://avatars3.githubusercontent.com/u/1562726?s=400&amp;v=4" property="og:image" /><meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="d3/d3-selection" property="og:title" /><meta content="https://github.com/d3/d3-selection" property="og:url" /><meta content="d3-selection - Transform the DOM by selecting elements and joining to data." property="og:description" />

  <link rel="assets" href="https://assets-cdn.github.com/">
  <link rel="web-socket" href="wss://live.github.com/_sockets/VjI6MjM0MjAxNjIzOjZjMmNhM2Y3Yzc4MTU0NjgyY2NkNzY4ZWY2NTg3Nzk3YjExYzc4YmNiN2FlZDY1NTE5Y2RkNDU4M2ExMzBmOTY=--d0cdeb374e75c08b56aea28b41367adcd141c914">
  <meta name="pjax-timeout" content="1000">
  <link rel="sudo-modal" href="/sessions/sudo_modal">
  <meta name="request-id" content="FC26:1FA0E:11A4F4B:199D1E9:5A603ED0" data-pjax-transient>
  

  <meta name="selected-link" value="repo_source" data-pjax-transient>

    <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
  <meta name="google-site-verification" content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA">
  <meta name="google-site-verification" content="GXs5KoUUkNCoaAZn7wPN-t01Pywp9M3sEjnt_3_ZWPc">
    <meta name="google-analytics" content="UA-3769691-2">

<meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="https://collector.githubapp.com/github-external/browser_event" name="octolytics-event-url" /><meta content="FC26:1FA0E:11A4F4B:199D1E9:5A603ED0" name="octolytics-dimension-request_id" /><meta content="sea" name="octolytics-dimension-region_edge" /><meta content="iad" name="octolytics-dimension-region_render" /><meta content="16659379" name="octolytics-actor-id" /><meta content="xswei" name="octolytics-actor-login" /><meta content="72a8b786cd27412ba348c71058cf2aed3e8f8772266e5c157980395250fb923d" name="octolytics-actor-hash" />
<meta content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-pjax-transient="true" name="analytics-location" />




  <meta class="js-ga-set" name="dimension1" content="Logged In">


  

      <meta name="hostname" content="github.com">
  <meta name="user-login" content="xswei">

      <meta name="expected-hostname" content="github.com">
    <meta name="js-proxy-site-detection-payload" content="ZDU4OGQwZTA0NThkYjRhYjJlYTFiMTdlZWViYWIxNTUzNDMzODViNWJjMWNiN2ZhYjI5YWZiNGZiNDcyMWNkMHx7InJlbW90ZV9hZGRyZXNzIjoiMjIwLjE4MS4xNzEuMTI1IiwicmVxdWVzdF9pZCI6IkZDMjY6MUZBMEU6MTFBNEY0QjoxOTlEMUU5OjVBNjAzRUQwIiwidGltZXN0YW1wIjoxNTE2MjU2OTc4LCJob3N0IjoiZ2l0aHViLmNvbSJ9">

    <meta name="enabled-features" content="UNIVERSE_BANNER,FREE_TRIALS">

  <meta name="html-safe-nonce" content="95ac36701972faaa3306c820d3f61fe703aeac54">

  <meta http-equiv="x-pjax-version" content="c0275ff3857f879afa7c0ef3fbc951b4">
  

      <link href="https://github.com/d3/d3-selection/commits/master.atom" rel="alternate" title="Recent Commits to d3-selection:master" type="application/atom+xml">

  <meta name="description" content="d3-selection - Transform the DOM by selecting elements and joining to data.">
  <meta name="go-import" content="github.com/d3/d3-selection git https://github.com/d3/d3-selection.git">

  <meta content="1562726" name="octolytics-dimension-user_id" /><meta content="d3" name="octolytics-dimension-user_login" /><meta content="35446456" name="octolytics-dimension-repository_id" /><meta content="d3/d3-selection" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="35446456" name="octolytics-dimension-repository_network_root_id" /><meta content="d3/d3-selection" name="octolytics-dimension-repository_network_root_nwo" /><meta content="false" name="octolytics-dimension-repository_explore_github_marketplace_ci_cta_shown" />


    <link rel="canonical" href="https://github.com/d3/d3-selection/blob/master/README.md" data-pjax-transient>


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
  <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/d3/d3-selection/search" class="js-site-search-form" data-scoped-search-url="/d3/d3-selection/search" data-unscoped-search-url="/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <label class="form-control header-search-wrapper js-chromeless-input-container">
        <a href="/d3/d3-selection/blob/master/README.md" class="header-search-scope no-underline">This repository</a>
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
    <span title="d3/d3-selection">This repository</span>
  </div>
    <a class="dropdown-item" href="/d3/d3-selection/issues/new" data-ga-click="Header, create new issue">
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

        <li><!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/logout" class="logout-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="6+c0yUXe8Ng1uieB6dxtO019c/uCPFbYhy1DocIgSRR1gbC8DtlEVE7q9QEeTxWLDjGOrtrEoBA1WXwDg4hIag==" /></div>
          <button type="submit" class="dropdown-item dropdown-signout" data-ga-click="Header, sign out, icon:logout">
            Sign out
          </button>
        </form></li>
      </ul>
    </details>
  </li>
</ul>


        <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/logout" class="sr-only right-0" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="LPpdWjpcwQH+MGcMEhKCeZch6gjfkuRd3tEC/FpNv3CynNkvcVt1jYVgtYzlgfrJ1G0XXYdqEpVspT1eG+W+Dg==" /></div>
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
        <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="Pl8PKRYFRK4BiGsZg99hpdKu+6+HQERTep4TB/ld/y1Ttkw58cT26DpX7ZPZ5ffeUDXWidm9emFYZS1UkgDzYg==" /></div>      <input class="form-control" id="repository_id" name="repository_id" type="hidden" value="35446456" />

        <div class="select-menu js-menu-container js-select-menu">
          <a href="/d3/d3-selection/subscription"
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
            href="/d3/d3-selection/watchers"
            aria-label="31 users are watching this repository">
            31
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
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/d3/d3-selection/unstar" class="starred js-social-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="cuKtpDs5eoshDhUHLr/ze3aiRy2VhKpzNbheTEuA3O+DbQvZuneoQg59dYblVm0sA5wKUGhSdgu5FBjyJqhF5A==" /></div>
      <input type="hidden" name="context" value="repository"></input>
      <button
        type="submit"
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Unstar this repository" title="Unstar d3/d3-selection"
        data-ga-click="Repository, click unstar button, action:blob#show; text:Unstar">
        <svg aria-hidden="true" class="octicon octicon-star" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"/></svg>
        Unstar
      </button>
        <a class="social-count js-social-count" href="/d3/d3-selection/stargazers"
           aria-label="202 users starred this repository">
          202
        </a>
</form>
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/d3/d3-selection/star" class="unstarred js-social-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="EjdjAzVmsMf2BGOKaq6dw8CHrXTeBGiRkLmR/ouZ8RvrRJjfeWety1ATs7auusnvYngCXjGJZmUC2LMuVqOOuw==" /></div>
      <input type="hidden" name="context" value="repository"></input>
      <button
        type="submit"
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Star this repository" title="Star d3/d3-selection"
        data-ga-click="Repository, click star button, action:blob#show; text:Star">
        <svg aria-hidden="true" class="octicon octicon-star" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"/></svg>
        Star
      </button>
        <a class="social-count js-social-count" href="/d3/d3-selection/stargazers"
           aria-label="202 users starred this repository">
          202
        </a>
</form>  </div>

  </li>

  <li>
          <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/d3/d3-selection/fork" class="btn-with-count" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="PBDfSencJhLWh2LJrwMjR8R5Q5OZj3SZzIW4Wk18bR3onr++End5HJgGk6bfboUQm/UnJSyR/aJQqwFx8VQGig==" /></div>
            <button
                type="submit"
                class="btn btn-sm btn-with-count"
                data-ga-click="Repository, show fork modal, action:blob#show; text:Fork"
                title="Fork your own copy of d3/d3-selection to your account"
                aria-label="Fork your own copy of d3/d3-selection to your account">
              <svg aria-hidden="true" class="octicon octicon-repo-forked" height="16" version="1.1" viewBox="0 0 10 16" width="10"><path fill-rule="evenodd" d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
              Fork
            </button>
</form>
    <a href="/d3/d3-selection/network" class="social-count"
       aria-label="154 users forked this repository">
      154
    </a>
  </li>
</ul>

      <h1 class="public ">
  <svg aria-hidden="true" class="octicon octicon-repo" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
  <span class="author" itemprop="author"><a href="/d3" class="url fn" rel="author">d3</a></span><!--
--><span class="path-divider">/</span><!--
--><strong itemprop="name"><a href="/d3/d3-selection" data-pjax="#js-repo-pjax-container">d3-selection</a></strong>

</h1>

    </div>
    
<nav class="reponav js-repo-nav js-sidenav-container-pjax container"
     itemscope
     itemtype="http://schema.org/BreadcrumbList"
     role="navigation"
     data-pjax="#js-repo-pjax-container">

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/d3/d3-selection" class="js-selected-navigation-item selected reponav-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches repo_packages /d3/d3-selection" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-code" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z"/></svg>
      <span itemprop="name">Code</span>
      <meta itemprop="position" content="1">
</a>  </span>

    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a href="/d3/d3-selection/issues" class="js-selected-navigation-item reponav-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /d3/d3-selection/issues" itemprop="url">
        <svg aria-hidden="true" class="octicon octicon-issue-opened" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"/></svg>
        <span itemprop="name">Issues</span>
        <span class="Counter">10</span>
        <meta itemprop="position" content="2">
</a>    </span>

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/d3/d3-selection/pulls" class="js-selected-navigation-item reponav-item" data-hotkey="g p" data-selected-links="repo_pulls /d3/d3-selection/pulls" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-git-pull-request" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M11 11.28V5c-.03-.78-.34-1.47-.94-2.06C9.46 2.35 8.78 2.03 8 2H7V0L4 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0 0 10 15a1.993 1.993 0 0 0 1-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zM4 3c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v6.56A1.993 1.993 0 0 0 2 15a1.993 1.993 0 0 0 1-3.72V4.72c.59-.34 1-.98 1-1.72zm-.8 10c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
      <span itemprop="name">Pull requests</span>
      <span class="Counter">2</span>
      <meta itemprop="position" content="3">
</a>  </span>




  <a href="/d3/d3-selection/pulse" class="js-selected-navigation-item reponav-item" data-selected-links="repo_graphs repo_contributors dependency_graph pulse /d3/d3-selection/pulse">
    <svg aria-hidden="true" class="octicon octicon-graph" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M16 14v1H0V0h1v14h15zM5 13H3V8h2v5zm4 0H7V3h2v10zm4 0h-2V6h2v7z"/></svg>
    Insights
</a>

</nav>


  </div>

<div class="container new-discussion-timeline experiment-repo-nav ">
  <div class="repository-content ">

    
  <a href="/d3/d3-selection/blob/dba77502ad4659d7e24fcac984cb93a01036d67c/README.md" class="d-none js-permalink-shortcut" data-hotkey="y">Permalink</a>

  <!-- blob contrib key: blob_contributors:v21:4e2c8b231aae07e7b57b7a4bb354ecfc -->

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
               href="/d3/d3-selection/blob/context/README.md"
               data-name="context"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                context
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/d3/d3-selection/blob/generic-traversal/README.md"
               data-name="generic-traversal"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                generic-traversal
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/d3/d3-selection/blob/master/README.md"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                master
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/d3/d3-selection/blob/selectData/README.md"
               data-name="selectData"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                selectData
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/d3/d3-selection/blob/umd/README.md"
               data-name="umd"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                umd
              </span>
            </a>
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-selection/tree/v1.2.0/README.md"
              data-name="v1.2.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.2.0">
                v1.2.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-selection/tree/v1.1.0/README.md"
              data-name="v1.1.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.1.0">
                v1.1.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-selection/tree/v1.0.6/README.md"
              data-name="v1.0.6"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.6">
                v1.0.6
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-selection/tree/v1.0.5/README.md"
              data-name="v1.0.5"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.5">
                v1.0.5
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-selection/tree/v1.0.4/README.md"
              data-name="v1.0.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.4">
                v1.0.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-selection/tree/v1.0.3/README.md"
              data-name="v1.0.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.3">
                v1.0.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-selection/tree/v1.0.2/README.md"
              data-name="v1.0.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.2">
                v1.0.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-selection/tree/v1.0.1/README.md"
              data-name="v1.0.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.1">
                v1.0.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-selection/tree/v1.0.0/README.md"
              data-name="v1.0.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.0">
                v1.0.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-selection/tree/v0.9.0/README.md"
              data-name="v0.9.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.9.0">
                v0.9.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-selection/tree/v0.8.0/README.md"
              data-name="v0.8.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.8.0">
                v0.8.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-selection/tree/v0.7.3/README.md"
              data-name="v0.7.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.7.3">
                v0.7.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-selection/tree/v0.7.2/README.md"
              data-name="v0.7.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.7.2">
                v0.7.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-selection/tree/v0.7.1/README.md"
              data-name="v0.7.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.7.1">
                v0.7.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-selection/tree/v0.7.0/README.md"
              data-name="v0.7.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.7.0">
                v0.7.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-selection/tree/v0.6.12/README.md"
              data-name="v0.6.12"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.6.12">
                v0.6.12
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-selection/tree/v0.6.11/README.md"
              data-name="v0.6.11"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.6.11">
                v0.6.11
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-selection/tree/v0.6.10/README.md"
              data-name="v0.6.10"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.6.10">
                v0.6.10
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-selection/tree/v0.6.9/README.md"
              data-name="v0.6.9"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.6.9">
                v0.6.9
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-selection/tree/v0.6.8/README.md"
              data-name="v0.6.8"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.6.8">
                v0.6.8
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-selection/tree/v0.6.7/README.md"
              data-name="v0.6.7"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.6.7">
                v0.6.7
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-selection/tree/v0.6.6/README.md"
              data-name="v0.6.6"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.6.6">
                v0.6.6
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-selection/tree/v0.6.5/README.md"
              data-name="v0.6.5"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.6.5">
                v0.6.5
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-selection/tree/v0.6.3/README.md"
              data-name="v0.6.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.6.3">
                v0.6.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-selection/tree/v0.6.2/README.md"
              data-name="v0.6.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.6.2">
                v0.6.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-selection/tree/v0.6.1/README.md"
              data-name="v0.6.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.6.1">
                v0.6.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-selection/tree/v0.6.0/README.md"
              data-name="v0.6.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.6.0">
                v0.6.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-selection/tree/v0.5.1/README.md"
              data-name="v0.5.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.5.1">
                v0.5.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-selection/tree/v0.5.0/README.md"
              data-name="v0.5.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.5.0">
                v0.5.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-selection/tree/v0.4.12/README.md"
              data-name="v0.4.12"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.4.12">
                v0.4.12
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-selection/tree/v0.4.11/README.md"
              data-name="v0.4.11"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.4.11">
                v0.4.11
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-selection/tree/v0.4.10/README.md"
              data-name="v0.4.10"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.4.10">
                v0.4.10
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-selection/tree/v0.4.9/README.md"
              data-name="v0.4.9"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.4.9">
                v0.4.9
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-selection/tree/v0.4.8/README.md"
              data-name="v0.4.8"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.4.8">
                v0.4.8
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-selection/tree/v0.4.7/README.md"
              data-name="v0.4.7"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.4.7">
                v0.4.7
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-selection/tree/v0.4.6/README.md"
              data-name="v0.4.6"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.4.6">
                v0.4.6
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-selection/tree/v0.4.5/README.md"
              data-name="v0.4.5"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.4.5">
                v0.4.5
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-selection/tree/v0.4.4/README.md"
              data-name="v0.4.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.4.4">
                v0.4.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-selection/tree/v0.4.3/README.md"
              data-name="v0.4.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.4.3">
                v0.4.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-selection/tree/v0.4.2/README.md"
              data-name="v0.4.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.4.2">
                v0.4.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-selection/tree/v0.4.1/README.md"
              data-name="v0.4.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.4.1">
                v0.4.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-selection/tree/v0.4.0/README.md"
              data-name="v0.4.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.4.0">
                v0.4.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-selection/tree/v0.3.0/README.md"
              data-name="v0.3.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.3.0">
                v0.3.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-selection/tree/v0.2.0/README.md"
              data-name="v0.2.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.2.0">
                v0.2.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-selection/tree/v0.1.0/README.md"
              data-name="v0.1.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.1.0">
                v0.1.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-selection/tree/v0.0.1/README.md"
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
      <a href="/d3/d3-selection/find/master"
            class="js-pjax-capture-input btn btn-sm BtnGroup-item"
            data-pjax
            data-hotkey="t">
        Find file
      </a>
      <button aria-label="Copy file path to clipboard" class="js-zeroclipboard btn btn-sm BtnGroup-item tooltipped tooltipped-s" data-copied-hint="Copied!" type="button">Copy path</button>
    </div>
    <div class="breadcrumb js-zeroclipboard-target">
      <span class="repo-root js-repo-root"><span class="js-path-segment"><a href="/d3/d3-selection"><span>d3-selection</span></a></span></span><span class="separator">/</span><strong class="final-path">README.md</strong>
    </div>
  </div>


  
  <div class="commit-tease">
      <span class="float-right">
        <a class="commit-tease-sha" href="/d3/d3-selection/commit/efe498aa99e6bf79f72ee88e97a2f30644c3c56a" data-pjax>
          efe498a
        </a>
        <relative-time datetime="2017-10-30T22:52:06Z">Oct 30, 2017</relative-time>
      </span>
      <div>
        <img alt="@mbostock" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/230541?s=40&amp;v=4" width="20" />
        <a href="/mbostock" class="user-mention" rel="contributor">mbostock</a>
          <a href="/d3/d3-selection/commit/efe498aa99e6bf79f72ee88e97a2f30644c3c56a" class="message" data-pjax="true" title="Expose clientPoint.">Expose clientPoint.</a>
      </div>

    <div class="commit-tease-contributors">
      <button type="button" class="btn-link muted-link contributors-toggle" data-facebox="#blob_contributors_box">
        <strong>6</strong>
         contributors
      </button>
          <a class="avatar-link tooltipped tooltipped-s" aria-label="mbostock" href="/d3/d3-selection/commits/master/README.md?author=mbostock"><img alt="@mbostock" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/230541?s=40&amp;v=4" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="lyrachord" href="/d3/d3-selection/commits/master/README.md?author=lyrachord"><img alt="@lyrachord" class="avatar" height="20" src="https://avatars3.githubusercontent.com/u/11712923?s=40&amp;v=4" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="curran" href="/d3/d3-selection/commits/master/README.md?author=curran"><img alt="@curran" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/68416?s=40&amp;v=4" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="wrgoldstein" href="/d3/d3-selection/commits/master/README.md?author=wrgoldstein"><img alt="@wrgoldstein" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/2084937?s=40&amp;v=4" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="tomwanzek" href="/d3/d3-selection/commits/master/README.md?author=tomwanzek"><img alt="@tomwanzek" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/16323903?s=40&amp;v=4" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="Devinsuit" href="/d3/d3-selection/commits/master/README.md?author=Devinsuit"><img alt="@Devinsuit" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/11741306?s=40&amp;v=4" width="20" /> </a>


    </div>

    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header" data-facebox-id="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list" data-facebox-id="facebox-description">
          <li class="facebox-user-list-item">
            <img alt="@mbostock" height="24" src="https://avatars0.githubusercontent.com/u/230541?s=48&amp;v=4" width="24" />
            <a href="/mbostock">mbostock</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@lyrachord" height="24" src="https://avatars2.githubusercontent.com/u/11712923?s=48&amp;v=4" width="24" />
            <a href="/lyrachord">lyrachord</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@curran" height="24" src="https://avatars3.githubusercontent.com/u/68416?s=48&amp;v=4" width="24" />
            <a href="/curran">curran</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@wrgoldstein" height="24" src="https://avatars3.githubusercontent.com/u/2084937?s=48&amp;v=4" width="24" />
            <a href="/wrgoldstein">wrgoldstein</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@tomwanzek" height="24" src="https://avatars3.githubusercontent.com/u/16323903?s=48&amp;v=4" width="24" />
            <a href="/tomwanzek">tomwanzek</a>
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
      <a href="/d3/d3-selection/raw/master/README.md" class="btn btn-sm BtnGroup-item" id="raw-url">Raw</a>
        <a href="/d3/d3-selection/blame/master/README.md" class="btn btn-sm js-update-url-with-hash BtnGroup-item" data-hotkey="b">Blame</a>
      <a href="/d3/d3-selection/commits/master/README.md" class="btn btn-sm BtnGroup-item" rel="nofollow">History</a>
    </div>

        <a class="btn-octicon tooltipped tooltipped-nw"
           href="github-windows://openRepo/https://github.com/d3/d3-selection?branch=master&amp;filepath=README.md"
           aria-label="Open this file in GitHub Desktop"
           data-ga-click="Repository, open with desktop, type:windows">
            <svg aria-hidden="true" class="octicon octicon-device-desktop" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M15 2H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5.34c-.25.61-.86 1.39-2.34 2h8c-1.48-.61-2.09-1.39-2.34-2H15c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 9H1V3h14v8z"/></svg>
        </a>

          <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/d3/d3-selection/edit/master/README.md" class="inline-form js-update-url-with-hash" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="yyP9CdBgCsIsbpbFv9R6r8c6jH2duAHQvGXhuoM4woxqUKyKErRLAqurLKEyitGGWQkC/b2TDJEd7ooSpJ5XCw==" /></div>
            <button class="btn-octicon tooltipped tooltipped-nw" type="submit"
              aria-label="Edit the file in your fork of this project" data-hotkey="e" data-disable-with>
              <svg aria-hidden="true" class="octicon octicon-pencil" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z"/></svg>
            </button>
</form>
        <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/d3/d3-selection/delete/master/README.md" class="inline-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="USQpxJAT1RfjLqgVIar7qlL2hdyDshJBoU9snO47CRovpeWEufCYtr3QZfQpnMIBOs6ow2i7LSorjsD6KdlcTg==" /></div>
          <button class="btn-octicon btn-octicon-danger tooltipped tooltipped-nw" type="submit"
            aria-label="Delete the file in your fork of this project" data-disable-with>
            <svg aria-hidden="true" class="octicon octicon-trashcan" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M11 2H9c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1H2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1v9c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V5c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 12H3V5h1v8h1V5h1v8h1V5h1v8h1V5h1v9zm1-10H2V3h9v1z"/></svg>
          </button>
</form>  </div>

  <div class="file-info">
      803 lines (521 sloc)
      <span class="file-info-divider"></span>
    57.6 KB
  </div>
</div>

    
  <div id="readme" class="readme blob instapaper_body">
    <article class="markdown-body entry-content" itemprop="text"><h1><a href="#d3-selection" aria-hidden="true" class="anchor" id="user-content-d3-selection"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>d3-selection</h1>
<p>Selections allow powerful data-driven transformation of the document object model (DOM): set <a href="#selection_attr">attributes</a>, <a href="#selection_style">styles</a>, <a href="#selection_property">properties</a>, <a href="#selection_html">HTML</a> or <a href="#selection_text">text</a> content, and more. Using the <a href="#joining-data">data join</a>’s <a href="#selection_enter">enter</a> and <a href="#selection_enter">exit</a> selections, you can also <a href="#selection_append">add</a> or <a href="#selection_remove">remove</a> elements to correspond to data.</p>
<p>Selection methods typically return the current selection, or a new selection, allowing the concise application of multiple operations on a given selection via method chaining. For example, to set the class and color style of all paragraph elements in the current document:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-smi">d3</span>.<span class="pl-en">selectAll</span>(<span class="pl-s"><span class="pl-pds">"</span>p<span class="pl-pds">"</span></span>)
    .<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">"</span>class<span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>graf<span class="pl-pds">"</span></span>)
    .<span class="pl-c1">style</span>(<span class="pl-s"><span class="pl-pds">"</span>color<span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>red<span class="pl-pds">"</span></span>);</pre></div>
<p>This is equivalent to:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">var</span> p <span class="pl-k">=</span> <span class="pl-smi">d3</span>.<span class="pl-en">selectAll</span>(<span class="pl-s"><span class="pl-pds">"</span>p<span class="pl-pds">"</span></span>);
<span class="pl-smi">p</span>.<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">"</span>class<span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>graf<span class="pl-pds">"</span></span>);
<span class="pl-smi">p</span>.<span class="pl-c1">style</span>(<span class="pl-s"><span class="pl-pds">"</span>color<span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>red<span class="pl-pds">"</span></span>);</pre></div>
<p>By convention, selection methods that return the current selection use <em>four</em> spaces of indent, while methods that return a new selection use only <em>two</em>. This helps reveal changes of context by making them stick out of the chain:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-smi">d3</span>.<span class="pl-c1">select</span>(<span class="pl-s"><span class="pl-pds">"</span>body<span class="pl-pds">"</span></span>)
  .<span class="pl-c1">append</span>(<span class="pl-s"><span class="pl-pds">"</span>svg<span class="pl-pds">"</span></span>)
    .<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">"</span>width<span class="pl-pds">"</span></span>, <span class="pl-c1">960</span>)
    .<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">"</span>height<span class="pl-pds">"</span></span>, <span class="pl-c1">500</span>)
  .<span class="pl-c1">append</span>(<span class="pl-s"><span class="pl-pds">"</span>g<span class="pl-pds">"</span></span>)
    .<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">"</span>transform<span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>translate(20,20)<span class="pl-pds">"</span></span>)
  .<span class="pl-c1">append</span>(<span class="pl-s"><span class="pl-pds">"</span>rect<span class="pl-pds">"</span></span>)
    .<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">"</span>width<span class="pl-pds">"</span></span>, <span class="pl-c1">920</span>)
    .<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">"</span>height<span class="pl-pds">"</span></span>, <span class="pl-c1">460</span>);</pre></div>
<p>Selections are immutable. All selection methods that affect which elements are selected (or their order) return a new selection rather than modifying the current selection. However, note that elements are necessarily mutable, as selections drive transformations of the document!</p>
<h2><a href="#installing" aria-hidden="true" class="anchor" id="user-content-installing"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installing</h2>
<p>If you use NPM, <code>npm install d3-selection</code>. Otherwise, download the <a href="https://github.com/d3/d3-selection/releases/latest">latest release</a>. You can also load directly from <a href="https://d3js.org" rel="nofollow">d3js.org</a>, either as a <a href="https://d3js.org/d3-selection.v1.min.js" rel="nofollow">standalone library</a> or as part of <a href="https://github.com/d3/d3">D3 4.0</a>. AMD, CommonJS, and vanilla environments are supported. In vanilla, a <code>d3</code> global is exported:</p>
<div class="highlight highlight-text-html-basic"><pre>&lt;<span class="pl-ent">script</span> <span class="pl-e">src</span>=<span class="pl-s"><span class="pl-pds">"</span>https://d3js.org/d3-selection.v1.min.js<span class="pl-pds">"</span></span>&gt;&lt;/<span class="pl-ent">script</span>&gt;
&lt;<span class="pl-ent">script</span>&gt;<span class="pl-s1"></span>
<span class="pl-s1"></span>
<span class="pl-s1"><span class="pl-k">var</span> div <span class="pl-k">=</span> <span class="pl-smi">d3</span>.<span class="pl-en">selectAll</span>(<span class="pl-s"><span class="pl-pds">"</span>div<span class="pl-pds">"</span></span>);</span>
<span class="pl-s1"></span>
<span class="pl-s1"></span><span class="pl-s1">&lt;</span>/<span class="pl-ent">script</span>&gt;</pre></div>
<p><a href="https://tonicdev.com/npm/d3-selection" rel="nofollow">Try d3-selection in your browser.</a></p>
<h2><a href="#api-reference" aria-hidden="true" class="anchor" id="user-content-api-reference"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>API Reference</h2>
<ul>
<li><a href="#selecting-elements">Selecting Elements</a></li>
<li><a href="#modifying-elements">Modifying Elements</a></li>
<li><a href="#joining-data">Joining Data</a></li>
<li><a href="#handling-events">Handling Events</a></li>
<li><a href="#control-flow">Control Flow</a></li>
<li><a href="#local-variables">Local Variables</a></li>
<li><a href="#namespaces">Namespaces</a></li>
</ul>
<h3><a href="#selecting-elements" aria-hidden="true" class="anchor" id="user-content-selecting-elements"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Selecting Elements</h3>
<p>Selection methods accept <a href="http://www.w3.org/TR/selectors-api/" rel="nofollow">W3C selector strings</a> such as <code>.fancy</code> to select elements with the class <em>fancy</em>, or <code>div</code> to select DIV elements. Selection methods come in two forms: select and selectAll: the former selects only the first matching element, while the latter selects all matching elements in document order. The top-level selection methods, <a href="#select">d3.select</a> and <a href="#selectAll">d3.selectAll</a>, query the entire document; the subselection methods, <a href="#selection_select"><em>selection</em>.select</a> and <a href="#selection_selectAll"><em>selection</em>.selectAll</a>, restrict selection to descendants of the selected elements.</p>
<p><a name="user-content-selection" href="#selection">#</a> d3.<b>selection</b>() <a href="https://github.com/d3/d3-selection/blob/master/src/selection/index.js#L38" title="Source">&lt;&gt;</a></p>
<p><a href="#select">Selects</a> the root element, <code>document.documentElement</code>. This function can also be used to test for selections (<code>instanceof d3.selection</code>) or to extend the selection prototype. For example, to add a method to check checkboxes:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-smi">d3</span>.<span class="pl-c1">selection</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">checked</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">value</span>) {
  <span class="pl-k">return</span> <span class="pl-c1">arguments</span>.<span class="pl-c1">length</span> <span class="pl-k">&lt;</span> <span class="pl-c1">1</span>
      <span class="pl-k">?</span> <span class="pl-c1">this</span>.<span class="pl-en">property</span>(<span class="pl-s"><span class="pl-pds">"</span>checked<span class="pl-pds">"</span></span>)
      <span class="pl-k">:</span> <span class="pl-c1">this</span>.<span class="pl-en">property</span>(<span class="pl-s"><span class="pl-pds">"</span>checked<span class="pl-pds">"</span></span>, <span class="pl-k">!!</span>value);
};</pre></div>
<p>And then to use:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-smi">d3</span>.<span class="pl-en">selectAll</span>(<span class="pl-s"><span class="pl-pds">"</span>input[type=checkbox]<span class="pl-pds">"</span></span>).<span class="pl-c1">checked</span>(<span class="pl-c1">true</span>);</pre></div>
<p><a name="user-content-select" href="#select">#</a> d3.<b>select</b>(<i>selector</i>) <a href="https://github.com/d3/d3-selection/blob/master/src/select.js#L3" title="Source">&lt;&gt;</a></p>
<p>Selects the first element that matches the specified <em>selector</em> string. If no elements match the <em>selector</em>, returns an empty selection. If multiple elements match the <em>selector</em>, only the first matching element (in document order) will be selected. For example, to select the first anchor element:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">var</span> anchor <span class="pl-k">=</span> <span class="pl-smi">d3</span>.<span class="pl-c1">select</span>(<span class="pl-s"><span class="pl-pds">"</span>a<span class="pl-pds">"</span></span>);</pre></div>
<p>If the <em>selector</em> is not a string, instead selects the specified node; this is useful if you already have a reference to a node, such as <code>this</code> within an event listener or a global such as <code>document.body</code>. For example, to make a clicked paragraph red:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-smi">d3</span>.<span class="pl-en">selectAll</span>(<span class="pl-s"><span class="pl-pds">"</span>p<span class="pl-pds">"</span></span>).<span class="pl-en">on</span>(<span class="pl-s"><span class="pl-pds">"</span>click<span class="pl-pds">"</span></span>, <span class="pl-k">function</span>() {
  <span class="pl-smi">d3</span>.<span class="pl-c1">select</span>(<span class="pl-c1">this</span>).<span class="pl-c1">style</span>(<span class="pl-s"><span class="pl-pds">"</span>color<span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>red<span class="pl-pds">"</span></span>);
});</pre></div>
<p><a name="user-content-selectAll" href="#selectAll">#</a> d3.<b>selectAll</b>(<i>selector</i>) <a href="https://github.com/d3/d3-selection/blob/master/src/selectAll.js#L3" title="Source">&lt;&gt;</a></p>
<p>Selects all elements that match the specified <em>selector</em> string. The elements will be selected in document order (top-to-bottom). If no elements in the document match the <em>selector</em>, or if the <em>selector</em> is null or undefined, returns an empty selection. For example, to select all paragraphs:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">var</span> paragraph <span class="pl-k">=</span> <span class="pl-smi">d3</span>.<span class="pl-en">selectAll</span>(<span class="pl-s"><span class="pl-pds">"</span>p<span class="pl-pds">"</span></span>);</pre></div>
<p>If the <em>selector</em> is not a string, instead selects the specified array of nodes; this is useful if you already have a reference to nodes, such as <code>this.childNodes</code> within an event listener or a global such as <code>document.links</code>. The nodes may instead be a pseudo-array such as a <code>NodeList</code> or <code>arguments</code>. For example, to color all links red:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-smi">d3</span>.<span class="pl-en">selectAll</span>(<span class="pl-c1">document</span>.<span class="pl-c1">links</span>).<span class="pl-c1">style</span>(<span class="pl-s"><span class="pl-pds">"</span>color<span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>red<span class="pl-pds">"</span></span>);</pre></div>
<p><a name="user-content-selection_select" href="#selection_select">#</a> <i>selection</i>.<b>select</b>(<i>selector</i>) <a href="https://github.com/d3/d3-selection/blob/master/src/selection/select.js" title="Source">&lt;&gt;</a></p>
<p>For each selected element, selects the first descendant element that matches the specified <em>selector</em> string. If no element matches the specified selector for the current element, the element at the current index will be null in the returned selection. (If the <em>selector</em> is null, every element in the returned selection will be null, resulting in an empty selection.) If the current element has associated data, this data is propagated to the corresponding selected element. If multiple elements match the selector, only the first matching element in document order is selected. For example, to select the first bold element in every paragraph:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">var</span> b <span class="pl-k">=</span> <span class="pl-smi">d3</span>.<span class="pl-en">selectAll</span>(<span class="pl-s"><span class="pl-pds">"</span>p<span class="pl-pds">"</span></span>).<span class="pl-c1">select</span>(<span class="pl-s"><span class="pl-pds">"</span>b<span class="pl-pds">"</span></span>);</pre></div>
<p>If the <em>selector</em> is a function, it is evaluated for each selected element, in order, being passed the current datum (<em>d</em>), the current index (<em>i</em>), and the current group (<em>nodes</em>), with <em>this</em> as the current DOM element (<em>nodes</em>[<em>i</em>]). It must return an element, or null if there is no matching element. For example, to select the previous sibling of each paragraph:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">var</span> previous <span class="pl-k">=</span> <span class="pl-smi">d3</span>.<span class="pl-en">selectAll</span>(<span class="pl-s"><span class="pl-pds">"</span>p<span class="pl-pds">"</span></span>).<span class="pl-c1">select</span>(<span class="pl-k">function</span>() {
  <span class="pl-k">return</span> <span class="pl-c1">this</span>.<span class="pl-smi">previousElementSibling</span>;
});</pre></div>
<p>Unlike <a href="#selection_selectAll"><em>selection</em>.selectAll</a>, <em>selection</em>.select does not affect grouping: it preserves the existing group structure and indexes, and propagates data (if any) to selected children. Grouping plays an important role in the <a href="#joining-data">data join</a>. See <a href="http://bost.ocks.org/mike/nest/" rel="nofollow">Nested Selections</a> and <a href="http://bost.ocks.org/mike/selection/" rel="nofollow">How Selections Work</a> for more on this topic.</p>
<p><a name="user-content-selection_selectAll" href="#selection_selectAll">#</a> <i>selection</i>.<b>selectAll</b>(<i>selector</i>) <a href="https://github.com/d3/d3-selection/blob/master/src/selection/selectAll.js" title="Source">&lt;&gt;</a></p>
<p>For each selected element, selects the descendant elements that match the specified <em>selector</em> string. The elements in the returned selection are grouped by their corresponding parent node in this selection. If no element matches the specified selector for the current element, or if the <em>selector</em> is null, the group at the current index will be empty. The selected elements do not inherit data from this selection; use <a href="#selection_data"><em>selection</em>.data</a> to propagate data to children. For example, to select the bold elements in every paragraph:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">var</span> b <span class="pl-k">=</span> <span class="pl-smi">d3</span>.<span class="pl-en">selectAll</span>(<span class="pl-s"><span class="pl-pds">"</span>p<span class="pl-pds">"</span></span>).<span class="pl-en">selectAll</span>(<span class="pl-s"><span class="pl-pds">"</span>b<span class="pl-pds">"</span></span>);</pre></div>
<p>If the <em>selector</em> is a function, it is evaluated for each selected element, in order, being passed the current datum (<em>d</em>), the current index (<em>i</em>), and the current group (<em>nodes</em>), with <em>this</em> as the current DOM element (<em>nodes</em>[<em>i</em>]). It must return an array of elements (or a pseudo-array, such as a NodeList), or the empty array if there are no matching elements. For example, to select the previous and next siblings of each paragraph:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">var</span> sibling <span class="pl-k">=</span> <span class="pl-smi">d3</span>.<span class="pl-en">selectAll</span>(<span class="pl-s"><span class="pl-pds">"</span>p<span class="pl-pds">"</span></span>).<span class="pl-en">selectAll</span>(<span class="pl-k">function</span>() {
  <span class="pl-k">return</span> [
    <span class="pl-c1">this</span>.<span class="pl-smi">previousElementSibling</span>,
    <span class="pl-c1">this</span>.<span class="pl-smi">nextElementSibling</span>
  ];
});</pre></div>
<p>Unlike <a href="#selection_select"><em>selection</em>.select</a>, <em>selection</em>.selectAll does affect grouping: each selected descendant is grouped by the parent element in the originating selection. Grouping plays an important role in the <a href="#joining-data">data join</a>. See <a href="http://bost.ocks.org/mike/nest/" rel="nofollow">Nested Selections</a> and <a href="http://bost.ocks.org/mike/selection/" rel="nofollow">How Selections Work</a> for more on this topic.</p>
<p><a name="user-content-selection_filter" href="#selection_filter">#</a> <i>selection</i>.<b>filter</b>(<i>filter</i>) <a href="https://github.com/d3/d3-selection/blob/master/src/selection/filter.js" title="Source">&lt;&gt;</a></p>
<p>Filters the selection, returning a new selection that contains only the elements for which the specified <em>filter</em> is true. The <em>filter</em> may be specified either as a selector string or a function. If the <em>filter</em> is a function, it is evaluated for each selected element, in order, being passed the current datum (<em>d</em>), the current index (<em>i</em>), and the current group (<em>nodes</em>), with <em>this</em> as the current DOM element (<em>nodes</em>[<em>i</em>]).</p>
<p>For example, to filter a selection of table rows to contain only even rows:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">var</span> even <span class="pl-k">=</span> <span class="pl-smi">d3</span>.<span class="pl-en">selectAll</span>(<span class="pl-s"><span class="pl-pds">"</span>tr<span class="pl-pds">"</span></span>).<span class="pl-en">filter</span>(<span class="pl-s"><span class="pl-pds">"</span>:nth-child(even)<span class="pl-pds">"</span></span>);</pre></div>
<p>This is approximately equivalent to using <a href="#selectAll">d3.selectAll</a> directly, although the indexes may be different:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">var</span> even <span class="pl-k">=</span> <span class="pl-smi">d3</span>.<span class="pl-en">selectAll</span>(<span class="pl-s"><span class="pl-pds">"</span>tr:nth-child(even)<span class="pl-pds">"</span></span>);</pre></div>
<p>Similarly, using a function:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">var</span> even <span class="pl-k">=</span> <span class="pl-smi">d3</span>.<span class="pl-en">selectAll</span>(<span class="pl-s"><span class="pl-pds">"</span>tr<span class="pl-pds">"</span></span>).<span class="pl-en">filter</span>(<span class="pl-k">function</span>(<span class="pl-smi">d</span>, <span class="pl-smi">i</span>) { <span class="pl-k">return</span> i <span class="pl-k">&amp;</span> <span class="pl-c1">1</span>; });</pre></div>
<p>Or using <a href="#selection_select"><em>selection</em>.select</a>:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">var</span> even <span class="pl-k">=</span> <span class="pl-smi">d3</span>.<span class="pl-en">selectAll</span>(<span class="pl-s"><span class="pl-pds">"</span>tr<span class="pl-pds">"</span></span>).<span class="pl-c1">select</span>(<span class="pl-k">function</span>(<span class="pl-smi">d</span>, <span class="pl-smi">i</span>) { <span class="pl-k">return</span> i <span class="pl-k">&amp;</span> <span class="pl-c1">1</span> <span class="pl-k">?</span> <span class="pl-c1">this</span> <span class="pl-k">:</span> <span class="pl-c1">null</span>; });</pre></div>
<p>Note that the <code>:nth-child</code> pseudo-class is a one-based index rather than a zero-based index. Also, the above filter functions do not have precisely the same meaning as <code>:nth-child</code>; they rely on the selection index rather than the number of preceding sibling elements in the DOM.</p>
<p>The returned filtered selection preserves the parents of this selection, but like <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter" rel="nofollow"><em>array</em>.filter</a>, it does not preserve indexes as some elements may be removed; use <a href="#selection_select"><em>selection</em>.select</a> to preserve the index, if needed.</p>
<p><a name="user-content-selection_merge" href="#selection_merge">#</a> <i>selection</i>.<b>merge</b>(<i>other</i>) <a href="https://github.com/d3/d3-selection/blob/master/src/selection/merge.js" title="Source">&lt;&gt;</a></p>
<p>Returns a new selection merging this selection with the specified <em>other</em> selection. The returned selection has the same number of groups and the same parents as this selection. Any missing (null) elements in this selection are filled with the corresponding element, if present (not null), from the specified <em>selection</em>. (If the <em>other</em> selection has additional groups or parents, they are ignored.)</p>
<p>This method is commonly used to merge the <a href="#selection_enter">enter</a> and <a href="#selection_data">update</a> selections after a <a href="#joining-data">data-join</a>. After modifying the entering and updating elements separately, you can merge the two selections and perform operations on both without duplicate code. For example:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">var</span> circle <span class="pl-k">=</span> <span class="pl-smi">svg</span>.<span class="pl-en">selectAll</span>(<span class="pl-s"><span class="pl-pds">"</span>circle<span class="pl-pds">"</span></span>).<span class="pl-c1">data</span>(data) <span class="pl-c"><span class="pl-c">//</span> UPDATE</span>
    .<span class="pl-c1">style</span>(<span class="pl-s"><span class="pl-pds">"</span>fill<span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>blue<span class="pl-pds">"</span></span>);

<span class="pl-smi">circle</span>.<span class="pl-en">exit</span>().<span class="pl-c1">remove</span>(); <span class="pl-c"><span class="pl-c">//</span> EXIT</span>

circle <span class="pl-k">=</span> <span class="pl-smi">circle</span>.<span class="pl-en">enter</span>().<span class="pl-c1">append</span>(<span class="pl-s"><span class="pl-pds">"</span>circle<span class="pl-pds">"</span></span>) <span class="pl-c"><span class="pl-c">//</span> ENTER</span>
    .<span class="pl-c1">style</span>(<span class="pl-s"><span class="pl-pds">"</span>fill<span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>green<span class="pl-pds">"</span></span>)
  .<span class="pl-en">merge</span>(circle) <span class="pl-c"><span class="pl-c">//</span> ENTER + UPDATE</span>
    .<span class="pl-c1">style</span>(<span class="pl-s"><span class="pl-pds">"</span>stroke<span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>black<span class="pl-pds">"</span></span>);</pre></div>
<p>See <a href="#selection_data"><em>selection</em>.data</a> for a more complete explanation of this code, which is known as the general update pattern.</p>
<p>This method is not intended for concatenating arbitrary selections, however: if both this selection and the specified <em>other</em> selection have (non-null) elements at the same index, this selection’s element is returned in the merge and the <em>other</em> selection’s element is ignored.</p>
<p><a name="user-content-matcher" href="#matcher">#</a> d3.<b>matcher</b>(<i>selector</i>) <a href="https://github.com/d3/d3-selection/blob/master/src/matcher.js" title="Source">&lt;&gt;</a></p>
<p>Given the specified <em>selector</em>, returns a function which returns true if <code>this</code> element <a href="https://developer.mozilla.org/en-US/docs/Web/API/Element/matches" rel="nofollow">matches</a> the specified selector. This method is used internally by <a href="#selection_filter"><em>selection</em>.filter</a>. For example, this:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">var</span> div <span class="pl-k">=</span> <span class="pl-smi">selection</span>.<span class="pl-en">filter</span>(<span class="pl-s"><span class="pl-pds">"</span>div<span class="pl-pds">"</span></span>);</pre></div>
<p>Is equivalent to:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">var</span> div <span class="pl-k">=</span> <span class="pl-smi">selection</span>.<span class="pl-en">filter</span>(<span class="pl-smi">d3</span>.<span class="pl-en">matcher</span>(<span class="pl-s"><span class="pl-pds">"</span>div<span class="pl-pds">"</span></span>));</pre></div>
<p>(Although D3 is not a compatibility layer, this implementation does support vendor-prefixed implementations due to the recent standardization of <em>element</em>.matches.)</p>
<p><a name="user-content-selector" href="#selector">#</a> d3.<b>selector</b>(<i>selector</i>) <a href="https://github.com/d3/d3-selection/blob/master/src/selector.js" title="Source">&lt;&gt;</a></p>
<p>Given the specified <em>selector</em>, returns a function which returns the first descendant of <code>this</code> element that matches the specified selector. This method is used internally by <a href="#selection_select"><em>selection</em>.select</a>. For example, this:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">var</span> div <span class="pl-k">=</span> <span class="pl-smi">selection</span>.<span class="pl-c1">select</span>(<span class="pl-s"><span class="pl-pds">"</span>div<span class="pl-pds">"</span></span>);</pre></div>
<p>Is equivalent to:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">var</span> div <span class="pl-k">=</span> <span class="pl-smi">selection</span>.<span class="pl-c1">select</span>(<span class="pl-smi">d3</span>.<span class="pl-en">selector</span>(<span class="pl-s"><span class="pl-pds">"</span>div<span class="pl-pds">"</span></span>));</pre></div>
<p><a name="user-content-selectorAll" href="#selectorAll">#</a> d3.<b>selectorAll</b>(<i>selector</i>) <a href="https://github.com/d3/d3-selection/blob/master/src/selectAll.js" title="Source">&lt;&gt;</a></p>
<p>Given the specified <em>selector</em>, returns a function which returns all descendants of <code>this</code> element that match the specified selector. This method is used internally by <a href="#selection_selectAll"><em>selection</em>.selectAll</a>. For example, this:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">var</span> div <span class="pl-k">=</span> <span class="pl-smi">selection</span>.<span class="pl-en">selectAll</span>(<span class="pl-s"><span class="pl-pds">"</span>div<span class="pl-pds">"</span></span>);</pre></div>
<p>Is equivalent to:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">var</span> div <span class="pl-k">=</span> <span class="pl-smi">selection</span>.<span class="pl-en">selectAll</span>(<span class="pl-smi">d3</span>.<span class="pl-en">selectorAll</span>(<span class="pl-s"><span class="pl-pds">"</span>div<span class="pl-pds">"</span></span>));</pre></div>
<p><a name="user-content-window" href="#window">#</a> d3.<b>window</b>(<i>node</i>) <a href="https://github.com/d3/d3-selection/blob/master/src/window.js" title="Source">&lt;&gt;</a></p>
<p>Returns the owner window for the specified <em>node</em>. If <em>node</em> is a node, returns the owner document’s default view; if <em>node</em> is a document, returns its default view; otherwise returns the <em>node</em>.</p>
<p><a name="user-content-style" href="#style">#</a> d3.<b>style</b>(<i>node</i>, <i>name</i>) <a href="https://github.com/d3/d3-selection/blob/master/src/selection/style.js#L32" title="Source">&lt;&gt;</a></p>
<p>Returns the value of the style property with the specified <em>name</em> for the specified <em>node</em>. If the <em>node</em> has an inline style with the specified <em>name</em>, its value is returned; otherwise, the <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/computed_value" rel="nofollow">computed property value</a> is returned. See also <a href="#selection_style"><em>selection</em>.style</a>.</p>
<h3><a href="#modifying-elements" aria-hidden="true" class="anchor" id="user-content-modifying-elements"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Modifying Elements</h3>
<p>After selecting elements, use the selection’s transformation methods to affect document content. For example, to set the name attribute and color style of an anchor element:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-smi">d3</span>.<span class="pl-c1">select</span>(<span class="pl-s"><span class="pl-pds">"</span>a<span class="pl-pds">"</span></span>)
    .<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">"</span>name<span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>fred<span class="pl-pds">"</span></span>)
    .<span class="pl-c1">style</span>(<span class="pl-s"><span class="pl-pds">"</span>color<span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>red<span class="pl-pds">"</span></span>);</pre></div>
<p>To experiment with selections, visit <a href="https://d3js.org" rel="nofollow">d3js.org</a> and open your browser’s developer console! (In Chrome, open the console with ⌥⌘J.) Select elements and then inspect the returned selection to see which elements are selected and how they are grouped. Call selection methods and see how the page content changes.</p>
<p><a name="user-content-selection_attr" href="#selection_attr">#</a> <i>selection</i>.<b>attr</b>(<i>name</i>[, <i>value</i>]) <a href="https://github.com/d3/d3-selection/blob/master/src/selection/attr.js" title="Source">&lt;&gt;</a></p>
<p>If a <em>value</em> is specified, sets the attribute with the specified <em>name</em> to the specified value on the selected elements and returns this selection. If the <em>value</em> is a constant, all elements are given the same attribute value; otherwise, if the <em>value</em> is a function, it is evaluated for each selected element, in order, being passed the current datum (<em>d</em>), the current index (<em>i</em>), and the current group (<em>nodes</em>), with <em>this</em> as the current DOM element (<em>nodes</em>[<em>i</em>]). The function’s return value is then used to set each element’s attribute. A null value will remove the specified attribute.</p>
<p>If a <em>value</em> is not specified, returns the current value of the specified attribute for the first (non-null) element in the selection. This is generally useful only if you know that the selection contains exactly one element.</p>
<p>The specified <em>name</em> may have a namespace prefix, such as <code>xlink:href</code> to specify the <code>href</code> attribute in the XLink namespace. See <a href="#namespaces">namespaces</a> for the map of supported namespaces; additional namespaces can be registered by adding to the map.</p>
<p><a name="user-content-selection_classed" href="#selection_classed">#</a> <i>selection</i>.<b>classed</b>(<i>names</i>[, <i>value</i>]) <a href="https://github.com/d3/d3-selection/blob/master/src/selection/classed.js" title="Source">&lt;&gt;</a></p>
<p>If a <em>value</em> is specified, assigns or unassigns the specified CSS class <em>names</em> on the selected elements by setting the <code>class</code> attribute or modifying the <code>classList</code> property and returns this selection. The specified <em>names</em> is a string of space-separated class names. For example, to assign the classes <code>foo</code> and <code>bar</code> to the selected elements:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-smi">selection</span>.<span class="pl-en">classed</span>(<span class="pl-s"><span class="pl-pds">"</span>foo bar<span class="pl-pds">"</span></span>, <span class="pl-c1">true</span>);</pre></div>
<p>If the <em>value</em> is truthy, then all elements are assigned the specified classes; otherwise, the classes are unassigned. If the <em>value</em> is a function, it is evaluated for each selected element, in order, being passed the current datum (<em>d</em>), the current index (<em>i</em>), and the current group (<em>nodes</em>), with <em>this</em> as the current DOM element (<em>nodes</em>[<em>i</em>]). The function’s return value is then used to assign or unassign classes on each element. For example, to randomly associate the class <em>foo</em> with on average half the selected elements:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-smi">selection</span>.<span class="pl-en">classed</span>(<span class="pl-s"><span class="pl-pds">"</span>foo<span class="pl-pds">"</span></span>, <span class="pl-k">function</span>() { <span class="pl-k">return</span> <span class="pl-c1">Math</span>.<span class="pl-c1">random</span>() <span class="pl-k">&gt;</span> <span class="pl-c1">0.5</span>; });</pre></div>
<p>If a <em>value</em> is not specified, returns true if and only if the first (non-null) selected element has the specified <em>classes</em>. This is generally useful only if you know the selection contains exactly one element.</p>
<p><a name="user-content-selection_style" href="#selection_style">#</a> <i>selection</i>.<b>style</b>(<i>name</i>[, <i>value</i>[, <i>priority</i>]]) <a href="https://github.com/d3/d3-selection/blob/master/src/selection/style.js" title="Source">&lt;&gt;</a></p>
<p>If a <em>value</em> is specified, sets the style property with the specified <em>name</em> to the specified value on the selected elements and returns this selection. If the <em>value</em> is a constant, then all elements are given the same style property value; otherwise, if the <em>value</em> is a function, it is evaluated for each selected element, in order, being passed the current datum (<em>d</em>), the current index (<em>i</em>), and the current group (<em>nodes</em>), with <em>this</em> as the current DOM element (<em>nodes</em>[<em>i</em>]). The function’s return value is then used to set each element’s style property. A null value will remove the style property. An optional <em>priority</em> may also be specified, either as null or the string <code>important</code> (without the exclamation point).</p>
<p>If a <em>value</em> is not specified, returns the current value of the specified style property for the first (non-null) element in the selection. The current value is defined as the element’s inline value, if present, and otherwise its <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/computed_value" rel="nofollow">computed value</a>. Accessing the current style value is generally useful only if you know the selection contains exactly one element.</p>
<p>Caution: unlike many SVG attributes, CSS styles typically have associated units. For example, <code>3px</code> is a valid stroke-width property value, while <code>3</code> is not. Some browsers implicitly assign the <code>px</code> (pixel) unit to numeric values, but not all browsers do: IE, for example, throws an “invalid arguments” error!</p>
<p><a name="user-content-selection_property" href="#selection_property">#</a> <i>selection</i>.<b>property</b>(<i>name</i>[, <i>value</i>]) <a href="https://github.com/d3/d3-selection/blob/master/src/selection/property.js" title="Source">&lt;&gt;</a></p>
<p>Some HTML elements have special properties that are not addressable using attributes or styles, such as a form field’s text <code>value</code> and a checkbox’s <code>checked</code> boolean. Use this method to get or set these properties.</p>
<p>If a <em>value</em> is specified, sets the property with the specified <em>name</em> to the specified value on selected elements. If the <em>value</em> is a constant, then all elements are given the same property value; otherwise, if the <em>value</em> is a function, it is evaluated for each selected element, in order, being passed the current datum (<em>d</em>), the current index (<em>i</em>), and the current group (<em>nodes</em>), with <em>this</em> as the current DOM element (<em>nodes</em>[<em>i</em>]). The function’s return value is then used to set each element’s property. A null value will delete the specified property.</p>
<p>If a <em>value</em> is not specified, returns the value of the specified property for the first (non-null) element in the selection. This is generally useful only if you know the selection contains exactly one element.</p>
<p><a name="user-content-selection_text" href="#selection_text">#</a> <i>selection</i>.<b>text</b>([<i>value</i>]) <a href="https://github.com/d3/d3-selection/blob/master/src/selection/text.js" title="Source">&lt;&gt;</a></p>
<p>If a <em>value</em> is specified, sets the <a href="http://www.w3.org/TR/DOM-Level-3-Core/core.html#Node3-textContent" rel="nofollow">text content</a> to the specified value on all selected elements, replacing any existing child elements. If the <em>value</em> is a constant, then all elements are given the same text content; otherwise, if the <em>value</em> is a function, it is evaluated for each selected element, in order, being passed the current datum (<em>d</em>), the current index (<em>i</em>), and the current group (<em>nodes</em>), with <em>this</em> as the current DOM element (<em>nodes</em>[<em>i</em>]). The function’s return value is then used to set each element’s text content. A null value will clear the content.</p>
<p>If a <em>value</em> is not specified, returns the text content for the first (non-null) element in the selection. This is generally useful only if you know the selection contains exactly one element.</p>
<p><a name="user-content-selection_html" href="#selection_html">#</a> <i>selection</i>.<b>html</b>([<i>value</i>]) <a href="https://github.com/d3/d3-selection/blob/master/src/selection/html.js" title="Source">&lt;&gt;</a></p>
<p>If a <em>value</em> is specified, sets the <a href="http://dev.w3.org/html5/spec-LC/apis-in-html-documents.html#innerhtml" rel="nofollow">inner HTML</a> to the specified value on all selected elements, replacing any existing child elements. If the <em>value</em> is a constant, then all elements are given the same inner HTML; otherwise, if the <em>value</em> is a function, it is evaluated for each selected element, in order, being passed the current datum (<em>d</em>), the current index (<em>i</em>), and the current group (<em>nodes</em>), with <em>this</em> as the current DOM element (<em>nodes</em>[<em>i</em>]). The function’s return value is then used to set each element’s inner HTML. A null value will clear the content.</p>
<p>If a <em>value</em> is not specified, returns the inner HTML for the first (non-null) element in the selection. This is generally useful only if you know the selection contains exactly one element.</p>
<p>Use <a href="#selection_append"><em>selection</em>.append</a> or <a href="#selection_insert"><em>selection</em>.insert</a> instead to create data-driven content; this method is intended for when you want a little bit of HTML, say for rich formatting. Also, <em>selection</em>.html is only supported on HTML elements. SVG elements and other non-HTML elements do not support the innerHTML property, and thus are incompatible with <em>selection</em>.html. Consider using <a href="https://developer.mozilla.org/en-US/docs/XMLSerializer" rel="nofollow">XMLSerializer</a> to convert a DOM subtree to text. See also the <a href="https://code.google.com/p/innersvg/" rel="nofollow">innersvg polyfill</a>, which provides a shim to support the innerHTML property on SVG elements.</p>
<p><a name="user-content-selection_append" href="#selection_append">#</a> <i>selection</i>.<b>append</b>(<i>type</i>) <a href="https://github.com/d3/d3-selection/blob/master/src/selection/append.js" title="Source">&lt;&gt;</a></p>
<p>If the specified <em>type</em> is a string, appends a new element of this type (tag name) as the last child of each selected element, or before the next following sibling in the update selection if this is an <a href="#selection_enter">enter selection</a>. The latter behavior for enter selections allows you to insert elements into the DOM in an order consistent with the new bound data; however, note that <a href="#selection_order"><em>selection</em>.order</a> may still be required if updating elements change order (<em>i.e.</em>, if the order of new data is inconsistent with old data).</p>
<p>If the specified <em>type</em> is a function, it is evaluated for each selected element, in order, being passed the current datum (<em>d</em>), the current index (<em>i</em>), and the current group (<em>nodes</em>), with <em>this</em> as the current DOM element (<em>nodes</em>[<em>i</em>]). This function should return an element to be appended. (The function typically creates a new element, but it may instead return an existing element.) For example, to append a DIV element to each paragraph:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-smi">d3</span>.<span class="pl-en">selectAll</span>(<span class="pl-s"><span class="pl-pds">"</span>p<span class="pl-pds">"</span></span>).<span class="pl-c1">append</span>(<span class="pl-s"><span class="pl-pds">"</span>div<span class="pl-pds">"</span></span>);</pre></div>
<p>This is equivalent to:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-smi">d3</span>.<span class="pl-en">selectAll</span>(<span class="pl-s"><span class="pl-pds">"</span>p<span class="pl-pds">"</span></span>).<span class="pl-c1">append</span>(<span class="pl-k">function</span>() {
  <span class="pl-k">return</span> <span class="pl-c1">document</span>.<span class="pl-c1">createElement</span>(<span class="pl-s"><span class="pl-pds">"</span>div<span class="pl-pds">"</span></span>);
});</pre></div>
<p>Which is equivalent to:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-smi">d3</span>.<span class="pl-en">selectAll</span>(<span class="pl-s"><span class="pl-pds">"</span>p<span class="pl-pds">"</span></span>).<span class="pl-c1">select</span>(<span class="pl-k">function</span>() {
  <span class="pl-k">return</span> <span class="pl-c1">this</span>.<span class="pl-c1">appendChild</span>(<span class="pl-c1">document</span>.<span class="pl-c1">createElement</span>(<span class="pl-s"><span class="pl-pds">"</span>div<span class="pl-pds">"</span></span>));
});</pre></div>
<p>In both cases, this method returns a new selection containing the appended elements. Each new element inherits the data of the current elements, if any, in the same manner as <a href="#selection_select"><em>selection</em>.select</a>.</p>
<p>The specified <em>name</em> may have a namespace prefix, such as <code>svg:text</code> to specify a <code>text</code> attribute in the SVG namespace. See <a href="#namespaces">namespaces</a> for the map of supported namespaces; additional namespaces can be registered by adding to the map. If no namespace is specified, the namespace will be inherited from the parent element; or, if the name is one of the known prefixes, the corresponding namespace will be used (for example, <code>svg</code> implies <code>svg:svg</code>).</p>
<p><a name="user-content-selection_insert" href="#selection_insert">#</a> <i>selection</i>.<b>insert</b>(<i>type</i>[, <i>before</i>]) <a href="https://github.com/d3/d3-selection/blob/master/src/selection/insert.js" title="Source">&lt;&gt;</a></p>
<p>If the specified <em>type</em> is a string, inserts a new element of this type (tag name) before the first element matching the specified <em>before</em> selector for each selected element. For example, a <em>before</em> selector <code>:first-child</code> will prepend nodes before the first child. If <em>before</em> is not specified, it defaults to null. (To append elements in an order consistent with <a href="#joining-data">bound data</a>, use <a href="#selection_append"><em>selection</em>.append</a>.)</p>
<p>Both <em>type</em> and <em>before</em> may instead be specified as functions which are evaluated for each selected element, in order, being passed the current datum (<em>d</em>), the current index (<em>i</em>), and the current group (<em>nodes</em>), with <em>this</em> as the current DOM element (<em>nodes</em>[<em>i</em>]). The <em>type</em> function should return an element to be inserted; the <em>before</em> function should return the child element before which the element should be inserted. For example, to append a DIV element to each paragraph:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-smi">d3</span>.<span class="pl-en">selectAll</span>(<span class="pl-s"><span class="pl-pds">"</span>p<span class="pl-pds">"</span></span>).<span class="pl-en">insert</span>(<span class="pl-s"><span class="pl-pds">"</span>div<span class="pl-pds">"</span></span>);</pre></div>
<p>This is equivalent to:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-smi">d3</span>.<span class="pl-en">selectAll</span>(<span class="pl-s"><span class="pl-pds">"</span>p<span class="pl-pds">"</span></span>).<span class="pl-en">insert</span>(<span class="pl-k">function</span>() {
  <span class="pl-k">return</span> <span class="pl-c1">document</span>.<span class="pl-c1">createElement</span>(<span class="pl-s"><span class="pl-pds">"</span>div<span class="pl-pds">"</span></span>);
});</pre></div>
<p>Which is equivalent to:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-smi">d3</span>.<span class="pl-en">selectAll</span>(<span class="pl-s"><span class="pl-pds">"</span>p<span class="pl-pds">"</span></span>).<span class="pl-c1">select</span>(<span class="pl-k">function</span>() {
  <span class="pl-k">return</span> <span class="pl-c1">this</span>.<span class="pl-c1">insertBefore</span>(<span class="pl-c1">document</span>.<span class="pl-c1">createElement</span>(<span class="pl-s"><span class="pl-pds">"</span>div<span class="pl-pds">"</span></span>), <span class="pl-c1">null</span>);
});</pre></div>
<p>In both cases, this method returns a new selection containing the appended elements. Each new element inherits the data of the current elements, if any, in the same manner as <a href="#selection_select"><em>selection</em>.select</a>.</p>
<p>The specified <em>name</em> may have a namespace prefix, such as <code>svg:text</code> to specify a <code>text</code> attribute in the SVG namespace. See <a href="#namespaces">namespaces</a> for the map of supported namespaces; additional namespaces can be registered by adding to the map. If no namespace is specified, the namespace will be inherited from the parent element; or, if the name is one of the known prefixes, the corresponding namespace will be used (for example, <code>svg</code> implies <code>svg:svg</code>).</p>
<p><a name="user-content-selection_remove" href="#selection_remove">#</a> <i>selection</i>.<b>remove</b>() <a href="https://github.com/d3/d3-selection/blob/master/src/selection/remove.js" title="Source">&lt;&gt;</a></p>
<p>Removes the selected elements from the document. Returns this selection (the removed elements) which are now detached from the DOM. There is not currently a dedicated API to add removed elements back to the document; however, you can pass a function to <a href="#selection_append"><em>selection</em>.append</a> or <a href="#selection_insert"><em>selection</em>.insert</a> to re-add elements.</p>
<p><a name="user-content-selection_sort" href="#selection_sort">#</a> <i>selection</i>.<b>sort</b>(<i>compare</i>) <a href="https://github.com/d3/d3-selection/blob/master/src/selection/sort.js" title="Source">&lt;&gt;</a></p>
<p>Returns a new selection that contains a copy of each group in this selection sorted according to the <em>compare</em> function. After sorting, re-inserts elements to match the resulting order (per <a href="#selection_order"><em>selection</em>.order</a>).</p>
<p>The compare function, which defaults to <a href="https://github.com/d3/d3-array#ascending">ascending</a>, is passed two elements’ data <em>a</em> and <em>b</em> to compare. It should return either a negative, positive, or zero value. If negative, then <em>a</em> should be before <em>b</em>; if positive, then <em>a</em> should be after <em>b</em>; otherwise, <em>a</em> and <em>b</em> are considered equal and the order is arbitrary.</p>
<p>Note that sorting is not guaranteed to be stable; however, it is guaranteed to have the same behavior as your browser’s built-in <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/sort" rel="nofollow">sort</a> method on arrays.</p>
<p><a name="user-content-selection_order" href="#selection_order">#</a> <i>selection</i>.<b>order</b>() <a href="https://github.com/d3/d3-selection/blob/master/src/selection/order.js" title="Source">&lt;&gt;</a></p>
<p>Re-inserts elements into the document such that the document order of each group matches the selection order. This is equivalent to calling <a href="#selection_sort"><em>selection</em>.sort</a> if the data is already sorted, but much faster.</p>
<p><a name="user-content-selection_raise" href="#selection_raise">#</a> <i>selection</i>.<b>raise</b>() <a href="https://github.com/d3/d3-selection/blob/master/src/selection/raise.js" title="Source">&lt;&gt;</a></p>
<p>Re-inserts each selected element, in order, as the last child of its parent. Equivalent to:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-smi">selection</span>.<span class="pl-en">each</span>(<span class="pl-k">function</span>() {
  <span class="pl-c1">this</span>.<span class="pl-c1">parentNode</span>.<span class="pl-c1">appendChild</span>(<span class="pl-c1">this</span>);
});</pre></div>
<p><a name="user-content-selection_lower" href="#selection_lower">#</a> <i>selection</i>.<b>lower</b>() <a href="https://github.com/d3/d3-selection/blob/master/src/selection/lower.js" title="Source">&lt;&gt;</a></p>
<p>Re-inserts each selected element, in order, as the first child of its parent. Equivalent to:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-smi">selection</span>.<span class="pl-en">each</span>(<span class="pl-k">function</span>() {
  <span class="pl-c1">this</span>.<span class="pl-c1">parentNode</span>.<span class="pl-c1">insertBefore</span>(<span class="pl-c1">this</span>, <span class="pl-c1">this</span>.<span class="pl-c1">parentNode</span>.<span class="pl-c1">firstChild</span>);
});</pre></div>
<p><a name="user-content-creator" href="#creator">#</a> d3.<b>creator</b>(<i>name</i>) <a href="https://github.com/d3/d3-selection/blob/master/src/creator.js" title="Source">&lt;&gt;</a></p>
<p>Given the specified element <em>name</em>, returns a function which creates an element of the given name, assuming that <code>this</code> is the parent element. This method is used internally by <a href="#selection_append"><em>selection</em>.append</a> and <a href="#selection_insert"><em>selection</em>.insert</a> to create new elements. For example, this:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-smi">selection</span>.<span class="pl-c1">append</span>(<span class="pl-s"><span class="pl-pds">"</span>div<span class="pl-pds">"</span></span>);</pre></div>
<p>Is equivalent to:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-smi">selection</span>.<span class="pl-c1">append</span>(<span class="pl-smi">d3</span>.<span class="pl-en">creator</span>(<span class="pl-s"><span class="pl-pds">"</span>div<span class="pl-pds">"</span></span>));</pre></div>
<p>See <a href="#namespace">namespace</a> for details on supported namespace prefixes, such as for SVG elements.</p>
<h3><a href="#joining-data" aria-hidden="true" class="anchor" id="user-content-joining-data"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Joining Data</h3>
<p>For an introduction to D3’s data joins, see <a href="http://bost.ocks.org/mike/join/" rel="nofollow">Thinking With Joins</a>. Also see the <a href="http://bl.ocks.org/mbostock/3808218" rel="nofollow">General Update Pattern</a> examples.</p>
<p><a name="user-content-selection_data" href="#selection_data">#</a> <i>selection</i>.<b>data</b>([<i>data</i>[, <i>key</i>]]) <a href="https://github.com/d3/d3-selection/blob/master/src/selection/data.js" title="Source">&lt;&gt;</a></p>
<p>Joins the specified array of <em>data</em> with the selected elements, returning a new selection that represents the <em>update</em> selection: the elements successfully bound to data. Also defines the <a href="#selection_enter">enter</a> and <a href="#selection_exit">exit</a> selections on the returned selection, which can be used to add or remove elements to correspond to the new data. The specified <em>data</em> is an array of arbitrary values (<em>e.g.</em>, numbers or objects), or a function that returns an array of values for each group. When data is assigned to an element, it is stored in the property <code>__data__</code>, thus making the data “sticky” and available on re-selection.</p>
<p>The <em>data</em> is specified <strong>for each group</strong> in the selection. If the selection has multiple groups (such as <a href="#selectAll">d3.selectAll</a> followed by <a href="#selection_selectAll"><em>selection</em>.selectAll</a>), then <em>data</em> should typically be specified as a function. This function will be evaluated for each group in order, being passed the group’s parent datum (<em>d</em>, which may be undefined), the group index (<em>i</em>), and the selection’s parent nodes (<em>nodes</em>), with <em>this</em> as the group’s parent element. For example, to create an HTML table from a matrix of numbers:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">var</span> matrix <span class="pl-k">=</span> [
  [<span class="pl-c1">11975</span>,  <span class="pl-c1">5871</span>, <span class="pl-c1">8916</span>, <span class="pl-c1">2868</span>],
  [ <span class="pl-c1">1951</span>, <span class="pl-c1">10048</span>, <span class="pl-c1">2060</span>, <span class="pl-c1">6171</span>],
  [ <span class="pl-c1">8010</span>, <span class="pl-c1">16145</span>, <span class="pl-c1">8090</span>, <span class="pl-c1">8045</span>],
  [ <span class="pl-c1">1013</span>,   <span class="pl-c1">990</span>,  <span class="pl-c1">940</span>, <span class="pl-c1">6907</span>]
];

<span class="pl-k">var</span> tr <span class="pl-k">=</span> <span class="pl-smi">d3</span>.<span class="pl-c1">select</span>(<span class="pl-s"><span class="pl-pds">"</span>body<span class="pl-pds">"</span></span>)
  .<span class="pl-c1">append</span>(<span class="pl-s"><span class="pl-pds">"</span>table<span class="pl-pds">"</span></span>)
  .<span class="pl-en">selectAll</span>(<span class="pl-s"><span class="pl-pds">"</span>tr<span class="pl-pds">"</span></span>)
  .<span class="pl-c1">data</span>(matrix)
  .<span class="pl-en">enter</span>().<span class="pl-c1">append</span>(<span class="pl-s"><span class="pl-pds">"</span>tr<span class="pl-pds">"</span></span>);

<span class="pl-k">var</span> td <span class="pl-k">=</span> <span class="pl-smi">tr</span>.<span class="pl-en">selectAll</span>(<span class="pl-s"><span class="pl-pds">"</span>td<span class="pl-pds">"</span></span>)
  .<span class="pl-c1">data</span>(<span class="pl-k">function</span>(<span class="pl-smi">d</span>) { <span class="pl-k">return</span> d; })
  .<span class="pl-en">enter</span>().<span class="pl-c1">append</span>(<span class="pl-s"><span class="pl-pds">"</span>td<span class="pl-pds">"</span></span>)
    .<span class="pl-c1">text</span>(<span class="pl-k">function</span>(<span class="pl-smi">d</span>) { <span class="pl-k">return</span> d; });</pre></div>
<p>In this example the <em>data</em> function is the identity function: for each table row, it returns the corresponding row from the data matrix.</p>
<p>If a <em>key</em> function is not specified, then the first datum in <em>data</em> is assigned to the first selected element, the second datum to the second selected element, and so on. A <em>key</em> function may be specified to control which datum is assigned to which element, replacing the default join-by-index, by computing a string identifier for each datum and element. This key function is evaluated for each selected element, in order, being passed the current datum (<em>d</em>), the current index (<em>i</em>), and the current group (<em>nodes</em>), with <em>this</em> as the current DOM element (<em>nodes</em>[<em>i</em>]); the returned string is the element’s key. The key function is then also evaluated for each new datum in <em>data</em>, being passed the current datum (<em>d</em>), the current index (<em>i</em>), and the group’s new <em>data</em>, with <em>this</em> as the group’s parent DOM element; the returned string is the datum’s key. The datum for a given key is assigned to the element with the matching key. If multiple elements have the same key, the duplicate elements are put into the exit selection; if multiple data have the same key, the duplicate data are put into the enter selection.</p>
<p>For example, given this document:</p>
<div class="highlight highlight-text-html-basic"><pre>&lt;<span class="pl-ent">div</span> <span class="pl-e">id</span>=<span class="pl-s"><span class="pl-pds">"</span>Ford<span class="pl-pds">"</span></span>&gt;&lt;/<span class="pl-ent">div</span>&gt;
&lt;<span class="pl-ent">div</span> <span class="pl-e">id</span>=<span class="pl-s"><span class="pl-pds">"</span>Jarrah<span class="pl-pds">"</span></span>&gt;&lt;/<span class="pl-ent">div</span>&gt;
&lt;<span class="pl-ent">div</span> <span class="pl-e">id</span>=<span class="pl-s"><span class="pl-pds">"</span>Kwon<span class="pl-pds">"</span></span>&gt;&lt;/<span class="pl-ent">div</span>&gt;
&lt;<span class="pl-ent">div</span> <span class="pl-e">id</span>=<span class="pl-s"><span class="pl-pds">"</span>Locke<span class="pl-pds">"</span></span>&gt;&lt;/<span class="pl-ent">div</span>&gt;
&lt;<span class="pl-ent">div</span> <span class="pl-e">id</span>=<span class="pl-s"><span class="pl-pds">"</span>Reyes<span class="pl-pds">"</span></span>&gt;&lt;/<span class="pl-ent">div</span>&gt;
&lt;<span class="pl-ent">div</span> <span class="pl-e">id</span>=<span class="pl-s"><span class="pl-pds">"</span>Shephard<span class="pl-pds">"</span></span>&gt;&lt;/<span class="pl-ent">div</span>&gt;</pre></div>
<p>You could join data by key as follows:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">var</span> data <span class="pl-k">=</span> [
  {name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>Locke<span class="pl-pds">"</span></span>, number<span class="pl-k">:</span> <span class="pl-c1">4</span>},
  {name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>Reyes<span class="pl-pds">"</span></span>, number<span class="pl-k">:</span> <span class="pl-c1">8</span>},
  {name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>Ford<span class="pl-pds">"</span></span>, number<span class="pl-k">:</span> <span class="pl-c1">15</span>},
  {name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>Jarrah<span class="pl-pds">"</span></span>, number<span class="pl-k">:</span> <span class="pl-c1">16</span>},
  {name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>Shephard<span class="pl-pds">"</span></span>, number<span class="pl-k">:</span> <span class="pl-c1">31</span>},
  {name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>Kwon<span class="pl-pds">"</span></span>, number<span class="pl-k">:</span> <span class="pl-c1">34</span>}
];

<span class="pl-smi">d3</span>.<span class="pl-en">selectAll</span>(<span class="pl-s"><span class="pl-pds">"</span>div<span class="pl-pds">"</span></span>)
  .<span class="pl-c1">data</span>(data, <span class="pl-k">function</span>(<span class="pl-smi">d</span>) { <span class="pl-k">return</span> d <span class="pl-k">?</span> <span class="pl-smi">d</span>.<span class="pl-c1">name</span> <span class="pl-k">:</span> <span class="pl-c1">this</span>.<span class="pl-c1">id</span>; })
    .<span class="pl-c1">text</span>(<span class="pl-k">function</span>(<span class="pl-smi">d</span>) { <span class="pl-k">return</span> <span class="pl-smi">d</span>.<span class="pl-smi">number</span>; });</pre></div>
<p>This example key function uses the datum <em>d</em> if present, and otherwise falls back to the element’s id property. Since these elements were not previously bound to data, the datum <em>d</em> is null when the key function is evaluated on selected elements, and non-null when the key function is evaluated on the new data.</p>
<p>The <em>update</em> and <em>enter</em> selections are returned in data order, while the <em>exit</em> selection preserves the selection order prior to the join. If a key function is specified, the order of elements in the selection may not match their order in the document; use <a href="#order"><em>selection</em>.order</a> or <a href="#sort"><em>selection</em>.sort</a> as needed. For more on how the key function affects the join, see <a href="http://bost.ocks.org/mike/bar/2/" rel="nofollow">A Bar Chart, Part 2</a> and <a href="http://bost.ocks.org/mike/constancy/" rel="nofollow">Object Constancy</a>.</p>
<p>Although the data-join can be used simply to create (to <em>enter</em>) a set of elements corresponding to data, more generally the data-join is designed to let you create, destroy or update elements as needed so that the resulting DOM corresponds to the new data. The data-join lets you do this efficiently by executing only the minimum necessary operations on each state of element (entering, updating, or exiting), and allows you to declare concise animated transitions between states as well. Here is a simple example of the <a href="http://bl.ocks.org/mbostock/3808218" rel="nofollow">General Update Pattern</a>:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">var</span> circle <span class="pl-k">=</span> <span class="pl-smi">svg</span>.<span class="pl-en">selectAll</span>(<span class="pl-s"><span class="pl-pds">"</span>circle<span class="pl-pds">"</span></span>) <span class="pl-c"><span class="pl-c">//</span> 1</span>
  .<span class="pl-c1">data</span>(data) <span class="pl-c"><span class="pl-c">//</span> 2</span>
    .<span class="pl-c1">style</span>(<span class="pl-s"><span class="pl-pds">"</span>fill<span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>blue<span class="pl-pds">"</span></span>); <span class="pl-c"><span class="pl-c">//</span> 3</span>

<span class="pl-smi">circle</span>.<span class="pl-en">exit</span>().<span class="pl-c1">remove</span>(); <span class="pl-c"><span class="pl-c">//</span> 4</span>

circle <span class="pl-k">=</span> <span class="pl-smi">circle</span>.<span class="pl-en">enter</span>().<span class="pl-c1">append</span>(<span class="pl-s"><span class="pl-pds">"</span>circle<span class="pl-pds">"</span></span>) <span class="pl-c"><span class="pl-c">//</span> 5, 9</span>
    .<span class="pl-c1">style</span>(<span class="pl-s"><span class="pl-pds">"</span>fill<span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>green<span class="pl-pds">"</span></span>) <span class="pl-c"><span class="pl-c">//</span> 6</span>
  .<span class="pl-en">merge</span>(circle) <span class="pl-c"><span class="pl-c">//</span> 7</span>
    .<span class="pl-c1">style</span>(<span class="pl-s"><span class="pl-pds">"</span>stroke<span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>black<span class="pl-pds">"</span></span>); <span class="pl-c"><span class="pl-c">//</span> 8</span></pre></div>
<p>Breaking this down into discrete steps:</p>
<ol>
<li>Any existing circles (that are descendants of the <code>svg</code> selection) are <a href="#selection_selectAll">selected</a>.</li>
<li>These circles are <a href="#selection_data">joined to new <code>data</code></a>, returning the matching circles: the <em>update</em> selection.</li>
<li>These updating circles are given a blue fill.</li>
<li>Any existing circles that do <em>not</em> match new data—the <em>exit</em> selection—are removed.</li>
<li>New circles are <a href="#selection_append">appended</a> for any new data that do <em>not</em> match any existing circle: the <em>enter</em> selection.</li>
<li>These entering circles are given a green fill.</li>
<li>A new selection representing the <a href="#selection_merge">union</a> of entering and updating circles is created.</li>
<li>These entering and updating circles are given a black stroke.</li>
<li>These circles are stored in the variable <code>circle</code>.</li>
</ol>
<p>As described in the preceding paragraphs, the “matching” logic is determined by the key function passed to <em>selection</em>.data; since no key function is used in the above code sample, the elements and data are joined by index.</p>
<p>If <em>data</em> is not specified, this method returns the array of data for the selected elements.</p>
<p>This method cannot be used to clear bound data; use <a href="#selection_datum"><em>selection</em>.datum</a> instead.</p>
<p><a name="user-content-selection_enter" href="#selection_enter">#</a> <i>selection</i>.<b>enter</b>() <a href="https://github.com/d3/d3-selection/blob/master/src/selection/enter.js" title="Source">&lt;&gt;</a></p>
<p>Returns the enter selection: placeholder nodes for each datum that had no corresponding DOM element in the selection. (The enter selection is empty for selections not returned by <a href="#selection_data"><em>selection</em>.data</a>.)</p>
<p>The enter selection is typically used to create “missing” elements corresponding to new data. For example, to create DIV elements from an array of numbers:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">var</span> div <span class="pl-k">=</span> <span class="pl-smi">d3</span>.<span class="pl-c1">select</span>(<span class="pl-s"><span class="pl-pds">"</span>body<span class="pl-pds">"</span></span>)
  .<span class="pl-en">selectAll</span>(<span class="pl-s"><span class="pl-pds">"</span>div<span class="pl-pds">"</span></span>)
  .<span class="pl-c1">data</span>([<span class="pl-c1">4</span>, <span class="pl-c1">8</span>, <span class="pl-c1">15</span>, <span class="pl-c1">16</span>, <span class="pl-c1">23</span>, <span class="pl-c1">42</span>])
  .<span class="pl-en">enter</span>().<span class="pl-c1">append</span>(<span class="pl-s"><span class="pl-pds">"</span>div<span class="pl-pds">"</span></span>)
    .<span class="pl-c1">text</span>(<span class="pl-k">function</span>(<span class="pl-smi">d</span>) { <span class="pl-k">return</span> d; });</pre></div>
<p>If the body is initially empty, the above code will create six new DIV elements, append them to the body in-order, and assign their text content as the associated (string-coerced) number:</p>
<div class="highlight highlight-text-html-basic"><pre>&lt;<span class="pl-ent">div</span>&gt;4&lt;/<span class="pl-ent">div</span>&gt;
&lt;<span class="pl-ent">div</span>&gt;8&lt;/<span class="pl-ent">div</span>&gt;
&lt;<span class="pl-ent">div</span>&gt;15&lt;/<span class="pl-ent">div</span>&gt;
&lt;<span class="pl-ent">div</span>&gt;16&lt;/<span class="pl-ent">div</span>&gt;
&lt;<span class="pl-ent">div</span>&gt;23&lt;/<span class="pl-ent">div</span>&gt;
&lt;<span class="pl-ent">div</span>&gt;42&lt;/<span class="pl-ent">div</span>&gt;</pre></div>
<p>Conceptually, the enter selection’s placeholders are pointers to the parent element (in this example, the document body). The enter selection is typically only used transiently to append elements, and is often <a href="#selection_merge">merged</a> with the update selection after appending, such that modifications can be applied to both entering and updating elements.</p>
<p><a name="user-content-selection_exit" href="#selection_exit">#</a> <i>selection</i>.<b>exit</b>() <a href="https://github.com/d3/d3-selection/blob/master/src/selection/exit.js" title="Source">&lt;&gt;</a></p>
<p>Returns the exit selection: existing DOM elements in the selection for which no new datum was found. (The exit selection is empty for selections not returned by <a href="#selection_data"><em>selection</em>.data</a>.)</p>
<p>The exit selection is typically used to remove “superfluous” elements corresponding to old data. For example, to update the DIV elements created previously with a new array of numbers:</p>
<div class="highlight highlight-source-js"><pre>div <span class="pl-k">=</span> <span class="pl-smi">div</span>.<span class="pl-c1">data</span>([<span class="pl-c1">1</span>, <span class="pl-c1">2</span>, <span class="pl-c1">4</span>, <span class="pl-c1">8</span>, <span class="pl-c1">16</span>, <span class="pl-c1">32</span>], <span class="pl-k">function</span>(<span class="pl-smi">d</span>) { <span class="pl-k">return</span> d; });</pre></div>
<p>Since a key function was specified (as the identity function), and the new data contains the numbers [4, 8, 16] which match existing elements in the document, the update selection contains three DIV elements. Leaving those elements as-is, we can append new elements for [1, 2, 32] using the enter selection:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-smi">div</span>.<span class="pl-en">enter</span>().<span class="pl-c1">append</span>(<span class="pl-s"><span class="pl-pds">"</span>div<span class="pl-pds">"</span></span>).<span class="pl-c1">text</span>(<span class="pl-k">function</span>(<span class="pl-smi">d</span>) { <span class="pl-k">return</span> d; });</pre></div>
<p>Likewise, to remove the exiting elements [15, 23, 42]:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-smi">div</span>.<span class="pl-en">exit</span>().<span class="pl-c1">remove</span>();</pre></div>
<p>Now the document body looks like this:</p>
<div class="highlight highlight-text-html-basic"><pre>&lt;<span class="pl-ent">div</span>&gt;1&lt;/<span class="pl-ent">div</span>&gt;
&lt;<span class="pl-ent">div</span>&gt;2&lt;/<span class="pl-ent">div</span>&gt;
&lt;<span class="pl-ent">div</span>&gt;4&lt;/<span class="pl-ent">div</span>&gt;
&lt;<span class="pl-ent">div</span>&gt;8&lt;/<span class="pl-ent">div</span>&gt;
&lt;<span class="pl-ent">div</span>&gt;16&lt;/<span class="pl-ent">div</span>&gt;
&lt;<span class="pl-ent">div</span>&gt;32&lt;/<span class="pl-ent">div</span>&gt;</pre></div>
<p>The order of the DOM elements matches the order of the data because the old data’s order and the new data’s order were consistent. If the new data’s order is different, use <a href="#selection_order"><em>selection</em>.order</a> to reorder the elements in the DOM. See the <a href="http://bl.ocks.org/mbostock/3808218" rel="nofollow">General Update Pattern</a> example thread for more on data joins.</p>
<p><a name="user-content-selection_datum" href="#selection_datum">#</a> <i>selection</i>.<b>datum</b>([<i>value</i>]) <a href="https://github.com/d3/d3-selection/blob/master/src/selection/datum.js" title="Source">&lt;&gt;</a></p>
<p>Gets or sets the bound data for each selected element. Unlike <a href="#selection_data"><em>selection</em>.data</a>, this method does not compute a join and does not affect indexes or the enter and exit selections.</p>
<p>If a <em>value</em> is specified, sets the element’s bound data to the specified value on all selected elements. If the <em>value</em> is a constant, all elements are given the same datum; otherwise, if the <em>value</em> is a function, it is evaluated for each selected element, in order, being passed the current datum (<em>d</em>), the current index (<em>i</em>), and the current group (<em>nodes</em>), with <em>this</em> as the current DOM element (<em>nodes</em>[<em>i</em>]). The function is then used to set each element’s new data. A null value will delete the bound data.</p>
<p>If a <em>value</em> is not specified, returns the bound datum for the first (non-null) element in the selection. This is generally useful only if you know the selection contains exactly one element.</p>
<p>This method is useful for accessing HTML5 <a href="http://www.w3.org/TR/html5/dom.html#custom-data-attribute" rel="nofollow">custom data attributes</a>. For example, given the following elements:</p>
<div class="highlight highlight-text-html-basic"><pre>&lt;<span class="pl-ent">ul</span> <span class="pl-e">id</span>=<span class="pl-s"><span class="pl-pds">"</span>list<span class="pl-pds">"</span></span>&gt;
  &lt;<span class="pl-ent">li</span> <span class="pl-e">data-username</span>=<span class="pl-s"><span class="pl-pds">"</span>shawnbot<span class="pl-pds">"</span></span>&gt;Shawn Allen&lt;/<span class="pl-ent">li</span>&gt;
  &lt;<span class="pl-ent">li</span> <span class="pl-e">data-username</span>=<span class="pl-s"><span class="pl-pds">"</span>mbostock<span class="pl-pds">"</span></span>&gt;Mike Bostock&lt;/<span class="pl-ent">li</span>&gt;
&lt;/<span class="pl-ent">ul</span>&gt;</pre></div>
<p>You can expose the custom data attributes by setting each element’s data as the built-in <a href="http://www.w3.org/TR/html5/dom.html#dom-dataset" rel="nofollow">dataset</a> property:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-smi">selection</span>.<span class="pl-en">datum</span>(<span class="pl-k">function</span>() { <span class="pl-k">return</span> <span class="pl-c1">this</span>.<span class="pl-smi">dataset</span>; })</pre></div>
<h3><a href="#handling-events" aria-hidden="true" class="anchor" id="user-content-handling-events"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Handling Events</h3>
<p>For interaction, selections allow listening for and dispatching of events.</p>
<p><a name="user-content-selection_on" href="#selection_on">#</a> <i>selection</i>.<b>on</b>(<i>typenames</i>[, <i>listener</i>[, <i>capture</i>]]) <a href="https://github.com/d3/d3-selection/blob/master/src/selection/on.js" title="Source">&lt;&gt;</a></p>
<p>Adds or removes a <em>listener</em> to each selected element for the specified event <em>typenames</em>. The <em>typenames</em> is a string event type, such as <code>click</code>, <code>mouseover</code>, or <code>submit</code>; any <a href="https://developer.mozilla.org/en-US/docs/Web/Events#Standard_events" rel="nofollow">DOM event type</a> supported by your browser may be used. The type may be optionally followed by a period (<code>.</code>) and a name; the optional name allows multiple callbacks to be registered to receive events of the same type, such as <code>click.foo</code> and <code>click.bar</code>. To specify multiple typenames, separate typenames with spaces, such as <code>input change</code> or <code>click.foo click.bar</code>.</p>
<p>When a specified event is dispatched on a selected element, the specified <em>listener</em> will be evaluated for the element, being passed the current datum (<em>d</em>), the current index (<em>i</em>), and the current group (<em>nodes</em>), with <em>this</em> as the current DOM element (<em>nodes</em>[<em>i</em>]). Listeners always see the latest datum for their element, but the index is a property of the selection and is fixed when the listener is assigned; to update the index, re-assign the listener. To access the current event within a listener, use <a href="#event">d3.event</a>.</p>
<p>If an event listener was previously registered for the same <em>typename</em> on a selected element, the old listener is removed before the new listener is added. To remove a listener, pass null as the <em>listener</em>. To remove all listeners for a given name, pass null as the <em>listener</em> and <code>.foo</code> as the <em>typename</em>, where <code>foo</code> is the name; to remove all listeners with no name, specify <code>.</code> as the <em>typename</em>.</p>
<p>An optional <em>capture</em> flag may be specified which corresponds to the W3C <a href="http://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-registration" rel="nofollow">useCapture flag</a>: “After initiating capture, all events of the specified type will be dispatched to the registered EventListener before being dispatched to any EventTargets beneath them in the tree. Events which are bubbling upward through the tree will not trigger an EventListener designated to use capture.”</p>
<p>If a <em>listener</em> is not specified, returns the currently-assigned listener for the specified event <em>typename</em> on the first (non-null) selected element, if any. If multiple typenames are specified, the first matching listener is returned.</p>
<p><a name="user-content-selection_dispatch" href="#selection_dispatch">#</a> <i>selection</i>.<b>dispatch</b>(<i>type</i>[, <i>parameters</i>]) <a href="https://github.com/d3/d3-selection/blob/master/src/selection/dispatch.js" title="Source">&lt;&gt;</a></p>
<p>Dispatches a <a href="http://www.w3.org/TR/dom/#interface-customevent" rel="nofollow">custom event</a> of the specified <em>type</em> to each selected element, in order. An optional <em>parameters</em> map may be specified to set additional properties of the event. It may contain the following fields:</p>
<ul>
<li><a href="https://www.w3.org/TR/dom/#dom-event-bubbles" rel="nofollow"><code>bubbles</code></a> - if true, the event is dispatched to ancestors in reverse tree order.</li>
<li><a href="https://www.w3.org/TR/dom/#dom-event-cancelable" rel="nofollow"><code>cancelable</code></a> - if true, <em>event</em>.preventDefault is allowed.</li>
<li><a href="https://www.w3.org/TR/dom/#dom-customevent-detail" rel="nofollow"><code>detail</code></a> - any custom data associated with the event.</li>
</ul>
<p>If <em>parameters</em> is a function, it is evaluated for each selected element, in order, being passed the current datum (<em>d</em>), the current index (<em>i</em>), and the current group (<em>nodes</em>), with <em>this</em> as the current DOM element (<em>nodes</em>[<em>i</em>]). It must return the parameters map for the current element.</p>
<p><a name="user-content-event" href="#event">#</a> d3.<b>event</b></p>
<p>The current <a href="https://developer.mozilla.org/en-US/docs/DOM/event" rel="nofollow">event</a>, if any. This is set during the invocation of an event listener, and is reset after the listener terminates. Use this to access standard event fields such as <a href="https://www.w3.org/TR/dom/#dom-event-timestamp" rel="nofollow"><em>event</em>.timeStamp</a> and methods such as <a href="https://www.w3.org/TR/dom/#dom-event-preventdefault" rel="nofollow"><em>event</em>.preventDefault</a>. While you can use the native <a href="https://developer.mozilla.org/en/DOM/event.pageX" rel="nofollow"><em>event</em>.pageX</a> and <a href="https://developer.mozilla.org/en/DOM/event.pageY" rel="nofollow"><em>event</em>.pageY</a>, it is often more convenient to transform the event position to the local coordinate system of the container that received the event using <a href="#mouse">d3.mouse</a>, <a href="#touch">d3.touch</a> or <a href="#touches">d3.touches</a>.</p>
<p>If you use Babel, Webpack, or another ES6-to-ES5 bundler, be aware that the value of d3.event changes during an event! An import of d3.event must be a <a href="http://www.2ality.com/2015/07/es6-module-exports.html" rel="nofollow">live binding</a>, so you may need to configure the bundler to import from D3’s ES6 modules rather than from the generated UMD bundle; not all bundlers observe <a href="https://github.com/rollup/rollup/wiki/jsnext:main">jsnext:main</a>. Also beware of conflicts with the <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/event" rel="nofollow"><em>window</em>.event</a> global.</p>
<p><a name="user-content-customEvent" href="#customEvent">#</a> d3.<b>customEvent</b>(<i>event</i>, <i>listener</i>[, <i>that</i>[, <i>arguments</i>]]) <a href="https://github.com/d3/d3-selection/blob/master/src/selection/on.js#L98" title="Source">&lt;&gt;</a></p>
<p>Invokes the specified <em>listener</em>, using the specified <em>that</em> <code>this</code> context and passing the specified <em>arguments</em>, if any. During the invocation, <a href="#event">d3.event</a> is set to the specified <em>event</em>; after the listener returns (or throws an error), d3.event is restored to its previous value. In addition, sets <em>event</em>.sourceEvent to the prior value of d3.event, allowing custom events to retain a reference to the originating native event. Returns the value returned by the <em>listener</em>.</p>
<p><a name="user-content-mouse" href="#mouse">#</a> d3.<b>mouse</b>(<i>container</i>) <a href="https://github.com/d3/d3-selection/blob/master/src/mouse.js" title="Source">&lt;&gt;</a></p>
<p>Returns the <em>x</em> and <em>y</em> coordinates of the <a href="#event">current event</a> relative to the specified <em>container</em>. The container may be an HTML or SVG container element, such as a <a href="http://www.w3.org/TR/SVG/struct.html#Groups" rel="nofollow">G element</a> or an <a href="http://www.w3.org/TR/SVG/struct.html#SVGElement" rel="nofollow">SVG element</a>. The coordinates are returned as a two-element array of numbers [<em>x</em>, <em>y</em>].</p>
<p><a name="user-content-touch" href="#touch">#</a> d3.<b>touch</b>(<i>container</i>[, <i>touches</i>], <i>identifier</i>) <a href="https://github.com/d3/d3-selection/blob/master/src/touch.js" title="Source">&lt;&gt;</a></p>
<p>Returns the <em>x</em> and <em>y</em> coordinates of the touch with the specified <em>identifier</em> associated with the <a href="#event">current event</a> relative to the specified <em>container</em>. The container may be an HTML or SVG container element, such as a <a href="http://www.w3.org/TR/SVG/struct.html#Groups" rel="nofollow">G element</a> or an <a href="http://www.w3.org/TR/SVG/struct.html#SVGElement" rel="nofollow">SVG element</a>. The coordinates are returned as a two-element array of numbers [<em>x</em>, <em>y</em>]. If there is no touch with the specified identifier in <em>touches</em>, returns null; this can be useful for ignoring touchmove events where the only some touches have moved. If <em>touches</em> is not specified, it defaults to the current event’s <a href="http://developer.apple.com/library/safari/documentation/UserExperience/Reference/TouchEventClassReference/TouchEvent/TouchEvent.html#//apple_ref/javascript/instp/TouchEvent/changedTouches" rel="nofollow">changedTouches</a> property.</p>
<p><a name="user-content-touches" href="#touches">#</a> d3.<b>touches</b>(<i>container</i>[, <i>touches</i>]) <a href="https://github.com/d3/d3-selection/blob/master/src/touches.js" title="Source">&lt;&gt;</a></p>
<p>Returns the <em>x</em> and <em>y</em> coordinates of the touches associated with the <a href="#event">current event</a> relative to the specified <em>container</em>. The container may be an HTML or SVG container element, such as a <a href="http://www.w3.org/TR/SVG/struct.html#Groups" rel="nofollow">G element</a> or an <a href="http://www.w3.org/TR/SVG/struct.html#SVGElement" rel="nofollow">SVG element</a>. The coordinates are returned as an array of two-element arrays of numbers [[<em>x1</em>, <em>y1</em>], [<em>x2</em>, <em>y2</em>], …]. If <em>touches</em> is not specified, it defaults to the current event’s <a href="http://developer.apple.com/library/safari/documentation/UserExperience/Reference/TouchEventClassReference/TouchEvent/TouchEvent.html#//apple_ref/javascript/instp/TouchEvent/touches" rel="nofollow">touches</a> property.</p>
<p><a name="user-content-clientPoint" href="#clientPoint">#</a> d3.<b>clientPoint</b>(<i>container</i>, <i>event</i>) <a href="https://github.com/d3/d3-selection/blob/master/src/point.js" title="Source">&lt;&gt;</a></p>
<p>Returns the <em>x</em> and <em>y</em> coordinates of the specified <em>event</em> relative to the specified <em>container</em>. (The <em>event</em> may also be a <a href="https://www.w3.org/TR/touch-events/#touch-interface" rel="nofollow">touch</a>.) The container may be an HTML or SVG container element, such as a <a href="http://www.w3.org/TR/SVG/struct.html#Groups" rel="nofollow">G element</a> or an <a href="http://www.w3.org/TR/SVG/struct.html#SVGElement" rel="nofollow">SVG element</a>. The coordinates are returned as a two-element array of numbers [<em>x</em>, <em>y</em>].</p>
<h3><a href="#control-flow" aria-hidden="true" class="anchor" id="user-content-control-flow"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Control Flow</h3>
<p>For advanced usage, selections provide methods for custom control flow.</p>
<p><a name="user-content-selection_each" href="#selection_each">#</a> <i>selection</i>.<b>each</b>(<i>function</i>) <a href="https://github.com/d3/d3-selection/blob/master/src/selection/each.js" title="Source">&lt;&gt;</a></p>
<p>Invokes the specified <em>function</em> for each selected element, in order, being passed the current datum (<em>d</em>), the current index (<em>i</em>), and the current group (<em>nodes</em>), with <em>this</em> as the current DOM element (<em>nodes</em>[<em>i</em>]). This method can be used to invoke arbitrary code for each selected element, and is useful for creating a context to access parent and child data simultaneously, such as:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-smi">parent</span>.<span class="pl-en">each</span>(<span class="pl-k">function</span>(<span class="pl-smi">p</span>, <span class="pl-smi">j</span>) {
  <span class="pl-smi">d3</span>.<span class="pl-c1">select</span>(<span class="pl-c1">this</span>)
    .<span class="pl-en">selectAll</span>(<span class="pl-s"><span class="pl-pds">"</span>.child<span class="pl-pds">"</span></span>)
      .<span class="pl-c1">text</span>(<span class="pl-k">function</span>(<span class="pl-smi">d</span>, <span class="pl-smi">i</span>) { <span class="pl-k">return</span> <span class="pl-s"><span class="pl-pds">"</span>child <span class="pl-pds">"</span></span> <span class="pl-k">+</span> <span class="pl-smi">d</span>.<span class="pl-c1">name</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">"</span> of <span class="pl-pds">"</span></span> <span class="pl-k">+</span> <span class="pl-smi">p</span>.<span class="pl-c1">name</span>; });
});</pre></div>
<p>See <a href="http://bl.ocks.org/mbostock/4c5fad723c87d2fd8273" rel="nofollow">Sized Donut Multiples</a> for an example.</p>
<p><a name="user-content-selection_call" href="#selection_call">#</a> <i>selection</i>.<b>call</b>(<i>function</i>[, <i>arguments…</i>]) <a href="https://github.com/d3/d3-selection/blob/master/src/selection/call.js" title="Source">&lt;&gt;</a></p>
<p>Invokes the specified <em>function</em> exactly once, passing in this selection along with any optional <em>arguments</em>. Returns this selection. This is equivalent to invoking the function by hand but facilitates method chaining. For example, to set several styles in a reusable function:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">function</span> <span class="pl-en">name</span>(<span class="pl-smi">selection</span>, <span class="pl-smi">first</span>, <span class="pl-smi">last</span>) {
  selection
      .<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">"</span>first-name<span class="pl-pds">"</span></span>, first)
      .<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">"</span>last-name<span class="pl-pds">"</span></span>, last);
}</pre></div>
<p>Now say:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-smi">d3</span>.<span class="pl-en">selectAll</span>(<span class="pl-s"><span class="pl-pds">"</span>div<span class="pl-pds">"</span></span>).<span class="pl-c1">call</span>(name, <span class="pl-s"><span class="pl-pds">"</span>John<span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>Snow<span class="pl-pds">"</span></span>);</pre></div>
<p>This is roughly equivalent to:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-en">name</span>(<span class="pl-smi">d3</span>.<span class="pl-en">selectAll</span>(<span class="pl-s"><span class="pl-pds">"</span>div<span class="pl-pds">"</span></span>), <span class="pl-s"><span class="pl-pds">"</span>John<span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>Snow<span class="pl-pds">"</span></span>);</pre></div>
<p>The only difference is that <em>selection</em>.call always returns the <em>selection</em> and not the return value of the called <em>function</em>, <code>name</code>.</p>
<p><a name="user-content-selection_empty" href="#selection_empty">#</a> <i>selection</i>.<b>empty</b>() <a href="https://github.com/d3/d3-selection/blob/master/src/selection/empty.js" title="Source">&lt;&gt;</a></p>
<p>Returns true if this selection contains no (non-null) elements.</p>
<p><a name="user-content-selection_nodes" href="#selection_nodes">#</a> <i>selection</i>.<b>nodes</b>() <a href="https://github.com/d3/d3-selection/blob/master/src/selection/nodes.js" title="Source">&lt;&gt;</a></p>
<p>Returns an array of all (non-null) elements in this selection.</p>
<p><a name="user-content-selection_node" href="#selection_node">#</a> <i>selection</i>.<b>node</b>() <a href="https://github.com/d3/d3-selection/blob/master/src/selection/node.js" title="Source">&lt;&gt;</a></p>
<p>Returns the first (non-null) element in this selection. If the selection is empty, returns null.</p>
<p><a name="user-content-selection_size" href="#selection_size">#</a> <i>selection</i>.<b>size</b>() <a href="https://github.com/d3/d3-selection/blob/master/src/selection/size.js" title="Source">&lt;&gt;</a></p>
<p>Returns the total number of elements in this selection.</p>
<h3><a href="#local-variables" aria-hidden="true" class="anchor" id="user-content-local-variables"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Local Variables</h3>
<p>D3 locals allow you to define local state independent of data. For instance, when rendering <a href="http://bl.ocks.org/mbostock/e1192fe405703d8321a5187350910e08" rel="nofollow">small multiples</a> of time-series data, you might want the same <em>x</em>-scale for all charts but distinct <em>y</em>-scales to compare the relative performance of each metric. D3 locals are scoped by DOM elements: on set, the value is stored on the given element; on get, the value is retrieved from given element or the nearest ancestor that defines it.</p>
<p><a name="user-content-local" href="#local">#</a> d3.<b>local</b>() <a href="https://github.com/d3/d3-selection/blob/master/src/local.js" title="Source">&lt;&gt;</a></p>
<p>Declares a new local variable. For example:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">var</span> foo <span class="pl-k">=</span> <span class="pl-smi">d3</span>.<span class="pl-en">local</span>();</pre></div>
<p>Like <code>var</code>, each local is a distinct symbolic reference; unlike <code>var</code>, the value of each local is also scoped by the DOM.</p>
<p><a name="user-content-local_set" href="#local_set">#</a> <i>local</i>.<b>set</b>(<i>node</i>, <i>value</i>) <a href="https://github.com/d3/d3-selection/blob/master/src/local.js#L18" title="Source">&lt;&gt;</a></p>
<p>Sets the value of this local on the specified <em>node</em> to the <em>value</em>, and returns the specified <em>value</em>. This is often performed using <a href="#selection_each"><em>selection</em>.each</a>:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-smi">selection</span>.<span class="pl-en">each</span>(<span class="pl-k">function</span>(<span class="pl-smi">d</span>) { <span class="pl-smi">foo</span>.<span class="pl-c1">set</span>(<span class="pl-c1">this</span>, <span class="pl-smi">d</span>.<span class="pl-c1">value</span>); });</pre></div>
<p>If you are just setting a single variable, consider using <a href="#selection_property"><em>selection</em>.property</a>:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-smi">selection</span>.<span class="pl-en">property</span>(foo, <span class="pl-k">function</span>(<span class="pl-smi">d</span>) { <span class="pl-k">return</span> <span class="pl-smi">d</span>.<span class="pl-c1">value</span>; });</pre></div>
<p><a name="user-content-local_get" href="#local_get">#</a> <i>local</i>.<b>get</b>(<i>node</i>) <a href="https://github.com/d3/d3-selection/blob/master/src/local.js#L13" title="Source">&lt;&gt;</a></p>
<p>Returns the value of this local on the specified <em>node</em>. If the <em>node</em> does not define this local, returns the value from the nearest ancestor that defines it. Returns undefined if no ancestor defines this local.</p>
<p><a name="user-content-local_remove" href="#local_remove">#</a> <i>local</i>.<b>remove</b>(<i>node</i>) <a href="https://github.com/d3/d3-selection/blob/master/src/local.js#L21" title="Source">&lt;&gt;</a></p>
<p>Deletes this local’s value from the specified <em>node</em>. Returns true if the <em>node</em> defined this local prior to removal, and false otherwise. If ancestors also define this local, those definitions are unaffected, and thus <a href="#local_get"><em>local</em>.get</a> will still return the inherited value.</p>
<p><a name="user-content-local_toString" href="#local_toString">#</a> <i>local</i>.<b>toString</b>() <a href="https://github.com/d3/d3-selection/blob/master/src/local.js#L24" title="Source">&lt;&gt;</a></p>
<p>Returns the automatically-generated identifier for this local. This is the name of the property that is used to store the local’s value on elements, and thus you can also set or get the local’s value using <em>element</em>[<em>local</em>] or by using <a href="#selection_property"><em>selection</em>.property</a>.</p>
<h3><a href="#namespaces" aria-hidden="true" class="anchor" id="user-content-namespaces"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Namespaces</h3>
<p>XML namespaces are fun! Right? Fortunately you can mostly ignore them.</p>
<p><a name="user-content-namespace" href="#namespace">#</a> d3.<b>namespace</b>(<i>name</i>) <a href="https://github.com/d3/d3-selection/blob/master/src/namespace.js" title="Source">&lt;&gt;</a></p>
<p>Qualifies the specified <em>name</em>, which may or may not have a namespace prefix. If the name contains a colon (<code>:</code>), the substring before the colon is interpreted as the namespace prefix, which must be registered in <a href="#namespaces">d3.namespaces</a>. Returns an object <code>space</code> and <code>local</code> attributes describing the full namespace URL and the local name. For example:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-smi">d3</span>.<span class="pl-en">namespace</span>(<span class="pl-s"><span class="pl-pds">"</span>svg:text<span class="pl-pds">"</span></span>); <span class="pl-c"><span class="pl-c">//</span> {space: "http://www.w3.org/2000/svg", local: "text"}</span></pre></div>
<p>If the name does not contain a colon, this function merely returns the input name.</p>
<p><a name="user-content-namespaces" href="#namespaces">#</a> d3.<b>namespaces</b> <a href="https://github.com/d3/d3-selection/blob/master/src/namespaces.js" title="Source">&lt;&gt;</a></p>
<p>The map of registered namespace prefixes. The initial value is:</p>
<div class="highlight highlight-source-js"><pre>{
  svg<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>http://www.w3.org/2000/svg<span class="pl-pds">"</span></span>,
  xhtml<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>http://www.w3.org/1999/xhtml<span class="pl-pds">"</span></span>,
  xlink<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>http://www.w3.org/1999/xlink<span class="pl-pds">"</span></span>,
  xml<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>http://www.w3.org/XML/1998/namespace<span class="pl-pds">"</span></span>,
  xmlns<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>http://www.w3.org/2000/xmlns/<span class="pl-pds">"</span></span>
}</pre></div>
<p>Additional prefixes may be assigned as needed to create elements or attributes in other namespaces.</p>
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
      <li class="mr-3">&copy; 2018 <span title="0.19025s from unicorn-2657157768-wx8rb">GitHub</span>, Inc.</li>
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


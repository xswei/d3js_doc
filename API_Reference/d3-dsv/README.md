





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
  
  <title>d3-dsv/README.md at master · d3/d3-dsv</title>
  <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
  <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
  <meta property="fb:app_id" content="1401488693436528">

    
    <meta content="https://avatars3.githubusercontent.com/u/1562726?s=400&amp;v=4" property="og:image" /><meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="d3/d3-dsv" property="og:title" /><meta content="https://github.com/d3/d3-dsv" property="og:url" /><meta content="d3-dsv - A parser and formatter for delimiter-separated values, such as CSV and TSV." property="og:description" />

  <link rel="assets" href="https://assets-cdn.github.com/">
  <link rel="web-socket" href="wss://live.github.com/_sockets/VjI6MjM0MjAxNjIzOjkwNGMzY2U1OWNkMzczY2ZjMDM2MjgxNzc5OTBjMmU2ZDAzOWY3YmIzZWNlMWE4MGQ5ODRlNjQ3ZmUwNzViMmM=--8b62ca86799eefcaffc40f69369c5cae1ddf9ed9">
  <meta name="pjax-timeout" content="1000">
  <link rel="sudo-modal" href="/sessions/sudo_modal">
  <meta name="request-id" content="F902:1FA0E:1199BD9:198D481:5A603DDE" data-pjax-transient>
  

  <meta name="selected-link" value="repo_source" data-pjax-transient>

    <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
  <meta name="google-site-verification" content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA">
  <meta name="google-site-verification" content="GXs5KoUUkNCoaAZn7wPN-t01Pywp9M3sEjnt_3_ZWPc">
    <meta name="google-analytics" content="UA-3769691-2">

<meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="https://collector.githubapp.com/github-external/browser_event" name="octolytics-event-url" /><meta content="F902:1FA0E:1199BD9:198D481:5A603DDE" name="octolytics-dimension-request_id" /><meta content="sea" name="octolytics-dimension-region_edge" /><meta content="iad" name="octolytics-dimension-region_render" /><meta content="16659379" name="octolytics-actor-id" /><meta content="xswei" name="octolytics-actor-login" /><meta content="72a8b786cd27412ba348c71058cf2aed3e8f8772266e5c157980395250fb923d" name="octolytics-actor-hash" />
<meta content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-pjax-transient="true" name="analytics-location" />




  <meta class="js-ga-set" name="dimension1" content="Logged In">


  

      <meta name="hostname" content="github.com">
  <meta name="user-login" content="xswei">

      <meta name="expected-hostname" content="github.com">
    <meta name="js-proxy-site-detection-payload" content="MWE3ZjVhOTY0NDYzZWIyMTFkYjRiMzkwMzRhMTA2YmViY2ZjNTIyMDcxMDBhZGIwZjJmN2I4MzQ1MTFkYTk2M3x7InJlbW90ZV9hZGRyZXNzIjoiMjIwLjE4MS4xNzEuMTI1IiwicmVxdWVzdF9pZCI6IkY5MDI6MUZBMEU6MTE5OUJEOToxOThENDgxOjVBNjAzRERFIiwidGltZXN0YW1wIjoxNTE2MjU2NzM2LCJob3N0IjoiZ2l0aHViLmNvbSJ9">

    <meta name="enabled-features" content="UNIVERSE_BANNER,FREE_TRIALS">

  <meta name="html-safe-nonce" content="95ac36701972faaa3306c820d3f61fe703aeac54">

  <meta http-equiv="x-pjax-version" content="c0275ff3857f879afa7c0ef3fbc951b4">
  

      <link href="https://github.com/d3/d3-dsv/commits/master.atom" rel="alternate" title="Recent Commits to d3-dsv:master" type="application/atom+xml">

  <meta name="description" content="d3-dsv - A parser and formatter for delimiter-separated values, such as CSV and TSV.">
  <meta name="go-import" content="github.com/d3/d3-dsv git https://github.com/d3/d3-dsv.git">

  <meta content="1562726" name="octolytics-dimension-user_id" /><meta content="d3" name="octolytics-dimension-user_login" /><meta content="8656425" name="octolytics-dimension-repository_id" /><meta content="d3/d3-dsv" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="8656425" name="octolytics-dimension-repository_network_root_id" /><meta content="d3/d3-dsv" name="octolytics-dimension-repository_network_root_nwo" /><meta content="false" name="octolytics-dimension-repository_explore_github_marketplace_ci_cta_shown" />


    <link rel="canonical" href="https://github.com/d3/d3-dsv/blob/master/README.md" data-pjax-transient>


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
  <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/d3/d3-dsv/search" class="js-site-search-form" data-scoped-search-url="/d3/d3-dsv/search" data-unscoped-search-url="/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <label class="form-control header-search-wrapper js-chromeless-input-container">
        <a href="/d3/d3-dsv/blob/master/README.md" class="header-search-scope no-underline">This repository</a>
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
    <span title="d3/d3-dsv">This repository</span>
  </div>
    <a class="dropdown-item" href="/d3/d3-dsv/issues/new" data-ga-click="Header, create new issue">
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

        <li><!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/logout" class="logout-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="qc1bgxdCsJ9FEpvIRPRcbK/iCqL1MhI9ejAPDjDoCq03q9/2XEUEEz5CSUizZyTc7K73963K5PXIRDCscUAL0w==" /></div>
          <button type="submit" class="dropdown-item dropdown-signout" data-ga-click="Header, sign out, icon:logout">
            Sign out
          </button>
        </form></li>
      </ul>
    </details>
  </li>
</ul>


        <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/logout" class="sr-only right-0" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="6kMJ+TSKdHRfBV3IhlxRxiUFdgaf77afEkS6tXISO0B0JY2Mf43A+CRVj0hxzyl2ZkmLU8cXQFegMIUXM7o6Pg==" /></div>
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
        <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="sG0wRhh2bh3lggRtqiYQeSx3d3hXs/QRIbdQMRUZW4LdhHNW/7fcW95dgufwHIYCruxaXglOyiMDTG5ifkRXzQ==" /></div>      <input class="form-control" id="repository_id" name="repository_id" type="hidden" value="8656425" />

        <div class="select-menu js-menu-container js-select-menu">
          <a href="/d3/d3-dsv/subscription"
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
            href="/d3/d3-dsv/watchers"
            aria-label="11 users are watching this repository">
            11
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
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/d3/d3-dsv/unstar" class="starred js-social-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="U6gi6GDIDk7ugTHpXimuK7obOscNQXtm7LLSRw1j4igPTbt8QyegxtjNQiiHi2/h3pt2bFJUlNqEgHADKpae4Q==" /></div>
      <input type="hidden" name="context" value="repository"></input>
      <button
        type="submit"
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Unstar this repository" title="Unstar d3/d3-dsv"
        data-ga-click="Repository, click unstar button, action:blob#show; text:Unstar">
        <svg aria-hidden="true" class="octicon octicon-star" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"/></svg>
        Unstar
      </button>
        <a class="social-count js-social-count" href="/d3/d3-dsv/stargazers"
           aria-label="153 users starred this repository">
          153
        </a>
</form>
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/d3/d3-dsv/star" class="unstarred js-social-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="0YUPkOhNFKrqfmP5rjDrQEYGuoSWLmfQcBF+dH7RLRlHsop5MY8/FuPyBN8GhpifEWXIZ1E75YfpFdx7PkLMwg==" /></div>
      <input type="hidden" name="context" value="repository"></input>
      <button
        type="submit"
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Star this repository" title="Star d3/d3-dsv"
        data-ga-click="Repository, click star button, action:blob#show; text:Star">
        <svg aria-hidden="true" class="octicon octicon-star" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"/></svg>
        Star
      </button>
        <a class="social-count js-social-count" href="/d3/d3-dsv/stargazers"
           aria-label="153 users starred this repository">
          153
        </a>
</form>  </div>

  </li>

  <li>
          <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/d3/d3-dsv/fork" class="btn-with-count" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="CgjspEFn3QfjO9lhn6PifrKd06WN5s/DY0LWyWJPdvIMGFp8poT5kYbIJd5iwRCLQVide+g1tsgHTzFFKVsalg==" /></div>
            <button
                type="submit"
                class="btn btn-sm btn-with-count"
                data-ga-click="Repository, show fork modal, action:blob#show; text:Fork"
                title="Fork your own copy of d3/d3-dsv to your account"
                aria-label="Fork your own copy of d3/d3-dsv to your account">
              <svg aria-hidden="true" class="octicon octicon-repo-forked" height="16" version="1.1" viewBox="0 0 10 16" width="10"><path fill-rule="evenodd" d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
              Fork
            </button>
</form>
    <a href="/d3/d3-dsv/network" class="social-count"
       aria-label="31 users forked this repository">
      31
    </a>
  </li>
</ul>

      <h1 class="public ">
  <svg aria-hidden="true" class="octicon octicon-repo" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
  <span class="author" itemprop="author"><a href="/d3" class="url fn" rel="author">d3</a></span><!--
--><span class="path-divider">/</span><!--
--><strong itemprop="name"><a href="/d3/d3-dsv" data-pjax="#js-repo-pjax-container">d3-dsv</a></strong>

</h1>

    </div>
    
<nav class="reponav js-repo-nav js-sidenav-container-pjax container"
     itemscope
     itemtype="http://schema.org/BreadcrumbList"
     role="navigation"
     data-pjax="#js-repo-pjax-container">

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/d3/d3-dsv" class="js-selected-navigation-item selected reponav-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches repo_packages /d3/d3-dsv" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-code" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z"/></svg>
      <span itemprop="name">Code</span>
      <meta itemprop="position" content="1">
</a>  </span>

    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a href="/d3/d3-dsv/issues" class="js-selected-navigation-item reponav-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /d3/d3-dsv/issues" itemprop="url">
        <svg aria-hidden="true" class="octicon octicon-issue-opened" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"/></svg>
        <span itemprop="name">Issues</span>
        <span class="Counter">3</span>
        <meta itemprop="position" content="2">
</a>    </span>

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/d3/d3-dsv/pulls" class="js-selected-navigation-item reponav-item" data-hotkey="g p" data-selected-links="repo_pulls /d3/d3-dsv/pulls" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-git-pull-request" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M11 11.28V5c-.03-.78-.34-1.47-.94-2.06C9.46 2.35 8.78 2.03 8 2H7V0L4 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0 0 10 15a1.993 1.993 0 0 0 1-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zM4 3c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v6.56A1.993 1.993 0 0 0 2 15a1.993 1.993 0 0 0 1-3.72V4.72c.59-.34 1-.98 1-1.72zm-.8 10c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
      <span itemprop="name">Pull requests</span>
      <span class="Counter">0</span>
      <meta itemprop="position" content="3">
</a>  </span>




  <a href="/d3/d3-dsv/pulse" class="js-selected-navigation-item reponav-item" data-selected-links="repo_graphs repo_contributors dependency_graph pulse /d3/d3-dsv/pulse">
    <svg aria-hidden="true" class="octicon octicon-graph" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M16 14v1H0V0h1v14h15zM5 13H3V8h2v5zm4 0H7V3h2v10zm4 0h-2V6h2v7z"/></svg>
    Insights
</a>

</nav>


  </div>

<div class="container new-discussion-timeline experiment-repo-nav ">
  <div class="repository-content ">

    
  <a href="/d3/d3-dsv/blob/19d97154c3e14024f6b25baa52f2b8893275bca2/README.md" class="d-none js-permalink-shortcut" data-hotkey="y">Permalink</a>

  <!-- blob contrib key: blob_contributors:v21:daa9fce3fb5615f1777ed0cda17f9934 -->

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
               href="/d3/d3-dsv/blob/master/README.md"
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
              href="/d3/d3-dsv/tree/v1.0.8/README.md"
              data-name="v1.0.8"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.8">
                v1.0.8
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-dsv/tree/v1.0.7/README.md"
              data-name="v1.0.7"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.7">
                v1.0.7
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-dsv/tree/v1.0.6/README.md"
              data-name="v1.0.6"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.6">
                v1.0.6
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-dsv/tree/v1.0.5/README.md"
              data-name="v1.0.5"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.5">
                v1.0.5
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-dsv/tree/v1.0.4/README.md"
              data-name="v1.0.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.4">
                v1.0.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-dsv/tree/v1.0.3/README.md"
              data-name="v1.0.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.3">
                v1.0.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-dsv/tree/v1.0.2/README.md"
              data-name="v1.0.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.2">
                v1.0.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-dsv/tree/v1.0.1/README.md"
              data-name="v1.0.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.1">
                v1.0.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-dsv/tree/v1.0.0/README.md"
              data-name="v1.0.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.0">
                v1.0.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-dsv/tree/v0.4.0/README.md"
              data-name="v0.4.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.4.0">
                v0.4.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-dsv/tree/v0.3.2/README.md"
              data-name="v0.3.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.3.2">
                v0.3.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-dsv/tree/v0.3.1/README.md"
              data-name="v0.3.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.3.1">
                v0.3.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-dsv/tree/v0.3.0/README.md"
              data-name="v0.3.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.3.0">
                v0.3.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-dsv/tree/v0.2.0/README.md"
              data-name="v0.2.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.2.0">
                v0.2.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-dsv/tree/v0.1.14/README.md"
              data-name="v0.1.14"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.1.14">
                v0.1.14
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-dsv/tree/v0.1.13/README.md"
              data-name="v0.1.13"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.1.13">
                v0.1.13
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-dsv/tree/v0.1.12/README.md"
              data-name="v0.1.12"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.1.12">
                v0.1.12
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-dsv/tree/v0.1.11/README.md"
              data-name="v0.1.11"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.1.11">
                v0.1.11
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-dsv/tree/v0.1.10/README.md"
              data-name="v0.1.10"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.1.10">
                v0.1.10
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-dsv/tree/v0.1.9/README.md"
              data-name="v0.1.9"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.1.9">
                v0.1.9
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-dsv/tree/v0.1.8/README.md"
              data-name="v0.1.8"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.1.8">
                v0.1.8
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-dsv/tree/v0.1.7/README.md"
              data-name="v0.1.7"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.1.7">
                v0.1.7
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-dsv/tree/v0.1.6/README.md"
              data-name="v0.1.6"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.1.6">
                v0.1.6
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-dsv/tree/v0.1.5/README.md"
              data-name="v0.1.5"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.1.5">
                v0.1.5
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-dsv/tree/v0.1.4/README.md"
              data-name="v0.1.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.1.4">
                v0.1.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-dsv/tree/v0.1.3/README.md"
              data-name="v0.1.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.1.3">
                v0.1.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-dsv/tree/v0.1.2/README.md"
              data-name="v0.1.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.1.2">
                v0.1.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-dsv/tree/v0.1.1/README.md"
              data-name="v0.1.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.1.1">
                v0.1.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-dsv/tree/v0.1.0/README.md"
              data-name="v0.1.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.1.0">
                v0.1.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-dsv/tree/v0.0.4/README.md"
              data-name="v0.0.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.0.4">
                v0.0.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-dsv/tree/v0.0.3/README.md"
              data-name="v0.0.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.0.3">
                v0.0.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-dsv/tree/v0.0.2/README.md"
              data-name="v0.0.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.0.2">
                v0.0.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/d3/d3-dsv/tree/v0.0.1/README.md"
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
      <a href="/d3/d3-dsv/find/master"
            class="js-pjax-capture-input btn btn-sm BtnGroup-item"
            data-pjax
            data-hotkey="t">
        Find file
      </a>
      <button aria-label="Copy file path to clipboard" class="js-zeroclipboard btn btn-sm BtnGroup-item tooltipped tooltipped-s" data-copied-hint="Copied!" type="button">Copy path</button>
    </div>
    <div class="breadcrumb js-zeroclipboard-target">
      <span class="repo-root js-repo-root"><span class="js-path-segment"><a href="/d3/d3-dsv"><span>d3-dsv</span></a></span></span><span class="separator">/</span><strong class="final-path">README.md</strong>
    </div>
  </div>


  
  <div class="commit-tease">
      <span class="float-right">
        <a class="commit-tease-sha" href="/d3/d3-dsv/commit/fc5a64ba46bbd2c05bc25dd94a0c045a46206352" data-pjax>
          fc5a64b
        </a>
        <relative-time datetime="2017-05-17T17:45:53Z">May 17, 2017</relative-time>
      </span>
      <div>
        <img alt="@mbostock" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/230541?s=40&amp;v=4" width="20" />
        <a href="/mbostock" class="user-mention" rel="contributor">mbostock</a>
          <a href="/d3/d3-dsv/commit/fc5a64ba46bbd2c05bc25dd94a0c045a46206352" class="message" data-pjax="true" title="Update README.md.">Update README.md.</a>
      </div>

    <div class="commit-tease-contributors">
      <button type="button" class="btn-link muted-link contributors-toggle" data-facebox="#blob_contributors_box">
        <strong>4</strong>
         contributors
      </button>
          <a class="avatar-link tooltipped tooltipped-s" aria-label="mbostock" href="/d3/d3-dsv/commits/master/README.md?author=mbostock"><img alt="@mbostock" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/230541?s=40&amp;v=4" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="robinhouston" href="/d3/d3-dsv/commits/master/README.md?author=robinhouston"><img alt="@robinhouston" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/103315?s=40&amp;v=4" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="Devinsuit" href="/d3/d3-dsv/commits/master/README.md?author=Devinsuit"><img alt="@Devinsuit" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/11741306?s=40&amp;v=4" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="dandv" href="/d3/d3-dsv/commits/master/README.md?author=dandv"><img alt="@dandv" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/33569?s=40&amp;v=4" width="20" /> </a>


    </div>

    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header" data-facebox-id="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list" data-facebox-id="facebox-description">
          <li class="facebox-user-list-item">
            <img alt="@mbostock" height="24" src="https://avatars0.githubusercontent.com/u/230541?s=48&amp;v=4" width="24" />
            <a href="/mbostock">mbostock</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@robinhouston" height="24" src="https://avatars0.githubusercontent.com/u/103315?s=48&amp;v=4" width="24" />
            <a href="/robinhouston">robinhouston</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@Devinsuit" height="24" src="https://avatars1.githubusercontent.com/u/11741306?s=48&amp;v=4" width="24" />
            <a href="/Devinsuit">Devinsuit</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@dandv" height="24" src="https://avatars0.githubusercontent.com/u/33569?s=48&amp;v=4" width="24" />
            <a href="/dandv">dandv</a>
          </li>
      </ul>
    </div>
  </div>


  <div class="file">
    <div class="file-header">
  <div class="file-actions">

    <div class="BtnGroup">
      <a href="/d3/d3-dsv/raw/master/README.md" class="btn btn-sm BtnGroup-item" id="raw-url">Raw</a>
        <a href="/d3/d3-dsv/blame/master/README.md" class="btn btn-sm js-update-url-with-hash BtnGroup-item" data-hotkey="b">Blame</a>
      <a href="/d3/d3-dsv/commits/master/README.md" class="btn btn-sm BtnGroup-item" rel="nofollow">History</a>
    </div>

        <a class="btn-octicon tooltipped tooltipped-nw"
           href="github-windows://openRepo/https://github.com/d3/d3-dsv?branch=master&amp;filepath=README.md"
           aria-label="Open this file in GitHub Desktop"
           data-ga-click="Repository, open with desktop, type:windows">
            <svg aria-hidden="true" class="octicon octicon-device-desktop" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M15 2H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5.34c-.25.61-.86 1.39-2.34 2h8c-1.48-.61-2.09-1.39-2.34-2H15c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 9H1V3h14v8z"/></svg>
        </a>

          <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/d3/d3-dsv/edit/master/README.md" class="inline-form js-update-url-with-hash" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="QXdQ+ys8d/Dm3vVzyZ8m8l2rL9hMyqx3BCQ9fuUBEfuynvljSoBRs+Gy8O1chTcHllBfuCmcf2lmMn8AmD4ASQ==" /></div>
            <button class="btn-octicon tooltipped tooltipped-nw" type="submit"
              aria-label="Fork this project and edit the file" data-hotkey="e" data-disable-with>
              <svg aria-hidden="true" class="octicon octicon-pencil" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z"/></svg>
            </button>
</form>
        <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/d3/d3-dsv/delete/master/README.md" class="inline-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="ffJdYR6lIyGq5p5+LXT5lFfjrO4oeC9taKhsOvSdbWCy5G6H0axkQnFjb2JvPw3GxfzlUqf97i+lqf1QSobdTg==" /></div>
          <button class="btn-octicon btn-octicon-danger tooltipped tooltipped-nw" type="submit"
            aria-label="Fork this project and delete the file" data-disable-with>
            <svg aria-hidden="true" class="octicon octicon-trashcan" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M11 2H9c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1H2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1v9c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V5c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 12H3V5h1v8h1V5h1v8h1V5h1v8h1V5h1v9zm1-10H2V3h9v1z"/></svg>
          </button>
</form>  </div>

  <div class="file-info">
      395 lines (248 sloc)
      <span class="file-info-divider"></span>
    19.5 KB
  </div>
</div>

    
  <div id="readme" class="readme blob instapaper_body">
    <article class="markdown-body entry-content" itemprop="text"><h1><a href="#d3-dsv" aria-hidden="true" class="anchor" id="user-content-d3-dsv"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>d3-dsv</h1>
<p>This module provides a parser and formatter for delimiter-separated values, most commonly <a href="https://en.wikipedia.org/wiki/Comma-separated_values">comma-</a> (CSV) or tab-separated values (TSV). These tabular formats are popular with spreadsheet programs such as Microsoft Excel, and are often more space-efficient than JSON. This implementation is based on <a href="http://tools.ietf.org/html/rfc4180">RFC 4180</a>.</p>
<p>Comma (CSV) and tab (TSV) delimiters are built-in. For example, to parse:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-smi">d3</span>.<span class="pl-en">csvParse</span>(<span class="pl-s"><span class="pl-pds">"</span>foo,bar<span class="pl-cce">\n</span>1,2<span class="pl-pds">"</span></span>); <span class="pl-c"><span class="pl-c">//</span> [{foo: "1", bar: "2"}, columns: ["foo", "bar"]]</span>
<span class="pl-smi">d3</span>.<span class="pl-en">tsvParse</span>(<span class="pl-s"><span class="pl-pds">"</span>foo<span class="pl-cce">\t</span>bar<span class="pl-cce">\n</span>1<span class="pl-cce">\t</span>2<span class="pl-pds">"</span></span>); <span class="pl-c"><span class="pl-c">//</span> [{foo: "1", bar: "2"}, columns: ["foo", "bar"]]</span></pre></div>
<p>Or to format:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-smi">d3</span>.<span class="pl-en">csvFormat</span>([{foo<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>1<span class="pl-pds">"</span></span>, bar<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>2<span class="pl-pds">"</span></span>}]); <span class="pl-c"><span class="pl-c">//</span> "foo,bar\n1,2"</span>
<span class="pl-smi">d3</span>.<span class="pl-en">tsvFormat</span>([{foo<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>1<span class="pl-pds">"</span></span>, bar<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>2<span class="pl-pds">"</span></span>}]); <span class="pl-c"><span class="pl-c">//</span> "foo\tbar\n1\t2"</span></pre></div>
<p>To use a different delimiter, such as “|” for pipe-separated values, use <a href="#dsvFormat">d3.dsvFormat</a>:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">var</span> psv <span class="pl-k">=</span> <span class="pl-smi">d3</span>.<span class="pl-en">dsvFormat</span>(<span class="pl-s"><span class="pl-pds">"</span>|<span class="pl-pds">"</span></span>);

<span class="pl-en">console</span>.<span class="pl-c1">log</span>(<span class="pl-smi">psv</span>.<span class="pl-c1">parse</span>(<span class="pl-s"><span class="pl-pds">"</span>foo|bar<span class="pl-cce">\n</span>1|2<span class="pl-pds">"</span></span>)); <span class="pl-c"><span class="pl-c">//</span> [{foo: "1", bar: "2"}, columns: ["foo", "bar"]]</span></pre></div>
<p>For easy loading of DSV files in a browser, see <a href="https://github.com/d3/d3-request">d3-request</a>’s <a href="https://github.com/d3/d3-request#csv">d3.csv</a> and <a href="https://github.com/d3/d3-request#tsv">d3.tsv</a> methods.</p>
<h2><a href="#installing" aria-hidden="true" class="anchor" id="user-content-installing"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installing</h2>
<p>If you use NPM, <code>npm install d3-dsv</code>. Otherwise, download the <a href="https://github.com/d3/d3-dsv/releases/latest">latest release</a>. You can also load directly from <a href="https://d3js.org">d3js.org</a>, either as a <a href="https://d3js.org/d3-dsv.v1.min.js">standalone library</a> or as part of <a href="https://github.com/d3/d3">D3 4.0</a>. AMD, CommonJS, and vanilla environments are supported. In vanilla, a <code>d3</code> global is exported:</p>
<div class="highlight highlight-text-html-basic"><pre>&lt;<span class="pl-ent">script</span> <span class="pl-e">src</span>=<span class="pl-s"><span class="pl-pds">"</span>https://d3js.org/d3-dsv.v1.min.js<span class="pl-pds">"</span></span>&gt;&lt;/<span class="pl-ent">script</span>&gt;
&lt;<span class="pl-ent">script</span>&gt;<span class="pl-s1"></span>
<span class="pl-s1"></span>
<span class="pl-s1"><span class="pl-k">var</span> data <span class="pl-k">=</span> <span class="pl-smi">d3</span>.<span class="pl-en">csvParse</span>(string);</span>
<span class="pl-s1"></span>
<span class="pl-s1"></span><span class="pl-s1">&lt;</span>/<span class="pl-ent">script</span>&gt;</pre></div>
<p><a href="https://tonicdev.com/npm/d3-dsv">Try d3-dsv in your browser.</a></p>
<h2><a href="#api-reference" aria-hidden="true" class="anchor" id="user-content-api-reference"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>API Reference</h2>
<p><a name="user-content-csvParse" href="#csvParse">#</a> d3.<b>csvParse</b>(<i>string</i>[, <i>row</i>]) <a href="https://github.com/d3/d3-dsv/blob/master/src/csv.js#L5" title="Source">&lt;&gt;</a></p>
<p>Equivalent to <a href="#dsvFormat">dsvFormat</a>(",").<a href="#dsv_parse">parse</a>.</p>
<p><a name="user-content-csvParseRows" href="#csvParseRows">#</a> d3.<b>csvParseRows</b>(<i>string</i>[, <i>row</i>]) <a href="https://github.com/d3/d3-dsv/blob/master/src/csv.js#L6" title="Source">&lt;&gt;</a></p>
<p>Equivalent to <a href="#dsvFormat">dsvFormat</a>(",").<a href="#dsv_parseRows">parseRows</a>.</p>
<p><a name="user-content-csvFormat" href="#csvFormat">#</a> d3.<b>csvFormat</b>(<i>rows</i>[, <i>columns</i>]) <a href="https://github.com/d3/d3-dsv/blob/master/src/csv.js#L7" title="Source">&lt;&gt;</a></p>
<p>Equivalent to <a href="#dsvFormat">dsvFormat</a>(",").<a href="#dsv_format">format</a>.</p>
<p><a name="user-content-csvFormatRows" href="#csvFormatRows">#</a> d3.<b>csvFormatRows</b>(<i>rows</i>) <a href="https://github.com/d3/d3-dsv/blob/master/src/csv.js#L8" title="Source">&lt;&gt;</a></p>
<p>Equivalent to <a href="#dsvFormat">dsvFormat</a>(",").<a href="#dsv_formatRows">formatRows</a>.</p>
<p><a name="user-content-tsvParse" href="#tsvParse">#</a> d3.<b>tsvParse</b>(<i>string</i>[, <i>row</i>]) <a href="https://github.com/d3/d3-dsv/blob/master/src/tsv.js#L5" title="Source">&lt;&gt;</a></p>
<p>Equivalent to <a href="#dsvFormat">dsvFormat</a>("\t").<a href="#dsv_parse">parse</a>.</p>
<p><a name="user-content-tsvParseRows" href="#tsvParseRows">#</a> d3.<b>tsvParseRows</b>(<i>string</i>[, <i>row</i>]) <a href="https://github.com/d3/d3-dsv/blob/master/src/tsv.js#L6" title="Source">&lt;&gt;</a></p>
<p>Equivalent to <a href="#dsvFormat">dsvFormat</a>("\t").<a href="#dsv_parseRows">parseRows</a>.</p>
<p><a name="user-content-tsvFormat" href="#tsvFormat">#</a> d3.<b>tsvFormat</b>(<i>rows</i>[, <i>columns</i>]) <a href="https://github.com/d3/d3-dsv/blob/master/src/tsv.js#L7" title="Source">&lt;&gt;</a></p>
<p>Equivalent to <a href="#dsvFormat">dsvFormat</a>("\t").<a href="#dsv_format">format</a>.</p>
<p><a name="user-content-tsvFormatRows" href="#tsvFormatRows">#</a> d3.<b>tsvFormatRows</b>(<i>rows</i>) <a href="https://github.com/d3/d3-dsv/blob/master/src/tsv.js#L8" title="Source">&lt;&gt;</a></p>
<p>Equivalent to <a href="#dsvFormat">dsvFormat</a>("\t").<a href="#dsv_formatRows">formatRows</a>.</p>
<p><a name="user-content-dsvFormat" href="#dsvFormat">#</a> d3.<b>dsvFormat</b>(<i>delimiter</i>) <a href="https://github.com/d3/d3-dsv/blob/master/src/dsv.js#L30">&lt;&gt;</a></p>
<p>Constructs a new DSV parser and formatter for the specified <em>delimiter</em>. The <em>delimiter</em> must be a single character (<em>i.e.</em>, a single 16-bit code unit); so, ASCII delimiters are fine, but emoji delimiters are not.</p>
<p><a name="user-content-dsv_parse" href="#dsv_parse">#</a> <em>dsv</em>.<b>parse</b>(<i>string</i>[, <i>row</i>]) <a href="https://github.com/d3/d3-dsv/blob/master/src/dsv.js#L34" title="Source">&lt;&gt;</a></p>
<p>Parses the specified <em>string</em>, which must be in the delimiter-separated values format with the appropriate delimiter, returning an array of objects representing the parsed rows.</p>
<p>Unlike <a href="#dsv_parseRows"><em>dsv</em>.parseRows</a>, this method requires that the first line of the DSV content contains a delimiter-separated list of column names; these column names become the attributes on the returned objects. For example, consider the following CSV file:</p>
<pre><code>Year,Make,Model,Length
1997,Ford,E350,2.34
2000,Mercury,Cougar,2.38
</code></pre>
<p>The resulting JavaScript array is:</p>
<div class="highlight highlight-source-js"><pre>[
  {<span class="pl-s"><span class="pl-pds">"</span>Year<span class="pl-pds">"</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>1997<span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>Make<span class="pl-pds">"</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>Ford<span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>Model<span class="pl-pds">"</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>E350<span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>Length<span class="pl-pds">"</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>2.34<span class="pl-pds">"</span></span>},
  {<span class="pl-s"><span class="pl-pds">"</span>Year<span class="pl-pds">"</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>2000<span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>Make<span class="pl-pds">"</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>Mercury<span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>Model<span class="pl-pds">"</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>Cougar<span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>Length<span class="pl-pds">"</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>2.38<span class="pl-pds">"</span></span>}
]</pre></div>
<p>The returned array also exposes a <code>columns</code> property containing the column names in input order (in contrast to Object.keys, whose iteration order is arbitrary). For example:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-smi">data</span>.<span class="pl-smi">columns</span>; <span class="pl-c"><span class="pl-c">//</span> ["Year", "Make", "Model", "Length"]</span></pre></div>
<p>If a <em>row</em> conversion function is not specified, field values are strings. For safety, there is no automatic conversion to numbers, dates, or other types. In some cases, JavaScript may coerce strings to numbers for you automatically (for example, using the <code>+</code> operator), but better is to specify a <em>row</em> conversion function.</p>
<p>If a <em>row</em> conversion function is specified, the specified function is invoked for each row, being passed an object representing the current row (<code>d</code>), the index (<code>i</code>) starting at zero for the first non-header row, and the array of column names. If the returned value is null or undefined, the row is skipped and will be ommitted from the array returned by <em>dsv</em>.parse; otherwise, the returned value defines the corresponding row object. For example:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">var</span> data <span class="pl-k">=</span> <span class="pl-smi">d3</span>.<span class="pl-en">csvParse</span>(string, <span class="pl-k">function</span>(<span class="pl-smi">d</span>) {
  <span class="pl-k">return</span> {
    year<span class="pl-k">:</span> <span class="pl-k">new</span> <span class="pl-en">Date</span>(<span class="pl-k">+</span><span class="pl-smi">d</span>.<span class="pl-smi">Year</span>, <span class="pl-c1">0</span>, <span class="pl-c1">1</span>), <span class="pl-c"><span class="pl-c">//</span> lowercase and convert "Year" to Date</span>
    make<span class="pl-k">:</span> <span class="pl-smi">d</span>.<span class="pl-smi">Make</span>, <span class="pl-c"><span class="pl-c">//</span> lowercase</span>
    model<span class="pl-k">:</span> <span class="pl-smi">d</span>.<span class="pl-smi">Model</span>, <span class="pl-c"><span class="pl-c">//</span> lowercase</span>
    length<span class="pl-k">:</span> <span class="pl-k">+</span><span class="pl-smi">d</span>.<span class="pl-smi">Length</span> <span class="pl-c"><span class="pl-c">//</span> lowercase and convert "Length" to number</span>
  };
});</pre></div>
<p>Note: using <code>+</code> rather than <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/parseInt">parseInt</a> or <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/parseFloat">parseFloat</a> is typically faster, though more restrictive. For example, <code>"30px"</code> when coerced using <code>+</code> returns <code>NaN</code>, while parseInt and parseFloat return <code>30</code>.</p>
<p><a name="user-content-dsv_parseRows" href="#dsv_parseRows">#</a> <i>dsv</i>.<b>parseRows</b>(<i>string</i>[, <i>row</i>]) <a href="https://github.com/d3/d3-dsv/blob/master/src/dsv.js#L43" title="Source">&lt;&gt;</a></p>
<p>Parses the specified <em>string</em>, which must be in the delimiter-separated values format with the appropriate delimiter, returning an array of arrays representing the parsed rows.</p>
<p>Unlike <a href="#dsv_parse"><em>dsv</em>.parse</a>, this method treats the header line as a standard row, and should be used whenever DSV content does not contain a header. Each row is represented as an array rather than an object. Rows may have variable length. For example, consider the following CSV file, which notably lacks a header line:</p>
<pre><code>1997,Ford,E350,2.34
2000,Mercury,Cougar,2.38
</code></pre>
<p>The resulting JavaScript array is:</p>
<div class="highlight highlight-source-js"><pre>[
  [<span class="pl-s"><span class="pl-pds">"</span>1997<span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>Ford<span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>E350<span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>2.34<span class="pl-pds">"</span></span>],
  [<span class="pl-s"><span class="pl-pds">"</span>2000<span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>Mercury<span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>Cougar<span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>2.38<span class="pl-pds">"</span></span>]
]</pre></div>
<p>If a <em>row</em> conversion function is not specified, field values are strings. For safety, there is no automatic conversion to numbers, dates, or other types. In some cases, JavaScript may coerce strings to numbers for you automatically (for example, using the <code>+</code> operator), but better is to specify a <em>row</em> conversion function.</p>
<p>If a <em>row</em> conversion function is specified, the specified function is invoked for each row, being passed an array representing the current row (<code>d</code>), the index (<code>i</code>) starting at zero for the first row, and the array of column names. If the returned value is null or undefined, the row is skipped and will be ommitted from the array returned by <em>dsv</em>.parse; otherwise, the returned value defines the corresponding row object. For example:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">var</span> data <span class="pl-k">=</span> <span class="pl-smi">d3</span>.<span class="pl-en">csvParseRows</span>(string, <span class="pl-k">function</span>(<span class="pl-smi">d</span>, <span class="pl-smi">i</span>) {
  <span class="pl-k">return</span> {
    year<span class="pl-k">:</span> <span class="pl-k">new</span> <span class="pl-en">Date</span>(<span class="pl-k">+</span>d[<span class="pl-c1">0</span>], <span class="pl-c1">0</span>, <span class="pl-c1">1</span>), <span class="pl-c"><span class="pl-c">//</span> convert first colum column to Date</span>
    make<span class="pl-k">:</span> d[<span class="pl-c1">1</span>],
    model<span class="pl-k">:</span> d[<span class="pl-c1">2</span>],
    length<span class="pl-k">:</span> <span class="pl-k">+</span>d[<span class="pl-c1">3</span>] <span class="pl-c"><span class="pl-c">//</span> convert fourth column to number</span>
  };
});</pre></div>
<p>In effect, <em>row</em> is similar to applying a <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/map">map</a> and <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/filter">filter</a> operator to the returned rows.</p>
<p><a name="user-content-dsv_format" href="#dsv_format">#</a> <i>dsv</i>.<b>format</b>(<i>rows</i>[, <i>columns</i>]) <a href="https://github.com/d3/d3-dsv/blob/master/src/dsv.js#L105" title="Source">&lt;&gt;</a></p>
<p>Formats the specified array of object <em>rows</em> as delimiter-separated values, returning a string. This operation is the inverse of <a href="#dsv_parse"><em>dsv</em>.parse</a>. Each row will be separated by a newline (<code>\n</code>), and each column within each row will be separated by the delimiter (such as a comma, <code>,</code>). Values that contain either the delimiter, a double-quote (<code>"</code>) or a newline will be escaped using double-quotes.</p>
<p>If <em>columns</em> is not specified, the list of column names that forms the header row is determined by the union of all properties on all objects in <em>rows</em>; the order of columns is nondeterministic. If <em>columns</em> is specified, it is an array of strings representing the column names. For example:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">var</span> string <span class="pl-k">=</span> <span class="pl-smi">d3</span>.<span class="pl-en">csvFormat</span>(data, [<span class="pl-s"><span class="pl-pds">"</span>year<span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>make<span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>model<span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>length<span class="pl-pds">"</span></span>]);</pre></div>
<p>All fields on each row object will be coerced to strings. For more control over which and how fields are formatted, first map <em>rows</em> to an array of array of string, and then use <a href="#dsv_formatRows"><em>dsv</em>.formatRows</a>.</p>
<p><a name="user-content-dsv_formatRows" href="#dsv_formatRows">#</a> <i>dsv</i>.<b>formatRows</b>(<i>rows</i>) <a href="https://github.com/d3/d3-dsv/blob/master/src/dsv.js#L114" title="Source">&lt;&gt;</a></p>
<p>Formats the specified array of array of string <em>rows</em> as delimiter-separated values, returning a string. This operation is the reverse of <a href="#dsv_parseRows"><em>dsv</em>.parseRows</a>. Each row will be separated by a newline (<code>\n</code>), and each column within each row will be separated by the delimiter (such as a comma, <code>,</code>). Values that contain either the delimiter, a double-quote (") or a newline will be escaped using double-quotes.</p>
<p>To convert an array of objects to an array of arrays while explicitly specifying the columns, use <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map"><em>array</em>.map</a>. For example:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">var</span> string <span class="pl-k">=</span> <span class="pl-smi">d3</span>.<span class="pl-en">csvFormatRows</span>(<span class="pl-smi">data</span>.<span class="pl-en">map</span>(<span class="pl-k">function</span>(<span class="pl-smi">d</span>, <span class="pl-smi">i</span>) {
  <span class="pl-k">return</span> [
    <span class="pl-smi">d</span>.<span class="pl-smi">year</span>.<span class="pl-c1">getFullYear</span>(), <span class="pl-c"><span class="pl-c">//</span> Assuming d.year is a Date object.</span>
    <span class="pl-smi">d</span>.<span class="pl-smi">make</span>,
    <span class="pl-smi">d</span>.<span class="pl-smi">model</span>,
    <span class="pl-smi">d</span>.<span class="pl-c1">length</span>
  ];
}));</pre></div>
<p>If you like, you can also <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat"><em>array</em>.concat</a> this result with an array of column names to generate the first row:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">var</span> string <span class="pl-k">=</span> <span class="pl-smi">d3</span>.<span class="pl-en">csvFormatRows</span>([[
    <span class="pl-s"><span class="pl-pds">"</span>year<span class="pl-pds">"</span></span>,
    <span class="pl-s"><span class="pl-pds">"</span>make<span class="pl-pds">"</span></span>,
    <span class="pl-s"><span class="pl-pds">"</span>model<span class="pl-pds">"</span></span>,
    <span class="pl-s"><span class="pl-pds">"</span>length<span class="pl-pds">"</span></span>
  ]].<span class="pl-c1">concat</span>(<span class="pl-smi">data</span>.<span class="pl-en">map</span>(<span class="pl-k">function</span>(<span class="pl-smi">d</span>, <span class="pl-smi">i</span>) {
  <span class="pl-k">return</span> [
    <span class="pl-smi">d</span>.<span class="pl-smi">year</span>.<span class="pl-c1">getFullYear</span>(), <span class="pl-c"><span class="pl-c">//</span> Assuming d.year is a Date object.</span>
    <span class="pl-smi">d</span>.<span class="pl-smi">make</span>,
    <span class="pl-smi">d</span>.<span class="pl-smi">model</span>,
    <span class="pl-smi">d</span>.<span class="pl-c1">length</span>
  ];
})));</pre></div>
<h3><a href="#content-security-policy" aria-hidden="true" class="anchor" id="user-content-content-security-policy"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Content Security Policy</h3>
<p>If a <a href="http://www.w3.org/TR/CSP/">content security policy</a> is in place, note that <a href="#dsv_parse"><em>dsv</em>.parse</a> requires <code>unsafe-eval</code> in the <code>script-src</code> directive, due to the (safe) use of dynamic code generation for fast parsing. (See <a href="https://github.com/d3/d3-dsv/blob/master/src/dsv.js">source</a>.) Alternatively, use <a href="#dsv_parseRows"><em>dsv</em>.parseRows</a>.</p>
<h3><a href="#byte-order-marks" aria-hidden="true" class="anchor" id="user-content-byte-order-marks"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Byte-Order Marks</h3>
<p>DSV files sometimes begin with a <a href="https://en.wikipedia.org/wiki/Byte_order_mark">byte order mark (BOM)</a>; saving a spreadsheet in CSV UTF-8 format from Microsoft Excel, for example, will include a BOM. On the web this is not usually a problem because the <a href="https://encoding.spec.whatwg.org/#utf-8-decode">UTF-8 decode algorithm</a> specified in the Encoding standard removes the BOM. Node.js, on the other hand, <a href="https://github.com/nodejs/node-v0.x-archive/issues/1918">does not remove the BOM</a> when decoding UTF-8.</p>
<p>If the BOM is not removed, the first character of the text is a zero-width non-breaking space. So if a CSV file with a BOM is parsed by <a href="#csvParse">d3.csvParse</a>, the first column’s name will begin with a zero-width non-breaking space. This can be hard to spot since this character is usually invisible when printed.</p>
<p>To remove the BOM before parsing, consider using <a href="https://www.npmjs.com/package/strip-bom">strip-bom</a>.</p>
<h2><a href="#command-line-reference" aria-hidden="true" class="anchor" id="user-content-command-line-reference"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Command Line Reference</h2>
<h3><a href="#dsv2dsv" aria-hidden="true" class="anchor" id="user-content-dsv2dsv"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>dsv2dsv</h3>
<p><a name="user-content-dsv2dsv" href="#dsv2dsv">#</a> <b>dsv2dsv</b> [<i>options…</i>] [<i>file</i>]</p>
<p>Converts the specified DSV input <em>file</em> to DSV (typically with a different delimiter or encoding). If <em>file</em> is not specified, defaults to reading from stdin. For example, to convert to CSV to TSV:</p>
<pre><code>csv2tsv &lt; example.csv &gt; example.tsv
</code></pre>
<p>To convert windows-1252 CSV to utf-8 CSV:</p>
<pre><code>dsv2dsv --input-encoding windows-1252 &lt; latin1.csv &gt; utf8.csv
</code></pre>
<p><a name="user-content-dsv2dsv_help" href="/d3/d3-dsv/blob/master/dsv2dsv_help">#</a> dsv2dsv <b>-h</b>
<br><a href="/d3/d3-dsv/blob/master/dsv2dsv_help">#</a> dsv2dsv <b>--help</b></p>
<p>Output usage information.</p>
<p><a name="user-content-dsv2dsv_version" href="/d3/d3-dsv/blob/master/dsv2dsv_version">#</a> dsv2dsv <b>-V</b>
<br><a href="/d3/d3-dsv/blob/master/dsv2dsv_version">#</a> dsv2dsv <b>--version</b></p>
<p>Output the version number.</p>
<p><a name="user-content-dsv2dsv_out" href="/d3/d3-dsv/blob/master/dsv2dsv_out">#</a> dsv2dsv <b>-o</b> <i>file</i>
<br><a href="/d3/d3-dsv/blob/master/dsv2dsv_out">#</a> dsv2dsv <b>--out</b> <i>file</i></p>
<p>Specify the output file name. Defaults to “-” for stdout.</p>
<p><a name="user-content-dsv2dsv_input_delimiter" href="/d3/d3-dsv/blob/master/dsv2dsv_input_delimiter">#</a> dsv2dsv <b>-r</b> <i>delimiter</i>
<br><a href="/d3/d3-dsv/blob/master/dsv2dsv_input_delimiter">#</a> dsv2dsv <b>--input-delimiter</b> <i>delimiter</i></p>
<p>Specify the input delimiter character. Defaults to “,” for reading CSV. (You can enter a tab on the command line by typing ⌃V.)</p>
<p><a name="user-content-dsv2dsv_input_encoding" href="/d3/d3-dsv/blob/master/dsv2dsv_input_encoding">#</a> dsv2dsv <b>--input-encoding</b> <i>encoding</i></p>
<p>Specify the input character encoding. Defaults to “utf8”.</p>
<p><a name="user-content-dsv2dsv_output_delimiter" href="/d3/d3-dsv/blob/master/dsv2dsv_output_delimiter">#</a> dsv2dsv <b>-w</b> <i>delimiter</i>
<br><a href="/d3/d3-dsv/blob/master/dsv2dsv_output_delimiter">#</a> dsv2dsv <b>--output-delimiter</b> <i>delimiter</i></p>
<p>Specify the output delimiter character. Defaults to “,” for writing CSV. (You can enter a tab on the command line by typing ⌃V.)</p>
<p><a name="user-content-dsv2dsv_output_encoding" href="/d3/d3-dsv/blob/master/dsv2dsv_output_encoding">#</a> dsv2dsv <b>--output-encoding</b> <i>encoding</i></p>
<p>Specify the output character encoding. Defaults to “utf8”.</p>
<p><a name="user-content-csv2tsv" href="#csv2tsv">#</a> <b>csv2tsv</b> [<i>options…</i>] [<i>file</i>]</p>
<p>Equivalent to <a href="#dsv2dsv">dsv2dsv</a>, but the <a href="#dsv2dsv_output_delimiter">output delimiter</a> defaults to the tab character (\t).</p>
<p><a name="user-content-tsv2csv" href="#tsv2csv">#</a> <b>tsv2csv</b> [<i>options…</i>] [<i>file</i>]</p>
<p>Equivalent to <a href="#dsv2dsv">dsv2dsv</a>, but the <a href="#dsv2dsv_output_delimiter">input delimiter</a> defaults to the tab character (\t).</p>
<h3><a href="#dsv2json" aria-hidden="true" class="anchor" id="user-content-dsv2json"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>dsv2json</h3>
<p><a name="user-content-dsv2json" href="#dsv2json">#</a> <b>dsv2json</b> [<i>options…</i>] [<i>file</i>]</p>
<p>Converts the specified DSV input <em>file</em> to JSON. If <em>file</em> is not specified, defaults to reading from stdin. For example, to convert to CSV to JSON:</p>
<pre><code>csv2json &lt; example.csv &gt; example.json
</code></pre>
<p>Or to convert CSV to a newline-delimited JSON stream:</p>
<pre><code>csv2json -n &lt; example.csv &gt; example.ndjson
</code></pre>
<p><a name="user-content-dsv2json_help" href="/d3/d3-dsv/blob/master/dsv2json_help">#</a> dsv2json <b>-h</b>
<br><a href="/d3/d3-dsv/blob/master/dsv2json_help">#</a> dsv2json <b>--help</b></p>
<p>Output usage information.</p>
<p><a name="user-content-dsv2json_version" href="/d3/d3-dsv/blob/master/dsv2json_version">#</a> dsv2json <b>-V</b>
<br><a href="/d3/d3-dsv/blob/master/dsv2json_version">#</a> dsv2json <b>--version</b></p>
<p>Output the version number.</p>
<p><a name="user-content-dsv2json_out" href="/d3/d3-dsv/blob/master/dsv2json_out">#</a> dsv2json <b>-o</b> <i>file</i>
<br><a href="/d3/d3-dsv/blob/master/dsv2json_out">#</a> dsv2json <b>--out</b> <i>file</i></p>
<p>Specify the output file name. Defaults to “-” for stdout.</p>
<p><a name="user-content-dsv2json_input_delimiter" href="/d3/d3-dsv/blob/master/dsv2json_input_delimiter">#</a> dsv2json <b>-r</b> <i>delimiter</i>
<br><a href="/d3/d3-dsv/blob/master/dsv2json_input_delimiter">#</a> dsv2json <b>--input-delimiter</b> <i>delimiter</i></p>
<p>Specify the input delimiter character. Defaults to “,” for reading CSV. (You can enter a tab on the command line by typing ⌃V.)</p>
<p><a name="user-content-dsv2json_input_encoding" href="/d3/d3-dsv/blob/master/dsv2json_input_encoding">#</a> dsv2json <b>--input-encoding</b> <i>encoding</i></p>
<p>Specify the input character encoding. Defaults to “utf8”.</p>
<p><a name="user-content-dsv2json_output_encoding" href="/d3/d3-dsv/blob/master/dsv2json_output_encoding">#</a> dsv2json <b>-r</b> <i>encoding</i>
<br><a href="/d3/d3-dsv/blob/master/dsv2json_output_encoding">#</a> dsv2json <b>--output-encoding</b> <i>encoding</i></p>
<p>Specify the output character encoding. Defaults to “utf8”.</p>
<p><a name="user-content-dsv2json_newline_delimited" href="/d3/d3-dsv/blob/master/dsv2json_newline_delimited">#</a> dsv2json <b>-n</b>
<br><a href="/d3/d3-dsv/blob/master/dsv2json_newline_delimited">#</a> dsv2json <b>--newline-delimited</b></p>
<p>Output <a href="https://github.com/mbostock/ndjson-cli">newline-delimited JSON</a> instead of a single JSON array.</p>
<p><a name="user-content-csv2json" href="#csv2json">#</a> <b>csv2json</b> [<i>options…</i>] [<i>file</i>]</p>
<p>Equivalent to <a href="#dsv2json">dsv2json</a>.</p>
<p><a name="user-content-tsv2json" href="#csv2json">#</a> <b>tsv2json</b> [<i>options…</i>] [<i>file</i>]</p>
<p>Equivalent to <a href="#dsv2json">dsv2json</a>, but the <a href="#dsv2json_input_delimiter">input delimiter</a> defaults to the tab character (\t).</p>
<h3><a href="#json2dsv" aria-hidden="true" class="anchor" id="user-content-json2dsv"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>json2dsv</h3>
<p><a name="user-content-json2dsv" href="#json2dsv">#</a> <b>json2dsv</b> [<i>options…</i>] [<i>file</i>]</p>
<p>Converts the specified JSON input <em>file</em> to DSV. If <em>file</em> is not specified, defaults to reading from stdin. For example, to convert to JSON to CSV:</p>
<pre><code>json2csv &lt; example.json &gt; example.csv
</code></pre>
<p>Or to convert a newline-delimited JSON stream to CSV:</p>
<pre><code>json2csv -n &lt; example.ndjson &gt; example.csv
</code></pre>
<p><a name="user-content-json2dsv_help" href="/d3/d3-dsv/blob/master/json2dsv_help">#</a> json2dsv <b>-h</b>
<br><a href="/d3/d3-dsv/blob/master/json2dsv_help">#</a> json2dsv <b>--help</b></p>
<p>Output usage information.</p>
<p><a name="user-content-json2dsv_version" href="/d3/d3-dsv/blob/master/json2dsv_version">#</a> json2dsv <b>-V</b>
<br><a href="/d3/d3-dsv/blob/master/json2dsv_version">#</a> json2dsv <b>--version</b></p>
<p>Output the version number.</p>
<p><a name="user-content-json2dsv_out" href="/d3/d3-dsv/blob/master/json2dsv_out">#</a> json2dsv <b>-o</b> <i>file</i>
<br><a href="/d3/d3-dsv/blob/master/json2dsv_out">#</a> json2dsv <b>--out</b> <i>file</i></p>
<p>Specify the output file name. Defaults to “-” for stdout.</p>
<p><a name="user-content-json2dsv_input_encoding" href="/d3/d3-dsv/blob/master/json2dsv_input_encoding">#</a> json2dsv <b>--input-encoding</b> <i>encoding</i></p>
<p>Specify the input character encoding. Defaults to “utf8”.</p>
<p><a name="user-content-json2dsv_output_delimiter" href="/d3/d3-dsv/blob/master/json2dsv_output_delimiter">#</a> json2dsv <b>-w</b> <i>delimiter</i>
<br><a href="/d3/d3-dsv/blob/master/json2dsv_output_delimiter">#</a> json2dsv <b>--output-delimiter</b> <i>delimiter</i></p>
<p>Specify the output delimiter character. Defaults to “,” for writing CSV. (You can enter a tab on the command line by typing ⌃V.)</p>
<p><a name="user-content-json2dsv_output_encoding" href="/d3/d3-dsv/blob/master/json2dsv_output_encoding">#</a> json2dsv <b>--output-encoding</b> <i>encoding</i></p>
<p>Specify the output character encoding. Defaults to “utf8”.</p>
<p><a name="user-content-json2dsv_newline_delimited" href="/d3/d3-dsv/blob/master/json2dsv_newline_delimited">#</a> json2dsv <b>-n</b>
<br><a href="/d3/d3-dsv/blob/master/json2dsv_newline_delimited">#</a> json2dsv <b>--newline-delimited</b></p>
<p>Read <a href="https://github.com/mbostock/ndjson-cli">newline-delimited JSON</a> instead of a single JSON array.</p>
<p><a name="user-content-csv2json" href="#csv2json">#</a> <b>csv2json</b> [<i>options…</i>] [<i>file</i>]</p>
<p>Equivalent to <a href="#json2dsv">json2dsv</a>.</p>
<p><a name="user-content-tsv2json" href="#csv2json">#</a> <b>tsv2json</b> [<i>options…</i>] [<i>file</i>]</p>
<p>Equivalent to <a href="#json2dsv">json2dsv</a>, but the <a href="#json2dsv_output_delimiter">output delimiter</a> defaults to the tab character (\t).</p>
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
      <li class="mr-3">&copy; 2018 <span title="0.19527s from unicorn-2657157768-7zlvv">GitHub</span>, Inc.</li>
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


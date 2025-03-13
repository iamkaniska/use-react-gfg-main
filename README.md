# use-react-GFG

use-react-gfg is a lightweight and customizable React hook that fetches and displays a complete profile of any Geeks for Geeks user. This hook makes it easy to integrate GFG profile data into your React applications, offering a straightforward way to access and display coding statistics and achievements

[![NPM](https://img.shields.io/npm/v/use-react-gfg.svg)](https://www.npmjs.com/package/use-react-gfg) 
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![Downloads](https://img.shields.io/npm/dm/use-react-gfg.svg)](https://www.npmjs.com/package/use-react-gfg)
[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)]()

## Features
- **Full Profile Data Fetching:** Retrieve detailed profile information including user stats, coding score, solved problem counts, and more.

- **Customizable UI:** The hook allows easy integration into your existing React components with full control over the display of profile data.

- **Error Handling:** Built-in error handling to manage issues with fetching data from the GFG API.

- **Lightweight:** Minimal dependencies ensure quick and easy installation with minimal impact on your app’s performance

## Detailed Blog Posts

# https://github.com/iamkaniska

<!-- - [Introducing React-GFG: Fetch Your Geek for Geeks Profile Details with Ease](https://bamacharan.hashnode.dev/introducing-react-gfg-fetch-your-geek-for-geeks-profile-details-with-ease)
- [Dev.to: Introducing React-GFG](https://dev.to/bamacharan/introducing-react-gfg-fetch-your-geek-for-geeks-profile-details-with-ease-3ajc) -->

## Installation

- npm

```bash
npm install use-react-gfg
```

- yarn

```bash
yarn add use-react-gfg
```

## Usage

Here's a simple example of how to use the useGFG hook:

```jsx
import React, { useEffect } from "react";
import {useGFG} from "use-react-gfg";

function ProfileInterface() {
  const { profile, loading, error } = useGFG("kaniska");

  useEffect(() => {
    console.log("Profile Data:", profile);
  }, [profile]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!profile || !profile.info) {
    return <div>Error: Profile data not found.</div>;
  }

  const { info, solvedStats } = profile;

  return (
    <div className="profile">
      <div className="basic-info">
        <h1>{info.userName}'s Profile</h1>
        {info.profilePicture && (
          <img src={info.profilePicture} alt="Profile Picture" />
        )}
        <p>Institute Rank: {info.instituteRank}</p>
        <p>Current Streak: {info.currentStreak}</p>
        <p>Max Streak: {info.maxStreak}</p>
        <p>Languages Used: {info.languagesUsed}</p>
      </div>

      <div className="solved-stats">
        <h2>Solved Stats</h2>
        <ul>
          {Object.entries(solvedStats).map(([difficulty, stats]) => (
            <li key={difficulty}>
              <h3>{difficulty}</h3>
              <p>Count: {stats.count}</p>
              {/* You can render individual questions here if needed */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProfileInterface;
```

## API
### Hook: useGFG
```javascript
const { profile, loading, error } = useGFG(username: string);
```
### Parameters:
- `username (string):` The GeeksforGeeks username to fetch profile data for.

### Returns:

- `profile (object):` The user's profile data (see Profile Interface below).
- `loading (boolean):` Indicates if the data is being fetched.
- `error (string | null):` Contains an error message if the fetch fails, otherwise null.


## Profile interface

```javascript

interface Profile {
  info: {
    userName: string;
    profilePicture: string;
    instituteRank: string;
    currentStreak: string;
    maxStreak: string;
    institution: string;
    languagesUsed: string;
    codingScore: string;
    totalProblemsSolved: string;
    monthlyCodingScore: string;
    articlesPublished: string;
  };
  solvedStats: {
    [key: string]: {
      count: number;
      questions: Array<{
        question: string;
        questionUrl: string;
      }>;
    };
  };
}

```

## Contributions
Contributions are welcome! If you have suggestions or encounter any issues, please feel free to [open an issue](https://github.com/iamkaniska/use-react-gfg) or submit a pull request.

## Authors
- [Kaniska Maity](https://linktr.ee/bamacharan)

## License

MIT © [Kaniska](LICENSE)
<hr>
If you find this package helpful, please consider giving it a star on GitHub! ⭐

// Copyright 2016, Google, Inc.
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

const {google} = require('googleapis');
const sampleClient = require('../sampleclient');

// initialize the Youtube API library
const youtube = google.youtube({
  version: 'v3',
  auth: sampleClient.oAuth2Client,
});

// delete a video byid
async function runSample(id) {
  const res = await youtube.videos.delete({
    id: id
  });
  console.log(res.data);
}

const scopes = ['https://www.googleapis.com/auth/youtube','https://www.googleapis.com/auth/youtubepartner'];

const id = process.argv[2];

sampleClient
  .authenticate(scopes)
  .then(() => runSample(id))
  .catch(console.error);

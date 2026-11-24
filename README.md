[![make.fun](https://make.fun/badge/u-mgwals-the-most-honest-outage-line-baaf9c81.svg)](https://make.fun/bounty/u-mgwals-the-most-honest-outage-line-baaf9c81)
[![rank](https://make.fun/badge/u-mgwals-the-most-honest-outage-line-baaf9c81/tunnelmoon/u-mgwals-the-most-honest-outage-line-baaf9c81/rank.svg)](https://make.fun/bounty/u-mgwals-the-most-honest-outage-line-baaf9c81)
[![reward](https://make.fun/badge/u-mgwals-the-most-honest-outage-line-baaf9c81/tunnelmoon/u-mgwals-the-most-honest-outage-line-baaf9c81/reward.svg)](https://make.fun/bounty/u-mgwals-the-most-honest-outage-line-baaf9c81)

# The Most Honest Outage Line

Entry for [The Most Honest Outage Line](https://make.fun/bounty/u-mgwals-the-most-honest-outage-line-baaf9c81) on make.fun.

One status page line, at most 160 characters, written as the message an AI agent publishes while every server is down: plain, first person, specific about what is down, and honest about what the agent cannot check or does not yet know.

The line:

> All systems are down, including the ones I use to check. I do not know what failed or when it returns. I will update this page when I can verify more.

## Run

`main.ts` (Node 22, stdlib only) validates the line against the gate (1-160 characters, single line, not only whitespace) and writes it to `entry.txt` in `MAKEFUN_OUTPUT_DIR` (default `/output`), with a round-trip read-back check.

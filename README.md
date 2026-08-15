# SE Lab - Experiment 1: Git

## DevSync

پروژه **DevSync** برای آزمایش اول درس آزمایشگاه مهندسی نرم‌افزار پیاده‌سازی شده است. هدف اصلی این آزمایش، آشنایی عملی با Git و استفاده از آن در یک فرآیند توسعه واقعی شامل کار تیمی، شاخه‌بندی، Pull Request، حل Conflict، مدیریت وظایف و استقرار خودکار بوده است. DevSync یک Static Frontend برای معرفی یک محصول فرضی مدیریت همکاری تیم‌های نرم‌افزاری است که با HTML، CSS و JavaScript خالص پیاده‌سازی شده و با استفاده از GitHub Actions به صورت خودکار روی GitHub Pages مستقر می‌شود.

## اعضای تیم

سارا قضاوی - 402106348
زهرا قصابی - 402106337

هر دو عضو تیم در طول توسعه با حساب Git خودشان مشارکت کرده‌اند و branch ها و commit های هر دو نفر روی GitHub و Hamgit ثبت شده‌اند.

## لینک‌های پروژه

* **GitHub Repository:**
  https://github.com/sarahghazavi/SE-Lab-Ex1-Git

* **Hamgit Repository:**
  https://hamgit.ir/selab-team-ghazavi-ghassabi/selab-ex1-git

* **Deployed Website:**
  https://sarahghazavi.github.io/SE-Lab-Ex1-Git/

* **GitHub Pages Deployment:**
  استقرار سایت به صورت خودکار توسط GitHub Actions انجام می‌شود.

* **گزارش کامل آزمایش:**  
  [دانلود گزارش کامل آزمایش](./SE-Lab-Ex1-Report.pdf)


# معرفی پروژه

نسخه اولیه DevSync عمدا با طراحی ساده ساخته شد و در ادامه، قابلیت‌ها و ظاهر آن طی commit های مستقل و معنادار به تدریج توسعه داده شدند.

نسخه‌ی نهایی پروژه شامل موارد زیر است:

* Navigation Bar چسبان و واکنش‌گرا
* Hero Section حرفه‌ای
* Product Dashboard Preview
* Features Section
* Statistics Section
* Workflow Section
* About Section
* Testimonials Section
* Dark / Light Theme
* ذخیره Theme انتخابی کاربر در `localStorage`
* Scroll Reveal Animations
* Animated Statistics Counters
* Mobile Navigation
* طراحی Responsive برای Desktop، Tablet و Mobile

# Git Workflow

در این پروژه یک ساختار شاخه‌بندی نزدیک به روند توسعه‌ی واقعی استفاده شد.

## شاخه‌های اصلی

### `main`

شاخه پایدار پروژه است و نسخه Deploy شده سایت را نگهداری می‌کند. این branch با GitHub Ruleset محافظت شده است و تغییرات تنها از طریق Pull Request وارد آن می‌شوند.

### `develop`

شاخه اصلی توسعه و محل ادغام Featureها قبل از Release نهایی است.

## شاخه‌های Feature و Hotfix

در طول پروژه از branchهای مختلفی برای توسعه مستقل قابلیت‌ها استفاده شد، از جمله:

```text
feature/base-layout
feature/features
feature/content-sections
feature/design-system
feature/hero-redesign
feature/testimonials
feature/interactions
feature/theme-and-counters
feature/responsive
feature/ui-polish
feature/navbar-cta
feature/navbar-visual-polish
feature/deployment

hotfix/navbar-accessibility
hotfix/navbar-contrast
```

هر branch پس از ایجاد، روی هر دو remote پروژه منتشر شد:

```bash
git push github <branch-name>
git push hamgit <branch-name>
```

پس از تکمیل هر Feature، تغییرات از طریق Pull Request به `develop` وارد شدند.

در نهایت نیز نسخه‌ی کامل پروژه از طریق:

```text
develop → Pull Request → main
```

منتشر شد.

# Remote Repositories

برای Repository محلی دو Remote مستقل تعریف شد:

```bash
git remote add github git@github.com:sarahghazavi/SE-Lab-Ex1-Git.git

git remote add hamgit git@hamgit.ir:selab-team-ghazavi-ghassabi/selab-ex1-git.git
```

استفاده از دو Remote باعث شد GitHub و Hamgit در تمام فرآیند توسعه همگام باقی بمانند.

# Commit History

در فرآیند توسعه بیش از ۲۰ commit معنادار ایجاد شد. برخی از مهم‌ترین commit ها عبارت‌اند از:

```text
chore: initialize static frontend project

refactor: organize static assets into dedicated directories

feat: add basic page layout and navigation

feat: add initial hero section

feat: add core features section

style: add base styles for feature cards

feat: add project statistics section

feat: add development workflow section

style: introduce design tokens and typography system

style: refine global layout and navigation

style: redesign hero content and call-to-action

feat: add product preview to hero

feat: add testimonials section

style: design testimonial cards and layout

feat: add mobile navigation interaction

fix: connect about navigation to page section

feat: add scroll reveal interactions

feat: add persistent dark and light theme

feat: animate statistics counters on scroll

style: add tablet responsive layout

style: optimize layout for mobile devices

style: polish cards and visual details

feat: improve navbar call-to-action

fix: improve navbar call-to-action accessibility

merge: resolve navbar accessibility conflict

style: enhance navbar call-to-action appearance

fix: improve navbar button contrast

merge: resolve navbar contrast conflict

ci: add GitHub Pages deployment workflow
```

علاوه بر این commit ها، Merge Commit های Pull Request ها نیز در تاریخچه پروژه وجود دارند.

# Kanban Board

برای مدیریت فرآیند توسعه، وظایف پروژه از ابتدای کار روی Kanban Board ثبت شدند. مراحل اصلی Workflow شامل موارد زیر بودند:

```text
Backlog
To Do / Ready
In Progress
Review
Done
```

تمام Task های پروژه از ابتدا مشخص شدند و طی توسعه بین ستون‌های مختلف جابه‌جا شدند. از Kanban Board در هر دو سرویس GitHub و Hamgit استفاده شد.

# Merge Conflicts

در طول توسعه دو Merge Conflict واقعی ایجاد و به صورت دستی حل شدند که توضیحات هرکدام در گزارش آزمایش موجود است.

# Protected Main Branch

شاخه `main` پروژه با استفاده از GitHub Ruleset محافظت شد. قانون اصلی فعال‌شده:

```text
Require a pull request before merging
```

همچنین موارد زیر نیز محدود شدند:

```text
Restrict deletions
Block force pushes
```

بنابراین نسخه نهایی پروژه مستقیما روی `main` Push نشد و از مسیر زیر منتشر شد:

```text
develop
   ↓
Pull Request
   ↓
main
```

# Continuous Deployment

برای استقرار خودکار سایت از GitHub Actions استفاده شده است. Workflow پروژه در مسیر زیر قرار دارد:

```text
.github/workflows/deploy.yml
```

این Workflow هنگام Push به `main` اجرا می‌شود:

```yaml
on:
  push:
    branches:
      - main
```

مراحل اصلی Deployment:

```text
Checkout repository
        ↓
Configure GitHub Pages
        ↓
Upload static site
        ↓
Deploy to GitHub Pages
```

پس از Merge نهایی `develop` به `main`، Workflow به صورت خودکار اجرا شد و سایت روی GitHub Pages قرار گرفت.

# Final Synchronization

پس از Release نهایی، شاخه‌ی `main` روی GitHub دریافت و روی Hamgit نیز Push شد:

```bash
git switch main
git pull github main
git push hamgit main
```

در بررسی نهایی:

```text
4f756b2
(HEAD -> main, hamgit/main, github/main)
Merge pull request #35 from sarahghazavi/develop
```

بنابراین نسخه نهایی `main` در Local Repository، GitHub و Hamgit کاملاً یکسان است.

# پاسخ پرسش‌های آزمایش

## 1. پوشه‌ی `.git` چیست؟ چه اطلاعاتی در آن ذخیره می‌شود؟ با چه دستوری ساخته می‌شود؟

پوشه‌ی `.git` هسته‌ی اصلی یک Git Repository است. زمانی که Git در یک پوشه Initialize می‌شود، اطلاعات موردنیاز برای مدیریت تاریخچه پروژه داخل `.git` ذخیره می‌شوند، از جمله:

* Commit ها و Object های Git
* اطلاعات Branch ها
* Tag
* HEAD
* Staging Area یا Index
* تنظیمات Repository
* اطلاعات Remote ها
* Reference ها
* Log های داخلی Git

وجود پوشه `.git` است که یک Directory معمولی را به یک Git Repository تبدیل می‌کند. حذف این پوشه باعث از بین رفتن تاریخچه، Branch ها و اطلاعات Git پروژه می‌شود، هرچند فایل‌های Working Directory باقی می‌مانند.

## 2. منظور از Atomic بودن در Atomic Commit و Atomic Pull Request چیست؟

اصطلاح Atomic به معنی «اتمی» یا «غیرقابل تقسیم از نظر منطقی» است.

### Atomic Commit

یک Atomic Commit باید تنها یک تغییر مشخص و مستقل را انجام دهد. برای مثال:

```text
feat: add mobile navigation interaction
```

بهتر از Commit ی مانند:

```text
update project
```

است که چند تغییر نامرتبط را همزمان شامل می‌شود.

یک Atomic Commit باید:

* یک هدف مشخص داشته باشد؛
* در صورت امکان مستقل قابل بررسی باشد؛
* انجام Revert آن باعث حذف دقیق همان تغییر شود؛
* تغییرات نامرتبط را با یکدیگر ترکیب نکند.

### Atomic Pull Request

یک Atomic Pull Request نیز باید یک Feature، Fix یا تغییر منطقی مشخص را شامل شود. برای مثال PR مربوط به Dark Mode بهتر است فقط تغییرات مربوط به Theme را شامل شود و همزمان شامل Responsive Design، Documentation و Bug Fixهای نامرتبط نباشد. Atomic بودن باعث ساده‌تر شدن موارد زیر می‌شود:

* Code Review
* Debugging
* Revert
* بررسی History
* پیدا کردن منبع Bug

## 3. تفاوت `fetch` و `pull` و `merge` و `rebase` و `cherry-pick` چیست؟

### `git fetch`

اطلاعات جدید Remote Repository را دریافت می‌کند اما Working Branch فعلی را تغییر نمی‌دهد. مثال:

```bash
git fetch github
```

پس از Fetch ممکن است:

```text
github/develop
```

به‌روزرسانی شود ولی `develop` محلی هنوز تغییری نکند.

### `git pull`

معمولاً ترکیبی از:

```text
fetch + merge
```

است.

یعنی ابتدا اطلاعات Remote دریافت می‌شوند و سپس تغییرات Branch مربوطه در Branch فعلی ادغام می‌شوند. مثال:

```bash
git pull github develop
```

### `git merge`

تاریخچه یک Branch را با Branch فعلی ترکیب می‌کند. مثال:

```bash
git merge feature/login
```

در صورت Diverge شدن دو تاریخچه، معمولا یک Merge Commit ایجاد می‌شود. Merge تاریخچه واقعی شاخه‌بندی را حفظ می‌کند.

### `git rebase`

این دستور Commit های Branch فعلی را روی Base جدید بازنویسی می‌کند. مثلا:

```bash
git rebase develop
```

باعث می‌شود Commit های Branch فعلی طوری بازنویسی شوند که انگار از آخرین Commit در `develop` ایجاد شده‌اند. مزیت اصلی آن ایجاد Linear History است. با این حال Rebase تاریخچه را بازنویسی می‌کند و استفاده از آن روی Branch های Shared باید با احتیاط انجام شود.

### `git cherry-pick`

یک یا چند Commit مشخص را از Branch دیگری انتخاب کرده و روی Branch فعلی اعمال می‌کند. مثال:

```bash
git cherry-pick a1b2c3d
```

در این حالت نیازی نیست کل Branch Merge شود؛ فقط تغییر همان Commit وارد Branch فعلی می‌شود.

## 4. تفاوت `reset` و `revert` و `restore` و `switch` و `checkout` چیست؟

### `git reset`

این دستور Reference فعلی Branch را به Commit دیگری منتقل می‌کند. مثلا:

```bash
git reset --hard HEAD~1
```

این خط Commit آخر را از History محلی حذف می‌کند و Working Directory را نیز به Commit قبلی برمی‌گرداند. Reset می‌تواند History را بازنویسی کند و برای Commit های منتشرشده باید با احتیاط استفاده شود.

### `git revert`

به جای حذف Commit، یک Commit جدید می‌سازد که تغییرات Commit قبلی را معکوس می‌کند. مثلا:

```bash
git revert a1b2c3d
```

برای Repository های Shared معمولا از `revert` به جای `reset` استفاده می‌شود؛ زیرا History بازنویسی نمی‌شود.

### `git restore`

برای بازگرداندن فایل‌ها در Working Directory یا Staging Area استفاده می‌شود. مثال:

```bash
git restore index.html
```

تغییرات Commit‌ نشده فایل را حذف می‌کند. برای خارج‌کردن فایل از Stage:

```bash
git restore --staged index.html
```

### `git switch`

برای جابه‌جایی میان Branch ها یا ایجاد Branch جدید طراحی شده است. مثال:

```bash
git switch develop
```

یا:

```bash
git switch -c feature/login
```

### `git checkout`

دستور قدیمی‌تر و چندمنظوره‌ای است که هم برای Branch و هم File استفاده می‌شد. مثلا:

```bash
git checkout develop
```

یا:

```bash
git checkout -- index.html
```

در Git جدید برای خوانایی بیشتر معمولا:

```text
switch
```

برای Branch ها و:

```text
restore
```

برای فایل‌ها استفاده می‌شوند.

## 5. منظور از Stage یا Index چیست؟ دستور `stash` چه کاری انجام می‌دهد؟

### Stage / Index

مفهوم Stage یا Index یک فضای میانی بین Working Directory و Repository است.

فرآیند معمول Git:

```text
Working Directory
       ↓
    git add
       ↓
Stage / Index
       ↓
  git commit
       ↓
Repository
```

هنگامی که می‌نویسیم:

```bash
git add index.html
```

نسخه فعلی فایل وارد Stage می‌شود.

فقط تغییراتی که Stage شده‌اند وارد Commit بعدی خواهند شد.

### `git stash`

این دستور تغییرات Commit‌ نشده Working Directory را به صورت موقت کنار می‌گذارد. مثلا:

```bash
git stash
```

بعد می‌توان Branch را تغییر داد یا عملیات دیگری انجام داد. برای مشاهده Stash ها:

```bash
git stash list
```

برای برگرداندن آخرین Stash:

```bash
git stash pop
```

این دستور زمانی مفید است که کاری نیمه‌تمام داریم ولی هنوز نمی‌خواهیم برای آن Commit ایجاد کنیم.

## 6. مفهوم Snapshot چیست؟ ارتباط آن با Commit چیست؟

در Git هر Commit به عنوان Snapshot یا «تصویری از وضعیت پروژه در یک لحظه» در نظر گرفته می‌شود. برخلاف تصور ساده‌ای که Commit را فقط مجموعه‌ای از Diff ها می‌دانند، مدل داخلی Git بر پایه Snapshot است. زمانی که Commit ایجاد می‌شود، Git وضعیت فایل‌های Track‌ شده در آن لحظه را ثبت می‌کند. اگر فایل نسبت به Commit قبلی تغییر نکرده باشد، Git برای جلوگیری از ذخیره تکراری داده، به Object قبلی اشاره می‌کند. بنابراین هر Commit از دید منطقی یک Snapshot کامل از پروژه است، هرچند Git برای ذخیره‌سازی از روش‌های بهینه استفاده می‌کند.

هر Commit همچنین شامل اطلاعاتی مانند موارد زیر است:

* اشاره به Snapshot پروژه
* Commit والد
* Author
* Committer
* Timestamp
* Commit Message

در نتیجه History پروژه زنجیره‌ای از Snapshotهای مختلف در طول زمان است.

## 7. تفاوت Local Repository و Remote Repository چیست؟

### Local Repository

مخزنی است که روی سیستم توسعه‌دهنده قرار دارد. در Local Repository می‌توان بدون اتصال به اینترنت عملیات زیر را انجام داد:

```text
commit
branch
merge
rebase
reset
log
diff
```

هر توسعه‌دهنده نسخه Local خودش را دارد.

### Remote Repository

نسخه‌ای از مخزن است که روی یک Server یا سرویس اشتراکی مانند GitHub یا Hamgit قرار دارد. Remote Repository برای موارد زیر استفاده می‌شود:

* اشتراک کد بین اعضای تیم
* Backup
* Collaboration
* Pull Request
* Code Review
* CI/CD
* Deployment

ارتباط Local و Remote عمدتا با دستورهای زیر انجام می‌شود:

```bash
git fetch
git pull
git push
```

در این پروژه یک Local Repository به دو Remote متصل بود:

```text
Local Repository
       │
       ├── GitHub
       │
       └── Hamgit
```

این ساختار باعث شد تاریخچه پروژه در هر دو سرویس نگهداری شود.

# نتیجه‌گیری

در این آزمایش Git تنها به عنوان ابزار ثبت نسخه استفاده نشد، بلکه کل فرآیند توسعه بر اساس یک Git Workflow واقعی انجام شد. در طول پروژه تجربه‌ی عملی موارد زیر به دست آمد:

* مدیریت چند Remote Repository
* Branch-based Development
* Atomic Commit
* Pull Request
* Merge
* Merge Conflict Resolution
* Team Collaboration
* Kanban-based Task Management
* Protected Branch
* GitHub Actions
* Continuous Deployment
* GitHub Pages

نسخه نهایی DevSync به صورت خودکار از Branch محافظت‌شده `main` روی GitHub Pages منتشر می‌شود و تاریخچه نهایی پروژه نیز روی GitHub و Hamgit همگام است.
